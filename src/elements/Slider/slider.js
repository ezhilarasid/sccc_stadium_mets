import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const VerticalSlider = (props) => {
  const { updateScale } = props;

  const preventHorizontalKeyboardNavigation = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    } else {
      if (event.key === "ArrowUp") {
        props.zoomInFunction();
      }
      if (event.key === "ArrowDown") {
        props.zoomOutFunction();
      }
    }
  };

  const updateScaleSlider = (event) => {
    updateScale(event);
  };
  return (
    <Box sx={{ height: 100, marginLeft: 0, marginBottom: 1 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },

          width: 10,
        }}
        // style ={{marginLeft : 68}}
        min={0}
        step={0.1}
        max={8}
        orientation="vertical"
        valueLabelDisplay={props.scaleValue}
        onKeyDown={preventHorizontalKeyboardNavigation}
        onChange={updateScaleSlider}
        value={props.scaleValue}
        valueLabelFormat={props.scaleValue}
      />
    </Box>
  );
};
export default VerticalSlider;
