import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Tooltip from "elements/Tooltip";
import mobileIcon from "../../assets/mobile-icon.svg";
import menuIcon from "../../assets/menu-icon-left.svg";
import ResetIcon from "../../assets/Recenter.svg";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import mobileActiveIcon from "../../assets/mobile-active-icon.svg";
import menuActiveIcon from "../../assets/menu-active-icon.svg";
import NotificationTab from "../../elements/NotificationTab/notificationTab";
import LabelsContainer from "../../components/LabelsContainer/labelsContainer";
import { getCardData } from "../../redux/actions/cardAction";
import useStyles from "./styles";
import mockNotifications from "mockdata/notifications";
import MenuBar from "components/MenuBar";
import Header from "elements/Header";
import Map from "elements/Map";

const DashBoard = () => {
  const {
    mobileIconImg,
    menuIconImg,
    dashboardMenu,
    mobileMenuSection,
    dashboardSection,
    bottomBlackline,
    labelCardSection,
    dashboardNotificationList,
    dashboardNotificationList2,
    fullScreenIcon,
    resetIcon,
  } = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardData());
  }, []);

  const cardData = useSelector((state) => state.cardData.cardData.labels);

  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cards, setCards] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [currentOpenNotification, setCurrentOpenNotification] = useState("");
  const [isMarkerCloseClicked, setIsMarkerCloseClicked] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [backGroundClearAll, setBackGroundClearAll] = useState(false);
  const [reset, setReset] = useState(false);
  const [resetCards, setResetCards] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );
  const [expandListFocusStopScroll, setExpandListFocusStopScroll] =
    useState(false);
  const [dateTimeFormat, setDateTimeFormat] = useState("");

  useEffect(() => {
    if (searchIsOpen === false) {
      setExpandListFocusStopScroll(false);
      setIsMarkerCloseClicked(false);
    }
  }, [searchIsOpen]);

  const handleMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  const handleClick = () => {
    setShow(!show);
    setCards(false);
    setSearchIsOpen(false);
  };

  const fullScreenView = () => {
    if (document.fullscreenElement) {
      // setIsFullScreen(true);

      document.exitFullscreen();
    } else {
      // setIsFullScreen(false);

      document.body.requestFullscreen();
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", (event) => {
      setIsFullScreen((prev) => !prev);
    });
  }, []);

  const handleCardClick = () => {
    setCards(!cards);
    setShow(false);

    setResetCards(!resetCards);
  };

  useEffect(() => {
    const { events, incidents, operationalAlerts } =
      mockNotifications.notifications;
    const combinedNotifications = [];

    events?.list?.forEach((event, index) => {
      if (event.category !== "electricity")
        combinedNotifications.push({ ...event, index, type: "events" });
    });

    incidents?.list?.forEach((incident, index) => {
      if (incident.category !== "electricity")
        combinedNotifications.push({ ...incident, index, type: "incidents" });
    });

    operationalAlerts?.list?.forEach((alert, index) => {
      if (alert.category !== "electricity")
        combinedNotifications.push({ ...alert, index, type: "opAlerts" });
    });

    setNotifications(combinedNotifications);
  }, []);

  // const handleSearchIsOpen = (data) => {
  //   setSearchIsOpen(data);
  // };

  const [refId, setRefId] = useState("");

  const handlRefElementAutoScroll = (id) => {
    if (id) {
      setRefId(id);
    } else {
      setRefId("");
    }
  };

  const backGroundClear = (isOpen) => {
    setBackGroundClearAll(isOpen);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }} className={dashboardSection}>
        <Header pageName="SMART COMMAND CONTROL CENTER" />

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className={dashboardMenu}
        >
          <div className={mobileMenuSection}>
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
              tooltipValue={!isFullScreen ? "Exit Full Screen" : "Full Screen"}
            >
              <img
                className={mobileIconImg}
                src={!isFullScreen ? ExitFullScreen : FullScreen}
                onClick={fullScreenView}
              />
            </Tooltip>
            <Tooltip tooltipValue={"Card View"}>
              <img
                className={menuIconImg}
                src={cards === true ? mobileActiveIcon : menuIcon}
                onClick={handleCardClick}
              />
            </Tooltip>
            <Tooltip tooltipValue={"Notification List"}>
              <img
                className={mobileIconImg}
                src={show === true ? menuActiveIcon : mobileIcon}
                onClick={handleClick}
              />
            </Tooltip>
          </div>
        </Grid>
        <Grid container className={""}>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
            <Map
              setNotifications={setNotifications}
              tilted={true}
              markers={notifications}
              marker={currentOpenNotification}
              setCurrentOpenNotification={setCurrentOpenNotification}
              cat={"parking"}
              setTabIndex={setTabIndex}
              openNotifications={setShow}
              openCards={setCards}
              handlRefElementAutoScroll={handlRefElementAutoScroll}
              backGroundClearAll={backGroundClearAll}
              reset={reset}
              resetCards={resetCards}
              pageName={"dashBoard"}
              show={show}
              tabIndex={tabIndex}
              setExpandListFocusStopScroll={setExpandListFocusStopScroll}
              setIsMarkerCloseClicked={setIsMarkerCloseClicked}
              dateTimeFormat={dateTimeFormat}
              setSearchIsOpen={setSearchIsOpen}
              zoom={18}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className={""}>
            {show && (
              <NotificationTab
                notificationList={dashboardNotificationList}
                //   searchIsOpen
                //     ? dashboardNotificationList2
                //     : dashboardNotificationList
                // }
                clickHandler={menuOpen}
                currentOpenNotification={currentOpenNotification}
                setCurrentOpenNotification={setCurrentOpenNotification}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                pageName={"dashboard"}
                // notificationHandleSearchIsOpen={handleSearchIsOpen}
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
            )}
          </Grid>
        </Grid>
        <Grid container className={labelCardSection}>
          <Grid item xs={12}>
            {cards && <LabelsContainer cardData={cardData} />}
          </Grid>
        </Grid>
        <div className={bottomBlackline}></div>
        <MenuBar backGroundClear={backGroundClear} />
      </Box>
    </Fragment>
  );
};

export default DashBoard;
