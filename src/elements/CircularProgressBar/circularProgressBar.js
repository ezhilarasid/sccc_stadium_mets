import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = (props) => {
  const { circleParentValue, circleChildValue } = props;
  return (
    <>
      <div style={{ width: "50%" }}>
        <CircularProgressbarWithChildren
          value={circleParentValue}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: "#FF708B",
            trailColor: "#F3F4F6",
            padding: "5",
          })}
        >
          <div style={{ width: "80%" }}>
            <CircularProgressbar
              value={circleChildValue}
              text={"INVENTORY"}
              strokeWidth={6}
              styles={buildStyles({
                pathColor: "#76FFFF",
                trailColor: "#F3F4F6",
                textColor: "#FFF",
                textSize: "10px",
              })}
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default CircularProgressBar;
