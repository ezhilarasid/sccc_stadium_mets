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
    transform: " translate(-44%, -50%)",
    [theme.breakpoints.down(1025)]: {
      transform: " translate(-38%, -50%)",
      top: "32px !important",
    },
    [theme.breakpoints.down(1181)]: {
      transform: " translate(-38%, -50%)",
      top: "32px !important",
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
  customParkingTabs: {
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
      width: "44px",
      height: "44px",
      padding: 0,
      fontSize: "12px !important",
      fontWeight: 500,
      fontFamily: `'Poppins', sans-serif !important`,
      letterSpacing: "1px !important",
      [theme.breakpoints.down(1025)]: {
        fontSize: "9px !important",
        width: "28px",
        height: "28px",
      },
      [theme.breakpoints.down(1181)]: {
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
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
      },

      "&:first-child.Mui-selected": {
        // color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
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
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
      },
      "&:nth-child(2).Mui-selected": {
        // color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
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
        fontSize: "11px !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
          fontSize: "9px !important",
        },

        "& div": {
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 500,
          fontFamily: `'Poppins', sans-serif !important`,
          fontSize: "11px !important",
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
        },
        "&::before,&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          borderColor: "transparent",
          borderStyle: "solid",
        },
        "&::before": {
          borderWidth: "8px",
          borderRightColor: "#E13827",
          borderTopColor: "#E13827",
        },
        "&::after": {
          borderRadius: "3px",
          borderWidth: "5px",
          borderRightColor: "#E13827" /* color of the triangle */,
          borderTopColor: "#E13827" /* color of the triangle */,
        },
      },
      "&:nth-child(3).Mui-selected": {
        // color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 500,
          fontFamily: `'Poppins', sans-serif !important`,
          fontSize: "11px !important",
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "11px !important",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
            fontSize: "11px !important",
          },
        },
      },
      "&:nth-child(4)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
        "&::before,&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          borderColor: "transparent",
          borderStyle: "solid",
        },
        "&::before": {
          borderWidth: "8px",
          borderRightColor: "#E13827",
          borderTopColor: "#E13827",
        },
        "&::after": {
          borderRadius: "3px",
          borderWidth: "5px",
          borderRightColor: "#E13827" /* color of the triangle */,
          borderTopColor: "#E13827" /* color of the triangle */,
        },
      },
      "&:nth-child(4).Mui-selected": {
        // color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(5)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
      },
      "&:nth-child(5).Mui-selected": {
        // color: "#E13827 !important",
        // background: "#505050",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(6)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
        "&::before,&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          borderColor: "transparent",
          borderStyle: "solid",
        },
        "&::before": {
          borderWidth: "8px",
          borderRightColor: "#E13827",
          borderTopColor: "#E13827",
        },
        "&::after": {
          borderRadius: "3px",
          borderWidth: "5px",
          borderRightColor: "#E13827" /* color of the triangle */,
          borderTopColor: "#E13827" /* color of the triangle */,
        },
      },
      "&:nth-child(6).Mui-selected": {
        // color: "#E13827 !important",
        // background: "#505050",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(7)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
      },
      "&:nth-child(7).Mui-selected": {
        // color: "#E13827 !important",
        // background: "#505050",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(8)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
        "&::before,&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          borderColor: "transparent",
          borderStyle: "solid",
        },
        "&::before": {
          borderWidth: "8px",
          borderRightColor: "#E13827",
          borderTopColor: "#E13827",
        },
        "&::after": {
          borderRadius: "3px",
          borderWidth: "5px",
          borderRightColor: "#E13827" /* color of the triangle */,
          borderTopColor: "#E13827" /* color of the triangle */,
        },
      },
      "&:nth-child(8).Mui-selected": {
        // color: "#E13827 !important",
        // background: "#505050",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(9)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
        "&::before,&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          borderColor: "transparent",
          borderStyle: "solid",
        },
        "&::before": {
          borderWidth: "8px",
          borderRightColor: "#E13827",
          borderTopColor: "#E13827",
        },
        "&::after": {
          borderRadius: "3px",
          borderWidth: "5px",
          borderRightColor: "#E13827" /* color of the triangle */,
          borderTopColor: "#E13827" /* color of the triangle */,
        },
      },
      "&:nth-child(9).Mui-selected": {
        // color: "#E13827 !important",
        // background: "#505050",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            width: "24px",
            height: "28px",
          },
        },
      },
      "&:nth-child(10)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        maxWidth: "64px !important",
        fontSize: "14px",
        color: "#ffffff !important",
        borderTopRightRadius: "10px !important",
        borderBottomRightRadius: "10px !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "32px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "32px !important",
        },
        "& div": {
          display: "flex",
          width: "38px",
          height: "38px",
          alignItems: "center",
        },
      },
      "&:nth-child(10).Mui-selected": {
        // color: "#ffffff !important",
        // background: "#505050",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "34px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          fontWeight: 700,
          fontFamily: `'Poppins', sans-serif !important`,
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1181)]: {
            minWidth: "32px !important",
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
    height: "calc(100vh - 565px)",
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
  },
  menuIconImg: {
    width: 50,
    marginRight: 10,
    cursor: "pointer",
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
  },
  mobileIconImg: {
    width: 50,
    cursor: "pointer",
    marginRight: 10,
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
  },
  birdEyeImage: {
    width: "55px",
    cursor: "pointer",
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1181)]: {
      width: "35px",
    },
  },
}));

export default useStyles;
