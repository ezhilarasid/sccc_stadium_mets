import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(
  {
    infoIconMainClass: {
      display: "inline-flex",
      margin: 10,
    },
    infoBoxClass: {
      display: "inline-flex",
      "& .MuiFab-root": {
        [theme.breakpoints.down(1181)]: {
          width: "40px !important",
          height: "40px !important",
        },
        [theme.breakpoints.down(1025)]: {
          width: "40px !important",
          height: "40px !important",
        },
      },
    },
    infoTextContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    infoTextH1: {
      margin: 0,
      padding: 0,
      color: "white",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: "40.85px",
      [theme.breakpoints.down(1181)]: {
        fontSize: 15,
        lineHeight: "24px !important",
      },
      [theme.breakpoints.down(1025)]: {
        fontSize: 15,
        lineHeight: "24px !important",
      },
    },
    infoTextH4: {
      margin: 0,
      padding: 0,
      color: "white",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "19.07px",
      [theme.breakpoints.down(1181)]: {
        fontSize: 9,
        lineHeight: "17px !important",
      },
      [theme.breakpoints.down(1025)]: {
        fontSize: 9,
        lineHeight: "17px !important",
      },
    },
    imageWidth: {
      [theme.breakpoints.down(1181)]: {
        width: "20px !important",
        height: "20px !important",
      },
      [theme.breakpoints.down(1025)]: {
        width: "20px !important",
        height: "20px !important",
      },
    },
  },
  { index: 1 }
);
export default useStyles;
