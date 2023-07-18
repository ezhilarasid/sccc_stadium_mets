import React, { useState, useEffect, useRef } from "react";
import {
  MenuItem,
  IconButton,
  Popper,
  Paper,
  Box,
  ClickAwayListener,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import {
  electricity,
  food,
  infra,
  fan,
  security,
  parking,
  greenMarker,
  orangeMarker,
  redMarker,
  WifiYellow,
  PM2Yellow,
  PM10Yellow,
  EnergyYellow,
  VOC,
  CO2,
  InventoryLevel,
  Orders,
  PieChart,
  Visitors,
} from "assets/Icons";
import dotsIcon from "../../assets/dots.svg";
import {
  RootContainer,
  Icon,
  InnerIcon,
  MarkerOverlay,
  MarkerTooltip,
  InfoHeaderContainer,
  InfoTitle,
  InfoTime,
  InfoContent,
  ClickableContainer,
  MarkerContainer,
  CloseIconMarker,
  DetailItems1,
  PopupContentSection,
  PopupCompartment,
  PopupValueContainer,
  PopupValueIcon,
  PopupValue,
  PopupCompartmentLabel,
  RestaurantName,
  FoodConcessionIconValue,
} from "./styles";
import useStyles from "./styles";
import { VerticalSpace } from "elements/NotificationList/styles";

const foregroundIcons = {
  electricity,
  food,
  infra,
  fan,
  security,
  parking,
};

const markerIcons = {
  events: greenMarker,
  incidents: orangeMarker,
  opAlerts: redMarker,
};

const Marker = (props) => {
  const { root, popper, paper, arrowItem, tripleDot, vehicle } = useStyles();

  const {
    currentClickedMarker,
    info,
    toggleInfoWindow,
    singleMarkerId,
    singleMarkerType,
    singleMarkerLocation,
    handleClickAway,
    handleClickButton,
    popperOpen,
    handlePreviewClick,
    handleVideoClick,
    dateTimeFormat,
    newLayout,
    pageName,
    currentMarkerPosition,
  } = props;

  // const [dateTimeFormat, setDateTimeFormat] = useState();
  const [indexVal, setIndexVal] = useState(info.index ? info.index : 0);
  const [tabType, setTabType] = useState("events");
  const [closeIcon, setCloseIcon] = useState(false);
  const anchorRef = useRef(null);
  const hoverWindowRef = useRef(null)
  const [arrowRef, setArrowRef] = useState(null);
  const [arrow, setArrow] = useState(true);
  const [deviations, setDeviations] = useState({horizontalDeviation: 0, verticalDeviation: 0})

  // useEffect(() => {
  //   let currentDate = moment().format("MM-DD-YYYY");
  //   let currentTimeStamp;
  //   currentTimeStamp = moment()
  //     .subtract({
  //       hours: indexVal === 0 ? indexVal : indexVal > 23 ? 20 : indexVal + 1,
  //       minutes: indexVal + 59,
  //       seconds: indexVal + 49,
  //     })
  //     .format("h:mm A");
  //   setDateTimeFormat(currentDate + " | " + currentTimeStamp);

  //   if (info.type === "incidents") {
  //     currentTimeStamp = moment()
  //       .subtract({
  //         hours: indexVal === 0 ? indexVal : indexVal > 23 ? 21 : indexVal + 2,
  //         minutes: indexVal + 29,
  //         seconds: indexVal + 29,
  //       })
  //       .format("h:mm A");
  //     setDateTimeFormat(currentDate + " | " + currentTimeStamp);
  //   } else if (info.type === "opAlerts") {
  //     currentTimeStamp = moment()
  //       .subtract({
  //         hours: indexVal === 0 ? indexVal : indexVal > 23 ? 22 : indexVal + 3,
  //         minutes: indexVal + 10,
  //         seconds: indexVal + 20,
  //       })
  //       .format("h:mm A");
  //     setDateTimeFormat(currentDate + " | " + currentTimeStamp);
  //   }
  // }, [indexVal]);

  const getDeviations = () => {
    const windowDimensions = {width: window?.innerWidth, height: window.innerHeight}

    const popupPosition = {x: (windowDimensions.width/2)+currentMarkerPosition.x, y: (windowDimensions.height/2)+currentMarkerPosition.y}
    const verticalDeviation = (popupPosition.y/windowDimensions.height)*100
    const horizontalDeviation = (popupPosition.x/windowDimensions.width)*100

    setDeviations({verticalDeviation, horizontalDeviation})
  }

  useEffect(() => {
    if(newLayout)
      getDeviations();
  }, [])

  const handleClose = () => {
    toggleInfoWindow(
      singleMarkerId,
      singleMarkerType,
      singleMarkerLocation,
      true
    );
  };

  if (newLayout && currentClickedMarker !== singleMarkerId) {
    // if (currentClickedMarker === singleMarkerId) {
    //   return (
    //     <RootContainer>
    //       <MarkerTooltip visible={true} blackBackground={true}>
    //         <MenuItem onClick={(event) => handlePreviewClick(event, info)}>
    //           Image
    //         </MenuItem>
    //         <MenuItem onClick={(event) => handleVideoClick(event, info)}>
    //           Video
    //         </MenuItem>
    //         <MenuItem>SOS</MenuItem>
    //         <MenuItem>Raise Alert</MenuItem>
    //         <MenuItem>Call Parking Operator</MenuItem>
    //         <MenuItem>Close Parking Lot</MenuItem>
    //         <MenuItem>Delete</MenuItem>
    //       </MarkerTooltip>
    //     </RootContainer>
    //   );
    // }

    if (pageName === "foodConcession") {
      return (
        <RootContainer >
          <MarkerTooltip size='small' deviations={deviations} newLayout={newLayout} hoverable={true} visible={true} customWidth={false}>
            <InfoHeaderContainer>
              <RestaurantName>{info?.restauratName}</RestaurantName>
            </InfoHeaderContainer>
            <br />
            <PopupContentSection>
              <PopupCompartment horizontalMargin={true} >
                <FoodConcessionIconValue>100</FoodConcessionIconValue>
                <VerticalSpace count={4} />
                <PopupValueContainer>
                  <PopupValueIcon src={Visitors} />
                </PopupValueContainer>
              </PopupCompartment>
              <PopupCompartment horizontalMargin={true} >
                <FoodConcessionIconValue>50</FoodConcessionIconValue>
                <VerticalSpace count={4} />
                <PopupValueContainer>
                  <PopupValueIcon src={Orders} />
                </PopupValueContainer>
              </PopupCompartment>
              <PopupCompartment horizontalMargin={true} >
                <FoodConcessionIconValue>70%</FoodConcessionIconValue>
                <VerticalSpace count={4} />
                <PopupValueContainer>
                  <PopupValueIcon src={InventoryLevel} />
                </PopupValueContainer>
              </PopupCompartment>
              <PopupCompartment horizontalMargin={true} >
                <FoodConcessionIconValue>80%</FoodConcessionIconValue>
                <VerticalSpace count={4} />
                <PopupValueContainer>
                  <PopupValueIcon src={PieChart} />
                </PopupValueContainer>
              </PopupCompartment>
            </PopupContentSection>
          </MarkerTooltip>
        </RootContainer>
      );
    }

    return (
      <RootContainer>
        <MarkerTooltip deviations={deviations} newLayout={newLayout} hoverable={true} visible={true} customWidth={true}>
          <InfoHeaderContainer ref={hoverWindowRef} >
            <InfoTitle>{info?.title}</InfoTitle>
            <CloseIconMarker onClick={handleClose}>
              <CloseIcon />
            </CloseIconMarker>
          </InfoHeaderContainer>
          <br />
          <PopupContentSection>
            <PopupCompartment className="flex-start">
              <PopupValueContainer>
                <PopupValueIcon src={EnergyYellow} />
                <PopupValue>5KW</PopupValue>
              </PopupValueContainer>
              <PopupCompartmentLabel>
                Electricity Consumption
              </PopupCompartmentLabel>
            </PopupCompartment>
            <PopupCompartment className="flex-start">
              <PopupValueContainer>
                <PopupValueIcon src={WifiYellow} />
                <PopupValue>50</PopupValue>
              </PopupValueContainer>
              <PopupCompartmentLabel>Wifi Users</PopupCompartmentLabel>
            </PopupCompartment>
          </PopupContentSection>
          <br />
          <InfoHeaderContainer>
            <InfoTitle>
              Air Quality Index - <span>70AQI</span>
            </InfoTitle>
          </InfoHeaderContainer>
          <br />
          <PopupContentSection>
            <PopupCompartment className="flex-start">
              <PopupValueContainer>
                <PopupValueIcon src={VOC} />
                <PopupValue>551</PopupValue>
              </PopupValueContainer>
              <PopupCompartmentLabel>VOC</PopupCompartmentLabel>
            </PopupCompartment>
            <PopupCompartment className="flex-start">
              <PopupValueContainer>
                <PopupValueIcon src={CO2} />
                <PopupValue>140</PopupValue>
              </PopupValueContainer>
              <PopupCompartmentLabel>CO2</PopupCompartmentLabel>
            </PopupCompartment>
            <PopupCompartment className="flex-start">
              <PopupValueContainer>
                <PopupValueIcon src={PM2Yellow} />
                <PopupValue>79</PopupValue>
              </PopupValueContainer>
              <PopupCompartmentLabel>PM2.5 (µg/m³)</PopupCompartmentLabel>
            </PopupCompartment>
            <PopupCompartment className="flex-start">
              <PopupValueContainer>
                <PopupValueIcon src={PM10Yellow} />
                <PopupValue>136</PopupValue>
              </PopupValueContainer>
              <PopupCompartmentLabel>PM10 (µg/m³)</PopupCompartmentLabel>
            </PopupCompartment>
          </PopupContentSection>
        </MarkerTooltip>
      </RootContainer>
    );
  }

  return (
    <RootContainer>
      <MarkerTooltip visible={true} blackBackground={true}>
        <InfoHeaderContainer>
          <InfoTitle>{info?.title}</InfoTitle>
          <InfoTime>{dateTimeFormat}</InfoTime>
          <CloseIconMarker onClick={handleClose}>
            <CloseIcon />
          </CloseIconMarker>
        </InfoHeaderContainer>
        <br />
        <InfoContent>
          {info?.category === "outdoorAmbience"
            ? `${info?.subTitle1}`
            : info?.category === "foodConcessions"
            ? info?.title === "Low Inventory Level"
              ? `Inventory Level - ${info?.inventoryLevel}`
              : info?.title === "Order Delayed"
              ? `Order Number ${info?.orderNumber} | Delayed Time - ${info?.delayedTime}`
              : info?.title === "Pending Order"
              ? `Pending Orders - ${info?.pendingOrders} | Pending Time - ${info?.pendingTime}`
              : info?.spot
              ? `Spot - ${info?.spot}`
              : null
            : `Spot - ${info?.spot}`}
        </InfoContent>
        <br />
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={root}>
            <div className={tripleDot}>
              <InfoContent>
                {info?.category === "outdoorAmbience"
                  ? `${info?.subTitle2}`
                  : info?.category === "foodConcessions"
                  ? `${info?.restauratName}`
                  : `${info?.parkingLot}`}
              </InfoContent>
              <Box>
                <DetailItems1>
                  <IconButton
                    ref={anchorRef}
                    onClick={handleClickButton}
                    sx={{ p: "0px", cursor: "pointer" }}
                  >
                    <img src={dotsIcon} width={"24px"} height={"24px"} />
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
                      onClick={(event) => handlePreviewClick(event, info)}
                    >
                      Image
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => handleVideoClick(event, info)}
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
      </MarkerTooltip>
    </RootContainer>
  );
};

export default Marker;
