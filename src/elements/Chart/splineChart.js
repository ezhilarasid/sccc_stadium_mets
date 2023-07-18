import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SplineChart = (props) => {
  const {
    height,
    width,
    xAxisArray,
    graphColor,
    dataPoints,
    tooltipShared,
    graphName,
    graphType,
  } = props;
  const [xAxisSelected, setXAxisSelected] = useState();

  const options = {
    chart: {
      type: graphType,
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
      enabled: true,
      shared: false,
      useHTML: true,
      headerFormat: null,
      followPointer: false,
      hideDelay: 0,
      backgroundColor: graphColor,
      borderColor: graphColor,
      style: {
        color: "#FFF",
        fontWeight: "bold",
      },

      footerFormat: null,

      formatter: function () {
        const value = this.y;

        if (!tooltipShared) {
          return ` <table>
            <tr>
              <td style="text-align: center;">
                  ${value}
                  
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
      //   tickInterval: xAxisInterval,
      showFirstLabel: true,
      showLastLabel: true,
      startOnTick: false,
      endOnTick: false,
      gridLineDashStyle: "LongDash",
      useHTML: true,
      crosshair: {
        width: 0.5,
        color: graphColor,
        dashStyle: "shortdot",
      },
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
      series: {
        borderColor: "none",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops:
            graphName === "waitingTime"
              ? [
                  [0, "#FF93645e"], // start
                  [1, Highcharts.color("#FF9364").setOpacity(0).get("rgba")],
                ]
              : [
                  [0, "#2CAD395e"], // start
                  [1, Highcharts.color("#2CAD39").setOpacity(0).get("rgba")],
                ],
        },
        area: {
          fillOpacity: 0,
        },
        lineColor: graphColor,

        lineWidth: 2,
        // allowPointSelect: true,

        marker: {
          enabled: false,
          lineColor: graphColor,
          fillColor: graphColor,
        },

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
    },
    credits: false,
    series: { data: dataPoints },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SplineChart;
