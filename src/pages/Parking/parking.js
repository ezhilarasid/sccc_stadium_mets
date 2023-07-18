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
import mapStyles from "./customMapStyles";
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

import mockParkingData from "../../mockdata/parkingData";
import { useMemo } from "react";

const svgMaps = [
  {
    src: null,
    bounds: {
      north: 40.7599484999996,
      south: 40.757372324519515,
      east: -73.84513644863381,
      west: -73.8485160206296,
    },
  },
  {
    // src: null, 40.7599484999996, -73.84513644863381 - 40.757372324519515, -73.8485160206296
    src: lotA,
    style: {},
    bounds: {
      north: 40.7599484999996,
      south: 40.757372324519515,
      east: -73.84513644863381,
      west: -73.8485160206296,
    },
  },
  {
    src: lotB,
    style: {},
    bounds: {
      north: 40.75795520069048,
      south: 40.756029867096494,
      east: -73.8473447520757,
      west: -73.84852864602848,
    },
  },
  {
    src: lotC,
    style: {},
    bounds: {
      north: 40.75748856645323,
      south: 40.755367715671814,
      east: -73.84822004475785,
      west: -73.85077300387391,
    },
  },
  {
    src: lotD,
    style: {},
    bounds: {
      north: 40.756615520767646,
      south: 40.75457627444276,
      east: -73.84674356877026,
      west: -73.84956946789441,
    },
  },
  {
    src: lotE,
    style: {},
    bounds: {
      north: 40.75576533686628,
      south: 40.7536843991558,
      east: -73.8487142564009,
      west: -73.85136123905068,
    },
  },
  {
    src: lotF,
    style: {},
    bounds: {
      north: 40.7555941873855,
      south: 40.75399318091333,
      east: -73.84643560374123,
      west: -73.84912115319528,
    },
  },
  {
    src: lotG,
    style: {},
    bounds: {
      north: 40.75624071671358,
      south: 40.754798080416094,
      east: -73.8433104936988,
      west: -73.84571290860265,
    },
  },
  {
    src: lotH,
    style: {},
    bounds: {
      north: 40.756571705497045,
      south: 40.75592763923297,
      east: -73.84417026633075,
      west: -73.8450822161134,
    },
  },
  {
    src: lotBus,
    style: {},
    bounds: {
      north: 40.757907634428705,
      south: 40.756724696536686,
      east: -73.8495107155989,
      west: -73.8511067531432,
    },
  },
];

const Parking = () => {
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
    customParkingTabs,
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
      // count: notificationsData?.notifications?.events?.totalCount,
      center: {
        lat: 40.75652564632586,
        lng: -73.84726529156934,
      },
      zoom: 17,
    },
    {
      name: "A",
      val: 1,
      center: {
        lat: 40.75872498956425,
        lng: -73.84669837246172,
      },
      zoom: 18,
      // count: notificationsData?.notifications?.operationalAlerts?.totalCount,
    },
    {
      name: "B (VIP)",
      val: 2,
      center: {
        lat: 40.757085943933454,
        lng: -73.84799402671338,
      },
      zoom: 19,
    },
    {
      name: "C",
      val: 3,
      center: {
        lat: 40.75647849321523,
        lng: -73.84946521073367,
      },
      zoom: 18,
    },
    {
      name: "D",
      val: 4,
      center: {
        lat: 40.755683494616434,
        lng: -73.84836480869392,
      },
      zoom: 19,
    },
    {
      name: "E",
      val: 5,
      center: {
        lat: 40.754724645425746,
        lng: -73.85011035909973,
      },
      zoom: 18,
    },
    {
      name: "F",
      val: 6,
      center: {
        lat: 40.75487080320827,
        lng: -73.84778902856594,
      },
      zoom: 18,
    },
    {
      name: "G",
      val: 7,
      center: {
        lat: 40.75551592666422,
        lng: -73.84457560940773,
      },
      zoom: 18,
    },
    {
      name: "H",
      val: 8,
      center: {
        lat: 40.75629680770226,
        lng: -73.84457560390409,
      },
      zoom: 19,
    },
    {
      name: "BUS LOT",
      val: 9,
      center: {
        lat: 40.75738943394255,
        lng: -73.85017708901408,
      },
      zoom: 18,
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
  } = mockParkingData;

  const [tabIndexParkingTabs, setTabIndexParkingTabs] = useState(0);

  const [progressValue, setProgressValue] = useState();
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
      (notification) => notification.category === "parking"
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

  // const [cardList, setCardList] = useState(values[tabIndexParkingTabs]);

  // useEffect(() => {

  //       setCardList(formattedCardListData(tabIndexParkingTabs, values[tabIndexParkingTabs]));

  // }, [tabIndexParkingTabs]);

  const handleTabs = (index) => {
    setTabIndexParkingTabs(index);

    // setSearchIsOpen(false);
    // setSelectedItem(null);
  };

  const [currentOpenNotification, setCurrentOpenNotification] = useState("");

  const handleSearchIsOpen = (data) => {
    setSearchIsOpen(data);
  };

  const circularBarValue = (value) => {
    setProgressValue(value);
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
      <div id="PROGRESS_BAR_ID" className={parkingCircularProgress}>
        <CircularProgress progress={progressValue} label={"OCCUPIED"} />
      </div>
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
                    <Header pageName="PARKING" />
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
                  dashboardNotificationClassName={customParkingTabs}
                  // className="parking"
                  tabIndex={tabIndexParkingTabs}
                  // setTabIndex={setTabIndexNotificationAnalytics}
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
            {useMemo(
              () => (
                <Map
                  tilted={false}
                  markers={notifications}
                  cat={"parking"}
                  mapStyle={true}
                  setTabIndex={setTabIndex}
                  setCurrentOpenNotification={setCurrentOpenNotification}
                  marker={currentOpenNotification}
                  center={tabsList[tabIndexParkingTabs].center}
                  overlays={svgMaps[tabIndexParkingTabs]}
                  zoom={tabsList[tabIndexParkingTabs].zoom}
                  mapType={tabIndexParkingTabs !== 0 ? "roadmap" : undefined}
                  mapStyles={tabIndexParkingTabs !== 0 ? mapStyles : null}
                  hideMarkers={tabIndexParkingTabs !== 0}
                  polygons={[]}
                  // polygons={parkingSlots[tabIndexParkingTabs - 1]?.slots}
                  backGroundClearAll={backGroundClearAll}
                  pageName={"parking"}
                  reset={reset}
                  handlRefElementAutoScroll={handlRefElementAutoScroll}
                  tabIndexParkingTabs={tabIndexParkingTabs}
                  tabIndex={tabIndex}
                  setExpandListFocusStopScroll={setExpandListFocusStopScroll}
                  setIsMarkerCloseClicked={setIsMarkerCloseClicked}
                  dateTimeFormat={dateTimeFormat}
                  setSearchIsOpen={setSearchIsOpen}
                />
              ),
              [
                tabIndexParkingTabs,
                currentOpenNotification,
                reset,
                tabIndex,
                dateTimeFormat,
                backGroundClearAll,
                notifications,
              ]
            )}
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
                pageName={"parking"}
                tabIndexParkingTabs={tabIndexParkingTabs}
                circularBarValue={circularBarValue}
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
                pageName={"parking"}
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

export default Parking;
