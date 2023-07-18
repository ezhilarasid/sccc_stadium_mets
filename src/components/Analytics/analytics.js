import React, { useEffect, useState } from "react";
import Chart from "../../elements/Chart/chart";
import Select from "../../elements/Select";
import Tooltip from "elements/Tooltip";
import moment from "moment";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import AQIMeter from "elements/AQIMeter";
import mockSecurityData from "../../mockdata/securityData";
import mockOutdoorsData from "../../mockdata/outdoorsAmbience";
import mockParkingData from "../../mockdata/parkingData";
import mockOperationsData from "../../mockdata/operationsData";
import mockFoodConcessionsData from "../../mockdata/foodConcessions";
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
  AvgWaitTimeIcon,
  StockLevelIcon,
  IncidentIcon,
  SanitisationLevel,
  ElectricityComsumption,
  WifiDataConsumption,
  AirQuality,
  PeoplesIcon,
  RestaurantsFoodConcessionsIcon,
  SnacksIcon,
  IncomeIcon,
} from "../../assets/Icons";
import {
  RootContainer,
  TitleContainer,
  Heading,
  Heading2,
  HeadingItem1,
  HeadingItem2,
  HeadingSubItem,
  FooterContainer,
  FooterItems,
  FooterItemValue,
  FooterIcons,
  ChartSection,
  ChartTitle,
  FooterItemsSecurityIcon,
  FooterItemsSecurityText,
  GraphVarientSection,
  GraphVarientItemSection,
  GraphVarientItemBox,
  GraphVarientItem,
  ChartText,
  SecurityAnalyticsBg,
  FooterItemsSecurityTagLine,
  HeadingSubItemAvailable,
  SpanPercentageStyle,
} from "./styles";
import {
  FlexSpace,
  HorizontalSpace,
  VerticalSpace,
} from "../../elements/Space/space";
import {
  disabilityIcon,
  electricCarIcon,
  gendralCarIcon,
  vipIcon,
} from "../../assets/Icons";
import AlertIcon from "../../assets/Icons/alert.svg";
import TailGatingIcon from "../../assets/Icons/tailGating.svg";
import PeopleIcon from "../../assets/Icons/people.svg";
import RestrictedIcon from "../../assets/Icons/restricted.svg";
import VipIcon from "../../assets/Icons/vip.svg";
import DisabilityIcon from "../../assets/Icons/disability.svg";
import EnergyIcon from "../../assets/Icons/energy.svg";
import CarIcon from "../../assets/Icons/car.svg";
import ProgressBar from "../../elements/ProgressBar";
import theme from "../../theme";

