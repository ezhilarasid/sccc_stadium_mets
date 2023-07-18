import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import BirdsViewVideo from "components/BirdsViewVideo";
import MenuBar from "components/MenuBar";
import Tooltip from "elements/Tooltip";
import Tabs from "elements/Tabs";
import Header from "elements/Header";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import Select from "elements/Select";
import PresetIcon from "../../assets/Config-inactive.svg";
import ResetInactiveIcon from "../../assets/resetInactive.svg";
import ResetIcon from "../../assets/Recenter.svg";
import PresetSelectedIcon from "../../assets/config.svg";
import PresetTab from "components/PresetTab";
import AddPreset from "components/AddPreset";
import EditPreset from "components/EditPreset";
import DialogBox from "elements/Dialog";
import { styled } from "@mui/material/styles";
import ButtonBox from "elements/Button";
import { getPresetList } from "redux/actions/presetAction";
import birdsEyeViewData from "mockdata/birdsEyeView";
import useStyles from "./styles";

const BirdsEyeView = (props) => {
  const {
    videoDashboardSection,
    bottomMenuSection,
    bottomBlackline,
    dashboardLogoImg,
    birdEyeImage,
    displayFlex,
    headerRight,
    headerLeft,
    headerMain,
    headerCenter,
    headerTextStyle,
    occupancySection,
    firstChild,
    lastChild,
    line,
    dashboardMenu,
    videoLeftSide,
    innerOccupancy,
    mobileIconImg,
    videoContainerClass,
    menuIconImg,
    cameraSection,
    birdsNotificationSection,
    videoContainerClass1,
    videoContent,
    addPresetSection,
    customDialog,
  } = useStyles();

  const [newPresetList, setNewPresetList] = useState();
  const [selectedListIndex, setSelectedListIndex] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [updatedPresetList, setUpdatedPresetList] = useState();
  const [options, setOptions] = useState([]);
  const [birdsEyeViewOptions, setBirdsEyeViewOptions] = useState([]);
  const [presetSelectedIndex, setPresetSelectedIndex] = useState(0);
  const [reset, setReset] = useState(false);
  const [previewVideo, setPreviewVideo] = useState();

  const [backGroundClearAll, setBackGroundClearAll] = useState(false);
  const [addPreset, setAddPreset] = useState(false);
  const [edit, setEdit] = useState(false);

  const [selectIndex, setSelectIndex] = useState(0);
  const [cameraCount, setCameraCount] = useState();

  const [selectedCamArray, setSelectedCamArray] = useState();
  const [presetPanelActive, setPresetPanelActive] = useState(false);
  const [duplicateDialog, setDuplicateDialog] = useState(false);
  const [deletePresetValue, setDeletePresetValue] = useState(false);
  const [editSelectedListId, setEditSelectedListId] = useState(null);
  const [deleteSelectedId, setDeleteSelectedId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    if (data?.length > 0) {
      localStorage.setItem("presetData", JSON.stringify(data));
    } else {
      localStorage.setItem("presetData", JSON.stringify(birdsEyeViewData));
    }

    if (data?.length > 0) {
      setNewPresetList(data);
      setCameraCount(data && data[0]?.cameraList?.length);
    }
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    const selectedData = data?.filter((item) => item.id === deleteSelectedId);
    const totalLength = [];
    const filterData = data?.filter((item) => item.id === presetSelectedIndex);
    filterData?.map((item) => {
      item?.cameraList?.map((itemChecked) => {
        if (itemChecked?.isChecked) {
          totalLength.push(itemChecked);
        }
      });
    });
    if (data?.length > 0) {
      setNewPresetList(data);
      if (
        deletePresetValue &&
        selectedData?.length === 0 &&
        deleteSelectedId === selectIndex &&
        presetPanelActive
      ) {
        setCameraCount(totalLength?.length);
      } else if (
        deletePresetValue &&
        selectedData?.length === 0 &&
        deleteSelectedId === presetSelectedIndex
      ) {
        setPresetSelectedIndex(0);
        setCameraCount(data && data[0]?.cameraList?.length);
      }
      setDeletePresetValue(false);
    }
  }, [deletePresetValue]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    const birdsEyeViewOption = data?.map((val, index) => {
      return {
        label: val.title,
        value: val.title,
        id: val?.id,
        cameraList: val.cameraList,
      };
    });
    setOptions(birdsEyeViewOption);
    setBirdsEyeViewOptions(birdsEyeViewOption);
  }, [newPresetList]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    const totalLength = [];
    const filterData = data?.filter((item) => item.id === selectIndex);
    filterData?.map((item) => {
      item?.cameraList?.map((itemChecked) => {
        if (itemChecked?.isChecked) {
          totalLength.push(itemChecked);
        }
      });
    });

    if (selectIndex === 0) {
      setCameraCount(data && data[0]?.cameraList?.length);
    } else {
      setCameraCount(totalLength?.length);
    }
  }, [selectIndex, presetPanelActive]);

  const handleSelect = (val, graph, index) => {
    setSelectIndex(index);
  };

  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );

  const onHandlePresetIcon = () => {
    setPresetPanelActive(!presetPanelActive);
    setAddPreset(false);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    const totalLength = [];
    const filterData = data?.filter((item) => item.id === selectIndex);
    filterData?.map((item) => {
      item?.cameraList?.map((itemChecked) => {
        if (itemChecked?.isChecked) {
          totalLength.push(itemChecked);
        }
      });
    });
    const birdsEyeViewOption = data?.map((val, index) => {
      return {
        label: val.title,
        value: val.title,
        id: val?.id,
        cameraList: val.cameraList,
      };
    });
    setOptions(birdsEyeViewOption);
    if (presetPanelActive) {
      setPresetSelectedIndex(0);
      setCameraCount(newPresetList && newPresetList[0]?.cameraList?.length);
    } else {
      if (deleteSelectedId === selectIndex) {
        setSelectIndex(0);
        setCameraCount(data && data[0]?.cameraList?.length);
      } else if (selectIndex) {
        setCameraCount(totalLength?.length);
      }
    }
  }, [presetPanelActive]);

  const fullScreenView = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      // setIsFullScreen(true);
    } else {
      document.body.requestFullscreen();
      // setIsFullScreen(false);
    }
  };

  const backGroundClear = (isOpen) => {
    setBackGroundClearAll(isOpen);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", (event) => {
      setIsFullScreen((prev) => !prev);
    });
  }, []);

  const handleAddPreset = () => {
    setAddPreset(true);
    setCameraCount(0);
    setSelectedCamArray([]);
    setPreviewVideo();
    setPresetSelectedIndex(0);
  };

  const handleClosePreset = () => {
    setAddPreset(false);
    setCameraCount(newPresetList && newPresetList[0]?.cameraList?.length);
  };

  const handleCancelClick = () => {
    setAddPreset(false);
    setCameraCount(newPresetList && newPresetList[0]?.cameraList?.length);
  };

  const handleSelectedCameraArray = (val) => {
    setSelectedCamArray(edit ? { ...val } : val);
    const totalLength = [];
    if (edit) {
      val?.cameraList?.map((item) => {
        if (item?.isChecked) {
          totalLength?.push(item?.isChecked);
        }
      });
    } else {
      val?.map((item) => {
        if (item?.isChecked) {
          totalLength?.push(item?.isChecked);
        }
      });
    }

    setCameraCount(totalLength?.length);
  };

  const handleSelectedEdit = (index, id) => {
    setSelectedListIndex(index);
    setEditSelectedListId(id);
    setEdit(!edit);
    setPreviewVideo();
    setPresetSelectedIndex(0);
  };

  const handleCloseEditPreset = () => {
    setEdit(false);
    setCameraCount(newPresetList && newPresetList[0]?.cameraList?.length);
  };

  const handleEditCancelClick = () => {
    setEdit(false);
    setCameraCount(newPresetList && newPresetList[0]?.cameraList?.length);
  };

  const handleEditSaveClick = (data) => {
    setUpdatedPresetList(data);
    setConfirmDialog(true);
  };

  const handleDialogClose = () => {
    setConfirmDialog(false);
  };

  const handeConfirm = () => {
    localStorage.setItem("presetData", JSON.stringify(updatedPresetList));
    setSelectedCamArray(updatedPresetList);
    setConfirmDialog(false);
    setEdit(false);
    setCameraCount(newPresetList && newPresetList[0]?.cameraList?.length);
  };

  const handleAccordionClick = (index) => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    const totalLength = [];
    const filterData = data?.filter((item) => item.id === index);
    filterData?.map((item) => {
      item?.cameraList?.map((itemChecked) => {
        if (itemChecked?.isChecked) {
          totalLength.push(itemChecked);
        }
      });
    });
    const birdsEyeViewOption = data?.map((val, index) => {
      return {
        label: val.title,
        value: val.title,
        id: val.id,
        cameraList: val.cameraList,
      };
    });
    setBirdsEyeViewOptions(birdsEyeViewOption);
    setPresetSelectedIndex(index);
    setCameraCount(totalLength?.length);
  };

  const handlePreviewVideo = (val) => {
    setPreviewVideo(val);
  };

  const handleSearchClose = () => {
    setPresetSelectedIndex(0);
  };

  const handleDialogBox = () => {
    setDuplicateDialog(true);
  };

  const handleDuplicateDialogClose = () => {
    setDuplicateDialog(false);
  };

  const handleSelectedRowDelete = (id) => {
    const data = JSON.parse(localStorage.getItem("presetData"));
    const filterData = data.filter((item) => item?.id !== id);
    localStorage.setItem("presetData", JSON.stringify(filterData));
    setDeletePresetValue(true);
    setDeleteSelectedId(id);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} className={videoDashboardSection}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={9}
            md={9}
            lg={9}
            xl={9}
            className={videoLeftSide}
          >
            <Header pageName={"BIRDS EYE VIEW"} />

            <div className={dashboardMenu}>
              <div className={headerCenter}>
                <Select
                  selectList={options}
                  handleSelect={handleSelect}
                  customWidth={"280px"}
                  customHeight={"46px"}
                  pageName={"birdsEyeView"}
                  presetPanelActive={presetPanelActive}
                  selectIndex={selectIndex}
                />
              </div>

              <Tooltip
                tooltipValue={
                  !isFullScreen ? "Exit Full Screen" : "Full Screen"
                }
              >
                <div>
                  <img
                    className={mobileIconImg}
                    src={!isFullScreen ? ExitFullScreen : FullScreen}
                    onClick={fullScreenView}
                  />
                </div>
              </Tooltip>
              <div>
                <img
                  src={presetPanelActive ? PresetSelectedIcon : PresetIcon}
                  alt="Preset Icon"
                  className={birdEyeImage}
                  onClick={() => onHandlePresetIcon()}
                />
              </div>
              <div className={cameraSection}>
                <p>CAMERAS</p>
                <p>{cameraCount}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <div className={headerTextStyle}></div>
          </Grid>
        </Grid>
        {!presetPanelActive ? (
          <Grid container className={videoContainerClass}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <BirdsViewVideo
                pageName={"birdsview"}
                // columnSpan={5}
                columnSpan={5}
                selectIndex={selectIndex}
                addPreset={addPreset}
                selectList={options}
                presetPanelActive={presetPanelActive}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container className={videoContainerClass1}>
            <BirdsViewVideo
              pageName={"birdsview"}
              columnSpan={4}
              selectIndex={addPreset ? 0 : presetSelectedIndex}
              addPreset={addPreset}
              selectList={birdsEyeViewOptions}
              selectedCamId={selectedCamArray}
              previewVideo={previewVideo}
              edit={edit}
              presetPanelActive={presetPanelActive}
            />
            {!edit && !addPreset && (
              <div className={birdsNotificationSection}>
                <PresetTab
                  handleAddPreset={handleAddPreset}
                  handleSelectedEdit={handleSelectedEdit}
                  presetList={newPresetList}
                  handleAccordionClick={handleAccordionClick}
                  presetPanelActive={presetPanelActive}
                  handleSearchClose={handleSearchClose}
                  handleSelectedRowDelete={handleSelectedRowDelete}
                  deletePresetValue={deletePresetValue}
                  addPreset={addPreset}
                />
              </div>
            )}
            {addPreset && (
              <div className={addPresetSection}>
                <AddPreset
                  handleClosePreset={handleClosePreset}
                  handleCancelClick={handleCancelClick}
                  handleSelectedCameraArray={handleSelectedCameraArray}
                  presetList={newPresetList}
                  handlePreviewVideo={handlePreviewVideo}
                  handleDialogBox={handleDialogBox}
                />
              </div>
            )}
            {edit && (
              <div className={addPresetSection}>
                <EditPreset
                  handleCloseEditPreset={handleCloseEditPreset}
                  newPresetList={newPresetList}
                  selectedListIndex={selectedListIndex}
                  handleEditSaveClick={handleEditSaveClick}
                  handleEditCancelClick={handleEditCancelClick}
                  handlePreviewVideo={handlePreviewVideo}
                  handleSelectedCameraArray={handleSelectedCameraArray}
                  editSelectedListId={editSelectedListId}
                />
              </div>
            )}
          </Grid>
        )}

        <div className={bottomBlackline}></div>
        <MenuBar backGroundClear={backGroundClear} />
      </Box>

      <div className={customDialog}>
        <DialogBox
          className="test"
          open={confirmDialog}
          closeIcon={true}
          title={"Update Configuration"}
          content={"Are you sure you want to save changes?"}
          cancelButtonTitle={"CANCEL"}
          onClose={handleDialogClose}
          action={
            <ButtonBox
              buttonName={"CONFIRM"}
              variant={"contained"}
              handleClick={handeConfirm}
            />
          }
        />

        {/* Duplicate Preset alert dialog */}
        <DialogBox
          className="test"
          open={duplicateDialog}
          closeIcon={true}
          title={"Duplicate Preset Name"}
          content={"Entered Preset Name is Already Exists in Preset List"}
          cancelButtonTitle={"CANCEL"}
          onClose={handleDuplicateDialogClose}
        />
      </div>
    </Fragment>
  );
};

export default BirdsEyeView;
