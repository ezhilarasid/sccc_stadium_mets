import React, { Fragment, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import {
  TransformWrapper,
  TransformComponent,
} from "@pronestor/react-zoom-pan-pinch";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Analytics from "../../components/Analytics";
import MenuBar from "components/MenuBar";
import NotificationTab from "../../elements/NotificationTab/notificationTab";
import Tabs from "elements/Tabs";
import Header from "elements/Header";
import Tooltip from "elements/Tooltip";
import BirdEyeIcon from "../../assets/birdEye.svg";
import ZoomIcon from "../../assets/zoom-icon.svg";
import operationsHeadingIcon from "../../assets/operations-heading-icon.svg";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ResetIcon from "../../assets/Recenter.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import mockNotifications from "mockdata/operationsData";
import markerImages from "assets/Icons/marker-icons";
import operationsFloorMap from "assets/operationsFloorMap.svg";
import {
  Restaurants,
  RestaurantsOrange,
  Restrooms,
  RestroomsOrange,
  EntranceExit,
  EntranceExitOrange,
  Lounge,
  LoungeOrange,
  VendingMachine,
  VendingMachineOrange,
} from "../../assets/Icons";
import operationsData from "mockdata/operationsData";
import heatMapIcons from "assets/heatMapIcons";
import Map from "elements/Map/HeatMap/map";
import Slider from "elements/Slider";
import useStyles from "./styles";
import mapStyles from "./customMapStyles";

const initialSize = {
  width: 3524,
  height: 2928,
};

const Operations = () => {
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
    customOperationsTabs,
    parkingNotificationClassName,
    parkingContainer,
    parkingCircularProgress,
    operationNotificationList,
    operationNotificationListOpen,
    mapSvgImage,
    notificationBg,
    birdEyeViewSection,
    mapContent,
    zoomIconStyle,
    border,
    zoomButtonClass,
    zoomButtonImgClass,
    marker,
    mobileIconImg,
    menuIconImg,
    heatMapList,
    parkingTabContainer,
    dashboardMenu,
  } = useStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [showSlider, setShowSlider] = useState(false);
  const transformComponentRef = useRef(null);
  const floorPlan = useRef(null);
  const [scale, setScale] = useState(1);
  const [pageName, setPageName] = useState(location?.state || "operations");
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const [currentOpenNotification, setCurrentOpenNotification] = useState("");
  const [reset, setReset] = useState(false);
  const [heatMapActive, setHeatMapActive] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );
  const [markers, setMarkers] = useState([]);
  const [tabIndexOperationAlertTabs, setTabIndexOperationAlertTabs] =
    useState(0);
  const [popperOpen, popperSetOpen] = useState(false);
  const [currentMarker, setCurrentMarker] = useState(marker);
  const [backGroundClearAll, setBackGroundClearAll] = useState(false);
  const [refId, setRefId] = useState("");
  const [expandListFocusStopScroll, setExpandListFocusStopScroll] =
    useState(false);
  const [isMarkerCloseClicked, setIsMarkerCloseClicked] = useState(false);
  const [dateTimeFormat, setDateTimeFormat] = useState("");

  const onZoomIconClick = () => {
    setShowSlider(true);
  };

  useEffect(() => {
    if (searchIsOpen === false) {
      setExpandListFocusStopScroll(false);
      setIsMarkerCloseClicked(false);
    }
  }, [searchIsOpen]);

  const tabsList = [
    {
      name: "ALL",
      val: 0,
      iconName: "ALL",
    },
    {
      name: tabIndexOperationAlertTabs !== 1 ? Restaurants : Restaurants,
      val: 1,
      iconName: "Restaurants",
    },
    {
      name: tabIndexOperationAlertTabs !== 2 ? Restrooms : Restrooms,
      val: 2,
      iconName: "Restrooms",
    },
    {
      name: tabIndexOperationAlertTabs !== 3 ? EntranceExit : EntranceExit,
      val: 3,
      iconName: "Entrance and Exit",
    },
    {
      name: tabIndexOperationAlertTabs !== 4 ? Lounge : Lounge,
      val: 4,
      iconName: "Lounge",
    },
    {
      name: tabIndexOperationAlertTabs !== 5 ? VendingMachine : VendingMachine,
      val: 5,
      iconName: "VendingMachine",
    },
  ];

  useEffect(() => {
    const notificationsList =
      operationsData?.values[tabIndexOperationAlertTabs]?.notifications;
    const combinedNotifications = [];

    notificationsList?.events?.list?.forEach((event, index) => {
      combinedNotifications.push({ ...event, index, type: "events" });
    });

    notificationsList?.incidents?.list?.forEach((incident, index) => {
      combinedNotifications.push({ ...incident, index, type: "incidents" });
    });

    notificationsList?.operationalAlerts?.list?.forEach((alert, index) => {
      combinedNotifications.push({ ...alert, index, type: "opAlerts" });
    });

    setMarkers(combinedNotifications);
  }, [tabIndexOperationAlertTabs]);

  const onHandleCamera = () => {
    setHeatMapActive(false);
    navigate(`/video/${pageName}?heatMapActive=${heatMapActive ? 1 : 0}`, {
      state: pageName,
    });
  };

  const handleSearchIsOpen = (data) => {
    setSearchIsOpen(data);
  };

  const handleSelectTabs = (index) => {
    setTabIndexOperationAlertTabs(index);
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

    setHeatMapActive(Boolean(parseInt(searchParams.get("heatMapActive"))));
  }, []);

  const handleHeatMap = () => {
    setHeatMapActive(!heatMapActive);
  };

  const backGroundClear = () => {};

  const handlRefElementAutoScroll = (id) => {
    if (id) {
      setRefId(id);
    } else {
      setRefId("");
    }
  };

  return (
    <Fragment>
      <Box>
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
                    <Header pageName="OPERATIONS" />
                  </div>
                  {heatMapActive && (
                    <div className={heatMapList}>
                      <img src={heatMapIcons?.heatMapList} width={"120px"} />
                    </div>
                  )}
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={7}
                md={7}
                lg={7}
                xl={7}
                className={parkingTabContainer}
              >
                <div>
                  <Tabs
                    initialIndex={0}
                    tabsList={tabsList}
                    handleTabs={handleSelectTabs}
                    dashboardNotificationClassName={customOperationsTabs}
                    tabIndex={tabIndexOperationAlertTabs}
                    pageName={"operations"}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className={dashboardMenu}
              >
                <Tooltip tooltipValue={"Reset"}>
                  <img
                    className={menuIconImg}
                    src={ResetIcon}
                    onClick={() => {
                      setReset(!reset);
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
                <Tooltip tooltipValue="Heat Map">
                  <img
                    className={mobileIconImg}
                    src={
                      heatMapActive
                        ? heatMapIcons?.heatMapActiveIcon
                        : heatMapIcons?.heatMapIcon
                    }
                    onClick={handleHeatMap}
                  />
                </Tooltip>
                <Tooltip tooltipValue="Camera View">
                  <img
                    src={BirdEyeIcon}
                    alt="Camera Icon"
                    className={birdEyeImage}
                    onClick={() => onHandleCamera()}
                  />
                </Tooltip>
              </Grid>
            </Grid>
            <Map
              markers={markers}
              mapStyles={mapStyles}
              tabIndexOperationAlertTabs={tabIndexOperationAlertTabs}
              heatMapActive={heatMapActive}
              setCurrentOpenNotification={setCurrentOpenNotification}
              marker={currentOpenNotification}
              backGroundClearAll={backGroundClearAll}
              pageName={"operations"}
              reset={reset}
              handlRefElementAutoScroll={handlRefElementAutoScroll}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
              setExpandListFocusStopScroll={setExpandListFocusStopScroll}
              setIsMarkerCloseClicked={setIsMarkerCloseClicked}
              center={{ lat: 40.75657053763286, lng: -73.84837666160506 }}
              dateTimeFormat={dateTimeFormat}
              zoom={16.8}
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
                pageName={"operations"}
                tabIndexParkingTabs={tabIndexOperationAlertTabs}
              />
            }
            {
              <NotificationTab
                notificationList={operationNotificationList}
                notificationParkingContainer={notificationContainer}
                currentOpenNotification={currentOpenNotification}
                setCurrentOpenNotification={setCurrentOpenNotification}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                tabIndexParkingTabs={tabIndexOperationAlertTabs}
                pageName={"operations"}
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
        <MenuBar pageName={"operations"} backGroundClear={backGroundClear} />
      </Box>
    </Fragment>
  );
};

export default Operations;
