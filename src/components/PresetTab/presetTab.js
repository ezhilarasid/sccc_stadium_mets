import React, { useState, useEffect } from "react";
import { Grid, Divider } from "@mui/material";
import PresetList from "components/PresetList";
import SearchBox from "elements/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { getPresetList } from "redux/actions/presetAction";
import SearchIcon from "../../assets/search.svg";
import AddIcon from "../../assets/addIcon.svg";
import useStyles from "./styles";

const PresetTab = (props) => {
  const { presetPanelActive, deletePresetValue, addPreset } = props;
  const {
    presetContainer,
    divider,
    addIcon,
    presetnText,
    presetHeader,
    searchIconSection,
    addIconSection,
    notificationScoll,
    searchClass,
    addIconSectionInactive,
    closeIconSection,
  } = useStyles();

  // const disptach = useDispatch();

  const [searchValue, setSearchValue] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // disptach(getPresetList());
    const data = JSON.parse(localStorage.getItem("presetData"));

    if (data?.length > 0) {
      setSearchValue(data);
    }
  }, [deletePresetValue]);

  useEffect(() => {
    // disptach(getPresetList());
    const data = JSON.parse(localStorage.getItem("presetData"));

    if (data?.length > 0) {
      setSearchValue(data);
    }
  }, [addPreset, presetPanelActive]);

  useEffect(() => {
    // disptach(getPresetList());
    const data = JSON.parse(localStorage.getItem("presetData"));

    if (data?.length > 0) {
      setSearchValue(data);
    }
  }, []);

  useEffect(() => {
    // disptach(getPresetList());
    const data = JSON.parse(localStorage.getItem("presetData"));

    if (data?.length > 0) {
      setSearchValue(data);
    }
  }, [isSearchOpen]);

  const handleAddPreset = () => {
    props.handleAddPreset();
  };

  const handleSelectedEdit = (index, id) => {
    props.handleSelectedEdit(index, id);
  };

  const handleSearch = (searchValue) => {
    let searchResult;
    setIsSearchOpen(true);
    const dataArray = JSON.parse(localStorage.getItem("presetData"));
    searchResult = dataArray?.filter((data) => {
      return data?.title
        ?.toString()
        .toLowerCase()
        .includes(searchValue?.toString().toLowerCase());
    });
    setSearchValue(searchResult);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchValue(searchValue);
    props.handleSearchClose();
  };

  const handleAccordionClick = (index) => {
    props.handleAccordionClick(index);
  };

  const handleSelectedRowDelete = (id) => {
    props.handleSelectedRowDelete(id);
  };

  return (
    <>
      <div className={presetContainer}>
        <Grid container className={presetHeader}>
          <div className={presetnText}>
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
              "PRESETS"
            )}
          </div>
          <div>
            <img
              src={!isSearchOpen ? SearchIcon : AddIcon}
              width={30}
              onClick={!isSearchOpen ? handleSearch : handleSearchClose}
              className={!isSearchOpen ? searchIconSection : closeIconSection}
            />

            <img
              src={AddIcon}
              width={30}
              onClick={handleAddPreset}
              className={
                !isSearchOpen ? addIconSection : addIconSectionInactive
              }
            />
          </div>
        </Grid>
      </div>
      <Grid container>
        <Grid item xs={12} className={notificationScoll}>
          <PresetList
            handleSelectedEdit={handleSelectedEdit}
            presetList={searchValue}
            handleAccordionClick={handleAccordionClick}
            presetPanelActive={presetPanelActive}
            isSearchOpen={isSearchOpen}
            handleSelectedRowDelete={handleSelectedRowDelete}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PresetTab;
