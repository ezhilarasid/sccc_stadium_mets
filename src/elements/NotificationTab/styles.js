import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  notificationContainer: {
    background: "rgba(0, 0, 0, 0.87)",
    backdropFilter: "blur(1.5px)",
    borderRadius: "10px 0px 0px 10px",
    position: "fixed",
    right: 0,
    top: 100,
    width: "350px !important",
    zIndex: 111,
    height: "calc(100vh - 164px)",
  },
  notificationHeading: {
    display: "flex",
    padding: "20px 20px",
    color: "#ffffff",
    minHeight: "80px",
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: 500,
    fontSize: 22,
  },
  notificationTabHeading: {
    padding: "0 20px 0 20px",
  },
  notificationSearchHeading: {
    padding: "10px 0px 10px 20px",
    minHeight: "76px",
  },

  customNotificationTabs: {
    "& .MuiTabs-flexContainer": {
      borderBottom: "2px solid #3e3e3e",
      justifyContent: "space-between",
    },
    "& .MuiButtonBase-root": {
      marginRight: "0 !important",
      minWidth: "64px !important",
      color: "#1E9C09",
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: 600,
      fontSize: "15px !important",
      marginBottom: "-0.5px !important",
      flex: "1 !important",
      [theme.breakpoints.down(1025)]: {
        fontSize: "13px !important",
      },
    },
    "& .MuiTab-root": {
      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: "#1E9C09 !important",
        // background: "#1E9C09",
      },
      "&:first-child.Mui-selected": {
        color: "#ffffff !important",
        background: "#1E9C09",
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: "#E13827 !important",
      },
      "&:nth-child(2).Mui-selected": {
        color: "#ffffff !important",
        background: "#E13827",
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "64px !important",
        color: "#FF5910 !important",
      },
      "&:nth-child(3).Mui-selected": {
        color: "#ffffff !important",
        background: "#FF5910",
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "100% !important",
      background: "#2B2B2B",
      display: "none",
    },
  },
  notificationSearchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    cursor: "pointer",
  },

  searchIcon: {
    display: "flex",
    alignItems: "center",
    "& :first-child": {
      marginRight: 11,
      width: "26px !important",
      cursor: "pointer",
    },
    "& :last-child": {
      width: "38px !important",
    },
  },
  searchClass: {
    marginTop: "5px",
    border: "1px solid #d7d7d7",
    borderRadius: 6,
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
  },
}));

export default useStyles;
