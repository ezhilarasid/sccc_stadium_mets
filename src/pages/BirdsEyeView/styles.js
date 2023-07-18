import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  dashboardHeader: {
    padding: 10,
  },
  dashboardLogoImg: {
    width: 250,
  },
  videoDashboardSection: {
    height: "100vh",
    background: "#1E1E1E",
    position: "relative",
    overflow: "hidden",
  },
  bottomMenuSection: {
    position: "fixed",
    bottom: "-32px",
    left: "50%",
    width: 400,
    cursor: "pointer",
    transform: "translate(-50%, -50%)",
  },
  bottomBlackline: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 30,
    background: "rgb(0 0 0 / 86%)",
    backdropFilter: "blur(9px)",
  },
  notificationContainer: {
    background: "rgba(0, 0, 0, 0.87)",
    backdropFilter: "blur(1.5px)",
  },
  headerMain: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    margin: "10px",
    justifyContent: "space-between",
    flex: 0.8,
  },

  birdEyeImage: {
    width: "50px",
    cursor: "pointer",
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },
  displayFlex: {
    display: "flex",
  },

  occupancySection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    margin: "20px 25px 0 0",
  },
  headerRight: {
    display: "flex",
    flex: 0.9,
  },
  headerCenter: { flex: 1.5, marginRight: 12 },
  headerTextStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
  },

  line: {
    width: "1px",
    height: "15px",
    position: "absolute",
    right: "-21px",
    background: "#C0BCBC",
    top: " 14px",
  },
  dashboardMenu: {
    position: "absolute",
    right: `7px`,
    top: `0px`,
    padding: 10,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
  },
  //   videoLeftSide: {
  //     position: "relative",
  //   },
  innerOccupancy: {
    display: "flex",
  },
  cameraSection: {
    display: "flex",
    alignItems: "center",
    marginLeft: 32,
    minWidth: 176,
    "& :first-child": {
      fontSize: 22,
      lineHeight: "25px",
      color: "white",
      letterSpacing: "0.15em",
      fontWeight: 500,
      marginRight: 12,
    },
    "& :last-child": {
      fontSize: 26,
      lineHeight: "32px",
      color: "#FFF844",
      fontWeight: 700,
    },
  },
  menuIconImg: {
    width: 50,
    marginRight: 10,
    // cursor: "pointer !important",
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },

  mobileIconImg: {
    width: 50,
    cursor: "pointer !important",
    marginRight: 10,
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },
  videoContainerClass: {
    marginTop: 53,
  },
  birdsNotificationSection: {
    background: "#2A2A2A",
    backdropFilter: "blur(17px)",
    borderRadius: "0px",
    color: "white",
    width: "384.59px !important",
    height: "calc(100vh - 10px)",
    marginTop: "18px",
    fontSize: 14,
  },
  addPresetSection: {
    background: "#000000",
    backdropFilter: "blur(17px)",
    borderRadius: "0px",
    color: "white",
    width: "384.59px !important",
    height: "calc(100vh - 10px)",
    marginTop: "18px",
    position: "relative",
  },
  videoContainerClass1: {
    marginTop: 53,
    display: "flex",
    "& .flex1": {
      flex: 1,
    },
  },
  videoContent: {
    flex: 1,
  },
}));

export default useStyles;
