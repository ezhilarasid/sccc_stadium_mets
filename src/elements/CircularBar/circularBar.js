import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import useStyles from "./styles";

const CircularBar = (props) => {
  const { circularData, circularInnerText, circularInnerValue, percentage } =
    props;
  const {
    progressMainStyle,
    progressInnerText,
    progressValueStyle,
    progressTextStyle,
    progressValueStylePercentage,
  } = useStyles();

  return (
    <div className={progressMainStyle}>
      <PieChart
        animate
        animationDuration={500}
        animationEasing="ease-out"
        center={[50, 50]}
        data={circularData}
        lengthAngle={360}
        lineWidth={25}
        paddingAngle={0}
        radius={50}
        rounded
        startAngle={270}
        viewBoxSize={[100, 100]}
        labelPosition={50}
        style={{ width: "75%" }}
      ></PieChart>
      <div className={progressInnerText}>
        <div className={progressValueStylePercentage}>
          {circularInnerValue}
          {percentage ? <span>%</span> : null}
        </div>
        <div className={progressTextStyle}>{circularInnerText}</div>
      </div>
    </div>
  );
};
export default CircularBar;
