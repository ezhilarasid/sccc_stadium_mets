import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./style";
import { useState, useRef, useCallback, useEffect } from "react";
const INF_SearchBox = (props) => {
  const {
    placeHolder,
    handleSearch,
    borderRadius,
    borderColor,
    searchIsOpen,
    searchResetValue,
    searchInput,
    tabIndex
  } = props;
  const [searchValue, setSearchValue] = useState();
  const [icon, setIcon] = useState("search");
  const [searchFocus, setSearchFocus] = useState(props.searchIsOpen);

  const textInput = React.createRef();

  const handleClose = () => {
    setSearchValue("");
    handleSearch("");
    setIcon("search");
  };
  const handleInput = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.length > 0) {
      setIcon("cancel");
    }
    handleSearch(event.target.value);
  };
  const handleSearchFocus = () => {
    setSearchFocus(true);
  };

  useEffect(() => {
    if (searchFocus === true || searchIsOpen === true) {
      textInput.current.focus();
      setSearchFocus(false);
    }
  }, [searchFocus, searchIsOpen]);

  useEffect(() => {
    setSearchValue("");
  }, [searchResetValue]);

  useEffect(() => {
    setSearchValue("");
    setIcon("search");
    handleSearch("");

  }, [tabIndex])

  return (
    <>
      <div className={searchInput}>
        <InputBase
          fullWidth
          inputRef={textInput}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
            }
          }}
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder={placeHolder}
          onChange={handleInput}
          value={searchValue}
          endAdornment={
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              {icon === "search" ? (
                <SearchIcon
                  onClick={handleSearchFocus}
                  onChange={handleInput}
                  sx={{ color: "white" }}
                />
              ) : (
                <CloseIcon onClick={handleClose} sx={{ fill: "white" }} />
              )}
            </IconButton>
          }
        />
      </div>
    </>
  );
};
export default INF_SearchBox;
