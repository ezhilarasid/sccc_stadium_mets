import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import VideoContainer from "components/VideoContainer";
import MenuBar from "components/MenuBar";
import Tooltip from "elements/Tooltip";
import Tabs from "elements/Tabs";
import Header from "elements/Header";
import birdsEyeView from "mockdata/birdsEyeView";
import bottomMenu from "../../assets/Bottom-menu.svg";
import ParkingHeaderImage from "../../assets/parking-heading-icon.svg";
import SecurityHeaderImage from "../../assets/security-heading-icon.svg";
import operationsHeadingIcon from "../../assets/operations-heading-icon.svg";
import BirdEyeIconActive from "../../assets/birdEye_active.svg";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import ResetIcon from "../../assets/Recenter.svg";
import ResetInactiveIcon from "../../assets/resetInactive.svg";
import Select from "elements/Select";
import mockParkingData from "../../mockdata/parkingData";
import mockOperationsData from "../../mockdata/operationsData";

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
  GlassWithBowldIcon,
  FlowerIcon,
  GlassIcon,
  SpoonIcon,
} from "../../assets/Icons";
import useStyles from "./styles";
import { useMemo } from "react";

const Video = () => {
  const {
    videoDashboardSection,
    bottomMenuSection,
    bottomBlackline,
    dashboardLogoImg,
    birdEyeImage,
    displayFlex,
    headerRight,
    headerLeft,
    headerMain,
    headerCenter,
    customParkingTabs,
    headerTextStyle,
    occupancySection,
    firstChild,
    lastChild,
    line,
    parkingTabContainer,
    dashboardMenu,
    videoLeftSide,
    innerOccupancy,
    customOperationsTabs,
    menuIconImg,
    mobileIconImg,
    outdoorsHeaderStyle,
    customFoodConcessionsTabs,
  } = useStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [pageName, setPageName] = useState(
    location?.state === "parking1" || location?.state === "security1"
      ? location?.state.substring(0, location?.state.length - 1)
      : location?.state
  );
  const [headerPageName, setHeaderPageName] = useState();
  const [headerIcon, setHeaderIcon] = useState(ParkingHeaderImage);
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndexParkingTabs, setTabIndexParkingTabs] = useState(0);
  const [tabsList, setTabsList] = useState();

  const [reset, setReset] = useState(false);
  const [occupiedValue, setOccupiedValue] = useState();
  const [availableValue, setAvailableValue] = useState();
  const [percentageValue, setPercentageValue] = useState();
  const [heatMapActive, setHeatMapActive] = useState(false);
  const [isSignalTowerSelected, setIsSignalTowerSelected] = useState(false);

  let maintaineFullScreen = false;

  const { values } =
    pageName === "parking"
      ? mockParkingData
      : pageName === "operations"
      ? mockOperationsData
      : "";

  useEffect(() => {
    if (location && location.state) {
      if (location?.state === "parking") {
        setHeaderIcon(ParkingHeaderImage);
        setHeaderPageName("PARKING");
        setTabsList(tabsListParking);
      }
      if (location?.state === "security") {
        setHeaderIcon(SecurityHeaderImage);
        setHeaderPageName("SECURITY");
      }
      if (location?.state === "operations") {
        setHeaderPageName("OPERATIONS");
        setHeaderIcon(operationsHeadingIcon);
        setTabsList(tabsListOperations);
        setHeatMapActive(Boolean(parseInt(searchParams.get("heatMapActive"))));
      }
      if (location?.state === "outdoors") {
        setHeaderIcon(SecurityHeaderImage);
        setHeaderPageName("OUTDOORS & AMBIENCE");
        setIsSignalTowerSelected(
          Boolean(parseInt(searchParams.get("isSignalTowerSelected")))
        );
      }
      if (location?.state === "foodconcessions") {
        setHeaderIcon(SecurityHeaderImage);
        setHeaderPageName("FOOD & CONCESSIONS");
        setTabsList(tabsListFoodConcessions);
      }
    }
  }, [pageName]);

  const onHandleCamera = () => {
    const obj = {
      pageName,
      maintaineFullScreen,
    };
    if (pageName === "parking") {
      navigate("/parking", { state: pageName });
    }
    if (pageName === "security") {
      navigate("/security", { state: pageName });
    }
    if (pageName === "operations") {
      navigate(`/operations?heatMapActive=${heatMapActive ? 1 : 0}`, {
        state: pageName,
      });
    }
    if (pageName === "outdoors") {
      navigate(
        `/outdoors?isSignalTowerSelected=${isSignalTowerSelected ? 1 : 0}`,
        { state: pageName }
      );
    }
    if (pageName === "foodconcessions") {
      navigate("/foodconcessions", { state: pageName });
    }
  };

  const [tabIndexOperationAlertTabs, setTabIndexOperationAlertTabs] =
    useState(0);

  const tabsListParking = [
    {
      name: "ALL",
      val: 0,
      // count: notificationsData?.notifications?.events?.totalCount,
      center: {
        lat: 40.75622564632586,
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
      zoom: 18.6,
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
      zoom: 18.6,
    },
    {
      name: "G",
      val: 7,
      center: {
        lat: 40.75551592666422,
        lng: -73.84457560940773,
      },
      zoom: 18.6,
    },
    {
      name: "H",
      val: 8,
      center: {
        lat: 40.75629680770226,
        lng: -73.84457560390409,
      },
      zoom: 19.5,
    },
    {
      name: "BUS LOT",
      val: 9,
      center: {
        lat: 40.75738943394255,
        lng: -73.85017708901408,
      },
      zoom: 18.6,
    },
  ];

  const tabsListOperations = [
    {
      name: "ALL",
      val: 0,
      iconName: "ALL",
    },
    {
      name: tabIndexOperationAlertTabs !== 1 ? Restaurants : RestaurantsOrange,
      val: 1,
      iconName: "Restaurants",
    },
    {
      name: tabIndexOperationAlertTabs !== 2 ? Restrooms : RestroomsOrange,
      val: 2,
      iconName: "Restrooms",
    },
    {
      name:
        tabIndexOperationAlertTabs !== 3 ? EntranceExit : EntranceExitOrange,
      val: 3,
      iconName: "Entrance and Exit",
    },
    {
      name: tabIndexOperationAlertTabs !== 4 ? Lounge : LoungeOrange,
      val: 4,
      iconName: "Lounge",
    },
    {
      name:
        tabIndexOperationAlertTabs !== 5
          ? VendingMachine
          : VendingMachineOrange,
      val: 5,
      iconName: "VendingMachine",
    },
  ];

  const tabsListFoodConcessions = [
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

  const handleTabs = (index) => {
    setTabIndexParkingTabs(index);
    setTabIndex(index);
    // setSearchIsOpen(false);
    // setSelectedItem(null);
  };

  const selectList = [
    { label: "ALL", value: "ALL" },
    { label: "PREGAME", value: "PREGAME" },
    { label: "IN GAME", value: "IN GAME" },
    { label: "POST GAME", value: "POST GAME" },
    { label: "EVENTS", value: "EVENTS" },
    { label: "OUTDOORS", value: "OUTDOORS" },
    { label: "CONCESSIONS", value: "CONCESSIONS" },
    { label: "TAILGATE AREA", value: "TAILGATE AREA" },
    { label: "VIP", value: "VIP" },
  ];

  const [selectIndex, setSelectIndex] = useState(0);

  const handleSelect = (val, graph, index) => {
    setSelectIndex(index);
  };

  const birdsEyeViewOption = birdsEyeView.map((val, index) => {
    return { label: val.title, value: val.title, id: index };
  });

  const handleSelectTabs = (index) => {
    // setHeatMapActive(false);
    console.log("index", index);
    setTabIndexOperationAlertTabs(index);
    setTabIndex(index);
  };

  useEffect(() => {
    if (pageName === "parking" || pageName === "operations") {
      setAvailableValue(values[tabIndex].available);
      setOccupiedValue(values[tabIndex].occupied);
      setPercentageValue(values[tabIndex].occupiedPercentage);
    }
  }, [tabIndex]);

  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );

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

  const backGroundClear = () => {};

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} className={videoDashboardSection}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={9}
            md={9}
            lg={9}
            xl={9}
            className={videoLeftSide}
          >
            <Header pageName={headerPageName} />
            {pageName === "parking" ? (
              <div className={parkingTabContainer}>
                <Tabs
                  initialIndex={0}
                  tabsList={tabsList}
                  handleTabs={handleTabs}
                  dashboardNotificationClassName={customParkingTabs}
                  // className="parking"
                  tabIndex={tabIndexParkingTabs}
                  // setTabIndex={setTabIndexNotificationAnalytics}
                />
              </div>
            ) : pageName === "operations" ? (
              <div className={parkingTabContainer}>
                <Tabs
                  initialIndex={0}
                  tabsList={tabsList}
                  handleTabs={handleSelectTabs}
                  dashboardNotificationClassName={customOperationsTabs}
                  tabIndex={tabIndexOperationAlertTabs}
                  pageName={"operations"}
                />
              </div>
            ) : pageName === "foodconcessions" ? (
              <div className={parkingTabContainer}>
                <Tabs
                  initialIndex={0}
                  tabsList={tabsList}
                  handleTabs={handleTabs}
                  dashboardNotificationClassName={customFoodConcessionsTabs}
                  pageName={"foodconcessions"}
                  tabIndex={tabIndexParkingTabs}
                />
              </div>
            ) : null}
            <div className={dashboardMenu}>
              {useMemo(
                () =>
                  pageName === "security" ? (
                    <div className={headerCenter}>
                      <Select
                        selectList={birdsEyeViewOption}
                        handleSelect={handleSelect}
                        customWidth={"280px"}
                        customHeight={"46px"}
                        pageName={pageName}
                      />
                    </div>
                  ) : null,
                [pageName]
              )}

              <Tooltip
                tooltipValue={
                  !isFullScreen ? "Exit Full Screen" : "Full Screen"
                }
              >
                <div>
                  <img
                    className={mobileIconImg}
                    src={!isFullScreen ? ExitFullScreen : FullScreen}
                    onClick={fullScreenView}
                  />
                </div>
              </Tooltip>
              <div>
                <Tooltip tooltipValue={"Camera View"}>
                  <img
                    src={BirdEyeIconActive}
                    alt="Camera Icon"
                    className={birdEyeImage}
                    onClick={() => onHandleCamera()}
                  />
                </Tooltip>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <div
              className={
                pageName === "outdoors" || pageName === "foodconcessions"
                  ? outdoorsHeaderStyle
                  : headerTextStyle
              }
            >
              {pageName === "parking" || pageName === "operations" ? (
                <div className={occupancySection}>
                  <p>OCCUPANCY</p>
                  <div className={innerOccupancy}>
                    <p className={firstChild}>
                      <span>{occupiedValue}</span> <span>/</span>{" "}
                      <span>{availableValue}</span>
                    </p>
                    <p className={lastChild}>
                      <span>{percentageValue}</span> <span>%</span>{" "}
                      <span>FULL</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className={occupancySection}>
                  <p>SECURITY ALERTS</p>
                  <div className={innerOccupancy}>
                    <p className={firstChild}>
                      <span>54</span> <span className={line}></span>
                    </p>
                    <p className={lastChild}>
                      <span>50</span> <span>%</span> <span>ISSUE FIXED</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
        <Grid container className={""}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <VideoContainer
              pageName={pageName}
              selectIndex={selectIndex}
              tabIndexOperationAlertTabs={
                pageName === "operations"
                  ? tabIndexOperationAlertTabs
                  : tabIndexParkingTabs
              }
            />
          </Grid>
        </Grid>
        <div className={bottomBlackline}></div>
        <MenuBar backGroundClear={backGroundClear} />
      </Box>
    </Fragment>
  );
};

export default Video;
