import { makeStyles } from "@material-ui/core/styles";
// import "@fontsource/open-sans";
import Theme from "../../theme/theme";
const theme = Theme;
const useStyles = makeStyles(
  {
    indicator: {
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "16px",
      fontWeight: "600",
      color: "#FFFFFF",
      "& span": {
        fontSize: 11,
        lineHeight: "19px",
      },
      [theme.breakpoints.down("xl")]: {
        fontSize: "18px",
      },
    },
    circleTitleStyle: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      width: "100%",
      // height: "100%",
      margin: "0 auto",
      userSelect: "none",
      fontSize: "10px !important",
      // fontFamily: "Open Sans",
      fontWeight: "400",
      color: "#FFFFFF",
    },
    progressBarSection: {
      "& .MuiCircularProgress-svg": {
        width: 100,
      },
    },
  },
  { index: 1 }
);
export default useStyles;
