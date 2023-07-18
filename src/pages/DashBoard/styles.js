import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  notificationButton: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
  },
  dashboardMenu: {
    position: "absolute",
    right: `${0 * window.innerWidth}px`,
    top: `0px`,
    padding: 10,
    zIndex: 1000,
  },
  dashboardLogoImg: {
    width: 400,
    background: "rgb(0, 0, 0, 80%)",
  },
  menuIconImg: {
    width: 50,
    marginRight: 10,
    cursor: "pointer",
  },
  fullScreenIcon: {
    background: " rgb(0 0 0 / 71%)",
    borderRadius: "50%",
    border: " 2px solid #fff",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginRight: 10,
    cursor: "pointer",
  },
  resetIcon: {
    background: " rgb(0 0 0 / 71%)",
    borderRadius: "50%",
    border: "2px solid #fff",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
  },
  mobileIconImg: {
    width: 50,
    cursor: "pointer",
    marginRight: 10,
  },
  mobileMenuSection: {
    columnGap: "5px",
    display: "flex",
    justifyContent: "flex-end",
    "& :last-child": {
      marginRight: "0 !important",
    },
  },
  dashboardSection: {
    height: "100vh",
    background: "#d7d7d7",
    position: "relative",
  },
  bottomMenuSection: {
    position: "fixed",
    bottom: "-48px",
    left: "50%",
    width: 400,
    cursor: "pointer",
    transform: "translate(-50%, -50%)",
    zIndex: "11111",
  },
  bottomBlackline: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 30,
    background: " rgb(0 0 0 / 86%)",
    zIndex: "11111",
    backdropFilter: "blur(9px)",
  },
  labelCardSection: {
    position: "fixed",
    bottom: 80,
    zIndex: "111",
  },
  bottomMenuImg: {
    width: "100%",
  },
  positionRelative: {
    position: "relative",
  },
  arrowUpImg: {
    position: "absolute",
    top: "50%",
    left: "47%",
    transform: "translate(-50%, -50%)",
    width: 25,
    animation: "slide 2s linear infinite",
  },
  arrowDownImg: {
    position: "absolute",
    top: "50%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    width: 25,
    animation: "slide 2s linear infinite",
  },
  menuBackDropOpen: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "11111",
    width: "100%",
    background: "rgba(2, 10, 60, 57%)",
    backdropFilter: "blur(8px)",
    transform: "translateY(0%)",
    transition: "transform 0.5s ease-in-out",
  },
  menuBackDropClose: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "11111",
    width: "100%",
    background: "rgba(2, 10, 60, 0.3)",
    backdropFilter: "blur(8px)",
    transform: "translateY(100%)",
    transition: "transform 0.5s ease-in",
  },
  dashboardNotificationList: {
    padding: "10px 26px 30px 20px",
    color: "#ffffff",
    height: "calc(100vh - 321px)",
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
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.down(1537)]: {
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.up(1537)]: {
      padding: "10px 20px 30px 20px",
    },
  },
  dashboardNotificationList2: {
    padding: "10px 26px 30px 20px",
    color: "#ffffff",
    height: "calc(100vh - 371px)",
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
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.down(1537)]: {
      padding: "10px 20px 30px 20px",
    },
    [theme.breakpoints.up(1537)]: {
      padding: "10px 20px 30px 20px",
    },
  },
}));

export default useStyles;
