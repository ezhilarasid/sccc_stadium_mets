import { makeStyles } from "@material-ui/core/styles";
import parkingLot from "assets/parking_lot_map.svg";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  mapStyle: {
    width: "80vw",
    height: "100vh",
  },
  parkingCircularProgress: {
    position: "absolute",
    zIndex: 111,
    top: `150px`,
    left: `50px`,
  },
  dashboardMenu: {
    position: "absolute",
    right: "80px",
    top: "0px",
    padding: 10,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(1181)]: {
      right: "70px",
    },
    [theme.breakpoints.down(1025)]: {
      right: "80px",
    },
    [theme.breakpoints.up(2731)]: {
      right: "28px",
    },
  },
  mapSvgImage: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 100,
  },
  parkingTabContainer: {
    top: "40px",
    left: "50%",
    padding: "10px",
    zIndex: 1111,
    position: "absolute",
    transform: " translate(-40%, -50%)",
    [theme.breakpoints.down(1181)]: {
      top: "28px",
      transform: " translate(-11%, -50%)",
    },
    [theme.breakpoints.down(1025)]: {
      top: "28px",
      transform: " translate(-11%, -50%)",
    },
  },
  parkingContainer: {
    position: "relative",
    maxHeight: "100vh",
    overflow: "hidden",
  },
  parkingNotificationClassName: {
    background: "#505050",
    border: "1px solid #fff",
    borderRadius: "6px",
  },

  customFoodConcessionsTabs: {
    "&  .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
    },

    "& .MuiButtonBase-root": {
      marginRight: "0 !important",
      minWidth: "45px !important",
      color: "#1E9C09",
      background: "rgb(0 0 0 / 80%)",
      backdropFilter: "blur(3.5px)",
    },
    "& .MuiTab-root": {
      width: "60px",
      height: "48px",
      padding: 0,
      fontSize: "12px !important",
      fontWeight: 500,
      fontFamily: `'Poppins', sans-serif !important`,
      letterSpacing: "1px !important",
      [theme.breakpoints.down(1181)]: {
        fontSize: "9px !important",
        width: "28px",
        height: "28px",
      },
      [theme.breakpoints.down(1025)]: {
        fontSize: "9px !important",
        width: "28px",
        height: "28px",
      },

      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        borderTopLeftRadius: "10px !important",
        borderBottomLeftRadius: "10px !important",
        [theme.breakpoints.down(1181)]: {
          minWidth: "42px !important",
        },
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
        },
      },

      "&:first-child.Mui-selected": {
        // color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1181)]: {
          minWidth: "42px !important",
        },
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
        },
      },
      "&:nth-child(2).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1181)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        "& div": {
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
      },
      "&:nth-child(3).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
      },
      "&:nth-child(4)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1181)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
      },
      "&:nth-child(4).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
      },

      "&:nth-child(5)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",

        borderTopRightRadius: "10px !important",
        borderBottomRightRadius: "10px !important",
        [theme.breakpoints.down(1181)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        "& div": {
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
      },
      "&:nth-child(5).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
      },
    },

    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "10% !important",
      background: "none",
    },
  },

  parkingHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1000,
    alignItems: "center",
  },

  analyticsContainer: {
    zIndex: 1000,
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
    height: "calc(100vh - 409px)",
  },
  notificationBg: {
    background: "#2b2b2b !important",
    height: "calc(100vh)",
  },
  parkingHeaderStyle: {
    display: "flex",
    // margin: "10px",
    justifyContent: "space-between",
  },
  birdEyeView: {
    display: "flex",
    justifyContent: "flex-end",
  },
  parkingNotificationList: {
    padding: "10px 20px 30px 20px",
    color: "#ffffff",
    height: "calc(100vh - 572px)",
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
    [theme.breakpoints.up(1537)]: {
      padding: "10px 20px 30px 20px",
    },
  },
  parkingNotificationListOpen: {
    padding: "10px 20px 30px 20px",
    color: "#ffffff",
    height: "calc(100vh - 613px)",
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
    [theme.breakpoints.up(1537)]: {
      padding: "10px 20px 30px 20px",
    },
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
  birdEyeImage: {
    width: "55px",
    cursor: "pointer",
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },
}));

export default useStyles;
