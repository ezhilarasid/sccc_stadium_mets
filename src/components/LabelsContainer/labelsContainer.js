import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Tooltip from "elements/Tooltip";
import VipIcon from "../../assets/Icons/vip.svg";
import DisabilityIcon from "../../assets/Icons/disability.svg";
import EnergyIcon from "../../assets/Icons/energy.svg";
import CarIcon from "../../assets/Icons/car.svg";
import AlertIcon from "../../assets/Icons/alert.svg";
import TailGatingIcon from "../../assets/Icons/tailGating.svg";
import PeopleIcon from "../../assets/Icons/people.svg";
import RestrictedIcon from "../../assets/Icons/restricted.svg";
import EnergyChargeIcon from "../../assets/Icons/energyCharge.svg";
import DropIcon from "../../assets/Icons/drop.svg";
import EnergyMeterIcon from "../../assets/Icons/energyMeter.svg";
import Co2Icon from "../../assets/Icons/co2.svg";
import BulbIcon from "../../assets/Icons/bulb.svg";
import WifiIcon from "../../assets/Icons/wifi.svg";
import WaveIcon from "../../assets/Icons/wave.svg";
import DustParticles from "../../assets/Icons/dustParticles.svg";
import humanIcon from "../../assets/Union.png";
import DollarIcon from "../../assets/Icons/dollar.svg";
import ClockIcon from "../../assets/Icons/time.svg";
import SettingsIcon from "../../assets/Icons/settings.svg";
import CircularBar from "../../elements/CircularBar/circularBar";
import GreenTriangleIcon from "../../assets/Icons/greenTriangle.svg";
import Label6Icon1 from "../../assets/Icons/label6Icon1.svg";
import Label6Icon2 from "../../assets/Icons/label6Icon2.svg";
import Label6Icon3 from "../../assets/Icons/label6Icon3.svg";
import Label6Icon4 from "../../assets/Icons/label6Icon4.svg";
import useStyles from "./styles";

