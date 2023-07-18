import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import SearchBox from "elements/SearchBox";
import CloseButton from "../../assets/close-Icon.svg";
import SearchIcon from "../../assets/search.svg";
import TextField from "elements/TextField";
import CheckBox from "elements/Checkbox";
import ButtonBox from "elements/Button";
import { getPresetList } from "redux/actions/presetAction";
import AddIcon from "../../assets/addIcon.svg";
import VideoPreviewIcon from "../../assets/videoPreview.svg";
import VideoPreviewSelectedIcon from "../../assets/videoPreviewSelected.svg";
import useStyles from "./styles";

const AddPreset = (props) => {
  const { presetList } = props;

  const {
    presetContainer,
    closeIcon,
    presetName,
    presetCameraContainer,
    cameraListContainer,
    cameraListItems,
    presetTextfield,
    presetNameItem,
    presetnText,
    saveButtonSection,
    searchClass,
    searchIconSection,
    closeIconSection,
    noResultStyle,
    videoPreviewIconStyle,
    searchBoxContainer,
    searchBox,
    dFlex,
  } = useStyles();

  // const disptach = useDispatch();

  const [name, setName] = useState(null);
  const [presetListItems, setPresetListItems] = useState();
  const [newPresetList, setNewPresetList] = useState();
  const [disable, setDisable] = useState(true);
  const [allPresetList, setAllPrestList] = useState();
  const [searchValue, setSearchValue] = useState(newPresetList);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activePreviewIcon, setActivePreviewIcon] = useState(null);
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("presetData"));
    if (data?.length > 0) {
      const modifiedArray = data?.map((listItem) => {
        return listItem?.cameraList?.map((listItemChecked) => {
          return { ...listItemChecked, isChecked: false };
        });
      });
      if (modifiedArray?.length > 0) {
        setAllPrestList(modifiedArray);
      }
      setPresetListItems(data);
    }
  }, []);

  useEffect(() => {
    if (allPresetList && allPresetList[0]) {
      setNewPresetList(allPresetList[0]);
    }
  }, [allPresetList]);

  const handleClosePreset = () => {
    props.handleClosePreset();
  };

  const handleCheck = (event, index, id) => {
    if (isSearchOpen) {
      let newSelectedArray = [...searchValue];
      newSelectedArray[index]["isChecked"] = event.target.checked;
      setNewPresetList(newSelectedArray);
      props.handleSelectedCameraArray(newSelectedArray);
    } else {
      let newArr = [...newPresetList];
      newArr[index]["isChecked"] = event.target.checked;
      setNewPresetList(newArr);
      props.handleSelectedCameraArray(newArr);
    }
  };

  const handleInputPageChange = (e) => {
    const newName = e.target.value.replace(/[^a-zA-Z0-9\s]/g, "");
    setName(newName);
    if (e.target.value?.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleCancelClick = () => {
    props.handleCancelClick();
  };

  const handleSaveClick = () => {
    const finalObj = newPresetList?.filter((item) => item.isChecked === true);
    const data = JSON.parse(localStorage.getItem("presetData"));
    const duplicate = data.some(
      (obj) => obj?.title?.toLowerCase() === name?.toLowerCase()
    );

    if (duplicate) {
      props.handleDialogBox();
    } else {
      let finalList = presetListItems;
      const payload = {
        type: name,
        title: name,
        cameraList: finalObj,
        id: data?.length - 1 + 1,
      };
      finalList.push(payload);
      localStorage.setItem("presetData", JSON.stringify(finalList));
      // disptach(getPresetList(finalList));
      props.handleCancelClick();
    }
  };

  const handleSearch = (searchValue) => {
    let searchResult;
    let searchAllResult;
    setIsSearchOpen(true);

    searchResult = newPresetList?.filter((data) => {
      return data?.title
        ?.toString()
        .toLowerCase()
        .includes(searchValue?.toString().toLowerCase());
    });

    searchAllResult = newPresetList?.filter((data) => {
      return !data?.title
        ?.toString()
        .toLowerCase()
        .includes(searchValue?.toString().toLowerCase());
    });

    setSearchValue(searchResult);
    setFilterData(searchAllResult);
  };

  const sort_by_id = (a, b) => {
    return a?.id - b?.id;
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    const finalSearchResult = [...newPresetList, ...filterData].sort(
      sort_by_id
    );

    setNewPresetList(finalSearchResult);
    props.handleSelectedCameraArray(finalSearchResult);
  };

  const handleVideoPreview = (item, index) => {
    props.handlePreviewVideo(item?.video);
    setActivePreviewIcon(index);
  };

  return (
    <>
      <div className={presetContainer}>
        <Grid container>
          <Grid item xs={11} className={presetnText}>
            ADD PRESETS
          </Grid>
          <Grid item xs={1}>
            <div className={closeIcon} onClick={handleClosePreset}>
              <img src={CloseButton} width={14} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={presetName}>
        <div className={presetNameItem}>PRESET NAME</div>
        <div className={presetTextfield}>
          <TextField
            fullWidth
            name="Enter Preset Name"
            type={"text"}
            onChange={handleInputPageChange}
            value={name}
          />
        </div>
      </div>
      <div className={presetCameraContainer}>
        <Grid container className={searchBoxContainer}>
          <Grid item xs={10}>
            {isSearchOpen ? (
              <SearchBox
                searchInput={searchClass}
                placeHolder={"Search"}
                handleSearch={handleSearch}
                borderRadius={2}
                borderColor={"1px solid #DCDADA"}
                searchIsOpen={true}
              />
            ) : (
              "CAMERA LIST"
            )}
          </Grid>
          <Grid item xs={2} className={searchBox}>
            <div className={dFlex}>
              <img
                src={!isSearchOpen ? SearchIcon : AddIcon}
                width={30}
                onClick={!isSearchOpen ? handleSearch : handleSearchClose}
                className={!isSearchOpen ? searchIconSection : closeIconSection}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={cameraListContainer}>
        {isSearchOpen ? (
          searchValue && searchValue.length > 0 ? (
            searchValue?.map((item, index) => {
              return (
                <div className={cameraListItems}>
                  <CheckBox
                    id={index}
                    name={item.name}
                    label={item?.title}
                    isChecked={item?.isChecked}
                    handleCheck={(e) => handleCheck(e, index, item.id)}
                  />
                  <img
                    src={
                      activePreviewIcon === index
                        ? VideoPreviewSelectedIcon
                        : VideoPreviewIcon
                    }
                    alt="VideoPreviewIcon"
                    className={videoPreviewIconStyle}
                    onClick={() => handleVideoPreview(item, index)}
                  />
                </div>
              );
            })
          ) : (
            <div className={noResultStyle}>No Result Found </div>
          )
        ) : (
          newPresetList &&
          newPresetList?.map((item, index) => {
            return (
              <div className={cameraListItems}>
                <CheckBox
                  id={index}
                  name={item.name}
                  label={item?.title}
                  isChecked={item?.isChecked}
                  handleCheck={(e) => handleCheck(e, index, item.id)}
                />
                <img
                  src={
                    activePreviewIcon === index
                      ? VideoPreviewSelectedIcon
                      : VideoPreviewIcon
                  }
                  alt="VideoPreviewIcon"
                  className={videoPreviewIconStyle}
                  onClick={() => handleVideoPreview(item, index)}
                />{" "}
              </div>
            );
          })
        )}
      </div>
      <div>
        <Grid container className={saveButtonSection}>
          <ButtonBox
            buttonName={"CANCEL"}
            variant={"outlined"}
            handleClick={handleCancelClick}
            disabled={disable}
          />
          <ButtonBox
            buttonName={"SAVE"}
            variant={"contained"}
            handleClick={handleSaveClick}
            disabled={disable}
          />
        </Grid>
      </div>
    </>
  );
};

export default AddPreset;
