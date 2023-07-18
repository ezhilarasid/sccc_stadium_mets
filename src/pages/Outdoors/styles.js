import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  dashboardHeader: {
    padding: 10,
  },

  dashboardLogoImg: {
    width: 250,
  },
  dashboardSection: {
    height: "100vh",
    background: "#d7d7d7",
    position: "relative",
  },
  bottomMenuSection: {
    position: "fixed",
    bottom: "-32px",
    left: "50%",
    width: 400,
    cursor: "pointer",
    transform: "translate(-50%, -50%)",
  },
  logoContainerStyle: {
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: 5000,
    margin: 10,
  },
  mapContainerStyle: {
    position: "relative",
    height: "100vh",
  },
  bottomBlackline: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 30,
    background: "rgb(0 0 0 / 86%)",
    backdropFilter: "blur(9px)",
    zIndex: "11111",
  },
  notificationContainer: {
    background: "#2B2B2B",
    backdropFilter: "blur(1.5px)",
    height: "calc(100vh - 396px)",
  },
  outdoorsNotificationListOpen: {
    padding: "10px 20px 30px 20px",
    color: "#ffffff",
    height: "calc(100vh - 590px)",
    overflow: "scroll",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(97 97 97 / 90%)",
      outline: "1px solid slategrey",
      borderRadius: 5,
    },
    [theme.breakpoints.down(1025)]: {
      padding: "10px 26px 30px 20px",
    },
    [theme.breakpoints.down(1537)]: {
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.down(1920)]: {
      padding: "10px 26px 30px 20px",
    },
    [theme.breakpoints.up(1537)]: {
      padding: "10px 20px 30px 20px",
    },
  },
  outdoorsNotificationList: {
    padding: "10px 20px 30px 20px",
    color: "#ffffff",
    height: "calc(100vh - 546px)",
    overflow: "scroll",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(97 97 97 / 90%)",
      outline: "1px solid slategrey",
      borderRadius: 5,
    },
    [theme.breakpoints.up(1537)]: {
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.down(1920)]: {
      padding: "10px 26px 30px 20px",
    },
    [theme.breakpoints.down(1537)]: {
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.down(1025)]: {
      padding: "10px 20px 30px 20px",
    },
  },
  birdEyeImage: {
    width: "55px",
    cursor: "pointer",
  },
  parkingHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1000,
    alignItems: "center",
  },
  notificationBg: {
    background: "#2b2b2b !important",
    height: "calc(100vh)",
  },
  menuIconImg: {
    width: 50,
    marginRight: 10,
    cursor: "pointer",
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },
  mobileIconImg: {
    width: 50,
    cursor: "pointer",
    marginRight: 10,
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },
  dashboardMenu: {
    width: "55px",
    cursor: "pointer",
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },
  headerRightBtnGroup: {
    display: "flex",
    position: "absolute",
    zIndex: 1111,
    right: "6px",
    padding: "10px",
    alignItems: "center",
    [theme.breakpoints.down(1181)]: {
      right: "-8px",
      top: "-6px",
    },
    [theme.breakpoints.down(1025)]: {
      right: "-8px",
      top: "-6px",
    },
  },
}));

export default useStyles;
