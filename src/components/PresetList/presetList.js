import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import EditIcon from "../../assets/editIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";
import RightArrowIcon from "../../assets/rightArrowIcon.svg";
import ExpandArrowIcon from "../../assets/expandArrowIcon.svg";
import useStyles from "./styles";
import {
  RootContainer,
  TitleContainer,
  TitleText,
  EditContainer,
  DeleteContainer,
  ArrowContainer,
  ListContainer,
} from "./styles";

const PresetList = (props) => {
  const { presetList, presetPanelActive, isSearchOpen } = props;
  const { noResultStyle, accordionTitle, rootContainer, listContainer } =
    useStyles();

  const [currentIndex, setCurrentIndex] = useState();
  const [currentItemExpand, setCurrentItemExpand] = useState(false);

  useEffect(() => {
    if (presetPanelActive) {
      setCurrentIndex(0);
    }
    if (isSearchOpen) {
      setCurrentIndex(null);
    }
  }, [presetPanelActive, isSearchOpen]);

  const handleSelectedEdit = (event, index, id) => {
    props.handleSelectedEdit(index, id);
    event.stopPropagation();
  };

  const handleAccordionClick = (event, index, id) => {
    setCurrentIndex(index);
    setCurrentItemExpand(null);
    props.handleAccordionClick(id);
    event.stopPropagation();
  };

  const handleRightArrow = (event, index) => {
    if (currentItemExpand === index) {
      setCurrentItemExpand(null);
    } else {
      setCurrentIndex(index);
      setCurrentItemExpand(index);
    }
    event.stopPropagation();
  };

  const handleSelectedRowDelete = (event, index, id) => {
    props.handleSelectedRowDelete(id);
    event.stopPropagation();
  };

  return (
    <>
      {presetList?.length > 0 ? (
        presetList?.map((item, index) => {
          const totalLength = [];
          item?.cameraList?.map((itemChecked) => {
            if (itemChecked?.isChecked) {
              totalLength.push(itemChecked);
            }
          });
          return (
            <>
              <RootContainer
                key={index}
                onClick={(e) => handleAccordionClick(e, index, item?.id)}
                style={{
                  background: index === currentIndex ? "#0D0C0C" : "#1F1F1F",
                }}
              >
                <div className={rootContainer}>
                  <Avatar
                    sx={{
                      background: "#FFB763",
                      width: "25px",
                      height: "25px",
                      color: "#000000",
                      marginRight: "10px",
                      fontFamily: `'Poppins', sans-serif !important`,
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "normal",
                    }}
                  >
                    {totalLength?.length}
                  </Avatar>
                  <TitleText className={accordionTitle}>
                    {item?.title}
                  </TitleText>
                  <EditContainer
                    onClick={(e) => handleSelectedEdit(e, index, item?.id)}
                  >
                    <img src={EditIcon} width={19} />
                  </EditContainer>
                  <DeleteContainer
                    onClick={(e) => handleSelectedRowDelete(e, index, item?.id)}
                    style={{
                      opacity:
                        index === 0 && item?.title?.toLowerCase() === "all"
                          ? 0.5
                          : "unset",
                      cursor:
                        index === 0 && item?.title?.toLowerCase() === "all"
                          ? "not-allowed"
                          : "pointer",
                      pointerEvents:
                        index === 0 && item?.title?.toLowerCase() === "all"
                          ? "none"
                          : "unset",
                    }}
                  >
                    <img src={DeleteIcon} width={14} />
                  </DeleteContainer>
                  <ArrowContainer onClick={(e) => handleRightArrow(e, index)}>
                    <img
                      src={
                        currentItemExpand === index
                          ? ExpandArrowIcon
                          : RightArrowIcon
                      }
                      width={currentItemExpand === index ? 20 : 13}
                    />
                  </ArrowContainer>
                </div>
                {currentItemExpand === index && (
                  <div className={listContainer}>
                    {item?.cameraList?.map((listItem) => {
                      if (listItem?.isChecked) {
                        return (
                          <ListContainer>
                            <TitleContainer>{listItem?.title}</TitleContainer>
                          </ListContainer>
                        );
                      }
                    })}
                  </div>
                )}
              </RootContainer>
            </>
          );
        })
      ) : (
        <div className={noResultStyle}>No Result Found</div>
      )}
    </>
  );
};

export default PresetList;