const Analytics = (props) => {
  const { pageName, tabIndexParkingTabs } = props;
  const { width, height } = useWindowDimensions();
  const [chartWidth, setChartWidth] = useState(450);
  // const [chartHeight, setChartHeight] = useState(150);

  useEffect(() => {
    if (width <= 1792) {
      setChartWidth(410);
    } else {
      setChartWidth(440);
    }

    // if (width >= 1120) {
    //   setChartHeight(150);
    // } else {
    //   setChartHeight(150);
    // }
  }, [width]);

  const { values } =
    pageName === "parking"
      ? mockParkingData
      : pageName === "operations"
      ? mockOperationsData
      : pageName === "foodConcessions"
      ? mockFoodConcessionsData
      : "";

  const [tabIndexParking, setTabIndexParking] = useState(0);
  const securityIconList = [
    { icon: AlertIcon, name: "Incidents", value: "56" },
    { icon: TailGatingIcon, name: "Tailgating", value: "26" },
    { icon: PeopleIcon, name: "Crowd Forming", value: "05" },
    { icon: RestrictedIcon, name: "Unauthorize Access", value: "25" },
  ];

  const parkingIconList = [
    { icon: VipIcon, name: "VIP", units: "" },
    { icon: DisabilityIcon, name: "Disable", units: "" },
    { icon: EnergyIcon, name: "Electric Vehicles", units: "" },
    { icon: CarIcon, name: "General", units: "" },
  ];

  useEffect(() => {
    setTabIndexParking(tabIndexParkingTabs);
    setFormatGraph1(monthFomrat);
  }, [tabIndexParkingTabs]);

  const [xAxisInterval, setXAxisInterval] = useState(0);
  const [graph1ObjDataFormate, setGraph1ObjDataFormate] = useState("weekly");

  const parkingAnalyticsData =
    pageName === "parking" ||
    pageName === "operations" ||
    pageName === "foodConcessions"
      ? values && values[tabIndexParking]?.analytics
      : null;

  const securityAnalyticsData =
    pageName === "security"
      ? mockSecurityData && mockSecurityData?.values[0]?.analytics
      : null;

  const outdoorsAnalyticsData =
    pageName === "outdoors"
      ? mockOutdoorsData && mockOutdoorsData?.analytics
      : null;

  const labelData = values && values[tabIndexParking];

  const [parkingAnalyticsGraphData, setParkingAnalyticsGraphData] = useState();
  const [securityAnalyticsGraphData, setSecurityAnalyticsGraphData] =
    useState();
  const [outdoorsAnalyticsGraphData, setOutdoorsAnalyticsGraphData] =
    useState();

  const [analyticsLabelData, setAnalyticsLabelData] = useState(
    values && values[tabIndexParking]
  );

  useEffect(() => {
    if (
      pageName === "parking" ||
      pageName === "operations" ||
      pageName === "foodConcessions"
    ) {
      setParkingAnalyticsGraphData(
        parkingAnalyticsData[graph1ObjDataFormate]?.analytics
      );
    }
    if (pageName === "security") {
      setSecurityAnalyticsGraphData(
        securityAnalyticsData?.weekly?.analyticsData
      );
    }

    if (pageName === "outdoors") {
      setOutdoorsAnalyticsGraphData(outdoorsAnalyticsData?.weekly);
    }
  }, [parkingAnalyticsData, securityAnalyticsData, outdoorsAnalyticsData]);

  useEffect(() => {
    setAnalyticsLabelData(labelData);
  }, [labelData]);

  useEffect(() => {
    if (
      pageName === "parking" ||
      pageName === "operations" ||
      pageName === "foodConcessions"
    ) {
      getParkingAnalyticsData();
    }
    if (pageName === "security") {
      getSecurityAnalyticsData();
    }
    if (pageName === "outdoors") {
      getOutdoorsAnalyticsData();
    }
  }, [
    parkingAnalyticsGraphData,
    securityAnalyticsGraphData,
    outdoorsAnalyticsGraphData,
  ]);

  const [parkingStatsAnalyticsGraphData, setParkingStatsAnalyticsGraphData] =
    useState([]);

  const getParkingAnalyticsData = () => {
    let data;

    data = [
      {
        data: parkingStatsgraphApiData(),
        // name: "Current Year",
        // color: "#949FFF",
        lineColor: "#FF5910",
      },
    ];

    setParkingStatsAnalyticsGraphData(data);
  };

  const getSecurityAnalyticsData = () => {
    let data;

    data = [
      {
        data: securityStatsgraphApiData("tailgating"),
        name: "Tailgating",
        lineColor: "#ECE115",
        color: "#ECE115",
      },
      {
        data: securityStatsgraphApiData("crowdforming"),
        name: "Crowd Forming",
        lineColor: "#21E8D0",
        color: "#21E8D0",
      },
      {
        data: securityStatsgraphApiData("unauthorizedaccess"),
        name: "Unauthorized Access",
        lineColor: "#FA7A43",
        color: "#FA7A43",
      },
    ];

    setParkingStatsAnalyticsGraphData(data);
  };

  const getOutdoorsAnalyticsData = () => {
    let data;

    data = [
      {
        data: parkingStatsgraphApiData(),
        // name: "Current Year",
        // color: "#949FFF",
        lineColor: "#FF5910",
      },
    ];

    setParkingStatsAnalyticsGraphData(data);
  };

  const parkingStatsgraphApiData = (yearType) => {
    let dayDataNew = [];
    if (parkingAnalyticsGraphData || outdoorsAnalyticsGraphData) {
      let graphPointsList =
        pageName === "parking" ||
        pageName === "operations" ||
        pageName === "foodConcessions"
          ? parkingAnalyticsGraphData
          : outdoorsAnalyticsGraphData;

      if (graphPointsList) {
        if (yearType) {
          for (let i = 0; i < graphPointsList.length; i++) {
            if (
              graphPointsList[i] &&
              (yearType === "Current Year" || yearType === "Last Year") &&
              graphPointsList[i].metricName === yearType
            ) {
              {
                if (graphPointsList[i].analytics)
                  for (
                    let j = 0;
                    j < graphPointsList[i].analytics.length;
                    j++
                  ) {
                    dayDataNew.push([
                      new Date(graphPointsList[i].analytics[j].node).getTime(),
                      graphPointsList[i].analytics[j].count,
                    ]);
                  }
              }
            }
          }
        } else {
          for (let i = 0; i < graphPointsList.length; i++) {
            dayDataNew.push([
              // new Date(graphPointsList[i]?.node).getTime(),
              graphPointsList[i]?.count,
            ]);
          }
        }
      }
    }
    return dayDataNew;
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
    xAxisArray.length - 10,
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
  const xAxisWeek = Array(7)
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
    xAxisNewValue.length - 12,
    xAxisNewValue.length
  );

  const [xAxisChartData, setXAxisChartData] = useState(xAxisNewValueWeek);

  const securityStatsgraphApiData = (lineType) => {
    let dayDataNew = [];
    if (securityAnalyticsGraphData) {
      let graphPointsList = securityAnalyticsGraphData;
      if (graphPointsList) {
        for (let i = 0; i < graphPointsList.length; i++) {
          if (
            graphPointsList[i] &&
            (lineType === "tailgating" ||
              lineType === "crowdforming" ||
              lineType === "unauthorizedaccess") &&
            graphPointsList[i].metricName === lineType
          ) {
            {
              if (graphPointsList[i].analytics)
                for (let j = 0; j < graphPointsList[i].analytics.length; j++) {
                  dayDataNew.push([
                    // new Date(graphPointsList[i].analytics[j].node).getTime(),
                    graphPointsList[i].analytics[j].count,
                  ]);
                }
            }
          }
        }
      }
    }
    return dayDataNew;
  };

  const selectList = [
    { label: "Day", value: "Day" },
    { label: "Week", value: "Week" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ];

  const monthFomrat = "{value:%m/%e}";
  const dayFormat = "{value:%H:00}";
  const yearFormat = "{value:%b}";
  const [formatGraph1, setFormatGraph1] = useState(monthFomrat);
  const [formatGraph2, setFormatGraph2] = useState(monthFomrat);

  const handleSelect = (val, graphName) => {
    if (
      graphName === "parking" ||
      pageName === "operations" ||
      pageName === "foodConcessions"
    ) {
      switch (val) {
        case "Day":
          setGraph1ObjDataFormate("day");
          setFormatGraph1(dayFormat);
          setParkingAnalyticsGraphData(parkingAnalyticsData?.day?.analytics);
          setXAxisChartData(xAxisNewtime);
          setXAxisInterval(4);

          break;
        case "Week":
          setGraph1ObjDataFormate("weekly");
          setFormatGraph1(monthFomrat);
          setParkingAnalyticsGraphData(parkingAnalyticsData?.weekly?.analytics);
          setXAxisChartData(xAxisNewValueWeek);
          setXAxisInterval(0);

          break;
        case "Month":
          setGraph1ObjDataFormate("monthly");
          setFormatGraph1(monthFomrat);
          setParkingAnalyticsGraphData(
            parkingAnalyticsData?.monthly?.analytics
          );
          setXAxisChartData(xAxisNewValueMonth);
          setXAxisInterval(5);
          break;
        case "Year":
          setGraph1ObjDataFormate("yearly");
          setFormatGraph1(yearFormat);
          setParkingAnalyticsGraphData(parkingAnalyticsData?.yearly?.analytics);
          setXAxisChartData(xAxisValueYear);
          setXAxisInterval(4);
          break;
        default:
          setFormatGraph1(monthFomrat);
          setParkingAnalyticsGraphData(parkingAnalyticsData?.day?.analytics);
          break;
      }
    }

    if (graphName === "security") {
      switch (val) {
        case "Day":
          // setGraph1ObjDataFormate("day");
          setFormatGraph2(dayFormat);
          setSecurityAnalyticsGraphData(
            securityAnalyticsData?.day?.analyticsData
          );
          setXAxisChartData(xAxisNewtime);
          setXAxisInterval(4);
          break;
        case "Week":
          // setGraph1ObjDataFormate("weekly");
          setFormatGraph2(monthFomrat);
          setSecurityAnalyticsGraphData(
            securityAnalyticsData?.weekly?.analyticsData
          );
          setXAxisChartData(xAxisNewValueWeek);
          setXAxisInterval(0);
          break;
        case "Month":
          // setGraph1ObjDataFormate("monthly");
          setFormatGraph2(monthFomrat);
          setSecurityAnalyticsGraphData(
            securityAnalyticsData?.monthly?.analyticsData
          );
          setXAxisChartData(xAxisNewValueMonth);
          setXAxisInterval(5);
          break;
        case "Year":
          // setGraph1ObjDataFormate("yearly");
          setFormatGraph2(yearFormat);
          setSecurityAnalyticsGraphData(
            securityAnalyticsData?.yearly?.analyticsData
          );
          setXAxisChartData(xAxisValueYear);
          setXAxisInterval(4);
          break;
        default:
          setFormatGraph2(monthFomrat);
          setSecurityAnalyticsGraphData(
            securityAnalyticsData?.day?.analyticsData
          );
          break;
      }
    }

    if (graphName === "outdoors") {
      switch (val) {
        case "Day":
          setGraph1ObjDataFormate("day");
          setFormatGraph2(dayFormat);
          setOutdoorsAnalyticsGraphData(outdoorsAnalyticsData?.day);
          setXAxisChartData(xAxisNewtime);
          setXAxisInterval(4);
          break;
        case "Week":
          setGraph1ObjDataFormate("weekly");
          setFormatGraph2(monthFomrat);
          setOutdoorsAnalyticsGraphData(outdoorsAnalyticsData?.weekly);
          setXAxisChartData(xAxisNewValueWeek);
          setXAxisInterval(0);
          break;
        case "Month":
          setGraph1ObjDataFormate("monthly");
          setFormatGraph2(monthFomrat);
          setOutdoorsAnalyticsGraphData(outdoorsAnalyticsData?.monthly);
          setXAxisChartData(xAxisNewValueMonth);
          setXAxisInterval(5);
          break;
        case "Year":
          setGraph1ObjDataFormate("yearly");
          setFormatGraph2(yearFormat);
          setOutdoorsAnalyticsGraphData(outdoorsAnalyticsData?.yearly);
          setXAxisChartData(xAxisValueYear);
          setXAxisInterval(4);
          break;
        default:
          setFormatGraph2(monthFomrat);
          setOutdoorsAnalyticsGraphData(outdoorsAnalyticsData?.weekly);
          setXAxisChartData(xAxisNewValueWeek);
          setXAxisInterval(0);
          break;
      }
    }
  };

  let occupiedValue = analyticsLabelData?.occupiedPercentage;

  useEffect(() => {
    if (pageName === "parking") {
      if (analyticsLabelData) props.circularBarValue(occupiedValue);
    }
  }, [analyticsLabelData]);

  return (
    <>
      <RootContainer>
        <TitleContainer>
          <Heading>
            <HeadingItem1>ANALYTICS</HeadingItem1>
            <HeadingItem2>
              <HeadingSubItem>{analyticsLabelData?.occupied}</HeadingSubItem>
              <HeadingSubItem totalCount={true}>
                {pageName === "security" || pageName === "outdoors" ? (
                  <div className="emtpy">{""}</div>
                ) : (
                  <div className="emptySlash">/</div>
                )}
              </HeadingSubItem>
              <HeadingSubItemAvailable>
                <div>{analyticsLabelData?.available}</div>
              </HeadingSubItemAvailable>
            </HeadingItem2>
          </Heading>
          <Heading2>
            <Select
              selectList={selectList}
              handleSelect={handleSelect}
              customWidth={"94px"}
              customHeight={"26px"}
              graphName={pageName}
              tabIndexParkingTabs={
                pageName === "parking" ||
                pageName === "operations" ||
                pageName === "foodConcessions"
                  ? formatGraph1
                  : formatGraph2
              }
            />
          </Heading2>
        </TitleContainer>
        <VerticalSpace count={3} />
        <ChartSection>
          <ChartTitle>
            {pageName === "security" ? (
              <ChartText>Security Alerts</ChartText>
            ) : pageName === "operations" ? (
              <ChartText>Total Visitors</ChartText>
            ) : pageName === "outdoors" ? (
              <ChartText>Air Quality Index</ChartText>
            ) : pageName === "foodConcessions" ? (
              <ChartText>Total Orders</ChartText>
            ) : (
              <ChartText>Parking Occupancy</ChartText>
            )}
            {pageName === "security" ? (
              <GraphVarientSection>
                <GraphVarientItemSection>
                  <GraphVarientItemBox
                    varient={"Tailgating"}
                  ></GraphVarientItemBox>
                  <GraphVarientItem>Tailgating</GraphVarientItem>
                </GraphVarientItemSection>
                <GraphVarientItemSection>
                  <GraphVarientItemBox
                    varient={"crowdForming"}
                  ></GraphVarientItemBox>
                  <GraphVarientItem>Crowd Forming</GraphVarientItem>
                </GraphVarientItemSection>
                <GraphVarientItemSection>
                  <GraphVarientItemBox
                    varient={"unauthorizedAccess"}
                  ></GraphVarientItemBox>
                  <GraphVarientItem>Unauthorized Access</GraphVarientItem>
                </GraphVarientItemSection>
              </GraphVarientSection>
            ) : null}
          </ChartTitle>
          <VerticalSpace count={3} />
          <Chart
            type={"spline"}
            dataPoints={parkingStatsAnalyticsGraphData}
            width={chartWidth}
            height={150}
            tooltipShared={pageName === "security" ? true : false}
            format={
              pageName === "parking" ||
              pageName === "operations" ||
              pageName === "foodConcessions"
                ? formatGraph1
                : formatGraph2
            }
            pageName={pageName}
            xAxisArray={xAxisChartData}
            xAxisInterval={xAxisInterval}
            // tooltipShared={pageName === "security" ? true : false}
          />
        </ChartSection>

        <VerticalSpace count={2} />
        {pageName === "security" ? (
          <>
            <SecurityAnalyticsBg>
              <FooterItemsSecurityTagLine>Today</FooterItemsSecurityTagLine>
              <FooterItemsSecurityText>
                {securityIconList &&
                  securityIconList.length > 0 &&
                  securityIconList.map((item, index) => {
                    return (
                      <FooterItemValue key={index}>
                        {item.value}
                      </FooterItemValue>
                    );
                  })}
              </FooterItemsSecurityText>
              <FooterItemsSecurityIcon>
                {securityIconList &&
                  securityIconList.length > 0 &&
                  securityIconList.map((item, index) => {
                    return (
                      <Tooltip tooltipValue={item?.name} key={index}>
                        <img
                          src={item?.icon}
                          alt="security Icon"
                          key={index}
                          width={25}
                          height={25}
                        />
                      </Tooltip>
                    );
                  })}
              </FooterItemsSecurityIcon>
            </SecurityAnalyticsBg>
          </>
        ) : pageName === "parking" ? (
          <FooterContainer>
            <FooterItems>
              <Tooltip tooltipValue={"Occupied "}>
                <FooterItemValue>
                  {analyticsLabelData?.iconsInfo[0]?.occupied}
                </FooterItemValue>
              </Tooltip>
              <FooterIcons>
                <Tooltip tooltipValue={"VIP"}>
                  <img src={vipIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
              <FooterItemValue totalCount={true}>
                <Tooltip tooltipValue={"Available "}>
                  {analyticsLabelData?.iconsInfo[0]?.available}
                </Tooltip>
              </FooterItemValue>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[1]?.occupied}
                </Tooltip>
              </FooterItemValue>
              <FooterIcons>
                <Tooltip tooltipValue={"Accessibility"}>
                  <img src={disabilityIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
              <FooterItemValue totalCount={true}>
                <Tooltip tooltipValue={"Available "}>
                  {analyticsLabelData?.iconsInfo[1]?.available}
                </Tooltip>
              </FooterItemValue>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[2]?.occupied}
                </Tooltip>
              </FooterItemValue>

              <FooterIcons>
                <Tooltip tooltipValue={"Electric Vehicle"}>
                  <img src={electricCarIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
              <FooterItemValue totalCount={true}>
                <Tooltip tooltipValue={"Available "}>
                  {analyticsLabelData?.iconsInfo[2]?.available}
                </Tooltip>
              </FooterItemValue>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[3]?.occupied}
                </Tooltip>
              </FooterItemValue>

              <FooterIcons>
                <Tooltip tooltipValue={"General"}>
                  <img src={gendralCarIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
              <FooterItemValue totalCount={true}>
                <Tooltip tooltipValue={"Available "}>
                  {analyticsLabelData?.iconsInfo[3]?.available}
                </Tooltip>
              </FooterItemValue>
            </FooterItems>
            <FooterItems>
              <ProgressBar
                // progress={"50"}
                progress={analyticsLabelData?.occupiedPercentage}
                strokeColor={"#FFF744"}
                circleTitle={"OCCUPIED"}
              />
            </FooterItems>
          </FooterContainer>
        ) : pageName === "operations" ? (
          <FooterContainer>
            <FooterItems>
              <Tooltip tooltipValue={"Occupied "}>
                <FooterItemValue>
                  {analyticsLabelData?.iconsInfo[0]?.occupied}
                </FooterItemValue>
              </Tooltip>
              <FooterIcons>
                <Tooltip tooltipValue={"Avg Wait Time"}>
                  <img src={AvgWaitTimeIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[1]?.occupied}
                </Tooltip>
              </FooterItemValue>
              <FooterIcons>
                <Tooltip tooltipValue={"Stock Level"}>
                  <img src={StockLevelIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[2]?.occupied}
                </Tooltip>
              </FooterItemValue>

              <FooterIcons>
                <Tooltip tooltipValue={"Incident"}>
                  <img src={IncidentIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[3]?.occupied}
                </Tooltip>
              </FooterItemValue>

              <FooterIcons>
                <Tooltip tooltipValue={"Sanitisation Level"}>
                  <img src={SanitisationLevel} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>

            <FooterItems>
              <ProgressBar
                // progress={"50"}
                progress={analyticsLabelData?.occupiedPercentage}
                strokeColor={"#FFF744"}
                circleTitle={"OCCUPIED"}
              />
            </FooterItems>
          </FooterContainer>
        ) : pageName === "outdoors" ? (
          <FooterContainer>
            <FooterItems className="outdoor">
              <Tooltip tooltipValue={"Electricity Consumption"}>
                <FooterItemValue>
                  {mockOutdoorsData?.iconsInfo?.electricityConsumption}
                  <SpanPercentageStyle>KW</SpanPercentageStyle>
                </FooterItemValue>
              </Tooltip>
              <FooterIcons className="outdoor-icon">
                <Tooltip tooltipValue={"Electricity Consumption"}>
                  <img
                    src={ElectricityComsumption}
                    width={"25px"}
                    height={"25px"}
                  />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems className="outdoor">
              <FooterItemValue>
                <Tooltip tooltipValue={"Data Consumption"}>
                  {mockOutdoorsData?.iconsInfo?.wifi}
                  <SpanPercentageStyle>GB</SpanPercentageStyle>
                </Tooltip>
              </FooterItemValue>
              <FooterIcons className="outdoor-icon">
                <Tooltip tooltipValue={"WiFi"}>
                  <img
                    src={WifiDataConsumption}
                    width={"25px"}
                    height={"25px"}
                  />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems className="outdoor">
              <FooterItemValue>
                <Tooltip tooltipValue={"Air Quality"}>
                  {mockOutdoorsData?.iconsInfo?.airQuality}
                  <SpanPercentageStyle>µg/m³</SpanPercentageStyle>
                </Tooltip>
              </FooterItemValue>

              <FooterIcons className="outdoor-icon">
                <Tooltip tooltipValue={"Air Quality"}>
                  <img src={AirQuality} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>

            <FooterItems>
              <AQIMeter
                width={200}
                value={mockOutdoorsData?.aqiValue[graph1ObjDataFormate]}
              />
            </FooterItems>
          </FooterContainer>
        ) : pageName === "foodConcessions" ? (
          <FooterContainer>
            <FooterItems>
              <Tooltip tooltipValue={"Occupied "}>
                <FooterItemValue>
                  {analyticsLabelData?.iconsInfo[0]?.occupied}
                </FooterItemValue>
              </Tooltip>
              <FooterIcons>
                <Tooltip tooltipValue={"Visitors"}>
                  <img src={PeoplesIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[1]?.occupied}
                </Tooltip>
              </FooterItemValue>
              <FooterIcons>
                <Tooltip tooltipValue={"Orders"}>
                  <img
                    src={RestaurantsFoodConcessionsIcon}
                    width={"25px"}
                    height={"25px"}
                  />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[2]?.occupied}
                  <SpanPercentageStyle>%</SpanPercentageStyle>
                </Tooltip>
              </FooterItemValue>

              <FooterIcons>
                <Tooltip tooltipValue={"Inventory"}>
                  <img src={SnacksIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>
            <FooterItems>
              <FooterItemValue>
                <Tooltip tooltipValue={"Occupied "}>
                  {analyticsLabelData?.iconsInfo[3]?.occupied}
                  <SpanPercentageStyle>K</SpanPercentageStyle>
                </Tooltip>
              </FooterItemValue>

              <FooterIcons>
                <Tooltip tooltipValue={"Income"}>
                  <img src={IncomeIcon} width={"25px"} height={"25px"} />
                </Tooltip>
              </FooterIcons>
            </FooterItems>

            <FooterItems>
              <ProgressBar
                // progress={"50"}
                progress={analyticsLabelData?.occupiedPercentage}
                strokeColor={"#FFF744"}
                circleTitle={"OCCUPIED"}
              />
            </FooterItems>
          </FooterContainer>
        ) : null}
      </RootContainer>
    </>
  );
};

export default Analytics;
