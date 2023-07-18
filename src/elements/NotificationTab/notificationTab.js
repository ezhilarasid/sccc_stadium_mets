import React, { useState, useEffect, useRef, createRef } from "react";
import { Grid } from "@mui/material";
import Tabs from "../Tabs";
import NotificationList from "../NotificationList";
import SearchIcon from "../../assets/searchIcon.svg";
import InfoDialog from "../InfoDialog/infoDialog";
import CloseIcon from "../../assets/closeIcon.svg";
import notificationsData from "../../mockdata/notifications";
import notificationSecurityData from "../../mockdata/securityData";
import notificationOutdoorsData from "../../mockdata/outdoorsAmbience";
import mockParkingData from "../../mockdata/parkingData";
import mockOperationsdata from "../../mockdata/operationsData";
import mockFoodConcessionsData from "../../mockdata/foodConcessions";
import { formattedCardListData } from "../../utils/utils";
import SearchBox from "../SearchBox";
import useStyles from "./styles";

const NotificationTab = (props) => {
  const {
    notificationContainer,
    notificationHeading,
    notificationTabHeading,
    customNotificationTabs,
    notificationSearchIcon,
    notificationSearchHeading,
    searchIcon,
    searchClass,
    notificationListReduce,
  } = useStyles();

  const {
    notificationParkingContainer,
    setCurrentOpenNotification,
    currentOpenNotification,
    tabIndex,
    setTabIndex,
    clickHandler,
    pageName,
    notificationList,
    tabIndexParkingTabs,
    notificationHandleSearchIsOpen,
    refId,
    handlRefElementAutoScroll,
    setExpandListFocusStopScroll,
    expandListFocusStopScroll,
    isMarkerCloseClicked,
    setIsMarkerCloseClicked,
    setDateTimeFormat,
    setSearchIsOpen,
    searchIsOpen,
  } = props;

  const securityNotificationData = notificationSecurityData?.values[0];
  // const outdoorsNotificationData = notificationOutdoorsData?.notifications;
  const [currentPage, setCurrentPage] = useState(pageName);
  const [popperOpen, popperSetOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(null);

  const [type, setType] = useState(null);
  const [selectedRefId, setSelectedRefId] = useState("");
  const [notificationTimeStamp, setNotificationTimeStamp] = useState();

  useEffect(() => {
    if (tabIndexParkingTabs === 0 || tabIndexParkingTabs) {
      setTabIndex(1);
      setSearchIsOpen(false);
      setSelectedItem(null);
      setShowDialog(false);
      setCurrentOpenNotification("");
      handlRefElementAutoScroll("");
      setExpandListFocusStopScroll(false);
      setIsMarkerCloseClicked(false);
    }
  }, [tabIndexParkingTabs]);

  useEffect(() => {
    setCurrentPage(pageName);
  }, [pageName]);

  const { values } =
    currentPage === "parking"
      ? mockParkingData
      : currentPage === "operations"
      ? mockOperationsdata
      : currentPage === "foodConcessions"
      ? mockFoodConcessionsData
      : "";

  const [cardList, setCardList] = useState(
    currentPage && currentPage === "parking"
      ? formattedCardListData(
          tabIndexParkingTabs,
          values[tabIndexParkingTabs],
          "parking"
        )
      : currentPage && currentPage === "security"
      ? formattedCardListData(tabIndex, securityNotificationData, "security")
      : currentPage && currentPage === "operations"
      ? formattedCardListData(
          tabIndex,
          values[tabIndexParkingTabs],
          "operations"
        )
      : currentPage && currentPage === "outdoors"
      ? formattedCardListData(
          tabIndex,
          notificationOutdoorsData,
          "outdoorAmbience"
        )
      : currentPage && currentPage === "foodConcessions"
      ? formattedCardListData(
          tabIndex,
          values[tabIndexParkingTabs],
          "foodConcessions"
        )
      : formattedCardListData(tabIndex, notificationsData)
  );

  const [newSearchValue, setNewSearchValue] = useState(cardList);

  const tabsList = [
    {
      name: "EVENTS",
      val: 0,
      count:
        currentPage && currentPage === "parking"
          ? String(
              values[tabIndexParkingTabs]?.notifications?.events?.list?.filter(
                (item) => item?.category === "parking"
              )?.length
            )
          : currentPage && currentPage === "security"
          ? String(
              securityNotificationData?.notifications?.events?.list?.filter(
                (item) => item?.category === "security"
              )?.length
            )
          : currentPage && currentPage === "operations"
          ? String(
              values[tabIndexParkingTabs]?.notifications?.events?.list?.filter(
                (item) => item?.category === "operations"
              )?.length
            )
          : currentPage && currentPage === "outdoors"
          ? notificationOutdoorsData?.notifications?.events?.totalCount
          : currentPage && currentPage === "foodConcessions"
          ? values[tabIndexParkingTabs]?.notifications?.events?.totalCount
          : notificationsData?.notifications?.events?.totalCount,
    },
    {
      name: "INCIDENTS",
      val: 1,
      count:
        currentPage && currentPage === "parking"
          ? String(
              values[
                tabIndexParkingTabs
              ]?.notifications?.incidents?.list?.filter(
                (item) => item?.category === "parking"
              )?.length
            )
          : currentPage && currentPage === "security"
          ? String(
              securityNotificationData?.notifications?.incidents?.list?.filter(
                (item) => item?.category === "security"
              )?.length
            )
          : currentPage && currentPage === "operations"
          ? String(
              values[
                tabIndexParkingTabs
              ]?.notifications?.incidents?.list?.filter(
                (item) => item?.category === "operations"
              )?.length
            )
          : currentPage && currentPage === "outdoors"
          ? notificationOutdoorsData?.notifications?.incidents?.totalCount
          : currentPage && currentPage === "foodConcessions"
          ? values[tabIndexParkingTabs]?.notifications?.incidents?.totalCount
          : notificationsData?.notifications?.incidents?.totalCount,
    },
    {
      name: "OPR.ALERTS",
      val: 2,
      count:
        currentPage && currentPage === "parking"
          ? String(
              values[
                tabIndexParkingTabs
              ]?.notifications?.operationalAlerts?.list?.filter(
                (item) => item?.category === "parking"
              )?.length
            )
          : currentPage && currentPage === "security"
          ? String(
              securityNotificationData?.notifications?.operationalAlerts?.list?.filter(
                (item) => item?.category === "security"
              )?.length
            )
          : currentPage && currentPage === "operations"
          ? String(
              values[
                tabIndexParkingTabs
              ]?.notifications?.operationalAlerts?.list?.filter(
                (item) => item?.category === "operations"
              )?.length
            )
          : currentPage && currentPage === "outdoors"
          ? notificationOutdoorsData?.notifications?.operationalAlerts
              ?.totalCount
          : currentPage && currentPage === "foodConcessions"
          ? values[tabIndexParkingTabs]?.notifications?.operationalAlerts
              ?.totalCount
          : notificationsData?.notifications?.operationalAlerts?.totalCount,
    },
  ];

  useEffect(() => {
    if (tabIndex === 1) {
      switch (currentPage) {
        case "parking":
          setCardList(
            formattedCardListData(
              tabIndex,
              values[tabIndexParkingTabs],
              "parking"
            )
          );
          break;
        case "security":
          setCardList(
            formattedCardListData(
              tabIndex,
              securityNotificationData,
              "security"
            )
          );
          break;
        case "dashboard":
          setCardList(formattedCardListData(tabIndex, notificationsData));
          break;
        case "operations":
          setCardList(
            formattedCardListData(
              tabIndex,
              values[tabIndexParkingTabs],
              "operations"
            )
          );
          break;
        case "outdoors":
          setCardList(
            formattedCardListData(
              tabIndex,
              notificationOutdoorsData,
              "outdoorAmbience"
            )
          );
          break;
        case "foodConcessions":
          setCardList(
            formattedCardListData(
              tabIndex,
              values[tabIndexParkingTabs],
              "foodConcessions"
            )
          );
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    popperSetOpen(false);
  }, [currentOpenNotification]);

  useEffect(() => {
    // if (currentPage && currentPage === "outdoors") {
    //   switch (tabIndex) {
    //     case 0:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           notificationOutdoorsData,
    //           "outdoorAmbience"
    //         )
    //       );
    //       break;
    //     case 1:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           notificationOutdoorsData,
    //           "outdoorAmbience"
    //         )
    //       );
    //       break;
    //     case 2:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           notificationOutdoorsData,
    //           "outdoorAmbience"
    //         )
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // }
    // if (currentPage && currentPage === "security") {
    //   switch (tabIndex) {
    //     case 0:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           securityNotificationData,
    //           "security"
    //         )
    //       );
    //       break;
    //     case 1:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           securityNotificationData,
    //           "security"
    //         )
    //       );
    //       break;
    //     case 2:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           securityNotificationData,
    //           "security"
    //         )
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // }
    // if (currentPage && currentPage === "operations") {
    //   switch (tabIndex) {
    //     case 0:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           values[tabIndexParkingTabs],
    //           "operations"
    //         )
    //       );
    //       break;
    //     case 1:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           values[tabIndexParkingTabs],
    //           "operations"
    //         )
    //       );
    //       break;
    //     case 2:
    //       setCardList(
    //         formattedCardListData(
    //           tabIndex,
    //           values[tabIndexParkingTabs],
    //           "operations"
    //         )
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // }
    // if (currentPage && currentPage === "parking") {
    //   setCardList(
    //     formattedCardListData(tabIndex, values[tabIndexParkingTabs], "parking")
    //   );
    // }
    //  if (currentPage && currentPage === "dashboard") {
    //   switch (tabIndex) {
    //     case 0:
    //       setCardList(formattedCardListData(tabIndex, notificationsData));
    //       break;
    //     case 1:
    //       setCardList(formattedCardListData(tabIndex, notificationsData));
    //       break;
    //     case 2:
    //       setCardList(formattedCardListData(tabIndex, notificationsData));
    //       break;
    //     default:
    //       break;
    //   }
    // }
    if (currentPage) {
      switch (currentPage) {
        case "parking":
          setCardList(
            formattedCardListData(
              tabIndex,
              values[tabIndexParkingTabs],
              "parking"
            )
          );
          break;
        case "security":
          setCardList(
            formattedCardListData(
              tabIndex,
              securityNotificationData,
              "security"
            )
          );
          break;
        case "dashboard":
          setCardList(formattedCardListData(tabIndex, notificationsData));
          break;
        case "operations":
          setCardList(
            formattedCardListData(
              tabIndex,
              values[tabIndexParkingTabs],
              "operations"
            )
          );
          break;
        case "outdoors":
          setCardList(
            formattedCardListData(
              tabIndex,
              notificationOutdoorsData,
              "outdoorAmbience"
            )
          );
          break;
        case "foodConcessions":
          setCardList(
            formattedCardListData(
              tabIndex,
              values[tabIndexParkingTabs],
              "foodConcessions"
            )
          );
          break;
        default:
          break;
      }
    }
  }, [tabIndex, tabIndexParkingTabs, currentPage]);

  const refs =
    newSearchValue && newSearchValue.length > 0
      ? newSearchValue.reduce((acc, value) => {
          acc[value.id] = React.createRef();
          return acc;
        }, {})
      : "";

  useEffect(() => {
    if ((refId || selectedRefId) && refs) {
      setTimeout(() => {
        refs[refId ? refId : selectedRefId]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  }, [refId, refs, selectedRefId]);

  const handleTabs = (index) => {
    setTabIndex(index);
    setSearchIsOpen(false);
    setSelectedItem(null);
    setShowDialog(false);
    setCurrentOpenNotification("");
    handlRefElementAutoScroll("");
    setExpandListFocusStopScroll(false);
    setIsMarkerCloseClicked(false);
    setSelectedRefId("");
  };

  useEffect(() => {
    if (
      refId === "" &&
      expandListFocusStopScroll === false &&
      isMarkerCloseClicked === false
    ) {
      if (
        tabIndex === 0 &&
        (refs["evt-01"] ||
          refs[securityNotificationData?.notifications?.events?.list[0]?.id] ||
          (currentPage === "operations" &&
            refs[
              values[tabIndexParkingTabs]?.notifications?.events?.list[0]?.id
            ]))
      ) {
        refs[
          currentPage === "security"
            ? securityNotificationData?.notifications?.events?.list[0]?.id
            : currentPage === "operations"
            ? values[tabIndexParkingTabs]?.notifications?.events?.list[0]?.id
            : "evt-01"
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if (
        (tabIndex === 1 && refs["ict-01"]) ||
        (currentPage === "operations" &&
          refs[
            values[tabIndexParkingTabs]?.notifications?.incidents?.list[0]?.id
          ])
      ) {
        refs[
          currentPage === "operations"
            ? values[tabIndexParkingTabs]?.notifications?.incidents?.list[0]?.id
            : "ict-01"
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if (
        (tabIndex === 2 && refs["opr-01"]) ||
        (currentPage === "operations" &&
          refs[
            values[tabIndexParkingTabs]?.notifications?.operationalAlerts
              ?.list[0]?.id
          ])
      ) {
        setTimeout(() => {
          refs[
            currentPage === "operations"
              ? values[tabIndexParkingTabs]?.notifications?.operationalAlerts
                  ?.list[0]?.id
              : "opr-01"
          ]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 300);
      }
    }
  }, [tabIndex, refs, expandListFocusStopScroll, refId, isMarkerCloseClicked]);

  const handleExpandListItem = (index, id, dateTimeFormat) => {
    if (currentOpenNotification === id) {
      setSelectedItem(null);
      setShowDialog(false);
      setCurrentOpenNotification("");
    } else {
      setSelectedItem(index);
      setCurrentOpenNotification(id);
    }
    popperSetOpen(false);
    setExpandListFocusStopScroll(true);
    handlRefElementAutoScroll("");
    setSelectedRefId(id);
  };

  const handlDateTimeFormat = (dateTimeFormat) => {
    setNotificationTimeStamp(dateTimeFormat);
    if (dateTimeFormat) {
      setDateTimeFormat(dateTimeFormat);
    }
  };

  const handlePreviewClick = (event, data) => {
    setShowDialog(true);
    setSelectedListItem(data);
    setType("PREVIEW");
    event.stopPropagation();
  };

  const handleVideoClick = (event, data) => {
    setShowDialog(true);
    setSelectedListItem(data);
    setType("VIDEO");
    event.stopPropagation();
  };

  const handleClose = () => {
    setShowDialog(false);
    setType(null);
  };

  useEffect(() => {
    setNewSearchValue(cardList);
  }, [cardList]);

  useEffect(() => {
    if (searchIsOpen === false) {
      setNewSearchValue(cardList);

      setSelectedItem(null);
      setShowDialog(false);
    }
  }, [searchIsOpen]);

  const handleSearchIsOpen = () => {
    setSearchIsOpen(!searchIsOpen);
    setNewSearchValue(cardList);
    // notificationHandleSearchIsOpen(!searchIsOpen);
    setSelectedItem(null);
    setShowDialog(false);
    setCurrentOpenNotification("");
    handlRefElementAutoScroll("");
    setExpandListFocusStopScroll(false);
    setIsMarkerCloseClicked(false);
    setSelectedRefId("");
  };

  const handleSearch = (searchValue) => {
    let filteredData =
      cardList &&
      cardList.filter((notification) => {
        let timeStamp = new Date(cardList.timeStamp)
          .toLocaleString()
          .split(",");
        if (
          // notification?.category === "foodConcessions" ||
          notification?.category === "outdoorAmbience"
        ) {
          return (
            notification?.title
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            notification?.subTitle1
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            notification?.subTitle2
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            timeStamp[0]?.includes(searchValue)
          );
        } else if (
          notification?.category === "foodConcessions"
          // notification?.category === "outdoorAmbience"
        ) {
          return (
            notification?.title
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            notification?.restauratName
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            timeStamp[0]?.includes(searchValue)
          );
        } else {
          return (
            notification.title
              .toLowerCase()
              .includes(searchValue?.toLowerCase()) ||
            timeStamp[0]?.includes(searchValue) ||
            notification?.parkingArea
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        }
      });
    setNewSearchValue(filteredData);
    setSelectedItem(null);
    setShowDialog(false);
    setCurrentOpenNotification("");
    handlRefElementAutoScroll("");
    setExpandListFocusStopScroll(false);
    setIsMarkerCloseClicked(false);
    if (searchValue === "") {
      setSelectedRefId("");
    }
  };

  const handleClickButton = (event) => {
    popperSetOpen((prevOpen) => !prevOpen);
    event.stopPropagation();
  };

  const handleClickAway = (event) => {
    popperSetOpen(false);
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={
          notificationParkingContainer
            ? notificationParkingContainer
            : notificationContainer
        }
      >
        <Grid container>
          {searchIsOpen === false ? (
            <Grid
              item
              xs={currentPage === "dashboard" ? 10 : 10.5}
              className={notificationHeading}
            >
              Notifications
            </Grid>
          ) : null}
          {searchIsOpen && (
            <Grid
              item
              xs={currentPage === "dashboard" ? 10 : 10.5}
              className={notificationSearchHeading}
            >
              {searchIsOpen && (
                <SearchBox
                  searchInput={searchClass}
                  placeHolder={"Search"}
                  handleSearch={handleSearch}
                  borderRadius={2}
                  borderColor={"1px solid #DCDADA"}
                  searchIsOpen={searchIsOpen}
                />
              )}
            </Grid>
          )}

          <Grid
            item
            xs={currentPage === "dashboard" ? 2 : 1.5}
            className={notificationHeading}
          >
            <div className={notificationSearchIcon}>
              <img
                src={searchIsOpen ? CloseIcon : SearchIcon}
                onClick={handleSearchIsOpen}
                width={16}
              />
            </div>
          </Grid>

          <Grid item xs={12} className={notificationTabHeading}>
            <Tabs
              initialIndex={0}
              tabsList={tabsList}
              handleTabs={handleTabs}
              dashboardNotificationClassName={customNotificationTabs}
              tabIndex={tabIndex}
              setTabIndex={setTabIndex}
            />
          </Grid>
          <Grid
            item
            xs={12}
            // className={searchIsOpen ? notificationList : notificationListReduce}
            className={notificationList}
          >
            {newSearchValue && newSearchValue.length > 0 ? (
              newSearchValue.map((item, index) => {
                return (
                  <NotificationList
                    refs={refs}
                    key={index}
                    data={item}
                    index={index}
                    selectedItem={selectedItem}
                    handleExpandListItem={handleExpandListItem}
                    handlePreviewClick={handlePreviewClick}
                    handleVideoClick={handleVideoClick}
                    currentOpenNotification={currentOpenNotification}
                    tabIndex={tabIndex}
                    clickHandler={clickHandler}
                    handleClickButton={handleClickButton}
                    handleClickAway={handleClickAway}
                    popperOpen={popperOpen}
                    currentPage={currentPage}
                    handlDateTimeFormat={handlDateTimeFormat}
                  />
                );
              })
            ) : (
              <span style={{ padding: 10, color: "gray" }}>
                No Result Found
              </span>
            )}
          </Grid>
        </Grid>
      </div>
      {showDialog && (
        <InfoDialog
          handleClose={handleClose}
          selectedListItem={selectedListItem}
          type={type}
          dateTimeFormat={notificationTimeStamp}
        />
      )}
    </>
  );
};

export default NotificationTab;
