import React, { useState, useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";
import useStyles from "./styles";

const INF_ProgressBar = (props) => {
  const { progress, strokeColor, circleTitle } = props;
  const [progressRadius, setProgressRadius] = useState();
  const { indicator, circleTitleStyle, progressBarSection } = useStyles();
  // const [progressbar, setProgressbar] = useState(60);

  // useEffect(() => {
  //   if (width <= 1152) {
  //     setProgressbar(50);
  //   } else {
  //     setProgressbar(60);
  //   }
  // }, [width, height]);
  return (
    <>
      <ProgressBar
        // className={progressBarSection}
        radius={40}
        progress={progress}
        strokeWidth={10}
        strokeColor={strokeColor}
        trackStrokeColor={"#2E2E2E"}
        trackStrokeWidth={10}
        // pointerRadius={2}
        // pointerStrokeColor={strokeColor}
      >
        <div className={indicator}>
          <div>
            {progress}
            <span>%</span>
          </div>
        </div>
        <div className={circleTitleStyle}>
          <div>{circleTitle}</div>
        </div>
      </ProgressBar>
    </>
  );
};
export default INF_ProgressBar;
