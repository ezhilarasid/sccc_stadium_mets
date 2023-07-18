import React from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import useStyles from "./styles";

const InfoIcon = (props) => {
  const {
    color,
    title,
    tagLine,
    icon,
    fabWidth,
    fabHeight,
    imgWidth,
    imgHeight,
  } = props;
  const {
    infoIconMainClass,
    infoBoxClass,
    infoTextH1,
    infoTextH4,
    infoTextContent,
    imageWidth,
  } = useStyles();

  return (
    <div className={infoIconMainClass}>
      <div className={infoBoxClass}>
        <Box sx={{ flexGrow: 1 }}>
          <Fab
            disableRipple={true}
            aria-label="add"
            sx={{
              background: color,
              width: fabWidth,
              height: fabHeight,
              m: 1,
              "&:hover": { backgroundColor: color },
            }}
          >
            <img
              src={icon}
              alt="Icons"
              width={imgWidth}
              height={imgHeight}
              className={imageWidth}
            />
          </Fab>
        </Box>
        <div className={infoTextContent}>
          <h1 className={infoTextH1}>{title}</h1>
          <h4 className={infoTextH4}>{tagLine}</h4>
        </div>
      </div>
    </div>
  );
};

export default InfoIcon;
