import React, { useState, useEffect, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import moment from "moment";
import Header from "elements/Header";
import Chart from "elements/Chart";
import SearchBox from "elements/SearchBox";
import InfoIcon from "elements/InfoIcon";
import CircularProgressBar from "elements/CircularProgressBar";
import Highcharts, { chart } from "highcharts";
import Tooltip from "elements/Tooltip";
import MenuBar from "components/MenuBar";
import appData from "data/appData";
import SplineChart from "elements/Chart/splineChart";
import analyticsParking from "mockdata/analyticsParkings";
import analyticsRestaurants from "mockdata/analyticsRestaurants";
import analyticsSecurity from "mockdata/analyticsSecurity";
import analyticsOutdoors from "mockdata/analyticsOutdoors";
import analyticsRestrooms from "mockdata/analyticsRestrooms";
import analyticsVendingMachines from "mockdata/analyticsVendingMachines";
import analyticsEntranceExit from "mockdata/analyticsEntranceExit";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import {
  CrowdFormingIcon,
  TailgatingIcon,
  UnAuthorizeIcon,
  OccupiedIcon,
  IncidentIcon,
  BellIcon,
  ClockIcon,
  OrderIcon,
  ReservationIcon,
  AvailableIcon,
  VisitorIcon,
  IncomeIcon,
  WifiIcon,
  AirQualityIcon,
  ElectricityIcon,
  DustParticlesICon,
  RestRoomIcon,
  SanitisationIcon,
  WaitingTimeIcon,
  FoodIcon,
  InventoryIcon,
  TemperatureIcon,
  TotalVisitorsIcon,
} from "../../assets/InfoIcons";
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
  ParkingLocationIcon,
  ParkingLocationIconOrange,
  ShieldIcon,
  ApartmentsIcon,
  FlagRaisingIcon,
  EnergyRoundIcon,
} from "../../assets/Icons";
import Select from "../../elements/Select";
import Tabs from "elements/Tabs";
import useStyles from "./styles";

