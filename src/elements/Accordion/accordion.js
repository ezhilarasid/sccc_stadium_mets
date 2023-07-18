import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import EditIcon from "../../assets/editIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";
import RightArrowIcon from "../../assets/rightArrowIcon.svg";
import ExpandArrowIcon from "../../assets/expandArrowIcon.svg";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RootContainer,
  TitleContainer,
  TitleText,
  EditContainer,
  DeleteContainer,
  ArrowContainer,
} from "./styles";
import useStyles from "./styles";

const AccordionBox = ({
  item,
  index,
  handleSelectedEdit,
  handleAccordionClick,
}) => {
  const { accordionTitle } = useStyles();
  const [expanded, setExpanded] = useState(null);
  const totalLength = [];
  item?.cameraList?.map((itemChecked) => {
    if (itemChecked?.isChecked) {
      totalLength.push(itemChecked);
    }
  });

  const handleEdit = () => {
    handleSelectedEdit(index);
  };
  const handleSummary = () => {
    handleAccordionClick(index);
  };
  const handleRightArrow = () => {
    setExpanded(index === expanded ? false : index);
  };

  return (
    <Accordion expanded={expanded === index}>
      <AccordionSummary onClick={handleSummary} expandIcon={false}>
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
        <TitleText className={accordionTitle}>{item?.title}</TitleText>
        <EditContainer onClick={handleEdit}>
          <img src={EditIcon} width={19} />
        </EditContainer>
        <DeleteContainer>
          <img src={DeleteIcon} width={14} />
        </DeleteContainer>
        <ArrowContainer onClick={handleRightArrow}>
          <img
            src={
              (expanded === 0 ? true : expanded)
                ? ExpandArrowIcon
                : RightArrowIcon
            }
            width={(expanded === 0 ? true : expanded) ? 20 : 14}
          />
        </ArrowContainer>
      </AccordionSummary>
      <AccordionDetails>
        {item?.cameraList?.map((listItem) => {
          if (listItem?.isChecked) {
            return (
              <RootContainer>
                <TitleContainer>{listItem?.title}</TitleContainer>
              </RootContainer>
            );
          }
        })}
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionBox;
