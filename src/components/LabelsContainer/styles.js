import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  swiperContainer: {
    position: "relative",
  },
  swiperLeftNavigation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "1.5vw",
    height: "100%",
    backgroundColor: "transparent",
    zIndex: 900,
  },
  swiperRightNavigation: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "1.5vw",
    height: "100%",
    backgroundColor: "transparent",
    zIndex: 900,
  },
  swiperClass: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  swiperClassOne: {
    height: "auto",
    background: "rgba(4, 8, 33, 0.83)",
    backdropFilter: "blur(17px)",
    borderRadius: "10px",
  },
  sliderHeading: {
    color: theme.palette.logoOrange,
    letterSpacing: "1px",
    margin: "0 0 14px 0 !important",
    fontSize: 18,
    fontFamily: "Poppins, sans-serif",
    fontWeigtht: "700",
    letterSpacing: "0.15em",
    [theme.breakpoints.down("1547")]: {
      fontSize: 14,
    },
  },
  sliderRow2: {
    display: "flex",
    justifyContent: "space-between",
  },
  sliderValueClass: {
    color: theme.palette.scccYellowTwo,
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: "600",
    fontSize: 16,
    margin: 0,
    [theme.breakpoints.down("1547")]: {
      fontSize: 13,
    },
  },
  sliderContentClass: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sliderRow3: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sliderImageClass: {
    cursor: "pointer",
    width: 25,
    height: 25,
    marginTop: 5,
  },
  sliderRow4: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
  },
  sliderRow4Security: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    color: theme.palette.white,
    marginTop: 10,
    fontSize: 17,
    fontWeight: 500,
    "& :last-child": {
      marginBottom: 0,
    },
    [theme.breakpoints.down("1547")]: {
      fontSize: 13,
    },
  },
  sliderRow4Left: { width: "100%", flex: "2.4" },
  availableValue: {
    color: theme.palette.scccYellowTwo,
    fontSize: 30,
    lineHeight: "26px",
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: "600",
    margin: "0",
    "& span": {
      fontSize: 14,
      lineHeight: "18px",
    },
    [theme.breakpoints.down("1547")]: {
      fontSize: 20,
    },
  },
  occupiedValue: {
    color: theme.palette.white,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "22px",
    [theme.breakpoints.down("1547")]: {
      fontSize: 15,
      lineHeight: "noraml",
    },
  },
  spanBar: {
    color: theme.palette.white,
    margin: "0 10px",
    fontSize: 17,
    lineHeight: "26px",
    [theme.breakpoints.down("1547")]: {
      fontSize: 13,
      lineHeight: "21px",
    },
  },
  sliderLeftRow2: {
    margin: 0,
    color: theme.palette.white,
    fontSize: 13,
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: "600",
    marginTop: "14px !important",
    marginBottom: "7px !important",
    [theme.breakpoints.down("1547")]: {
      fontSize: 11,
    },
  },
  sliderRow4Right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: "1.3",
  },
  displayFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  innerDisplayFlex: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  progressBarClassActive: {
    width: 30,
    height: 10,
    background: theme.palette.scccLightGreenOne,
    marginRight: 8,
    borderRadius: "2px",
    [theme.breakpoints.down("1547")]: {
      width: 16,
      height: 8,
    },
  },
  progressBarClassActiveOrange: {
    width: 30,
    height: 10,
    background: theme.palette.scccLightRedOne,
    marginRight: 8,
    borderRadius: "2px",
    [theme.breakpoints.down("1547")]: {
      width: 16,
      height: 8,
    },
  },
  progressBarClassActiveYellow: {
    width: 30,
    height: 10,
    background: theme.palette.scccYellowFour,
    marginRight: 8,
    borderRadius: "2px",
    [theme.breakpoints.down("1547")]: {
      width: 16,
      height: 8,
    },
  },
  progressBarClass: {
    width: 30,
    height: 10,
    background: theme.palette.darkGrayEight,
    marginRight: 8,
    borderRadius: "2px",
    [theme.breakpoints.down("1547")]: {
      width: 16,
      height: 8,
    },
  },
  humanIconSection: {
    width: 30,
    marginBottom: "6px",
    display: "none",
    "& img": {
      width: "100%",
    },
  },
  percentage: {
    fontSize: 27,
    fontWeight: "bold",
    color: theme.palette.white,
    [theme.breakpoints.down("1537")]: {
      fontSize: "18px !important",
    },
  },
  wifiUser: {
    color: theme.palette.white,
    fontSize: 10,
  },
  analyticsRow4Left: {
    flex: 1,
  },
  thiryPercenter: {
    fontSize: 12,
    lineHeight: "21px",
  },
  thirtySix: {
    color: theme.palette.scccLightGreenTwo,
    fontWeight: "400",
    fontSize: "20px",
    "& span": {
      fontSize: 12,
      lineHeight: "18px",
    },
  },
  analyticsRow4Right: {
    display: "flex",
    justifyContent: "flex-end",
  },
  analyticssliderRow4: {
    display: "flex",
    alignItems: "flex-end",
  },
  label6Row4: {
    fontSize: "25px",
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: 700,
    textAlign: "center !important",
    lineHeight: "39px !important",
    marginBottom: "7px !important",
    [theme.breakpoints.down("1537")]: {
      fontSize: "18px",
      fontWeight: 400,
      textAlign: "center !important",
      lineHeight: "32px !important",
      marginBottom: "7px !important",
    },
  },

  label6Row4Box: {
    width: "10px",
    height: "10px",
    borderRadius: "2px",
    marginRight: "5px",
  },

  label6Row4Name: {
    color: theme.palette.white,
    fontSize: "10px",
    fontWeight: 300,
    marginLeft: 4,
    [theme.breakpoints.down("1537")]: {
      fontSize: "8px",
      fontWeight: 400,
      lineHeight: "18px !important",
    },
  },

  displayFlex1: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dFlex: {
    display: "flex",
    alignItems: "flex-end",
  },
  availableSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  dflexJustify: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "7px !important",
  },

  sliderValueClassNew: {
    color: theme.palette.white,
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: "500",
    fontSize: 16,
    margin: 0,
    [theme.breakpoints.down("1547")]: {
      fontSize: 13,
    },
  },
  labelStyleTop: {
    flex: "1",
    padding: "16px 18px",
    paddingBottom: "0",
    marginBottom: 10,
  },
  labelStyleBottom: {
    padding: "16px 18px",
    paddingTop: "0",
  },
  sliderRow2Icons: {
    margin: "7px 0",
  },
  sliderRow2CommonClass: {
    textAlign: "center",
  },
  resolvedText: {
    fontSize: 12,
    lineHeight: "21px",
    letterSpacing: "0.03em",
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: 600,
  },
}));

export default useStyles;