const Analytics = () => {
  const {
    analyticsHeader,
    notificationList,
    analyticsGrid,
    GraphSection,
    infoIconSection,
    analyticsContainerHeader,
    searchBoxSection,
    searchClass,
    redButtonStyle,
    customAnalyticsTabs,
    customParkingTabs,
    selectItem,
    analyticsPage,
    bottomBlackline,
    analyticsNotificationListItems,
    analyticsNotificationList,
    redButtonStyleInactive,
    analyticsNotificationListItemsActive,
    analyticsBody,
    analyticsNotificationListSection,
    mobileIconImg,
    menuIconImg,
    displayFlex,
    graphHeader,
    graphTitle,
    mealSection,
    revenueChartLegend,
    revenueChartLegendBorder,
    mealSectionRevenue,
    graphCircularSection,
    mealChartLegend,
    mealChartLegendBorder,
    mealsIncident,
    utilisationSection,
    inventoryChartLegendBorder,
    inventoryChartLegend,
    displayFlexStyle,
    mealChartLegendtab3,
  } = useStyles();

  const [chartXAxis, setChartXAxis] = useState();
  const [tabIndexAnalyticsTabs, setTabIndexAnalyticsTabs] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [analyticsData, setAnalyticsData] = useState(analyticsParking);
  const [selectedLeftPanelList, setSelectedLeftPanelList] = useState("overAll");
  const [selectedFilter, setSelectedFilter] = useState("Week");
  const [analyticsInfo, setAnalyticsInfo] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );

  const tabsList = [
    {
      name:
        tabIndexAnalyticsTabs !== 0 ? ParkingLocationIcon : ParkingLocationIcon,
      val: 0,
      iconName: "Parking",
    },
    {
      name: tabIndexAnalyticsTabs !== 1 ? ShieldIcon : ShieldIcon,
      val: 1,
      iconName: "Security",
    },
    {
      name: tabIndexAnalyticsTabs !== 2 ? ApartmentsIcon : ApartmentsIcon,
      val: 2,
      iconName: "Outdoor and Ambience",
    },
    {
      name: tabIndexAnalyticsTabs !== 3 ? Restaurants : RestaurantsOrange,
      val: 3,
      iconName: "Food and Concessions",
    },
    {
      name: tabIndexAnalyticsTabs !== 4 ? Restrooms : RestroomsOrange,
      val: 4,
      iconName: "Rest Room",
    },
    // {
    //   name: tabIndexAnalyticsTabs !== 5 ? FlagRaisingIcon : FlagRaisingIcon,
    //   val: 5,
    //   iconName: "Fan Experience",
    // },
    {
      name: tabIndexAnalyticsTabs !== 6 ? VendingMachine : VendingMachineOrange,
      val: 6,
      iconName: "Vending Machine",
    },
    {
      name: tabIndexAnalyticsTabs !== 7 ? EntranceExit : EntranceExitOrange,
      val: 7,
      iconName: "Entrance and Exit",
    },
    // {
    //   name: tabIndexAnalyticsTabs !== 8 ? EnergyRoundIcon : EnergyRoundIcon,
    //   val: 8,
    //   iconName: "Energy Management",
    // },
  ];

  const selectList = appData.analytics.selectList;

  const [infoIconData, setInfoIconData] = useState({
    infoIconTagLine1: "Total Occupied Spot",
    infoIconImg1: OccupiedIcon,
    infoIconTitle1: analyticsInfo?.totalOccupiedSpot,
    infoIconTagLine2: "Total Available Spot",
    infoIconImg2: AvailableIcon,
    infoIconTagLine3: "Total Incidents",
    infoIconImg3: IncidentIcon,
    infoIconTagLine4: "Total Operational Alerts",
    infoIconImg4: BellIcon,
    infoIconTagLine5: "Total Hours Saved",
    infoIconImg5: ClockIcon,
  });

  const [graphData, setGraphData] = useState({
    graphTitleName1: "occupancy",
    graphName1: "occupancy",
    graphType1: "areaspline",
    graphTitleName2: "availability",
    graphName2: "availability",
    graphType2: "areaspline",
    graphTitleName3: "hours saved",
    graphName3: "hours",
    graphType3: "column",
    graphTitleName4: "events and opr. alert",
    graphName4: "eventOpr",
    graphType4: "areaspline",
    graphTitleName5: "incidents",
    graphName5: "incident",
    graphType5: "area",
    graphTitleName6: "incidents - Breakdown",
    graphName6: "incidentsBreakdown",
    graphType6: "variablepie",
  });

  const handleTabs = (index) => {
    setTabIndex(index);
    switch (index) {
      case 0:
        setAnalyticsData(analyticsParking);
        graphData.graphTitleName1 = "occupancy";
        graphData.graphName1 = "occupancy";
        graphData.graphType1 = "areaspline";
        graphData.graphTitleName2 = "availability";
        graphData.graphName2 = "availability";
        graphData.graphType2 = "areaspline";
        graphData.graphTitleName3 = "hours saved";
        graphData.graphName3 = "hours";
        graphData.graphType3 = "column";
        graphData.graphTitleName4 = "events and opr. alert";
        graphData.graphName4 = "eventOpr";
        graphData.graphType4 = "areaspline";
        graphData.graphTitleName5 = "incidents";
        graphData.graphName5 = "incident";
        graphData.graphType5 = "area";
        graphData.graphTitleName6 = "incidents - Breakdown";
        graphData.graphName6 = "incidentsBreakdown";
        graphData.graphType6 = "variablepie";
        infoIconData.infoIconTagLine1 = "Total Occupied Spot";
        infoIconData.infoIconImg1 = OccupiedIcon;
        infoIconData.infoIconTagLine2 = "Total Available Spot";
        infoIconData.infoIconImg2 = AvailableIcon;
        infoIconData.infoIconTagLine3 = "Total Incidents";
        infoIconData.infoIconImg3 = IncidentIcon;
        infoIconData.infoIconTagLine4 = "Total Operational Alerts";
        infoIconData.infoIconImg4 = BellIcon;
        infoIconData.infoIconTagLine5 = "Total Hours Saved";
        infoIconData.infoIconImg5 = ClockIcon;
        break;
      case 1:
        setAnalyticsData(analyticsSecurity);
        graphData.graphTitleName1 = "crowd Forming";
        graphData.graphName1 = "crowdForming";
        graphData.graphType1 = "spline";
        graphData.graphTitleName2 = "tailGating";
        graphData.graphName2 = "tailGating";
        graphData.graphType2 = "areaspline";
        graphData.graphTitleName3 = "unauthorize access";
        graphData.graphName3 = "unauthorize";
        graphData.graphType3 = "column";
        graphData.graphTitleName4 = "violations";
        graphData.graphName4 = "violation";
        graphData.graphType4 = "line";
        graphData.graphTitleName5 = "incidents";
        graphData.graphName5 = "incidentSecurity";
        graphData.graphType5 = "area";
        graphData.graphTitleName6 = "incidents - Breakdown";
        graphData.graphName6 = "incidentsBreakdownSecurity";
        graphData.graphType6 = "pie";
        infoIconData.infoIconTagLine1 = "Total Incidents";
        infoIconData.infoIconImg1 = IncidentIcon;
        infoIconData.infoIconTagLine2 = "Tailgating";
        infoIconData.infoIconImg2 = TailgatingIcon;
        infoIconData.infoIconTagLine3 = "Crowd Forming";
        infoIconData.infoIconImg3 = CrowdFormingIcon;
        infoIconData.infoIconTagLine4 = "Unauthorize Access";
        infoIconData.infoIconImg4 = UnAuthorizeIcon;
        infoIconData.infoIconTagLine5 = "Operational Alert";
        infoIconData.infoIconImg5 = BellIcon;
        break;
      case 2:
        setAnalyticsData(analyticsOutdoors);
        graphData.graphTitleName1 = "electricity consumption";
        graphData.graphName1 = "electric";
        graphData.graphType1 = "areaspline";
        graphData.graphTitleName2 = "Data used";
        graphData.graphName2 = "dataUsed";
        graphData.graphType2 = "spline";
        graphData.graphTitleName3 = "air quality index";
        graphData.graphName3 = "airQuality";
        graphData.graphType3 = "column";
        graphData.graphTitleName4 = "PM 2.5 and PM 10 LEVEL";
        graphData.graphName4 = "eventOpr";
        graphData.graphType4 = "spline";
        graphData.graphTitleName5 = "incidents";
        graphData.graphName5 = "incidentOutdoor";
        graphData.graphType5 = "areaspline";
        graphData.graphTitleName6 = "incidents - Breakdown";
        graphData.graphName6 = "incidentsBreakdownOutdoor";
        graphData.graphType6 = "pie";
        infoIconData.infoIconTagLine1 = "Total Incidents";
        infoIconData.infoIconImg1 = IncidentIcon;
        infoIconData.infoIconTagLine2 = "Electricity Consumption";
        infoIconData.infoIconImg2 = ElectricityIcon;
        infoIconData.infoIconTagLine3 = "Data Used";
        infoIconData.infoIconImg3 = WifiIcon;
        infoIconData.infoIconTagLine4 = "Air Quality Index";
        infoIconData.infoIconImg4 = AirQualityIcon;
        infoIconData.infoIconTagLine5 = "PM 10";
        infoIconData.infoIconImg5 = DustParticlesICon;
        break;
      case 3:
        setAnalyticsData(analyticsRestaurants);
        graphData.graphTitleName1 = "order";
        graphData.graphName1 = "eventOpr";
        graphData.graphType1 = "areaspline";
        graphData.graphTitleName2 = "reservations";
        graphData.graphName2 = "reservations";
        graphData.graphType2 = "spline";
        graphData.graphTitleName3 = "visitor";
        graphData.graphName3 = "visitors";
        graphData.graphType3 = "column";
        graphData.graphTitleName4 = "occupancy";
        graphData.graphName4 = "occupancyRestaurant";
        graphData.graphType4 = "column";
        graphData.graphTitleName5 = "revenue";
        graphData.graphName5 = "eventOpr";
        graphData.graphType5 = "area";
        graphData.graphTitleName6 = "revenue Breakdown";
        graphData.graphName6 = "revenueBreakdown";
        graphData.graphType6 = "variablepie";
        infoIconData.infoIconTagLine1 = "Total Order";
        infoIconData.infoIconImg1 = OrderIcon;
        infoIconData.infoIconTagLine2 = "Income";
        infoIconData.infoIconImg2 = IncomeIcon;
        infoIconData.infoIconTagLine3 = "Total Visitors";
        infoIconData.infoIconImg3 = VisitorIcon;
        infoIconData.infoIconTagLine4 = "Reservation";
        infoIconData.infoIconImg4 = ReservationIcon;
        infoIconData.infoIconTagLine5 = "Incident";
        infoIconData.infoIconImg5 = IncidentIcon;
        break;
      case 4:
        setAnalyticsData(analyticsRestrooms);
        graphData.graphTitleName1 = "occupancy";
        graphData.graphName1 = "occupancyRestaurant";
        graphData.graphType1 = "column";
        graphData.graphTitleName2 = "Sanitisation level";
        graphData.graphName2 = "sanitisation";
        graphData.graphType2 = "areaspline";
        graphData.graphTitleName3 = "avg. wait time";
        graphData.graphName3 = "waitingTime";
        graphData.graphType3 = "areaspline";
        graphData.graphTitleName4 = "air quality index";
        graphData.graphName4 = "airQualityRestroom";
        graphData.graphType4 = "spline";
        graphData.graphTitleName5 = "operational alerts";
        graphData.graphName5 = "oprAlertsRestroom";
        graphData.graphType5 = "line";
        graphData.graphTitleName6 = "incidents";
        graphData.graphName6 = "incidentRestroom";
        graphData.graphType6 = "area";
        infoIconData.infoIconTagLine1 = "Total Incidents";
        infoIconData.infoIconImg1 = IncidentIcon;
        infoIconData.infoIconTagLine2 = "Occupancy";
        infoIconData.infoIconImg2 = RestRoomIcon;
        infoIconData.infoIconTagLine3 = "Sanitisation Level";
        infoIconData.infoIconImg3 = SanitisationIcon;
        infoIconData.infoIconTagLine4 = "Avg. Wait Time";
        infoIconData.infoIconImg4 = WaitingTimeIcon;
        infoIconData.infoIconTagLine5 = "Operational Alert";
        infoIconData.infoIconImg5 = BellIcon;
        break;
      case 5:
        setAnalyticsData(analyticsVendingMachines);
        graphData.graphTitleName1 = "Inventory Level";
        graphData.graphName1 = "inventoryLevel";
        graphData.graphType1 = "areaspline";
        graphData.graphTitleName2 = "Inventory - breakdown";
        graphData.graphName2 = "reservations";
        graphData.graphType2 = "spline";
        graphData.graphTitleName3 = "avg. temperature";
        graphData.graphName3 = "avgTemperature";
        graphData.graphType3 = "areaspline";
        graphData.graphTitleName4 = "sales";
        graphData.graphName4 = "eventOpr";
        graphData.graphType4 = "areaspline";
        graphData.graphTitleName5 = "operational alerts";
        graphData.graphName5 = "oprAlertsVending";
        graphData.graphType5 = "areaspline";
        graphData.graphTitleName6 = "incidents";
        graphData.graphName6 = "incidentVending";
        graphData.graphType6 = "spline";
        infoIconData.infoIconTagLine1 = "Total Incidents";
        infoIconData.infoIconImg1 = IncidentIcon;
        infoIconData.infoIconTagLine2 = "Inventory Level";
        infoIconData.infoIconImg2 = InventoryIcon;
        infoIconData.infoIconTagLine3 = "Avg. Temperature";
        infoIconData.infoIconImg3 = TemperatureIcon;
        infoIconData.infoIconTagLine4 = "Total Sales";
        infoIconData.infoIconImg4 = FoodIcon;
        infoIconData.infoIconTagLine5 = "Operational Alert";
        infoIconData.infoIconImg5 = BellIcon;
        break;
      case 6:
        setAnalyticsData(analyticsEntranceExit);
        graphData.graphTitleName1 = "occupancy";
        graphData.graphName1 = "occupancyEntrance";
        graphData.graphType1 = "column";
        graphData.graphTitleName2 = "visitors";
        graphData.graphName2 = "visitorsEntrance";
        graphData.graphType2 = "line";
        graphData.graphTitleName3 = "avg. wait time";
        graphData.graphName3 = "waitingTimeEntrance";
        graphData.graphType3 = "areaspline";
        graphData.graphTitleName4 = "security incidents";
        graphData.graphName4 = "securityIncident";
        graphData.graphType4 = "spline";
        graphData.graphTitleName5 = "operational alerts";
        graphData.graphName5 = "oprAlertsEntrance";
        graphData.graphType5 = "areaspline";
        graphData.graphTitleName6 = "utilisation";
        graphData.graphName6 = "eventOpr";
        graphData.graphType6 = "areaspline";
        infoIconData.infoIconTagLine1 = "Total Incidents";
        infoIconData.infoIconImg1 = IncidentIcon;
        infoIconData.infoIconTagLine2 = "Occupancy";
        infoIconData.infoIconImg2 = CrowdFormingIcon;
        infoIconData.infoIconTagLine3 = "Total Visitors";
        infoIconData.infoIconImg3 = TotalVisitorsIcon;
        infoIconData.infoIconTagLine4 = "Avg. Wait Time";
        infoIconData.infoIconImg4 = WaitingTimeIcon;
        infoIconData.infoIconTagLine5 = "Operational Alert";
        infoIconData.infoIconImg5 = BellIcon;
        break;
      default:
        setAnalyticsData(analyticsParking);
        break;
    }
  };

  const InfoIconList = [
    {
      color: "#5784F1",
      title:
        tabIndex === 0
          ? analyticsInfo.totalOccupiedSpot
          : tabIndex === 1
          ? analyticsInfo.totalIncidents
          : tabIndex === 2
          ? analyticsInfo.totalIncidentsOutdoors
          : tabIndex === 3
          ? analyticsInfo.totalOrder
          : tabIndex === 4
          ? analyticsInfo.totalIncidents
          : tabIndex === 5
          ? analyticsInfo.totalIncidents
          : analyticsInfo.totalIncidents,
      tagLine: infoIconData.infoIconTagLine1,
      icon: infoIconData.infoIconImg1,
    },
    {
      color: "#01C6F1",
      title:
        tabIndex === 0
          ? analyticsInfo.totalAvailableSpot
          : tabIndex === 1
          ? analyticsInfo.tailGating
          : tabIndex === 2
          ? analyticsInfo.electricityConsumption
          : tabIndex === 3
          ? analyticsInfo.income
          : tabIndex === 4
          ? analyticsInfo.occupancy
          : tabIndex === 5
          ? analyticsInfo.inventoryLevel
          : analyticsInfo.occupancy,
      tagLine: infoIconData.infoIconTagLine2,
      icon: infoIconData.infoIconImg2,
    },
    {
      color: "#FABB70",
      title:
        tabIndex === 0
          ? analyticsInfo.totalIncidents
          : tabIndex === 1
          ? analyticsInfo.crowdForming
          : tabIndex === 2
          ? analyticsInfo.dataUsed
          : tabIndex === 3
          ? analyticsInfo.totalVisitors
          : tabIndex === 4
          ? analyticsInfo.sanitationLevel
          : tabIndex === 5
          ? analyticsInfo.avgTemparature
          : analyticsInfo.totalVisitors,
      tagLine: infoIconData.infoIconTagLine3,
      icon: infoIconData.infoIconImg3,
    },
    {
      color: "#949FFF",
      title:
        tabIndex === 0
          ? analyticsInfo.totalOprAlerts
          : tabIndex === 1
          ? analyticsInfo.unauthorizedAccess
          : tabIndex === 2
          ? analyticsInfo.airQualityIndex
          : tabIndex === 3
          ? analyticsInfo.reservation
          : tabIndex === 4
          ? analyticsInfo.avgWaitTime
          : tabIndex === 5
          ? analyticsInfo.totalSales
          : analyticsInfo.avgWaitTime,
      tagLine: infoIconData.infoIconTagLine4,
      icon: infoIconData.infoIconImg4,
    },
    {
      color: "#FF708B",
      title:
        tabIndex === 0
          ? analyticsInfo.totalHoursSaved
          : tabIndex === 1
          ? analyticsInfo.operationalAlert
          : tabIndex === 2
          ? analyticsInfo.pm10
          : tabIndex === 3
          ? analyticsInfo.incident
          : tabIndex === 4
          ? analyticsInfo.operationalAlert
          : tabIndex === 5
          ? analyticsInfo.operationalAlert
          : analyticsInfo.operationalAlert,
      tagLine: infoIconData.infoIconTagLine5,
      icon: infoIconData.infoIconImg5,
    },
  ];

  useEffect(() => {
    let data = {};
    for (let i = 0; i < analyticsData.analyticsList.length; i++) {
      if (selectedLeftPanelList === analyticsData.analyticsList[i].id) {
        switch (selectedFilter) {
          case "Day":
            data = analyticsData.analyticsList[i].data.day;
            setChartXAxis(xAxisNewValueTime);
            break;
          case "Week":
            data = analyticsData.analyticsList[i].data.weekly;
            setChartXAxis(xAxisNewValueWeek);
            break;
          case "Month":
            data = analyticsData.analyticsList[i].data.monthly;
            setChartXAxis(xAxisNewValueMonth);
            break;
          case "Year":
            data = analyticsData.analyticsList[i].data.yearly;
            setChartXAxis(xAxisValueYear);
            break;
          default:
            data = analyticsData.analyticsList[i].data.day;
            break;
        }
      }
    }
    setAnalyticsInfo(data);
  }, [tabIndex, selectedLeftPanelList, selectedFilter]);

  useEffect(() => {
    setSelectedLeftPanelList("overAll");
    setTabActiveIndex(0);
  }, [tabIndex]);

  const [tabActiveIndex, setTabActiveIndex] = useState(null);
  const [searchValue, setSearchValue] = useState(analyticsData.analyticsList);

  const handleLeftPanelList = (id, index) => {
    setSelectedLeftPanelList(id);
    setTabActiveIndex(index);
  };
  const handleSelect = (value) => {
    setSelectedFilter(value);
  };
  const handleSearch = (searchValue) => {
    setTabActiveIndex("");
    setSelectedLeftPanelList("overAll");
    let searchResult =
      analyticsData.analyticsList &&
      analyticsData.analyticsList.filter((notification) => {
        return notification.title
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
    setSearchValue(searchResult);
  };

  const backGroundClear = (isOpen) => {
    // setBackGroundClearAll(isOpen);
  };

  const handleOverallAnalytics = () => {
    setSelectedLeftPanelList("overAll");
    setTabActiveIndex(null);
  };

  // Updated Time 12Hrs Format - Day

  let times = [],
    periods = ["AM", "PM"],
    hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    prop = null,
    hour = null,
    min = null;

  for (prop in periods) {
    for (hour in hours) {
      for (min = 0; min < 60; min += 60) {
        times.push(
          ("0" + hours[hour]).slice(-2) +
            ":" +
            ("0" + min).slice(-2) +
            " " +
            periods[prop]
        );
      }
    }
  }

  const currentTime = moment().format("h A");
  const xAxisArray = times.filter(
    (value) =>
      moment(value, ["h A"]).format("HH") <
      moment(currentTime, ["h A"]).format("HH")
  );
  const xAxisTimeArray = xAxisArray.slice(
    xAxisArray.length - 6,
    xAxisArray.length
  );
  const xAxisNewValueTime = Array.from(xAxisTimeArray, (ps) => ps);

  // Updated Time 24Hrs Format - Day

  var hoursPerDay = 24;
  var xAxisNewtime = [];

  function timeOneDay() {
    var formattedTime;
    var newTimeFormat;
    for (let i = 0; i < hoursPerDay + 1; i++) {
      formattedTime = moment().subtract(i, "hours").format("HH");
      newTimeFormat = formattedTime + ":00";
      xAxisNewtime.unshift(newTimeFormat);
    }
    const newTimePop = xAxisNewtime.pop();
  }
  timeOneDay();

  //Updated Day List - Week

  const today = moment();
  const xAxisWeek = Array(6)
    .fill()
    .map(() => today.subtract(1, "d").format("MM/DD"));

  const xAxisNewValueWeek = xAxisWeek.reverse();

  //Updated Day List - Month

  const todayMonth = moment();
  const xAxisMonth = Array(30)
    .fill()
    .map(() => todayMonth.subtract(1, "d").format("MM/DD"));

  const xAxisNewValueMonth = xAxisMonth.reverse();

  // Year

  let monthName = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  );
  let currentDate = new Date();

  let result = [];
  currentDate.setDate(1);
  for (let i = 0; i <= 11; i++) {
    result.push(
      monthName[currentDate.getMonth()] +
        " " +
        currentDate.getFullYear().toString().substr(-2)
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  const xAxisNewValue = result.reverse();
  const xAxisValueYear = xAxisNewValue.slice(
    xAxisNewValue.length - 7,
    xAxisNewValue.length
  );

  //Incident Breakdown Chart - Parking

  let incidentCircularChart;
  let incidentCircularDataFormat;
  let incidentsBreakdownData;
  let incidentsColor = ["#FF708B", "#E76A34", "#6FE3FD", "#FFD644"];
  if (
    analyticsInfo &&
    analyticsInfo.incidentsBreakdown &&
    analyticsInfo.incidentsBreakdown.length > 0
  ) {
    incidentCircularChart = analyticsInfo?.incidentsBreakdown?.map(
      (val, index) => ({ ...val, z: index + 1 })
    );

    incidentCircularDataFormat = incidentCircularChart?.map(
      ({ title: name, value: y, z: z }) => ({ name, y, z })
    );

    //   incidentsBreakdownData = [
    //     {
    //       size: "90%",
    //       innerSize: "0%",
    //       center: ["60%", "60%"],
    //       sizeBy: "area",
    //       zMin: 0,
    //       data: incidentCircularDataFormat,
    //       colors: ["#6FE3FD", "#E76A34", "#FFD644", "#FF708B", "#75EB81"],
    //       dataLabels: {
    //         enabled: true,
    //         format: "<b>{point.name}</b>",
    //         color: "#FFFFFF",
    //         style: {
    //           fontSize: "12px",
    //           fontWeight: "normal",
    //           overflowWrap: "break-word !important",
    //         },
    //       },
    //     },
    //   ];

    incidentsBreakdownData = [
      {
        size: "80%",
        innerSize: "0%",
        center: ["52%", "50%"],
        zMin: 0,
        data: incidentCircularDataFormat,
        colors: ["#6FE3FD", "#E76A34", "#FFD644", "#FF708B", "#75EB81"],
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>",
          color: "#FFFFFF",
          style: {
            fontSize: "12px",
            fontWeight: "normal",
            overflowWrap: "break-word",
          },
        },
      },
    ];
  }

  //Revenue Breakdown Chart
  let revenueCircularChart;
  let revenueCircularDataFormat;
  let revenueBreakdownData;
  if (
    analyticsInfo &&
    analyticsInfo.revenueBreakdown &&
    analyticsInfo.revenueBreakdown.length > 0
  ) {
    revenueCircularChart = analyticsInfo?.revenueBreakdown?.map(
      (val, index) => ({ ...val, z: index + 1 })
    );

    revenueCircularDataFormat = revenueCircularChart?.map(
      ({ title: name, value: y, z: z }) => ({ name, y, z })
    );
    revenueBreakdownData = [
      {
        minPointSize: 10,
        zMin: 0,
        innerSize: "50%",
        data: revenueCircularDataFormat,
        colors: ["#FFBA69", "#883EDE", "#FF708B"],
        dataLabels: {
          enabled: true,
          format: "<b>{point.y}</b>",
          color: "#FFFFFF",
          style: {
            fontSize: "12px",
            fontWeight: "normal",
          },
        },
      },
    ];
  }

  //Incident Security Breakdown Chart

  let incidentSecurityCircularChart;
  let incidentSecurityCircularDataFormat;
  let incidentSecurityBreakdownData;
  let incidentSecurityColor = ["#FF708B", "#E76A34", "#6FE3FD", "#FFD644"];
  if (
    analyticsInfo &&
    analyticsInfo.incidentsBreakdownSecurity &&
    analyticsInfo.incidentsBreakdownSecurity.length > 0
  ) {
    incidentSecurityCircularChart =
      analyticsInfo?.incidentsBreakdownSecurity?.map((val, index) => ({
        ...val,
        z: index + 1,
      }));

    incidentSecurityCircularDataFormat = incidentSecurityCircularChart?.map(
      ({ title: name, value: y, z: z }) => ({ name, y, z })
    );
    incidentSecurityBreakdownData = [
      {
        minPointSize: 10,
        zMin: 10,
        innerSize: "80%",
        allowPointSelect: true,
        data: incidentSecurityCircularDataFormat,
        colors: ["#FF708B", "#76FFFF", "#E76A34", "#FBE947"],
        showInLegend: true,

        dataLabels: {
          enabled: false,
          verticalAlign: "top",
          align: "center",
          // format: "<b>{point.name}</b>",
          color: "#FFFFFF",
          style: {
            fontSize: "12px",
            fontWeight: "normal",
          },
        },
      },
    ];
  }

  // Incident Breakdown - Outdoors

  let incidentOutdoorCircularChart;
  let incidentOutdoorCircularDataFormat;
  let incidentOutdoorBreakdownData;
  let incidentOutdoorColor = ["#FF708B", "#E76A34", "#6FE3FD", "#FFD644"];
  if (
    analyticsInfo &&
    analyticsInfo.incidentsBreakdownOutdoor &&
    analyticsInfo.incidentsBreakdownOutdoor.length > 0
  ) {
    incidentOutdoorCircularChart =
      analyticsInfo?.incidentsBreakdownOutdoor?.map((val, index) => ({
        ...val,
        z: index + 1,
      }));

    incidentOutdoorCircularDataFormat = incidentOutdoorCircularChart?.map(
      ({ title: name, value: y, z: z }) => ({ name, y, z })
    );
    incidentOutdoorBreakdownData = [
      {
        minPointSize: 10,
        zMin: 10,
        innerSize: "0%",
        allowPointSelect: true,
        selected: true,
        sliced: true,
        slicedOffset: 10,
        data: incidentOutdoorCircularDataFormat,
        colors: ["#E76A34", "#6FE3FD", "#FFD644", "#FF708B"],
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>",
          color: "#FFFFFF",
          style: {
            fontSize: "10px",
            fontWeight: "normal",
          },
        },
      },
    ];
  }

  //Occupancy Chart

  const occupancyDataFormat = analyticsInfo?.occupancyParking?.map((val) => {
    return val.count;
  });
  const occupancyGraphData = {
    name: "Occupancy",
    data: occupancyDataFormat,
    color: "#FFF744",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#FFF7448a"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
    dataLabels: {
      enabled: false,
    },
    marker: {
      lineWidth: 2,
      fillColor: "white",
    },
  };

  //Crowd Forming Chart

  const crowdFormingDataFormat = analyticsInfo?.crowdFormingData?.map((val) => {
    return val.count;
  });
  const crowdFormingGraphData = {
    name: "crowdForming",
    data: crowdFormingDataFormat,
    color: "#FFF744",
    marker: {
      lineWidth: 2,
      fillColor: "white",
    },
  };

  //Electricity Consumption

  const electricityDataFormat = analyticsInfo?.electricityConsumptionData?.map(
    (val) => {
      return val.count;
    }
  );
  const electricityGraphData = {
    name: "Occupancy",
    data: electricityDataFormat,
    color: "#3FB3D8",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#3FB3D8"], // start
        [1, Highcharts.color("#9D90FF").setOpacity(0.2).get("rgba")],
      ],
    },
    marker: {
      lineWidth: 2,
      fillColor: "white",
    },
  };

  //Data Used

  const dataUsedDataFormat = analyticsInfo?.dataUsedData?.map((val) => {
    return val.count;
  });
  const dataUsedGraphData = {
    name: "dataUsed",
    data: dataUsedDataFormat,
    color: "#E83053",
    marker: {
      lineWidth: 2,
      fillColor: "white",
    },
  };

  // security incident - entrance

  const securityIncidentsDataFormat =
    analyticsInfo?.securityIncidentsDataEntrance?.map((val) => {
      return val.count;
    });
  const securityIncidentsGraphData = {
    name: "securityIncidents",
    data: securityIncidentsDataFormat,
    color: "#FFBA69",
    marker: {
      lineWidth: 2,
      fillColor: "white",
    },
  };

  //Availability Chart
  const availabilityDataFormat = analyticsInfo?.availability?.map((val) => {
    return val.count;
  });
  const availabilityGraphData = {
    name: "Availability",
    data: availabilityDataFormat,
    color: "#57AC49",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#57AC495a"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
  };

  //Average Waiting Time  - Entrance and Exit
  const waitingTimeEntranceDataFormat =
    analyticsInfo?.avgWaitTimeDataEntrance?.map((val) => {
      return val.count;
    });

  let waitingTimeEntranceGraphData;

  if (
    waitingTimeEntranceDataFormat &&
    waitingTimeEntranceDataFormat.length > 0
  ) {
    waitingTimeEntranceGraphData = {
      name: "Availability",
      data: waitingTimeEntranceDataFormat,
      color: "#2CAD39",

      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 0 },
        stops: [
          [0, "#2CAD39"], // start
          [1, Highcharts.color("#2CAD39").setOpacity(0).get("rgba")],
        ],
      },
      dataLabels: {
        enabled: false,
      },
    };
  }
  //Tailgating Chart
  const tailGatingDataFormat = analyticsInfo?.tailGatingData?.map((val) => {
    return val.count;
  });
  const tailGatingGraphData = {
    name: "Tailgating",
    data: tailGatingDataFormat,
    color: "#6C59FB",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#6C59FB"], // start
        [1, Highcharts.color("#9D90FF").setOpacity(0.2).get("rgba")],
      ],
    },
  };

  //Sanitisation Chart
  const sanitisationDataFormat = analyticsInfo?.sanitationLevelData?.map(
    (val) => {
      return val.count;
    }
  );
  const sanitisationGraphData = {
    name: "Sanitisation",
    data: sanitisationDataFormat,
    color: "#4D31F5",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#4D31F5"], // start
        [1, Highcharts.color("#9D90FF").setOpacity(0.2).get("rgba")],
      ],
    },
  };

  // Operational Alerts - Vending Machine

  const operationalVendingDataFormat =
    analyticsInfo?.operationalAlertsDataVending?.map((val) => {
      return val.count;
    });
  const operationalVendingGraphData = {
    name: "Vending Machine",
    data: operationalVendingDataFormat,
    color: "#4D31F5",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#4D31F5"], // start
        [1, Highcharts.color("#9D90FF").setOpacity(0.2).get("rgba")],
      ],
    },
  };

  //Avg Waiting Time Graph
  const waitingTimeDataFormat = analyticsInfo?.avgWaitTimeData?.map((val) => {
    return val.count;
  });
  const waitingTimeGraphData = {
    name: "Sanitisation",
    data: waitingTimeDataFormat,
    color: "#FF9364",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#FF93645e"], // start
        [1, Highcharts.color("#FF9364").setOpacity(0).get("rgba")],
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  //Operational Alerts - Entrance Graph
  const oprAlertsEntranceDataFormat =
    analyticsInfo?.operationalAlertsDataEntrance?.map((val) => {
      return val.count;
    });
  const oprAlertsEntranceGraphData = {
    name: "Opr Alerts Entrance",
    data: oprAlertsEntranceDataFormat,
    color: "#FF7A7A",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#FF7A7A9a"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  //Inventory Level Graph

  const inventoryDataFormat = analyticsInfo?.inventoryLevelData?.map((val) => {
    return val.count;
  });
  const inventoryGraphData = {
    name: "Sanitisation",
    data: inventoryDataFormat,
    color: "#0096C7",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#0096C75e"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  // Avg Temperature

  const temperatureDataFormat = analyticsInfo?.avgTemparatureData?.map(
    (val) => {
      return val.count;
    }
  );
  const temperatureGraphData = {
    name: "Sanitisation",
    data: temperatureDataFormat,
    color: "#366BEB",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#366BEB5e"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  // Incident Outdoor Graph

  const incidentOutdoorDataFormat = analyticsInfo?.incidentsData?.map((val) => {
    return val.count;
  });
  const incidentOutdoorGraphData = {
    name: "Incident Outdoor",
    data: incidentOutdoorDataFormat,
    color: "#5D43FE",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#5D43FE"], // start
        [1, Highcharts.color("#9D90FF").setOpacity(0.2).get("rgba")],
      ],
    },
  };

  //Incident Parking Graph

  const incidentGraphDataFormat = analyticsInfo?.incidents?.map((val) => {
    return val.count;
  });
  const incidentGraphData = {
    name: "Incident",
    data: incidentGraphDataFormat,
    color: "#FF708B",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#ff708b5a"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
  };

  //Incident Security Graph

  const incidentSecurityGraphDataFormat = analyticsInfo?.incidentsData?.map(
    (val) => {
      return val.count;
    }
  );
  const incidentSecurityGraphData = {
    name: "Incident",
    data: incidentSecurityGraphDataFormat,
    color: "#FF708B",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#ff708b5a"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
  };

  // Incident RestRoom Graph

  const incidentRestroomGraphDataFormat =
    analyticsInfo?.incidentsRestroomData?.map((val) => {
      return val.count;
    });
  const incidentRestroomGraphData = {
    name: "Incident",
    data: incidentRestroomGraphDataFormat,
    color: "#FF708B",
    fillColor: {
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
        [0, "#ff708b5a"], // start
        [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  // Incident Vending Machine Graph

  const incidentVendingGraphDataFormat =
    analyticsInfo?.incidentsDataVending?.map((val) => {
      return val.count;
    });
  const incidentVendingGraphData = {
    name: "Incident",
    data: incidentVendingGraphDataFormat,
    color: "#FE763B",
    // fillColor: {
    //   linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    //   stops: [
    //     [0, "#ff708b5a"], // start
    //     [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
    //   ],
    // },
    dataLabels: {
      enabled: false,
    },
  };

  //Hours Chart

  const hoursGraphDataFormat = analyticsInfo?.hoursSaved;

  let hoursGraphDataColor;
  let hoursGraphData;

  if (hoursGraphDataFormat && hoursGraphDataFormat.length > 0) {
    hoursGraphDataColor = [
      { y: hoursGraphDataFormat[0]?.count, color: "#6CDD59" },
      { y: hoursGraphDataFormat[1]?.count, color: "#9D90FF" },
      { y: hoursGraphDataFormat[2]?.count, color: "#6CDD59" },
      { y: hoursGraphDataFormat[3]?.count, color: "#9D90FF" },
      { y: hoursGraphDataFormat[4]?.count, color: "#6CDD59" },
      { y: hoursGraphDataFormat[5]?.count, color: "#9D90FF" },
    ];
    hoursGraphData = [
      {
        name: "Hours",
        data: hoursGraphDataColor,
        maxPointWidth: 30,
        dataLabels: {
          enabled: true,
          shape: "callout",
          verticalAlign: "top",
          align: "center",
          x: 1,
          y: -35,
          formatter: function () {
            return this.y + "hrs";
          },
        },
      },
    ];
  }

  // UnAuthorize Access

  const unAuthorizeGraphDataFormat = analyticsInfo?.unauthorizedAccessData;

  let unAuthorizeGraphDataColor;
  let unAuthorizeGraphData;

  if (unAuthorizeGraphDataFormat && unAuthorizeGraphDataFormat.length > 0) {
    unAuthorizeGraphDataColor = [
      { y: unAuthorizeGraphDataFormat[0]?.count, color: "#6CDD59" },
      { y: unAuthorizeGraphDataFormat[1]?.count, color: "#6CDD59" },
      { y: unAuthorizeGraphDataFormat[2]?.count, color: "#6CDD59" },
      { y: unAuthorizeGraphDataFormat[3]?.count, color: "#6CDD59" },
      { y: unAuthorizeGraphDataFormat[4]?.count, color: "#6CDD59" },
      { y: unAuthorizeGraphDataFormat[5]?.count, color: "#6CDD59" },
    ];
    unAuthorizeGraphData = [
      {
        name: "Hours",
        data: unAuthorizeGraphDataColor,
        maxPointWidth: 30,
        dataLabels: {
          enabled: false,
          // shape: "callout",
          // verticalAlign: "top",
          // align: "center",
          // x: 1,
          // y: -35,
          // formatter: function () {
          //   return this.y;
          // },
        },
      },
    ];
  }

  // Air Quality Index

  const airQualityGraphDataFormat = analyticsInfo?.airQualityIndexData?.map(
    (val) => {
      return val.count;
    }
  );

  let airQualityData = [];
  let airQualityGraphData;
  let airQualitymaxValue = 200;
  let airQualitymaxValueArray = [];
  let airQualityDataFormat;
  if (airQualityGraphDataFormat && airQualityGraphDataFormat.length > 0) {
    airQualityData = [
      { y: airQualityGraphDataFormat[0], color: "#83B146" },
      { y: airQualityGraphDataFormat[1], color: "#EEE409" },
      { y: airQualityGraphDataFormat[2], color: "#F68260" },
      { y: airQualityGraphDataFormat[3], color: "#F68260" },
      { y: airQualityGraphDataFormat[4], color: "#EC3649" },
      { y: airQualityGraphDataFormat[5], color: "#EC3649" },
    ];

    for (let i = 0; i < airQualityGraphDataFormat.length; i++) {
      airQualitymaxValueArray.push(
        airQualitymaxValue - airQualityGraphDataFormat[i]
      );
    }

    // incidentSecurityCircularDataFormat = incidentSecurityCircularChart?.map(
    //   ({ title: name, value: y, z: z }) => ({ name, y, z })
    // );

    if (airQualitymaxValueArray && airQualitymaxValueArray.length > 0) {
      airQualityDataFormat = [
        { y: airQualitymaxValueArray[0], color: "#333232" },
        { y: airQualitymaxValueArray[1], color: "#333232" },
        { y: airQualitymaxValueArray[2], color: "#333232" },
        { y: airQualitymaxValueArray[3], color: "#333232" },
        { y: airQualitymaxValueArray[4], color: "#333232" },
        { y: airQualitymaxValueArray[5], color: "#333232" },
      ];
    }

    airQualityGraphData = [
      {
        name: "air Quality Fill series",
        data: airQualityDataFormat,
        // color: "#333232",
        stack: "a",
        showInLegend: false,
        // enableMouseTracking: false,
        maxPointWidth: 20,
        borderRadius: 0,
        dataLabels: {
          enabled: false,
          // shape: "callout",
          // verticalAlign: "top",
          // align: "center",
          // x: 1,
          // y: -35,
        },
        // tooltip: {
        //   shared: false,
        // },
      },
      {
        stack: "a",
        name: " air Quality Data Series 1",
        data: airQualityData,
        maxPointWidth: 20,
        borderRadius: 9,
        dataLabels: {
          enabled: true,
          verticalAlign: "top",
          // align: "center",
          x: 0,
          y: -200,
          style: {
            color: "#FF5910",
            textOutline: "0px",
          },
          formatter: function () {
            return this.y + "hrs";
          },
        },
        // tooltip: {
        //   shared: false,
        // },
      },
    ];
  }

  // Violation Chart

  const violationDataFormat = analyticsInfo?.violationsData?.map((val) => {
    return val.count;
  });
  const violationGraphData = {
    name: "violation",
    data: violationDataFormat,
    color: "#EF7BE3",
    marker: {
      lineWidth: 2,
      // fillColor: "white",
    },
  };

  // Visitor Chart - Entrance Exit

  const visitorEntranceDataFormat = analyticsInfo?.visitorsDataEntrance?.map(
    (val) => {
      return val.count;
    }
  );
  const visitorEntranceGraphData = {
    name: "visitorEntrance",
    data: visitorEntranceDataFormat,
    color: "#FE763B",
    marker: {
      lineWidth: 2,
      // fillColor: "white",
    },
  };

  // Operational Alerts - Rest room

  const oprAlertsRestroomDataFormat =
    analyticsInfo?.operationalAlertsDataRestroom?.map((val) => {
      return val.count;
    });
  const oprAlertsRestroomGraphData = {
    name: "oprAlertsRestroom",
    data: oprAlertsRestroomDataFormat,
    color: "#5784F1",
    marker: {
      lineWidth: 2,
      // fillColor: "white",
    },
  };

  //VISITOR Chart
  const visitorsGraphDataFormat = analyticsInfo?.visitor;
  let visitorsGraphDataColor;
  let visitorsGraphData;
  if (visitorsGraphDataFormat && visitorsGraphDataFormat.length > 0) {
    visitorsGraphDataColor = [
      { y: visitorsGraphDataFormat[0]?.count, color: "#5784F1" },
      { y: visitorsGraphDataFormat[1]?.count, color: "#5784F1" },
      { y: visitorsGraphDataFormat[2]?.count, color: "#5784F1" },
      { y: visitorsGraphDataFormat[3]?.count, color: "#5784F1" },
      { y: visitorsGraphDataFormat[4]?.count, color: "#5784F1" },
      { y: visitorsGraphDataFormat[5]?.count, color: "#5784F1" },
    ];
    visitorsGraphData = [
      {
        name: "Visitors",
        data: visitorsGraphDataColor,
        maxPointWidth: 25,
        dataLabels: {
          enabled: false,
        },
      },
    ];
  }

  //Occupancy - Entrance Exit Chart
  const occupancyEntranceGraphDataFormat =
    analyticsInfo?.occupancyDataEntranceExit;
  let occupancyEntranceGraphDataColor;
  let occupancyEntranceGraphData;
  if (
    occupancyEntranceGraphDataFormat &&
    occupancyEntranceGraphDataFormat.length > 0
  ) {
    occupancyEntranceGraphDataColor = [
      { y: occupancyEntranceGraphDataFormat[0]?.count },
      { y: occupancyEntranceGraphDataFormat[1]?.count },
      { y: occupancyEntranceGraphDataFormat[2]?.count },
      { y: occupancyEntranceGraphDataFormat[3]?.count },
      { y: occupancyEntranceGraphDataFormat[4]?.count },
      { y: occupancyEntranceGraphDataFormat[5]?.count },
    ];
    occupancyEntranceGraphData = [
      {
        name: "Occupancy - Entrance Exit",
        data: occupancyEntranceGraphDataColor,
        maxPointWidth: 25,
        color: "#5784F1",
        showInLegend: false,
        // enableMouseTracking: false,
        borderRadius: 0,
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: false,
        },
      },
    ];
  }

  //Occupancy Restaurent

  const occupancyRestaurantGraphDataFormat =
    analyticsInfo?.occupancyRestaurant?.map((val) => {
      return val.count;
    });

  let occupancyRestaurantData = [];
  let occupancyRestaurantGraphData;
  let maxValue = 100;
  let maxValueArray = [];
  if (
    occupancyRestaurantGraphDataFormat &&
    occupancyRestaurantGraphDataFormat.length > 0
  ) {
    occupancyRestaurantData = [
      { y: occupancyRestaurantGraphDataFormat[0], color: "#6CDD59" },
      { y: occupancyRestaurantGraphDataFormat[1], color: "#FFBA69" },
      { y: occupancyRestaurantGraphDataFormat[2], color: "#FFBA69" },
      { y: occupancyRestaurantGraphDataFormat[3], color: "#FFBA69" },
      { y: occupancyRestaurantGraphDataFormat[4], color: "#6CDD59" },
      { y: occupancyRestaurantGraphDataFormat[5], color: "#FFBA69" },
    ];

    for (let i = 0; i < occupancyRestaurantGraphDataFormat.length; i++) {
      maxValueArray.push(maxValue - occupancyRestaurantGraphDataFormat[i]);
    }
    occupancyRestaurantGraphData = [
      {
        name: "Fill Series",
        data: maxValueArray,
        color: "#333232",
        stack: "a",
        showInLegend: false,
        // enableMouseTracking: false,
        maxPointWidth: 20,
        borderRadius: 0,
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: false,
        },
      },
      {
        name: "Data Series 1",
        stack: "a",
        data: occupancyRestaurantData,
        maxPointWidth: 20,
        borderRadius: 9,
        dataLabels: {
          enabled: true,
          verticalAlign: "top",
          // align: "center",
          x: 0,
          y: -200,
          style: {
            color: "#FF5910",
            textOutline: "0px",
          },
          formatter: function () {
            return this.y + "%";
          },
        },
        tooltip: {
          shared: false,
        },
      },
    ];
  }

  // Occupancy RestRoom

  const occupancyRestroomGraphDataFormat =
    analyticsInfo?.occupancyRestroomData?.map((val) => {
      return val.count;
    });

  let occupancyRestroomData = [];
  let occupancyRestroomGraphData;
  let maxValueRestroom = 100;
  let maxValueRestroomArray = [];
  if (
    occupancyRestroomGraphDataFormat &&
    occupancyRestroomGraphDataFormat.length > 0
  ) {
    occupancyRestroomData = [
      { y: occupancyRestroomGraphDataFormat[0], color: "#6CDD59" },
      { y: occupancyRestroomGraphDataFormat[1], color: "#FFBA69" },
      { y: occupancyRestroomGraphDataFormat[2], color: "#FFBA69" },
      { y: occupancyRestroomGraphDataFormat[3], color: "#FFBA69" },
      { y: occupancyRestroomGraphDataFormat[4], color: "#6CDD59" },
      { y: occupancyRestroomGraphDataFormat[5], color: "#FFBA69" },
    ];

    for (let i = 0; i < occupancyRestroomGraphDataFormat.length; i++) {
      maxValueRestroomArray.push(
        maxValueRestroom - occupancyRestroomGraphDataFormat[i]
      );
    }
    occupancyRestroomGraphData = [
      {
        name: "Fill Series",
        data: maxValueRestroomArray,
        color: "#333232",
        stack: "a",
        showInLegend: false,
        // enableMouseTracking: false,
        maxPointWidth: 20,
        borderRadius: 0,
        dataLabels: {
          enabled: false,
        },
      },
      {
        name: "Data Series 1",
        stack: "a",
        data: occupancyRestroomData,
        maxPointWidth: 20,
        borderRadius: 9,
        dataLabels: {
          enabled: true,
          verticalAlign: "top",
          // align: "center",
          x: 0,
          y: -200,
          style: {
            color: "#FF5910",
            textOutline: "0px",
          },
          formatter: function () {
            return this.y + "%";
          },
        },
        tooltip: {
          shared: false,
        },
      },
    ];
  }

  // Events Opr

  const eventsOprAlertsDataFormat = analyticsInfo?.eventsOprAlerts?.map(
    (val) => {
      return val;
    }
  );
  let eventDataFormat;
  let oprAlertsDataFormat;
  let eventGraphDataFormat;
  let oprAlertsGraphDataFormat;
  let eventOprGraphData;
  if (eventsOprAlertsDataFormat && eventsOprAlertsDataFormat.length > 0) {
    eventDataFormat = eventsOprAlertsDataFormat[0]?.analytics;
    oprAlertsDataFormat = eventsOprAlertsDataFormat[1]?.analytics;
    eventGraphDataFormat = eventDataFormat?.map((val) => {
      return val?.count;
    });
    oprAlertsGraphDataFormat = oprAlertsDataFormat?.map((val) => {
      return val?.count;
    });
    eventOprGraphData = [
      {
        name: "EVENTS",
        data: eventGraphDataFormat,
        color: "#FF9464",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#FF94648a"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
        },
      },
      {
        name: "OPR.ALERT",
        data: oprAlertsGraphDataFormat,
        color: "#1E63D0",
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
        },
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#1E63D08a"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
      },
    ];
  }

  //Order Graph
  const orderDataFormat = analyticsInfo?.order?.map((val) => {
    return val?.analytics?.map((data) => {
      return data?.count;
    });
  });

  let orderGraphData;

  if (orderDataFormat && orderDataFormat.length > 0) {
    orderGraphData = [
      {
        name: "Meal",
        data: orderDataFormat[0],
        color: "#FC8456",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#FC84568a"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
      },
      {
        name: "Snacks",
        data: orderDataFormat[1],
        color: "#A593FC",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
      },
      {
        name: "Drinks",
        data: orderDataFormat[2],
        color: "#FFD646",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
      },
    ];
  }

  //PmLevel Graph

  const pmLevelDataFormat = analyticsInfo?.pm10Data?.map((val) => {
    return val?.analytics?.map((data) => {
      return data?.count;
    });
  });

  let pmLevelGraphData;

  if (pmLevelDataFormat && pmLevelDataFormat.length > 0) {
    pmLevelGraphData = [
      {
        name: "PM 2.5",
        data: pmLevelDataFormat[0],
        color: "#FF708B",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: false,
        },
        // marker: {
        //   lineWidth: 2,
        //   fillColor: "white",
        // },
      },
      {
        name: "PM 10",
        data: pmLevelDataFormat[1],
        color: "#FFB763",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: false,
        },
        // marker: {
        //   lineWidth: 2,
        //   fillColor: "white",
        // },
      },
    ];
  }

  // Sales Graph - Event opr Format

  const salesValueDataFormat = analyticsInfo?.salesData?.map((val) => {
    return val;
  });
  let salesValFormat;
  let salesValueFormat;
  let salesGraphDataFormat;
  let salesValueGraphDataFormat;
  let salesGraphDataNewFormat;
  if (salesValueDataFormat && salesValueDataFormat.length > 0) {
    salesValFormat = salesValueDataFormat[0]?.analytics;
    salesValueFormat = salesValueDataFormat[1]?.analytics;
    salesGraphDataFormat = salesValFormat?.map((val) => {
      return val?.count;
    });
    salesValueGraphDataFormat = salesValueFormat?.map((val) => {
      return val?.count;
    });
    salesGraphDataNewFormat = [
      {
        name: "Food & Snacks",
        data: salesGraphDataFormat,
        color: "#FF9464",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
        },
      },
      {
        name: "Drinks",
        data: salesValueGraphDataFormat,
        color: "#5784F1",
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
        },
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
      },
    ];
  }

  // security incident - entrance event opr - format

  const securityEntranceValueDataFormat =
    analyticsInfo?.securityIncidentsDataEntrance?.map((val) => {
      return val;
    });

  let securityEntranceValFormat;
  let securityEntranceValueFormat;
  let securityEntranceGraphDataFormat;
  let securityEntranceValueGraphDataFormat;
  let securityEntranceGraphDataNewFormat;
  if (
    securityEntranceValueDataFormat &&
    securityEntranceValueDataFormat.length > 0
  ) {
    securityEntranceValFormat = securityEntranceValueDataFormat[0]?.analytics;
    securityEntranceValueFormat = securityEntranceValueDataFormat[1]?.analytics;
    securityEntranceGraphDataFormat = securityEntranceValFormat?.map((val) => {
      return val?.count;
    });
    securityEntranceValueGraphDataFormat = securityEntranceValueFormat?.map(
      (val) => {
        return val?.count;
      }
    );
    securityEntranceGraphDataNewFormat = [
      {
        name: "Security Incident",
        data: securityEntranceGraphDataFormat,
        color: "#FF9464",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
        // tooltip: {
        //   shared: true,
        // },
      },
    ];
  }

  //  Utilisation - Event opr Format

  const utilisationDataFormat = analyticsInfo?.utilisationData?.map((val) => {
    return val;
  });
  let utilityValFormat;
  let utilisationFormat;
  let utilityGraphDataFormat;
  let utilisationGraphDataFormat;
  let utilityGraphDataNewFormat;
  if (utilisationDataFormat && utilisationDataFormat.length > 0) {
    utilityValFormat = utilisationDataFormat[0]?.analytics;
    utilisationFormat = utilisationDataFormat[1]?.analytics;
    utilityGraphDataFormat = utilityValFormat?.map((val) => {
      return val?.count;
    });
    utilisationGraphDataFormat = utilisationFormat?.map((val) => {
      return val?.count;
    });
    utilityGraphDataNewFormat = [
      {
        name: "Entrance",
        data: utilityGraphDataFormat,
        color: "#01C6F1",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
        },
      },
      {
        name: "Exit",
        data: utilisationGraphDataFormat,
        color: "#FFCA0A",
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
        },
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#282828"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
      },
    ];
  }

  // Air Quality Index - Restrooom

  const airQualityRestroomDataFormat =
    analyticsInfo?.airQualityIndexDataRestroom?.map((val) => {
      return val.count;
    });
  const airQualityRestroomGraphData = {
    name: "airQualityRestroom",
    data: airQualityRestroomDataFormat,
    color: "#FF9464",
    // enableMouseTracking: false,

    dataLabels: {
      enabled: false,
    },
    // tooltip: {
    //   shared: false,
    // },
  };

  //reservations graph

  const reservationsDataFormat = analyticsInfo?.reservations?.map((val) => {
    return val.count;
  });
  const reservationsGraphData = {
    name: "reservations",
    data: reservationsDataFormat,
  };

  // Revenue Graph

  const revenueDataFormat = analyticsInfo?.revenue?.map((val) => {
    return val?.analytics?.map((data) => {
      return data?.count;
    });
  });

  let revenueGraphData;

  if (revenueDataFormat && revenueDataFormat.length > 0) {
    revenueGraphData = [
      {
        name: "Meal",
        data: revenueDataFormat[0],
        color: " #36F097",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#36f0978a"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
      },
      {
        name: "Snacks",
        data: revenueDataFormat[1],
        color: "#1ED6FF",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#1ed6ff8a"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
      },
      {
        name: "Drinks",
        data: revenueDataFormat[2],
        color: "#268AFF",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "#268aff9a"], // start
            [1, Highcharts.color("#282828").setOpacity(0).get("rgba")],
          ],
        },
      },
    ];
  }

  // Incident Breakdown - Vending Machine

  const incidentBreakdownVending =
    analyticsInfo?.inventoryBreakdownDataVending?.map((val) => {
      return val?.value;
    });

  let incidentOuterCircleValue;
  let incidentInnerCircleValue;

  if (incidentBreakdownVending && incidentBreakdownVending.length > 0) {
    incidentOuterCircleValue = incidentBreakdownVending[0];
    incidentInnerCircleValue = incidentBreakdownVending[1];
  }

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

  const [graphDataValue, setGraphDataValue] = useState({
    graphDataPoints1: occupancyGraphData,
  });

  useEffect(() => {
    if (tabIndex)
      switch (tabIndex) {
        case 0:
          graphDataValue.graphDataPoints1 = occupancyGraphData;
          break;
        case 3:
          graphDataValue.graphDataPoints1 = orderGraphData;
          break;
        default:
          break;
      }
  }, [tabIndex]);

  return (
    <>
      <Fragment>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} className={analyticsHeader}>
              <Header pageName="ANALYTICS" />
              <Tabs
                initialIndex={0}
                tabsList={tabsList}
                handleTabs={handleTabs}
                dashboardNotificationClassName={customAnalyticsTabs}
                tabIndex={tabIndex}
                pageName={"analytics"}
              />
              <div className={displayFlex}>
                {/* <div>
                  <img className={menuIconImg} src={ResetInactive} />
                </div> */}
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
              </div>
              <Select
                selectList={selectList}
                handleSelect={handleSelect}
                customWidth={"94px"}
                customHeight={"26px"}
                graphName={"parking"}
                pageName={"analytics"}
              />
            </Grid>
          </Grid>
          <Grid container className={analyticsBody}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              className={notificationList}
            >
              <div className={analyticsContainerHeader}>
                <div className={searchBoxSection}>
                  <SearchBox
                    searchInput={searchClass}
                    placeHolder={"Search"}
                    handleSearch={handleSearch}
                    borderRadius={2}
                    borderColor={"1px solid #DCDADA"}
                    searchIsOpen={true}
                    tabIndex={tabIndex}
                  />
                </div>
                <div>
                  <p
                    onClick={handleOverallAnalytics}
                    className={
                      selectedLeftPanelList === "overAll"
                        ? redButtonStyle
                        : redButtonStyleInactive
                    }
                  >
                    {}
                    OVERALL ANALYTICS
                  </p>
                </div>
              </div>
              <div
                className={analyticsNotificationListSection}
                style={{
                  height: !tabActiveIndex
                    ? "calc(100vh - 175px)"
                    : "calc(100vh - 200px)",
                }}
              >
                {searchValue &&
                  searchValue.length > 0 &&
                  searchValue.map((item, index) => {
                    return (
                      <>
                        <div className={analyticsNotificationList}>
                          {item.title === "OVERALL ANALYTICS" ? null : (
                            <div
                              key={index}
                              className={
                                tabActiveIndex === index
                                  ? analyticsNotificationListItemsActive
                                  : analyticsNotificationListItems
                              }
                              onClick={() =>
                                handleLeftPanelList(item?.id, index)
                              }
                            >
                              {item.title}
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Grid container>
                <Grid item xs={12}>
                  {/* Analytics List */}
                </Grid>
                <Grid item xs={12}>
                  <div className={infoIconSection}>
                    {InfoIconList &&
                      InfoIconList.map((value, index) => {
                        return (
                          <InfoIcon
                            color={value.color}
                            title={value.title}
                            tagLine={value.tagLine}
                            icon={value.icon}
                            fabWidth={70}
                            fabHeight={70}
                            imgWidth={40}
                            imgHeight={40}
                            key={index}
                          />
                        );
                      })}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    {/* Graph Section 1 */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      className={analyticsGrid}
                    >
                      <div className={GraphSection}>
                        <div className={graphHeader}>
                          <div className={graphTitle}>
                            {graphData.graphTitleName1}
                          </div>
                          {tabIndex === 3 ? (
                            <div className={mealSection}>
                              <p>Meal</p>
                              <p>Snacks</p>
                              <p>Drinks</p>
                            </div>
                          ) : null}
                        </div>
                        <Chart
                          type={graphData.graphType1}
                          dataPoints={
                            tabIndex === 0
                              ? occupancyGraphData
                              : tabIndex === 1
                              ? crowdFormingGraphData
                              : tabIndex === 2
                              ? electricityGraphData
                              : tabIndex === 3
                              ? orderGraphData
                              : tabIndex === 4
                              ? occupancyRestroomGraphData
                              : tabIndex === 5
                              ? inventoryGraphData
                              : occupancyEntranceGraphData
                          }
                          width={450}
                          height={isFullScreen ? 260 : 320}
                          pageName={"analytics"}
                          xAxisArray={chartXAxis}
                          graphName={graphData.graphName1}
                          // xAxisInterval={xAxisInterval}
                          tooltipShared={tabIndex === 3 ? true : false}
                          dataLabels={tabIndex === 4 ? true : false}
                        />
                      </div>
                    </Grid>
                    {/* Graph Section 2 */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      className={analyticsGrid}
                    >
                      <div className={GraphSection}>
                        <div className={graphHeader}>
                          <div className={graphTitle}>
                            {graphData.graphTitleName2}
                          </div>
                        </div>
                        {tabIndex === 5 ? (
                          <div
                            style={{
                              width: "450px",
                              height: isFullScreen ? "260px" : "320px",
                            }}
                            className={graphCircularSection}
                          >
                            <CircularProgressBar
                              circleParentValue={incidentOuterCircleValue}
                              circleChildValue={incidentInnerCircleValue}
                            />
                            {tabIndex === 5 ? (
                              <div>
                                <div className={inventoryChartLegend}>
                                  <div className={displayFlex}>
                                    <div
                                      className={inventoryChartLegendBorder}
                                      style={{ background: "#FF708B" }}
                                    ></div>{" "}
                                    <p>FOOD & SNACKS</p>
                                  </div>
                                  <div className={displayFlex}>
                                    <div
                                      className={inventoryChartLegendBorder}
                                      style={{ background: "#76FFFF" }}
                                    ></div>{" "}
                                    <p>DRINKS</p>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ) : (
                          <>
                            <Chart
                              type={graphData.graphType2}
                              dataPoints={
                                tabIndex === 0
                                  ? availabilityGraphData
                                  : tabIndex === 1
                                  ? tailGatingGraphData
                                  : tabIndex === 2
                                  ? dataUsedGraphData
                                  : tabIndex === 3
                                  ? reservationsGraphData
                                  : tabIndex === 4
                                  ? sanitisationGraphData
                                  : visitorEntranceGraphData
                              }
                              width={450}
                              height={isFullScreen ? 260 : 320}
                              pageName={"analytics"}
                              xAxisArray={chartXAxis}
                              // gradientColor={"6CDD59"}
                              graphName={graphData.graphName2}
                            />
                          </>
                        )}
                      </div>
                    </Grid>
                    {/* Graph Section 3 */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      className={analyticsGrid}
                    >
                      <div className={GraphSection}>
                        <div className={graphHeader}>
                          <div className={graphTitle}>
                            {graphData.graphTitleName3}
                          </div>
                        </div>
                        {tabIndex === 4 || tabIndex === 6 ? (
                          <>
                            <SplineChart
                              width={450}
                              height={isFullScreen ? 260 : 320}
                              pageName={"analytics"}
                              xAxisArray={chartXAxis}
                              graphColor={
                                tabIndex === 4 ? "#FF9464" : "#2CAD39"
                              }
                              dataPoints={
                                tabIndex === 4
                                  ? waitingTimeDataFormat
                                  : waitingTimeEntranceDataFormat
                              }
                              tooltipShared={false}
                              graphName={
                                tabIndex === 4
                                  ? "waitingTime"
                                  : "waitingTimeEntrance"
                              }
                              graphType={"areaspline"}
                            />
                          </>
                        ) : (
                          <>
                            <Chart
                              type={graphData.graphType3}
                              dataPoints={
                                tabIndex === 0
                                  ? hoursGraphData
                                  : tabIndex === 1
                                  ? unAuthorizeGraphData
                                  : tabIndex === 2
                                  ? airQualityGraphData
                                  : tabIndex === 3
                                  ? visitorsGraphData
                                  : tabIndex === 5
                                  ? temperatureGraphData
                                  : waitingTimeEntranceGraphData
                              }
                              width={450}
                              height={isFullScreen ? 260 : 320}
                              pageName={"analytics"}
                              xAxisArray={chartXAxis}
                              graphName={graphData.graphName3}
                              dataLabels={tabIndex === 4 ? false : true}
                            />
                          </>
                        )}
                      </div>
                    </Grid>
                    {/* Graph Section 4 */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      className={analyticsGrid}
                    >
                      <div className={GraphSection}>
                        <div className={graphHeader}>
                          <div className={graphTitle}>
                            {graphData.graphTitleName4}
                            {tabIndex === 2 ? (
                              <span style={{ textTransform: "lowercase" }}>
                                (µg/m³)
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        {tabIndex === 6 ? (
                          <>
                            <SplineChart
                              width={450}
                              height={isFullScreen ? 260 : 320}
                              pageName={"analytics"}
                              xAxisArray={chartXAxis}
                              graphColor={"#FF9464"}
                              dataPoints={securityIncidentsDataFormat}
                              tooltipShared={false}
                              graphName={"securityIncident"}
                              graphType={"spline"}
                            />
                          </>
                        ) : (
                          <Chart
                            type={graphData.graphType4}
                            dataPoints={
                              tabIndex === 0
                                ? eventOprGraphData
                                : tabIndex === 1
                                ? violationGraphData
                                : tabIndex === 2
                                ? pmLevelGraphData
                                : tabIndex === 3
                                ? occupancyRestaurantGraphData
                                : tabIndex === 4
                                ? airQualityRestroomGraphData
                                : salesGraphDataNewFormat
                            }
                            tabIndex={tabIndex}
                            width={450}
                            height={isFullScreen ? 260 : 320}
                            pageName={"analytics"}
                            xAxisArray={chartXAxis}
                            graphName={graphData.graphName4}
                            tooltipShared={
                              tabIndex === 0 || tabIndex === 2 || tabIndex === 5
                                ? true
                                : false
                            }
                            dataLabels={tabIndex === 3 ? true : false}
                          />
                        )}
                      </div>
                    </Grid>
                    {/* Graph Section 5 */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      className={analyticsGrid}
                    >
                      <div className={GraphSection}>
                        <div className={graphHeader}>
                          <div className={graphTitle}>
                            {graphData.graphTitleName5}
                          </div>
                          {tabIndex === 3 ? (
                            <div className={mealSectionRevenue}>
                              <p>Meal</p>
                              <p>Snacks</p>
                              <p>Drinks</p>
                            </div>
                          ) : null}
                        </div>
                        <Chart
                          type={graphData.graphType5}
                          dataPoints={
                            tabIndex === 0
                              ? incidentGraphData
                              : tabIndex === 1
                              ? incidentSecurityGraphData
                              : tabIndex === 2
                              ? incidentOutdoorGraphData
                              : tabIndex === 3
                              ? revenueGraphData
                              : tabIndex === 4
                              ? oprAlertsRestroomGraphData
                              : tabIndex === 5
                              ? operationalVendingGraphData
                              : oprAlertsEntranceGraphData
                          }
                          width={450}
                          height={isFullScreen ? 260 : 320}
                          pageName={"analytics"}
                          xAxisArray={chartXAxis}
                          gradientColor={"#F88CA1"}
                          graphName={graphData.graphName5}
                          tooltipShared={tabIndex === 3 ? true : false}
                          // graphLineColor={"#FF708B"}
                        />
                      </div>
                    </Grid>
                    {/* Graph Section 6 */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      className={analyticsGrid}
                    >
                      <div
                        className={GraphSection}
                        style={{ position: "relative" }}
                      >
                        <div className={graphHeader}>
                          <div className={graphTitle}>
                            {graphData.graphTitleName6}
                          </div>
                          {tabIndex === 6 ? (
                            <div className={utilisationSection}>
                              <p>Entrance</p>
                              <p>Exit</p>
                            </div>
                          ) : null}
                        </div>

                        <Chart
                          type={graphData.graphType6}
                          dataPoints={
                            tabIndex === 0
                              ? incidentsBreakdownData
                              : tabIndex === 1
                              ? incidentSecurityBreakdownData
                              : tabIndex === 2
                              ? incidentOutdoorBreakdownData
                              : tabIndex === 3
                              ? revenueBreakdownData
                              : tabIndex === 4
                              ? incidentRestroomGraphData
                              : tabIndex === 5
                              ? incidentVendingGraphData
                              : utilityGraphDataNewFormat
                          }
                          width={tabIndex === 0 ? 400 : 450}
                          height={isFullScreen ? 260 : 320}
                          graphName={graphData.graphTitleName6}
                          pageName={"analytics"}
                          xAxisArray={chartXAxis}
                          tootlTipEnabled={
                            tabIndex === 4 || tabIndex === 6 ? true : false
                          }
                          tooltipShared={tabIndex === 6 ? true : false}
                        />

                        {tabIndex === 1 ? (
                          <div>
                            <div className={mealsIncident}>INCIDENTS</div>
                            <div className={mealChartLegend}>
                              <div className={displayFlex}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#FF708B" }}
                                ></div>{" "}
                                <p>CROWD FORMING</p>
                              </div>
                              <div className={displayFlex}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#76FFFF" }}
                                ></div>{" "}
                                <p>UNAUTHORIZE ACCESS</p>
                              </div>
                              <div className={displayFlex}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#E76A34" }}
                                ></div>{" "}
                                <p>VIOLATIONS</p>
                              </div>
                              <div className={displayFlex}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#FBE947" }}
                                ></div>{" "}
                                <p>TAILGATING</p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {tabIndex === 3 ? (
                          <div>
                            <div className={mealChartLegendtab3}>
                              <div className={displayFlexStyle}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#FFBA69" }}
                                ></div>{" "}
                                <p>Food</p>
                              </div>
                              <div className={displayFlexStyle}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#883EDE" }}
                                ></div>{" "}
                                <p>Snacks</p>
                              </div>
                              <div className={displayFlexStyle}>
                                <div
                                  className={mealChartLegendBorder}
                                  style={{ background: "#FF708B" }}
                                ></div>{" "}
                                <p>Drinks</p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <div className={bottomBlackline}></div>
        <MenuBar pageName={"parking"} backGroundClear={backGroundClear} />
      </Fragment>
    </>
  );
};
export default Analytics;