const LabelsContainer = (props) => {
  const { cardData } = props;
  const {
    sliderMainClass,
    sliderHeading,
    sliderRow2,
    sliderRow3,
    sliderValueClass,
    sliderImageClass,
    sliderRow4,
    sliderRow4Left,
    sliderRow4Right,
    availableValue,
    occupiedValue,
    spanBar,
    sliderLeftRow2,
    swiperClass,
    swiperClassOne,
    progressBarClass,
    displayFlex,
    progressBarClassActive,
    innerDisplayFlex,
    progressBarClassActiveOrange,
    progressBarClassActiveYellow,
    humanIconSection,
    sliderRow4Security,
    percentage,
    wifiUser,
    humanPercentageSection,
    analyticsRow4Left,
    analyticsRow4Right,
    thirtySix,
    analyticssliderRow4,
    label6Row4,
    label6Row4Box,
    label6Row4Name,
    displayFlex1,
    availableSection,
    dflexJustify,
    dFlex,
    sliderValueClassNew,
    labelStyleTop,
    labelStyleBottom,
    sliderRow2Icons,
    sliderRow2CommonClass,
    resolvedText,
    thiryPercenter,
    swiperContainer,
    swiperLeftNavigation,
    swiperRightNavigation
  } = useStyles();

  const navigate = useNavigate();

  const [swiper, setSwiper] = useState(null)
  const [scrollDirection, setScrollDirection] = useState('')

  const parkingIconList = [
    { icon: VipIcon, name: "VIP", units: "" },
    { icon: DisabilityIcon, name: "Disable", units: "" },
    { icon: EnergyIcon, name: "Electric Vehicles", units: "" },
    { icon: CarIcon, name: "General", units: "" },
  ];

  const securityIconList = [
    { icon: AlertIcon, name: "Incidents", units: "" },
    { icon: TailGatingIcon, name: "Tailgating", units: "" },
    { icon: PeopleIcon, name: "Crowd Forming", units: "" },
    { icon: RestrictedIcon, name: "Unauthorize Access", units: "" },
  ];

  const energyIconList = [
    { icon: EnergyChargeIcon, name: "Electricity Consumption", units: "Kwh" },
    { icon: DropIcon, name: "Water Consumption", units: "Kwh" },
    { icon: EnergyMeterIcon, name: "HVAC", units: "Kwh" },
    { icon: Co2Icon, name: "Co2 Emmission", units: "Kg" },
  ];

  const outdoorIconList = [
    { icon: BulbIcon, name: "Electricity Consumed", units: "KW" },
    { icon: WifiIcon, name: "Wifi", units: "GB" },
    { icon: WaveIcon, name: "Air Quality Index", units: "" },
    { icon: DustParticles, name: "Dust Level", units: "" },
  ];

  const analyticsIconList = [
    { icon: DollarIcon, name: "Income", units: "" },
    { icon: ClockIcon, name: "Hours Saved", units: "Hrs" },
    { icon: AlertIcon, name: "Total Incidents", units: "" },
    { icon: SettingsIcon, name: "Total Operational Alerts", units: "" },
  ];
  const fanExperienceIconList = [
    { icon: Label6Icon1, name: "Fan Events", units: "" },
    { icon: Label6Icon2, name: "Fan Engagement", units: "%" },
    { icon: Label6Icon3, name: "Fan Events", units: "" },
    { icon: Label6Icon4, name: "Total Fans", units: "" },
  ];

  const handleCardClick = (id) => {
    if (id === "parking") {
      navigate("/parking", { state: id });
    } else if (id === "security") {
      navigate("/security", { state: id });
    }
  };

  const circularDataParking = [
    {
      title: "Available",
      value: 50,
      color: "#FFF744",
    },
    {
      title: "Occupied ",
      value: 50,
      color: "rgba(255, 255, 255, 0.1)",
    },
  ];

  const circularDataEnergy = [
    {
      title: "Energy Consumed",
      value: 34,
      color: "#6EDA5D",
    },
    {
      title: "",
      value: 66,
      color: "rgba(255, 255, 255, 0.1)",
    },
  ];

  const circularDataFanExperince = [
    {
      title: "Ads",
      value: 60,
      color: "#67FF4F",
    },
    {
      title: "Rewards ",
      value: 20,
      color: "#FFF744",
    },
    {
      title: "Events ",
      value: 60,
      color: "#41CAF5",
    },
  ];

  const circularDataFoodConcessions = [
    {
      title: "Meals",
      value: 50,
      color: "#FC8456",
    },
    {
      title: "Snacks ",
      value: 35,
      color: "#A593FC",
    },
    {
      title: "Drinks ",
      value: 15,
      color: "#FFD646",
    },
  ];

  const circularDataOperationsInfra = [
    {
      title: "Occupied",
      value: 35,
      color: "#6EDA5D",
    },
    {
      title: "Available",
      value: 65,
      color: "rgba(255, 255, 255, 0.1)",
    },
  ];

  const scrollLabels = (direction) => {
    if(direction === 'left') {
      swiper?.slidePrev(3000)
    }
    else {
      swiper?.slideNext(3000)
    }
  }

  return (
    <div className={swiperContainer} >
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          onSwiper={swiperInstance => setSwiper(swiperInstance)}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1180: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {cardData &&
            cardData.length > 0 &&
            cardData.map((value, index) => {
              return (
                <div>
                  <SwiperSlide className={swiperClassOne} key={"label1" + index}>
                    {(isVisible) => isVisible && console.log("SWIPER SLIDE", index)}
                    <div
                      className={swiperClass}
                      // onClick={() => handleCardClick(value?.id)}
                    >
                      {value?.id === "parking" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <div
                                    className={sliderRow2CommonClass}
                                    key={"label2" + index}
                                  >
                                    {" "}
                                    <div className={sliderValueClass}>
                                      {val.total}{" "}
                                      <span style={{ fontSize: "13px" }}>
                                        {(val.type === "electricity") |
                                        (val.type === "water") |
                                        (val.type === "hvac")
                                          ? "KW"
                                          : val.type === "co2"
                                          ? "Kg"
                                          : val.type === "electricity consumed"
                                          ? "KW"
                                          : val.type === "wifi"
                                          ? "GB"
                                          : ""}
                                      </span>
                                    </div>
                                    <div className={sliderRow2Icons}>
                                      <Tooltip tooltipValue={val?.type}>
                                        <img
                                          className={sliderImageClass}
                                          src={val?.icon}
                                          alt="Parking Icon"
                                        />
                                      </Tooltip>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    {" "}
                                    <div
                                      className={sliderValueClassNew}
                                      key={"label3" + index}
                                    >
                                      {val.available}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4}>
                              <div className={sliderRow4Left}>
                                <div className={dFlex}>
                                  <p className={availableValue}>
                                    {value?.occupied}
                                  </p>
                                  <span className={spanBar}>/</span>
                                  <p className={occupiedValue}>
                                    {value?.available}
                                  </p>
                                </div>
                                <div>
                                  {" "}
                                  <p className={sliderLeftRow2}>
                                    OCCUPIED VS AVAILABLE
                                  </p>
                                </div>
                              </div>
                              <div className={sliderRow4Right}>
                                <CircularBar
                                  circularData={circularDataParking}
                                  circularInnerText={"OCCUPIED"}
                                  circularInnerValue={"50"}
                                  progressValue={value.occupiedPercentage}
                                  percentage={true}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "security" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    <div
                                      className={sliderRow2CommonClass}
                                      key={"label4" + index}
                                    >
                                      {" "}
                                      <div className={sliderValueClass}>
                                        {val.total}{" "}
                                        <span style={{ fontSize: "13px" }}>
                                          {(val.type === "electricity") |
                                          (val.type === "water") |
                                          (val.type === "hvac")
                                            ? "KW"
                                            : val.type === "co2"
                                            ? "Kg"
                                            : val.type === "electricity consumed"
                                            ? "KW"
                                            : val.type === "wifi"
                                            ? "GB"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className={sliderRow2Icons}>
                                        <Tooltip tooltipValue={val?.type}>
                                          <img
                                            className={sliderImageClass}
                                            src={val?.icon}
                                            alt="Parking Icon"
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4Security}>
                              <div className={displayFlex}>
                                <p className={resolvedText}>RESOLVED</p>
                                <div className={innerDisplayFlex}>
                                  <p className={progressBarClassActive}></p>
                                  <p className={progressBarClassActive}></p>
                                  <p className={progressBarClassActive}></p>
                                  <p className={progressBarClassActive}></p>
                                  <p className={progressBarClass}></p>
                                </div>
                              </div>
                              <div className={displayFlex}>
                                <p className={resolvedText}>OUTSTANDING</p>
                                <div className={innerDisplayFlex}>
                                  <p className={progressBarClassActiveOrange}></p>
                                  <p className={progressBarClassActiveOrange}></p>
                                  <p className={progressBarClass}></p>
                                  <p className={progressBarClass}></p>
                                  <p className={progressBarClass}></p>
                                </div>
                              </div>
                              <div className={displayFlex}>
                                <p className={resolvedText}>TODAY</p>
                                <div className={innerDisplayFlex}>
                                  <p className={progressBarClassActiveYellow}></p>
                                  <p className={progressBarClassActiveYellow}></p>
                                  <p className={progressBarClass}></p>
                                  <p className={progressBarClass}></p>
                                  <p className={progressBarClass}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "energy" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    {" "}
                                    <div
                                      className={sliderRow2CommonClass}
                                      key={"label5" + index}
                                    >
                                      {" "}
                                      <div className={sliderValueClass}>
                                        {val.total}{" "}
                                        <span style={{ fontSize: "13px" }}>
                                          {(val.type ===
                                            "Electricity Consumption") |
                                          (val.type === "Water Consumption") |
                                          (val.type === "HVAC")
                                            ? "KW"
                                            : val.type === "Co2 Emmission"
                                            ? "Kg"
                                            : val.type === "electricity consumed"
                                            ? "KW"
                                            : val.type === "wifi"
                                            ? "GB"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className={sliderRow2Icons}>
                                        <Tooltip tooltipValue={val?.type}>
                                          <img
                                            className={sliderImageClass}
                                            src={val?.icon}
                                            alt="Parking Icon"
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4}>
                              <div
                                className={`${sliderRow4Left} m-t-5`}
                                style={{ marginTop: 5 }}
                              >
                                <div className={dFlex}>
                                  <p className={availableValue}>
                                    {value.energyConsumption} <span>KW</span>
                                  </p>
                                </div>
                                <div>
                                  {" "}
                                  <p className={`${sliderLeftRow2} m-t-5`}>
                                    ENERGY CONSUMPTION
                                  </p>
                                </div>
                              </div>
                              <div className={sliderRow4Right}>
                                <CircularBar
                                  circularData={circularDataEnergy}
                                  circularInnerText={"ENERGY SAVED"}
                                  circularInnerValue={value.energySavedPercentage}
                                  percentage={true}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "outdoors" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    {" "}
                                    <div
                                      className={sliderRow2CommonClass}
                                      key={"label6" + index}
                                    >
                                      {" "}
                                      <div className={sliderValueClass}>
                                        {val.total}{" "}
                                        <span style={{ fontSize: "13px" }}>
                                          {val.type === "Electricity Consumed"
                                            ? "KW"
                                            : val.type === "Wifi"
                                            ? "GB"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className={sliderRow2Icons}>
                                        <Tooltip tooltipValue={val?.type}>
                                          <img
                                            className={sliderImageClass}
                                            src={val?.icon}
                                            alt="Parking Icon"
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4}>
                              <div className={sliderRow4Left}>
                                <div className={innerDisplayFlex}>
                                  <div>
                                    <p className={availableValue}>
                                      {value.co2level}
                                    </p>
                                    <p className={sliderLeftRow2}>CO2 LEVEL</p>
                                  </div>
                                  <div>
                                    <p className={availableValue}>
                                      {value.voclevel}
                                    </p>
                                    <p className={sliderLeftRow2}>VOC LEVEL</p>
                                  </div>
                                  <div className={humanPercentageSection}>
                                    <p className={availableValue}>49%</p>
                                    <p className={sliderLeftRow2}>WIFI USER</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "analytics" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    {" "}
                                    <div
                                      className={sliderRow2CommonClass}
                                      key={"label9" + index}
                                    >
                                      {" "}
                                      <div className={sliderValueClass}>
                                        {val.total}{" "}
                                        <span style={{ fontSize: "13px" }}>
                                          {val.type === "Hours Saved"
                                            ? "Hrs"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className={sliderRow2Icons}>
                                        <Tooltip tooltipValue={val?.type}>
                                          <img
                                            className={sliderImageClass}
                                            src={val?.icon}
                                            alt="Parking Icon"
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={analyticssliderRow4}>
                              <div className={analyticsRow4Left}>
                                <div className={dFlex}>
                                  <p className={availableValue}>
                                    ${value.currentSpendings}
                                  </p>
                                  <span className={spanBar}>/</span>
                                  <p className={occupiedValue}>
                                    ${value.lastSpendings}
                                  </p>
                                </div>
                                <div>
                                  <p className={sliderLeftRow2}>
                                    SPENDINGS CURRENT VS LAST
                                  </p>
                                </div>
                              </div>
                              <div className={analyticsRow4Right}>
                                <img
                                  src={GreenTriangleIcon}
                                  alt="Up Icon"
                                  width="20%"
                                  style={{ marginRight: 6 }}
                                />
                                <p className={thirtySix}>
                                  36<span>%</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "fanExperience" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    {" "}
                                    <div
                                      className={sliderRow2CommonClass}
                                      key={"label7" + index}
                                    >
                                      {" "}
                                      <div className={sliderValueClass}>
                                        {val.total}{" "}
                                        <span style={{ fontSize: "13px" }}>
                                          {(val.type === "electricity") |
                                          (val.type === "water") |
                                          (val.type === "hvac")
                                            ? "Kwh"
                                            : val.type === "co2"
                                            ? "Kg"
                                            : val.type === "electricity consumed"
                                            ? "KW"
                                            : val.type === "wifi"
                                            ? "GB"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className={sliderRow2Icons}>
                                        <Tooltip tooltipValue={val?.type}>
                                          <img
                                            className={sliderImageClass}
                                            src={val?.icon}
                                            alt="Parking Icon"
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4}>
                              <div className={sliderRow4Left}>
                                <div className={availableSection}>
                                  <div className={availableValue}>
                                    {value?.co2level}
                                  </div>
                                  <div className={availableValue}>
                                    {value?.voclevel}
                                  </div>
                                </div>
                                <div className={dflexJustify}>
                                  {" "}
                                  <div>
                                    <div
                                      className={label6Row4}
                                      style={{ color: "#6EDA5D" }}
                                    >
                                      <div>
                                        {value?.ads}
                                        <span className={thiryPercenter}>%</span>
                                      </div>
                                    </div>
                                    <div className={displayFlex1}>
                                      <div
                                        className={label6Row4Box}
                                        style={{ backgroundColor: "#6EDA5D" }}
                                      ></div>
                                      <div className={label6Row4Name}>ADs</div>
                                    </div>
                                  </div>
                                  <div>
                                    <div
                                      className={label6Row4}
                                      style={{ color: "#FFF744" }}
                                    >
                                      <div>
                                        {value.rewards}
                                        <span className={thiryPercenter}>%</span>
                                      </div>
                                    </div>
                                    <div className={displayFlex1}>
                                      <div
                                        className={label6Row4Box}
                                        style={{ backgroundColor: "#FFF744" }}
                                      ></div>
                                      <div className={label6Row4Name}>
                                        Rewards
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div
                                      className={label6Row4}
                                      style={{ color: "#41CAF5" }}
                                    >
                                      <div>
                                        {value.events}
                                        <span className={thiryPercenter}>%</span>
                                      </div>
                                    </div>
                                    <div className={displayFlex1}>
                                      <div
                                        className={label6Row4Box}
                                        style={{ backgroundColor: "#41CAF5" }}
                                      ></div>
                                      <div className={label6Row4Name}>Events</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={sliderRow4Right}>
                                <CircularBar
                                  circularData={circularDataFanExperince}
                                  circularInnerText={"INCOME"}
                                  circularInnerValue={"$1519 "}
                                  percentage={false}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "foodConcessions" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <>
                                    {" "}
                                    <div
                                      className={sliderRow2CommonClass}
                                      key={"label7" + index}
                                    >
                                      {" "}
                                      <div className={sliderValueClass}>
                                        {val.total}{" "}
                                        <span style={{ fontSize: "13px" }}>
                                          {(val.type === "electricity") |
                                          (val.type === "water") |
                                          (val.type === "hvac")
                                            ? "Kwh"
                                            : val.type === "co2"
                                            ? "Kg"
                                            : val.type === "electricity consumed"
                                            ? "KW"
                                            : val.type === "wifi"
                                            ? "GB"
                                            : ""}
                                        </span>
                                      </div>
                                      <div className={sliderRow2Icons}>
                                        <Tooltip tooltipValue={val?.type}>
                                          <img
                                            className={sliderImageClass}
                                            src={val?.icon}
                                            alt="Parking Icon"
                                          />
                                        </Tooltip>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4}>
                              <div className={sliderRow4Left}>
                                <div className={availableSection}>
                                  <div className={availableValue}>
                                    {value?.co2level}
                                  </div>
                                  <div className={availableValue}>
                                    {value?.voclevel}
                                  </div>
                                </div>
                                <div className={dflexJustify}>
                                  {" "}
                                  <div>
                                    <div
                                      className={label6Row4}
                                      style={{ color: "#FC8456" }}
                                    >
                                      <div>
                                        {value?.meals}
                                        <span className={thiryPercenter}>%</span>
                                      </div>
                                    </div>
                                    <div className={displayFlex1}>
                                      <div
                                        className={label6Row4Box}
                                        style={{ backgroundColor: "#FC8456" }}
                                      ></div>
                                      <div className={label6Row4Name}>MEALS</div>
                                    </div>
                                  </div>
                                  <div>
                                    <div
                                      className={label6Row4}
                                      style={{ color: "#A593FC" }}
                                    >
                                      <div>
                                        {value.snacks}
                                        <span className={thiryPercenter}>%</span>
                                      </div>
                                    </div>
                                    <div className={displayFlex1}>
                                      <div
                                        className={label6Row4Box}
                                        style={{ backgroundColor: "#A593FC" }}
                                      ></div>
                                      <div className={label6Row4Name}>SNACKS</div>
                                    </div>
                                  </div>
                                  <div>
                                    <div
                                      className={label6Row4}
                                      style={{ color: "#FFD646" }}
                                    >
                                      <div>
                                        {value.drinks}
                                        <span className={thiryPercenter}>%</span>
                                      </div>
                                    </div>
                                    <div className={displayFlex1}>
                                      <div
                                        className={label6Row4Box}
                                        style={{ backgroundColor: "#FFD646" }}
                                      ></div>
                                      <div className={label6Row4Name}>DRINKS</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={sliderRow4Right}>
                                <CircularBar
                                  circularData={circularDataFoodConcessions}
                                  circularInnerText={"ORDERS"}
                                  circularInnerValue={"300 "}
                                  percentage={false}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : value?.id === "operationsInfra" ? (
                        <>
                          <div className={labelStyleTop}>
                            <h2 className={sliderHeading}>
                              {value?.name?.toUpperCase()}
                            </h2>
                            <div className={sliderRow2}>
                              {value?.values?.map((val, index) => {
                                return (
                                  <div
                                    className={sliderRow2CommonClass}
                                    key={"label2" + index}
                                  >
                                    {" "}
                                    <div className={sliderValueClass}>
                                      {val.total}{" "}
                                      <span style={{ fontSize: "13px" }}>
                                        {val.type === "Waiting Time" ? "Min" : ""}
                                      </span>
                                    </div>
                                    <div className={sliderRow2Icons}>
                                      <Tooltip tooltipValue={val?.type}>
                                        <img
                                          className={sliderImageClass}
                                          src={val?.icon}
                                          alt="Parking Icon"
                                        />
                                      </Tooltip>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className={labelStyleBottom}>
                            <div className={sliderRow4}>
                              <div className={sliderRow4Left}>
                                <div className={dFlex}>
                                  <p className={availableValue}>
                                    {value?.occupied}
                                  </p>
                                  <span className={spanBar}>/</span>
                                  <p className={occupiedValue}>
                                    {value?.available}
                                  </p>
                                </div>
                                <div>
                                  {" "}
                                  <p className={sliderLeftRow2}>
                                    OCCUPIED VS AVAILABLE
                                  </p>
                                </div>
                              </div>
                              <div className={sliderRow4Right}>
                                <CircularBar
                                  circularData={circularDataOperationsInfra}
                                  circularInnerText={"OCCUPIED"}
                                  circularInnerValue={"35"}
                                  progressValue={value.occupiedPercentage}
                                  percentage={true}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
        </Swiper>
        <div className={swiperLeftNavigation} onMouseOver={() => scrollLabels('left')} />
        <div className={swiperRightNavigation} onMouseOver={() => scrollLabels('right')} />
    </div>
  );
};

export default LabelsContainer;
