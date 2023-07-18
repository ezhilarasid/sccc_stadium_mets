import React, { useEffect, useState } from "react";
import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie.js";
// import borderRadius from "highcharts-border-radius";
variablePie(Highcharts);

const Chart = (props) => {
  const {
    type,
    splineWidth,
    width,
    height,
    pageName,
    dataPoints,
    format,
    graphSequence,
    tooltipShow,
    isCrosshair,
    dataLabels,
    tabIdentity,
    xAxisArray,
    xAxisInterval,
    gradientColor,
    graphName,
    tooltipShared,
    graphLineColor,
    tootlTipEnabled,
    tabIndex,
  } = props;
  const [toolTipBg, setToolTipBg] = useState("#E76A34");
  const [tBorder, setTBorder] = useState("#E76A34");
  const [lineColor, setLineColor] = useState("");
  const [gradientColorValue, setGradientColorValue] = useState("#282828");
  const [fontColor, setFontColor] = useState("#FFFFFF");
  const [sharedToolTip, setSharedToolTip] = useState(false);

  let chartToolTipBg,
    chartToolTipBorder,
    chartLineColor,
    chartGradientColorValue,
    chartFontColor,
    chartSharedToolTip,
    chartGraphName;

  const [xAxisSelected, setXAxisSelected] = useState();

  const [graphStyle, setGraphStyle] = useState({
    chartToolTipBg: "#3F4B4E",
    chartToolTipBorder: "#3F4B4E",
    chartLineColor: "",
    chartGradientColorValue: "",
    chartFontColor: "#FFFFFF",
    chartSharedToolTip: false,
    chartGraphName: "",
  });

  useEffect(() => {
    if (pageName && pageName === "analytics") {
      switch (graphName) {
        case "occupancy":
          graphStyle.chartToolTipBg = "#FFF744";
          graphStyle.chartToolTipBorder = "#FFF744";
          graphStyle.chartLineColor = "#FFF744";
          graphStyle.chartGradientColorValue = "#fff74436";
          graphStyle.chartFontColor = "#000";
          graphStyle.chartGraphName = "occupancy";
          break;
        case "availability":
          graphStyle.chartToolTipBg = "#2CAD39";
          graphStyle.chartToolTipBorder = "#2CAD39";
          graphStyle.chartLineColor = "#2CAD39";
          graphStyle.chartGradientColorValue = "#2cad394d";
          graphStyle.chartGraphName = "availability";
          break;
        case "hours":
          graphStyle.chartToolTipBg = "#434348";
          graphStyle.chartToolTipBorder = "#434348";
          graphStyle.chartLineColor = "#2CAD39";
          graphStyle.chartGraphName = "hours";
          break;
        case "eventOpr":
          graphStyle.chartLineColor = "#FF9464";
          graphStyle.chartGraphName = "eventOpr";
          graphStyle.chartToolTipBg = "#3F4B4E";
          graphStyle.chartToolTipBorder = "#3F4B4E";
          chartSharedToolTip = true;
          break;
        case "incident":
          graphStyle.chartToolTipBg = "#FF708B";
          graphStyle.chartToolTipBorder = "#FF708B";
          graphStyle.chartLineColor = "#FF708B";
          graphStyle.chartGradientColorValue = "#2cad394d";
          graphStyle.chartGraphName = "incident";
          break;
        case "incidentsBreakdown":
          graphStyle.chartToolTipBg = "#EF7BE3";
          graphStyle.chartToolTipBorder = "#EF7BE3";
          graphStyle.chartLineColor = "#EF7BE3";
          graphStyle.chartGraphName = "incidentsBreakdown";
          break;
        case "order":
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          chartSharedToolTip = true;
          graphStyle.chartGraphName = "order";
          break;
        case "reservations":
          graphStyle.chartToolTipBg = "#725CFA";
          graphStyle.chartToolTipBorder = "#725CFA";
          graphStyle.chartLineColor = "#725CFA";
          graphStyle.chartGraphName = "reservations";
          break;
        case "visitors":
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          graphStyle.chartLineColor = "#FF9464";
          graphStyle.chartGraphName = "visitors";
          break;
        case "occupancyRestaurant":
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          graphStyle.chartLineColor = "#FF9464";
          graphStyle.chartGraphName = "occupancyRestaurant";
          break;
        case "revenue":
          graphStyle.chartLineColor = "#36f09747";
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          chartSharedToolTip = true;
          graphStyle.chartGraphName = "revenue";
          break;
        case "revenueBreakdown":
          graphStyle.chartToolTipBg = "#EF7BE3";
          graphStyle.chartToolTipBorder = "#EF7BE3";
          graphStyle.chartLineColor = "#EF7BE3";
          graphStyle.chartGraphName = "revenueBreakdown";
          break;
        case "crowdForming":
          graphStyle.chartToolTipBg = "#FFF744";
          graphStyle.chartToolTipBorder = "#FFF744";
          graphStyle.chartLineColor = "#FFF744";
          graphStyle.chartFontColor = "#000";
          graphStyle.chartGraphName = "crowdForming";
          break;
        case "tailGating":
          graphStyle.chartToolTipBg = "#9D90FF";
          graphStyle.chartToolTipBorder = "#9D90FF";
          graphStyle.chartLineColor = "#6C59FB";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGradientColorValue = "#9D90FF";
          graphStyle.chartGraphName = "tailGating";
          break;
        case "unauthorize":
          graphStyle.chartToolTipBg = "#434348";
          graphStyle.chartToolTipBorder = "#434348";
          graphStyle.chartLineColor = "#2CAD39";
          graphStyle.chartGraphName = "unauthorize";
          break;
        case "violation":
          graphStyle.chartToolTipBg = "#EF7BE3";
          graphStyle.chartToolTipBorder = "#EF7BE3";
          graphStyle.chartLineColor = "#EF7BE3";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "violation";
          break;
        case "incidentSecurity":
          graphStyle.chartToolTipBg = "#FF708B";
          graphStyle.chartToolTipBorder = "#FF708B";
          graphStyle.chartLineColor = "#FF708B";
          graphStyle.chartGradientColorValue = "#FF708B4d";
          graphStyle.chartGraphName = "incidentSecurity";
          break;
        case "incidentsBreakdownSecurity":
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          graphStyle.chartLineColor = "#4B4F52";
          graphStyle.chartGraphName = "incidentsBreakdownSecurity";
          break;
        case "electric":
          graphStyle.chartToolTipBg = "#0DB3D8";
          graphStyle.chartToolTipBorder = "#0DB3D8";
          graphStyle.chartLineColor = "#3FB3D8";
          graphStyle.chartFontColor = "#000";
          graphStyle.chartGradientColorValue = "#0DB3D8";
          graphStyle.chartGraphName = "electric";
          break;
        case "dataUsed":
          graphStyle.chartToolTipBg = "#D56278";
          graphStyle.chartToolTipBorder = "#D56278";
          graphStyle.chartLineColor = "#E83053";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "dataUsed";
          break;
        case "airQuality":
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          graphStyle.chartLineColor = "#FF9464";
          graphStyle.chartGraphName = "airQuality";
          break;
        case "incidentOutdoor":
          graphStyle.chartToolTipBg = "#5D43FE";
          graphStyle.chartToolTipBorder = "#5D43FE";
          graphStyle.chartLineColor = "#5D43FE";
          graphStyle.chartGradientColorValue = "#5D43FE4d";
          graphStyle.chartGraphName = "incidentOutdoor";
          break;
        case "incidentsBreakdownOutdoor":
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          graphStyle.chartLineColor = "#4B4F52";
          graphStyle.chartGraphName = "incidentsBreakdownOutdoor";
          break;
        case "occupancyRestroom":
          graphStyle.chartToolTipBg = "#4D31F5";
          graphStyle.chartToolTipBorder = "#4D31F5";
          graphStyle.chartLineColor = "#4D31F5";
          graphStyle.chartGraphName = "occupancyRestroom";
          break;
        case "sanitisation":
          graphStyle.chartToolTipBg = "#4D31F5";
          graphStyle.chartToolTipBorder = "#4D31F5";
          graphStyle.chartLineColor = "#4D31F5";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGradientColorValue = "#4D31F5";
          graphStyle.chartGraphName = "sanitisation";
          break;
        case "waitingTime":
          graphStyle.chartToolTipBg = "#FC8456";
          graphStyle.chartToolTipBorder = "#FC8456";
          graphStyle.chartLineColor = "#FF9364";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "waitingTime";
          break;
        case "airQualityRestroom":
          graphStyle.chartToolTipBg = "#FF9464";
          graphStyle.chartToolTipBorder = "#FF9464";
          graphStyle.chartLineColor = "#FF9464";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "airQualityRestroom";
          break;
        case "oprAlertsRestroom":
          graphStyle.chartToolTipBg = "#5784F1";
          graphStyle.chartToolTipBorder = "#5784F1";
          graphStyle.chartLineColor = "#5784F1";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "oprAlertsRestroom      ";
          break;
        case "incidentRestroom":
          graphStyle.chartToolTipBg = "#FF708B";
          graphStyle.chartToolTipBorder = "#FF708B";
          graphStyle.chartLineColor = "#FF708B";
          graphStyle.chartGradientColorValue = "#FF708B4d";
          graphStyle.chartGraphName = "incidentRestroom";
          break;
        case "inventoryLevel":
          graphStyle.chartToolTipBg = "#0096C7";
          graphStyle.chartToolTipBorder = "#0096C7";
          graphStyle.chartLineColor = "#0096C7";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "inventoryLevel";
          chartSharedToolTip = false;
          break;
        case "avgTemperature":
          graphStyle.chartToolTipBg = "#366BEB";
          graphStyle.chartToolTipBorder = "#366BEB";
          graphStyle.chartLineColor = "#366BEB";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "avgTemperature";
          chartSharedToolTip = false;
          break;
        case "oprAlertsVending":
          graphStyle.chartToolTipBg = "#4D31F5";
          graphStyle.chartToolTipBorder = "#4D31F5";
          graphStyle.chartLineColor = "#4D31F5";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGradientColorValue = "#4D31F5";
          graphStyle.chartGraphName = "oprAlertsVending";
          break;
        case "sales":
          graphStyle.chartLineColor = "#FF9464";
          graphStyle.chartGraphName = "sales";
          graphStyle.chartToolTipBg = "#4B4F52";
          graphStyle.chartToolTipBorder = "#4B4F52";
          chartSharedToolTip = true;
          break;
        case "occupancyEntrance":
          graphStyle.chartToolTipBg = "#5784F1";
          graphStyle.chartToolTipBorder = "#5784F1";
          graphStyle.chartLineColor = "#5784F1";
          graphStyle.chartGraphName = "occupancyEntrance";
          break;
        case "visitorsEntrance":
          graphStyle.chartToolTipBg = "#FE763B";
          graphStyle.chartToolTipBorder = "#FE763B";
          graphStyle.chartLineColor = "#FE763B";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "visitorsEntrance";
          break;
        case "waitingTimeEntrance":
          graphStyle.chartToolTipBg = "#2CAD39";
          graphStyle.chartToolTipBorder = "#2CAD39";
          graphStyle.chartLineColor = "#2CAD39";
          graphStyle.chartGradientColorValue = "#2cad394d";
          graphStyle.chartGraphName = "waitingTimeEntrance";
          break;
        case "oprAlertsEntrance":
          graphStyle.chartToolTipBg = "#FF7A7A";
          graphStyle.chartToolTipBorder = "#FF7A7A";
          graphStyle.chartLineColor = "#FF7A7A";
          graphStyle.chartGradientColorValue = "#FF7A7A4d";
          graphStyle.chartGraphName = "oprAlertsEntrance";
          break;
        case "securityIncident":
          graphStyle.chartToolTipBg = "#FFBA69";
          graphStyle.chartToolTipBorder = "#FFBA69";
          graphStyle.chartLineColor = "#FFBA69";
          graphStyle.chartFontColor = "#FFF";
          graphStyle.chartGraphName = "securityIncident";
          chartSharedToolTip = true;

          break;
        default:
          break;
      }
    }
    if (pageName === "security") {
      graphStyle.chartToolTipBg = "#3F4B4E";
      graphStyle.chartToolTipBorder = "#3F4B4E";
      chartSharedToolTip = true;
    }
    if (pageName === "foodConcessions") {
      graphStyle.chartToolTipBg = "#E76A34";
      graphStyle.chartToolTipBorder = "#E76A34";
    }
  }, [graphName, tabIndex]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: type,
          plotBackgroundColor: "transparent",
          backgroundColor: "transparent",
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 35,
          reflow: true,
          height: height, // (graphHeight - 40) / 2,
          width: width, // graphWidth,
        },
        legend: false,
        tooltip: {
          outside: false,
          enabled: graphName === "hours" ? false : true,
          shared: tooltipShared ? tooltipShared : false,
          useHTML: true,
          headerFormat: null,
          followPointer: tooltipShared ? tooltipShared : false,
          hideDelay: 0,
          backgroundColor:
            pageName === "analytics" ? graphStyle.chartToolTipBg : toolTipBg, //"#FF5910",
          borderColor:
            pageName === "analytics" ? graphStyle.chartToolTipBorder : tBorder, //"#FF5910",
          style: {
            color:
              pageName === "analytics" ? graphStyle.chartFontColor : fontColor,
            fontWeight: "bold",
            zIndex: 100,
          },

          footerFormat: null,

          formatter: function () {
            const value = this.y;
            if (
              pageName === "parking" ||
              pageName === "operations" ||
              pageName === "outdoors"
            ) {
              if (this.color == "#7cb5ec") {
                setToolTipBg("#E76A34");
                setTBorder("#E76A34");
              }
            }
            if (pageName === "security") {
              setToolTipBg("#3F4B4E");
              setTBorder("#3F4B4E");
            }

            if (!tooltipShared) {
              return ` <table>
              <tr>
                <td style="text-align: center;">
                    ${
                      pageName === "parking"
                        ? this.color == "#7cb5ec"
                          ? `${value}% Occupied`
                          : `${value}% Occupied`
                        : pageName === "security"
                        ? this.color == "#90ed7d"
                          ? `${value}`
                          : `${value}`
                        : pageName === "analytics"
                        ? this.color == lineColor
                          ? `${value}`
                          : `${value}`
                        : pageName === "outdoors" ||
                          pageName === "foodConcessions"
                        ? this.color == "#7cb5ec"
                          ? `${value}`
                          : `${value}`
                        : pageName === "operations"
                        ? this.color == "#7cb5ec"
                          ? `${value}%`
                          : `${value}%`
                        : null
                    }
                    
                </td>
              </tr>
            </table>`;
            } else {
              return `<table>
              <tr>
              <td>
              <span style="color:white; ">
                            ${this.points.reduce(function (s, point) {
                              return `
                              <div style="font-size:11px;color:white; display:flex; justify-content:flex-start; align-items:center">
                                <div style="width : 9px;  height : 4px; border-radius:5px; border-color:${point?.color}; margin:0px 5px 0px 0px; background : ${point.color}" ></div>
                                 <span> ${point?.series?.name} &nbsp &nbsp 
                                 <span style="font-size:16px"> ${point?.y}</span>
                              </div>
                               ${s}
                                `;
                            }, `<b>  </b>`)}
                            </span
                          </td>
                </tr>
              </table>`;
            }
          },
        },
        xAxis: {
          categories: xAxisArray,
          tickWidth: 0,
          tickLength: 0,
          tickInterval: xAxisInterval,
          showFirstLabel: true,
          showLastLabel: true,
          startOnTick: false,
          endOnTick: false,
          gridLineDashStyle: "LongDash",
          useHTML: true,
          crosshair:
            pageName === "analytics" &&
            (type === "area" ||
              type === "spline" ||
              type === "areaspline" ||
              type === "line")
              ? // &&
                // (graphName === "eventOpr" || graphName === "revenue")
                {
                  width: 0.5,
                  color: graphStyle.chartToolTipBg,
                  dashStyle: "shortdot",
                }
              : false,
          tickPositioner: function () {
            const ticks = this.tickPositions;
            if (!ticks.includes(this.dataMax)) ticks.push(this.dataMax);
            ticks.sort((a, b) => a - b);
            while (ticks[ticks.length - 1] > this.dataMax) {
              ticks.pop();
            }
            return ticks;
          },
          labels: {
            useHTML: true,
            overflow: "justify",
            format: format,
            style: {
              fontSize: pageName && pageName === "analytics" ? "10px" : "11px",
              color: pageName && pageName === "analytics" ? "#8E8E8E" : "#FFF",
            },
            formatter: function () {
              if (xAxisSelected === this.value) {
                return (
                  '<span style="color: white; font-weight:600; padding: 3px 6px; background :#FF5910; border-radius:10px ">' +
                  this.value +
                  "</span>"
                );
              } else {
                return this.value;
              }
            },
          },
          gridLineWidth: 0,
          lineWidth: 0,
        },

        title: false,
        plotOptions: {
          pie: {
            size: 150,
          },
          column: {
            dataLabels: {
              enabled: dataLabels,
              format: dataLabels
                ? graphName === "hours"
                  ? '<div style="font-size: 10px; line-height: 20px">{y} hrs</div>'
                  : '<div style="line-height: 20px; color : #FF5910; font-weight : bold; font-size : 12px; "">{y}%</div>'
                : "",
              backgroundColor: graphName === "hours" ? "#4B4F52" : "",
              verticalAlign: graphName === "hours" ? "top" : "bottom",
              // align: "center",
              x: 0,
              y: graphName === "hours" ? -30 : 0,
              color: "#FFF",
            },
            grouping: false,
          },

          series: {
            borderColor: "none",
            borderRadius:
              graphName === "airQuality" ||
              graphName === "occupancyRestaurant" ||
              graphName === "hours"
                ? 10
                : 0,

            area: {
              fillOpacity: 0,
            },
            lineColor:
              pageName === "analytics" && graphName != "eventOpr"
                ? graphLineColor
                  ? graphLineColor
                  : graphStyle.chartLineColor
                : "",
            fillColor:
              graphName != "eventOpr" ||
              graphName != "order" ||
              graphName != "revenue"
                ? {
                    linearGradient: [0, 0, 0, 200],
                    stops: [
                      [
                        0,
                        graphStyle.chartLineColor
                          ? graphStyle.chartLineColor
                          : "",
                      ],
                      [
                        1,
                        Highcharts.color("#282828").setOpacity(0).get("rgba"),
                      ],
                    ],
                  }
                : "",
            lineWidth: 2,
            // allowPointSelect: true,

            marker: {
              enabled: false,
              lineColor: graphStyle.chartToolTipBg
                ? graphStyle.chartToolTipBg
                : toolTipBg,
              fillColor: pageName == !"analytics" ? toolTipBg : "#FFFFFF",
            },
            stacking:
              graphName === "occupancyRestaurant" || graphName === "airQuality"
                ? "normal"
                : null,
            point: {
              events: {
                mouseOver: function (event) {
                  setXAxisSelected(event.target.category);
                },
                mouseOut: function () {
                  setXAxisSelected("");
                },
              },
            },
          },
        },

        yAxis: {
          visible: false,

          // gridLineColor: "white",
          // gridLineDashStyle: graphName === "reservations" ? "longdash" : null,
        },
        credits: false,
        series: dataPoints,
      }}
    />
  );
};

export default Chart;
