import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import MenuBar from "components/MenuBar";

import NotificationTab from "../../elements/NotificationTab/notificationTab";
import Analytics from "../../components/Analytics";
import mockDataOutdoorAmbience from "mockdata/outdoorsAmbience";
import Map from "elements/Map";
import Tabs from "elements/Tabs";
import Tooltip from "elements/Tooltip";
import BirdEyeIcon from "../../assets/birdEye.svg";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ResetIcon from "../../assets/Recenter.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import Header from "elements/Header";

import bottomMenu from "../../assets/Bottom-menu.svg";
import securityHeadingIcon from "../../assets/security-heading-icon.svg";
import { SignalTowerIcon, SignalTowerOrangeIcon } from "../../assets/Icons";

import useStyles from "./styles";

const Outdoors = () => {
  const {
    dashboardSection,
    bottomMenuSection,
    bottomBlackline,
    notificationContainer,
    dashboardLogoImg,
    logoContainerStyle,
    mapContainerStyle,
    outdoorsNotificationList,
    outdoorsNotificationListOpen,
    birdEyeImage,
    parkingHeader,
    parkingHeaderStyle,
    customParkingTabs,
    notificationBg,
    dashboardMenu,
    mobileIconImg,
    menuIconImg,
    headerRightBtnGroup,
  } = useStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [isSignalTowerSelected, setIsSignalTowerSelected] = useState(false);
  const onHandleCamera = () => {
    setIsSignalTowerSelected(false);
    navigate(
      `/video/${pageName}?isSignalTowerSelected=${
        isSignalTowerSelected ? 1 : 0
      }`,
      {
        state: pageName,
      }
    );
  };

  const [notifications, setNotifications] = useState([]);
  const [pageName, setPageName] = useState(location?.state);
  const [isMarkerCloseClicked, setIsMarkerCloseClicked] = useState(false);
  const [dateTimeFormat, setDateTimeFormat] = useState("");

  useEffect(() => {
    const { events, incidents, operationalAlerts } =
      mockDataOutdoorAmbience?.notifications;
    const combinedNotifications = [];

    events?.list?.forEach((event, index) => {
      combinedNotifications.push({
        ...event,
        index,
        type: "events",
        category: "outdoorAmbience",
      });
    });

    incidents?.list?.forEach((incident, index) => {
      combinedNotifications.push({
        ...incident,
        index,
        type: "incidents",
        category: "outdoorAmbience",
      });
    });

    operationalAlerts?.list?.forEach((alert, index) => {
      combinedNotifications.push({
        ...alert,
        index,
        type: "opAlerts",
        category: "outdoorAmbience",
      });
    });

    const filteredNotifications = combinedNotifications.filter(
      (notification) => notification.category === "outdoorAmbience"
    );

    setNotifications(filteredNotifications);
  }, []);

  const [tabIndex, setTabIndex] = useState(1);
  const [tabIndexNotificationAnalytics, setTabIndexNotificationAnalytics] =
    useState(0);

  const handleTabs = (index) => {
    setTabIndexNotificationAnalytics(index);
    setTabIndex(index);
  };

  const [currentOpenNotification, setCurrentOpenNotification] = useState("");
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  useEffect(() => {
    if (searchIsOpen === false) {
      setExpandListFocusStopScroll(false);
      setIsMarkerCloseClicked(false);
    }
  }, [searchIsOpen]);

  const handleSearchIsOpen = (data) => {
    setSearchIsOpen(data);
  };

  const [backGroundClearAll, setBackGroundClearAll] = useState(false);

  const backGroundClear = (isOpen) => {
    setBackGroundClearAll(isOpen);
  };

  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );
  const [reset, setReset] = useState(false);
  const [expandListFocusStopScroll, setExpandListFocusStopScroll] =
    useState(false);

  const fullScreenView = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      // setIsFullScreen(true);
    } else {
      document.body.requestFullscreen();
      // setIsFullScreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", (event) => {
      setIsFullScreen((prev) => !prev);
    });
    setIsSignalTowerSelected(
      Boolean(parseInt(searchParams.get("isSignalTowerSelected")))
    );
  }, []);

  const [refId, setRefId] = useState("");

  const handlRefElementAutoScroll = (id) => {
    if (id) {
      setRefId(id);
    } else {
      setRefId("");
    }
  };

  const [progressValue, setProgressValue] = useState();
  const circularBarValue = (value) => {
    setProgressValue(value);
  };

  const handleSignalTowerButton = () => {
    setIsSignalTowerSelected(!isSignalTowerSelected);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} className={dashboardSection}>
        <Grid container className={""}>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={9}
            xl={9}
            style={{ position: "relative" }}
          >
            <Header pageName="OUTDOORS & AMBIENCE" />

            <div className={headerRightBtnGroup}>
              <Tooltip tooltipValue={"Reset"}>
                <img
                  className={menuIconImg}
                  src={ResetIcon}
                  onClick={() => {
                    setReset(!reset);
                    // document.exitFullscreen();
                  }}
                />
              </Tooltip>
              <Tooltip
                tooltipValue={
                  !isFullScreen ? "Exit Full Screen" : "Full Screen"
                }
              >
                <img
                  className={mobileIconImg}
                  src={!isFullScreen ? ExitFullScreen : FullScreen}
                  onClick={fullScreenView}
                />
              </Tooltip>
              <Tooltip
                tooltipValue={
                  !isSignalTowerSelected
                    ? "Deselect Signal Tower"
                    : "Signal Tower"
                }
              >
                <img
                  className={mobileIconImg}
                  src={
                    !isSignalTowerSelected
                      ? SignalTowerIcon
                      : SignalTowerOrangeIcon
                  }
                  onClick={handleSignalTowerButton}
                  width={50}
                  height={50}
                />
              </Tooltip>
              <div>
                {" "}
                <Tooltip tooltipValue={"Camera View"}>
                  <img
                    src={BirdEyeIcon}
                    alt="camera"
                    className={dashboardMenu}
                    onClick={() => onHandleCamera()}
                  />
                </Tooltip>
              </div>
            </div>
            <div className={mapContainerStyle}>
              <Map
                tilted={true}
                markers={notifications}
                cat={"parking"}
                mapStyle={true}
                setTabIndex={setTabIndex}
                setCurrentOpenNotification={setCurrentOpenNotification}
                marker={currentOpenNotification}
                backGroundClearAll={backGroundClearAll}
                pageName={"outdoor"}
                actionOnHover={true}
                reset={reset}
                handlRefElementAutoScroll={handlRefElementAutoScroll}
                tabIndex={tabIndex}
                setExpandListFocusStopScroll={setExpandListFocusStopScroll}
                setIsMarkerCloseClicked={setIsMarkerCloseClicked}
                dateTimeFormat={dateTimeFormat}
                setSearchIsOpen={setSearchIsOpen}
                showWifiStrengthPopup={isSignalTowerSelected}
                openCards={() => null}
                openNotifications={() => null}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            className={notificationBg}
          >
            {<Analytics pageName={"outdoors"} />}

            {
              <NotificationTab
                notificationList={outdoorsNotificationList}
                //   searchIsOpen
                //     ? securityNotificationListOpen
                //     : securityNotificationList
                // }
                notificationParkingContainer={notificationContainer}
                currentOpenNotification={currentOpenNotification}
                setCurrentOpenNotification={setCurrentOpenNotification}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                pageName={"outdoors"}
                notificationHandleSearchIsOpen={handleSearchIsOpen}
                refId={refId}
                setExpandListFocusStopScroll={setExpandListFocusStopScroll}
                expandListFocusStopScroll={expandListFocusStopScroll}
                handlRefElementAutoScroll={handlRefElementAutoScroll}
                isMarkerCloseClicked={isMarkerCloseClicked}
                setIsMarkerCloseClicked={setIsMarkerCloseClicked}
                setDateTimeFormat={setDateTimeFormat}
                searchIsOpen={searchIsOpen}
                setSearchIsOpen={setSearchIsOpen}
              />
            }
          </Grid>
        </Grid>
        <div className={bottomBlackline}></div>
        <MenuBar pageName={"parking"} backGroundClear={backGroundClear} />
      </Box>
    </Fragment>
  );
};

export default Outdoors;
