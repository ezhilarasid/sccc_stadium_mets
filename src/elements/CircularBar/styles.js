import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  progressBarStyle: {
    borderInlineStartWidth: 5,
  },
  progressMainStyle: {
    display: "inline-flex",
    position: "relative",
    justifyContent: "flex-end",
  },
  progressInnerText: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-18%, -50%)",
    borderRadius: "50%",
    width: "40%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  progressValueStyle: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#FFF744",
    textAlign: "center",
    fontFamily: "HelveticaNeueUltra-Light",
    [theme.breakpoints.down("1537")]: {
      fontSize: "10px",
    },
  },
  progressValueStylePercentage: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#FFF744",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif !important",
    "& span": {
      fontSize: "8px",
      lineHeight: " 16px",
      marginLeft: "1px",
    },
    [theme.breakpoints.down("1537")]: {
      fontSize: "12px",
    },
  },
  progressTextStyle: {
    fontSize: "9px",
    fontWeight: 400,
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif !important",
    [theme.breakpoints.down("1537")]: {
      fontSize: "7px !important",
    },
  },
});
export default useStyles;
