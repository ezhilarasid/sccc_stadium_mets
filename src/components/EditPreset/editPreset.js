import React, { useState, useEffect } from "react";
import { Grid, Avatar } from "@mui/material";
import ButtonBox from "elements/Button";
import CheckBox from "elements/Checkbox";
import CloseButton from "../../assets/close-Icon.svg";
import SearchBox from "elements/SearchBox";
import SearchCloseButton from "../../assets/close-Icon.svg";
import SearchIcon from "../../assets/search.svg";
import AddIcon from "../../assets/addIcon.svg";
import VideoPreviewIcon from "../../assets/videoPreview.svg";
import VideoPreviewSelectedIcon from "../../assets/videoPreviewSelected.svg";
import useStyles from "./styles";

const EditPreset = (props) => {
  const { editSelectedListId } = props;
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
    avatharEdit,
    avatarHeader,
    avatarTitle,
    closeIconSection,
    cameraListSection,
    searchClass,
    searchIconSection,
    searchCloseIconSection,
    noResultStyle,
    videoPreviewIconStyle,
    editPresetSearch,
    dFlex,
  } = useStyles();

  const [selectedPresetList, setSelectedPresetList] = useState();
  const [activePreviewIcon, setActivePreviewIcon] = useState(null);
  const [searchValue, setSearchValue] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filterData, setFilterData] = useState();

  const totalLength = [];

  selectedPresetList &&
    selectedPresetList?.cameraList?.map((itemChecked) => {
      if (itemChecked?.isChecked) {
        totalLength.push(itemChecked);
      }
    });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("presetData"));

    const filteredData = data?.filter(
      (item) => item?.id === editSelectedListId
    );
    if (data?.length > 0) {
      setSelectedPresetList(filteredData && filteredData[0]);
    }
    props.handleSelectedCameraArray(filteredData && filteredData[0]);
  }, []);

  const handleCloseEditPreset = () => {
    props.handleCloseEditPreset();
  };

  const handleCheck = (event, listIndex, id) => {
    if (isSearchOpen) {
      let newSelectedArray = { ...searchValue };
      if (newSelectedArray?.cameraList?.length) {
        newSelectedArray["cameraList"][listIndex]["isChecked"] =
          event.target.checked;
        setSelectedPresetList(newSelectedArray);
        props.handleSelectedCameraArray(newSelectedArray);
      }
    } else {
      let newArr = { ...selectedPresetList };
      if (newArr?.cameraList?.length) {
        newArr["cameraList"][listIndex]["isChecked"] = event.target.checked;
        setSelectedPresetList(newArr);
        props.handleSelectedCameraArray(newArr);
      }
    }
  };

  const handleCancelClick = () => {
    props.handleEditCancelClick();
  };

  const sort_by_id = (a, b) => {
    return a?.id - b?.id;
  };

  const handleSaveClick = () => {
    let data = JSON.parse(localStorage.getItem("presetData"));
    const filteredData = data?.filter(
      (item) => item?.id !== editSelectedListId
    );
    let filteredSelectedData = data?.filter(
      (item) => item?.id === editSelectedListId
    );
    filteredSelectedData[0]["cameraList"] = selectedPresetList?.cameraList;
    const finalData = [...filteredData, ...filteredSelectedData].sort(
      sort_by_id
    );
    props.handleEditSaveClick(finalData);
  };

  const handleSearch = (searchValue) => {
    let searchResult;
    let searchAllResult;
    setIsSearchOpen(true);

    searchResult = selectedPresetList?.cameraList?.filter((data) => {
      return data?.title
        ?.toString()
        .toLowerCase()
        ?.includes(searchValue?.toString().toLowerCase());
    });

    searchAllResult = selectedPresetList?.cameraList?.filter((data) => {
      return !data?.title
        ?.toString()
        .toLowerCase()
        ?.includes(searchValue?.toString().toLowerCase());
    });
    const obj = {
      cameraList: searchResult,
    };

    const arrObj = {
      cameraList: searchAllResult,
    };

    setSearchValue(obj);
    setFilterData(arrObj);
  };

  const handleSearchClose = () => {
    let data = JSON.parse(localStorage.getItem("presetData"));
    let filteredData = data?.filter((item) => item?.id === editSelectedListId);
    const a = searchValue?.cameraList;
    const b = filterData?.cameraList;
    const finalSearchResult = [...a, ...b].sort(sort_by_id);

    if (filteredData?.length > 0) {
      filteredData[0]["cameraList"] = finalSearchResult;
      setIsSearchOpen(false);
      setSelectedPresetList(filteredData[0]);
      props.handleSelectedCameraArray(filteredData[0]);
    }
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
            EDIT PRESETS
          </Grid>
          <Grid item xs={1} className={closeIconSection}>
            <div className={closeIcon} onClick={handleCloseEditPreset}>
              <img src={CloseButton} width={14} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={avatarHeader}>
        <Avatar className={avatharEdit}>{totalLength?.length}</Avatar>
        <div className={avatarTitle}>
          {selectedPresetList && selectedPresetList?.title}
        </div>
      </div>
      <div className={presetCameraContainer}>
        <Grid container className={cameraListSection}>
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
          <Grid item xs={2} className={editPresetSearch}>
            <div className={dFlex}>
              <img
                src={!isSearchOpen ? SearchIcon : AddIcon}
                width={30}
                onClick={!isSearchOpen ? handleSearch : handleSearchClose}
                className={
                  !isSearchOpen ? searchIconSection : searchCloseIconSection
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={cameraListContainer}>
        {isSearchOpen ? (
          searchValue ? (
            searchValue?.cameraList?.map((item, index) => {
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
          selectedPresetList &&
          selectedPresetList?.cameraList?.map((item, index) => {
            return (
              <div className={cameraListItems}>
                <CheckBox
                  id={index}
                  name={item.name}
                  label={item?.title}
                  isChecked={item?.isChecked}
                  handleCheck={(e) => handleCheck(e, index, item.id)}
                />{" "}
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
        )}
      </div>
      <div>
        <Grid container className={saveButtonSection}>
          <ButtonBox
            buttonName={"CANCEL"}
            variant={"outlined"}
            handleClick={handleCancelClick}
          />
          <ButtonBox
            buttonName={"SAVE"}
            variant={"contained"}
            handleClick={handleSaveClick}
          />
        </Grid>
      </div>
    </>
  );
};

export default EditPreset;
