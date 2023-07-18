import React, { useState, useEffect, useRef } from "react";
import { MenuItem, IconButton } from "@mui/material";
import moment from "moment";
import dotsIcon from "../../assets/dots.svg";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import useStyles from "./styles";
import {
  RootContainer,
  CollapsedBody,
  TitleContainer,
  TitleText,
  VerticalSpace,
  TitleSubText,
  TitleSubTextValue,
  DefaultBody,
  ExpandedBody,
  DetailItems1,
} from "./styles";
const NotificationList = (props) => {
  const { root, popper, paper, arrowItem } = useStyles();
  const {
    data,
    data: {
      id,
      title,
      parkingArea,
      timeStamp,
      vehicleNumber,
      spot,
      category,
      bodyContent,
      subTitle1,
      subTitle2,
      restauratName,
      inventoryLevelBody,
      orderDelayedBody,
      pendingOrderBody,
    },

    index,
    selectedItem,
    handleExpandListItem,
    handlePreviewClick,
    handleVideoClick,
    currentOpenNotification,
    tabIndex,
    clickHandler,
    handleClickAway,
    handleClickButton,
    popperOpen,

    refs,
    currentPage,
    handlDateTimeFormat,
  } = props;

  const anchorRef = useRef(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [arrow, setArrow] = useState(true);
  const [disablePortal, setDisablePortal] = useState(false);
  const [flip, setFlip] = useState(true);

  const [dateTimeFormat, setDateTimeFormat] = useState();

  const idm = popperOpen ? "scroll-playground" : null;

  useEffect(() => {
    let currentTimeStamp;
    currentTimeStamp = moment()
      .subtract({
        hours: index === 0 ? index : index > 20 ? 20 : index + 1,
        minutes: index + 59,
        seconds: index + 49,
      })
      .format("YYYY-MM-DD | h:mm A");
    setDateTimeFormat(currentTimeStamp);
    if (tabIndex && tabIndex === 1) {
      currentTimeStamp = moment()
        .subtract({
          hours: index === 0 ? index : index > 20 ? 21 : index + 1,
          minutes: index + 29,
          seconds: index + 29,
        })
        .format("YYYY-MM-DD | h:mm A");
      setDateTimeFormat(currentTimeStamp);
    } else if (tabIndex && tabIndex === 2) {
      currentTimeStamp = moment()
        .subtract({
          hours: index === 0 ? index : index > 20 ? 22 : index + 1,
          minutes: index + 10,
          seconds: index + 20,
        })
        .format("YYYY-MM-DD | h:mm A");
      setDateTimeFormat(currentTimeStamp);
    }
  }, [tabIndex]);

  if (currentOpenNotification === id) {
    handlDateTimeFormat(dateTimeFormat);
  }

  return (
    <RootContainer
      ref={refs[id]}
      onClick={() => handleExpandListItem(index, id)}
    >
      {currentOpenNotification !== id ? (
        <CollapsedBody>
          <TitleContainer>
            <TitleText>{title}</TitleText>
          </TitleContainer>
          <VerticalSpace count={3} />
          <DefaultBody>
            <TitleSubText>
              {category === "outdoorAmbience"
                ? bodyContent
                : category === "foodConcessions"
                ? restauratName
                : parkingArea}
            </TitleSubText>
            <TitleSubTextValue>{dateTimeFormat}</TitleSubTextValue>
          </DefaultBody>
        </CollapsedBody>
      ) : (
        <ExpandedBody>
          <DefaultBody>
            <TitleText>{title}</TitleText>
            <TitleSubTextValue>{dateTimeFormat}</TitleSubTextValue>
          </DefaultBody>
          <VerticalSpace count={3} />
          <TitleSubText>
            <>
              {category === "outdoorAmbience"
                ? `${subTitle1}`
                : category === "foodConcessions"
                ? title === "Low Inventory Level"
                  ? `${inventoryLevelBody}`
                  : title === "Order Delayed"
                  ? `${orderDelayedBody}`
                  : title === "Pending Order"
                  ? `${pendingOrderBody}`
                  : `${vehicleNumber}`
                : category !== "infra"
                ? `${vehicleNumber}`
                : null}
              {/* {currentPage === "dashboard"
                ? category !== "infra"
                  ? `${vehicleNumber}`
                  : null
                : currentPage === "outdoors"
                ? `${subTitle1}`
                : currentPage === "foodConcessions"
                ? title === "Low Inventory Level"
                  ? `${inventoryLevelBody}`
                  : title === "Order Delayed"
                  ? `${orderDelayedBody}`
                  : title === "Pending Order"
                  ? `${pendingOrderBody}`
                  : `${vehicleNumber}`
                : `${vehicleNumber}`} */}

              {category !== "outdoorAmbience" || spot !== "" ? spot : ""}
            </>
          </TitleSubText>
          <DefaultBody>
            <TitleSubText>
              {category === "outdoorAmbience"
                ? subTitle2
                : category === "foodConcessions"
                ? restauratName
                : parkingArea}
            </TitleSubText>
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className={root}>
                <div>
                  <Box>
                    <DetailItems1>
                      <IconButton
                        ref={anchorRef}
                        onClick={handleClickButton}
                        sx={{ p: "5px", cursor: "pointer" }}
                      >
                        <img src={dotsIcon} width={"25px"} height={"25px"} />
                      </IconButton>
                    </DetailItems1>
                  </Box>
                  {popperOpen ? (
                    <Popper
                      open={popperOpen}
                      anchorEl={anchorRef.current}
                      className={popper}
                      modifiers={{
                        arrow: {
                          enabled: arrow,
                          element: arrowRef,
                        },
                      }}
                    >
                      {arrow ? (
                        <span className={arrowItem} ref={setArrowRef} />
                      ) : null}
                      <Paper className={paper}>
                        <MenuItem
                          onClick={(event) => handlePreviewClick(event, data)}
                        >
                          Image
                        </MenuItem>
                        <MenuItem
                          onClick={(event) => handleVideoClick(event, data)}
                        >
                          Video
                        </MenuItem>
                        <MenuItem>SOS</MenuItem>
                        <MenuItem>Raise Alert</MenuItem>
                        <MenuItem>Call Parking Operator</MenuItem>
                        <MenuItem>Close Parking Lot</MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </Paper>
                    </Popper>
                  ) : null}
                </div>
              </div>
            </ClickAwayListener>
          </DefaultBody>
        </ExpandedBody>
      )}
    </RootContainer>
  );
};
export default NotificationList;
