import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Analytics from "../../components/Analytics";
import MenuBar from "components/MenuBar";
import NotificationTab from "../../elements/NotificationTab/notificationTab";
import Tabs from "elements/Tabs";
import Tooltip from "elements/Tooltip";
import Map from "elements/Map";
import BirdEyeIcon from "../../assets/birdEye.svg";
import bottomMenu from "../../assets/Bottom-menu.svg";
import parkingHeadingIcon from "../../assets/parking-heading-icon.svg";
import Header from "elements/Header";
import CircularProgress from "elements/CircularProgress";

import FullScreen from "../../assets/Fullscreen-icon.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import ResetIcon from "../../assets/Recenter.svg";
import useStyles from "./styles";
import {
  lotA,
  lotB,
  lotC,
  lotD,
  lotE,
  lotF,
  lotG,
  lotH,
  lotBus,
} from "assets/svg-maps";
import {
  GlassWithBowldIcon,
  FlowerIcon,
  GlassIcon,
  SpoonIcon,
} from "../../assets/Icons";

import mockFoodConcessionData from "../../mockdata/foodConcessions";

const FoodConcessions = () => {
  const {
    dashboardSection,
    parkingHeader,
    analyticsContainer,
    bottomMenuSection,
    bottomBlackline,
    notificationContainer,
    dashboardLogoImg,
    parkingHeaderStyle,
    birdEyeImage,
    customFoodConcessionsTabs,
    parkingNotificationClassName,
    parkingContainer,
    parkingCircularProgress,
    parkingNotificationList,
    parkingNotificationListOpen,
    notificationBg,
    dashboardMenu,
    parkingTabContainer,
    mapSvgImage,
    mobileIconImg,
    menuIconImg,
  } = useStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const [pageName, setPageName] = useState(location?.state);
  const [isMarkerCloseClicked, setIsMarkerCloseClicked] = useState(false);
  const [dateTimeFormat, setDateTimeFormat] = useState("");

  const onHandleCamera = () => {
    navigate("/video/" + pageName, { state: pageName });
  };

  const tabsList = [
    {
      name: "ALL",
      val: 0,
      iconName: "ALL",
    },
    {
      name: GlassWithBowldIcon,
      val: 1,
      iconName: "Restaurants",
    },
    {
      name: FlowerIcon,
      val: 2,
      iconName: "Restrooms",
    },
    {
      name: GlassIcon,
      val: 3,
      iconName: "Entrance and Exit",
    },
    {
      name: SpoonIcon,
      val: 4,
      iconName: "Lounge",
    },
  ];
  const [notifications, setNotifications] = useState([]);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const {
    id,
    name,
    totalSlots,
    available,
    occupied,
    occupiedPercentage,
    values,
  } = mockFoodConcessionData;

  const [tabIndexParkingTabs, setTabIndexParkingTabs] = useState(0);

  const { parkingSlots } = values[0];

  useEffect(() => {
    if (searchIsOpen === false) {
      setExpandListFocusStopScroll(false);
      setIsMarkerCloseClicked(false);
    }
  }, [searchIsOpen]);

  useEffect(() => {
    setCurrentOpenNotification("");
    // setIsMarkerCloseClicked(true);
    const mockNotifications = values[tabIndexParkingTabs]?.notifications;
    const { events, incidents, operationalAlerts } = mockNotifications;
    const combinedNotifications = [];

    events?.list?.forEach((event, index) => {
      combinedNotifications.push({ ...event, index, type: "events" });
    });

    incidents?.list?.forEach((incident, index) => {
      combinedNotifications.push({ ...incident, index, type: "incidents" });
    });

    operationalAlerts?.list?.forEach((alert, index) => {
      combinedNotifications.push({ ...alert, index, type: "opAlerts" });
    });

    const filteredNotifications = combinedNotifications.filter(
      (notification) => notification.category === "foodConcessions"
    );

    setNotifications(filteredNotifications);
  }, [tabIndexParkingTabs]);

  const [tabIndex, setTabIndex] = useState(1);

  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );
  const [reset, setReset] = useState(false);
  const [expandListFocusStopScroll, setExpandListFocusStopScroll] =
    useState(false);

  const handleTabs = (index) => {
    setTabIndexParkingTabs(index);
  };

  const [currentOpenNotification, setCurrentOpenNotification] = useState("");

  const handleSearchIsOpen = (data) => {
    setSearchIsOpen(data);
  };

  const [backGroundClearAll, setBackGroundClearAll] = useState(false);

  const backGroundClear = (isOpen) => {
    setBackGroundClearAll(isOpen);
  };

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
  }, []);

  const [refId, setRefId] = useState("");

  const handlRefElementAutoScroll = (id) => {
    if (id) {
      setRefId(id);
    } else {
      setRefId("");
    }
  };

  return (
    <Fragment>
      {/* <div id="PROGRESS_BAR_ID" className={parkingCircularProgress}>
        <CircularProgress progress={progressValue} label={"OCCUPIED"} />
      </div> */}
      <Box
      // sx={{ flexGrow: 1 }} className={dashboardSection}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={9}
            xl={9}
            className={parkingContainer}
          >
            <Grid container>
              <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                <div className={parkingHeaderStyle}>
                  <div>
                    <Header pageName="FOOD & CONCESSIONS" />
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                className={parkingTabContainer}
              >
                <Tabs
                  initialIndex={0}
                  tabsList={tabsList}
                  handleTabs={handleTabs}
                  dashboardNotificationClassName={customFoodConcessionsTabs}
                  pageName={"foodconcessions"}
                  tabIndex={tabIndexParkingTabs}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                className={dashboardMenu}
              >
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
                <div>
                  <Tooltip tooltipValue={"Camera View"}>
                    <img
                      src={BirdEyeIcon}
                      alt="Camera Icon"
                      className={birdEyeImage}
                      onClick={() => onHandleCamera()}
                    />
                  </Tooltip>
                </div>
              </Grid>
            </Grid>

            <Map
              tilted={false}
              markers={notifications}
              cat={"parking"}
              center={{ lat: 40.75665668168557, lng: -73.84801867258416 }}
              zoom={17}
              mapStyle={true}
              setTabIndex={setTabIndex}
              setCurrentOpenNotification={setCurrentOpenNotification}
              marker={currentOpenNotification}
              backGroundClearAll={backGroundClearAll}
              pageName={"foodConcession"}
              reset={reset}
              handlRefElementAutoScroll={handlRefElementAutoScroll}
              tabIndex={tabIndex}
              setExpandListFocusStopScroll={setExpandListFocusStopScroll}
              setIsMarkerCloseClicked={setIsMarkerCloseClicked}
              dateTimeFormat={dateTimeFormat}
              setSearchIsOpen={setSearchIsOpen}
              actionOnHover={true}
            />
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
            {
              <Analytics
                pageName={"foodConcessions"}
                tabIndexParkingTabs={tabIndexParkingTabs}
                // circularBarValue={circularBarValue}
              />
            }
            {
              <NotificationTab
                notificationList={parkingNotificationList}
                //   searchIsOpen
                //     ? parkingNotificationListOpen
                //     : parkingNotificationList
                // }
                notificationParkingContainer={notificationContainer}
                currentOpenNotification={currentOpenNotification}
                setCurrentOpenNotification={setCurrentOpenNotification}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                tabIndexParkingTabs={tabIndexParkingTabs}
                pageName={"foodConcessions"}
                notificationHandleSearchIsOpen={handleSearchIsOpen}
                refId={refId}
                handlRefElementAutoScroll={handlRefElementAutoScroll}
                setExpandListFocusStopScroll={setExpandListFocusStopScroll}
                expandListFocusStopScroll={expandListFocusStopScroll}
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

export default FoodConcessions;
