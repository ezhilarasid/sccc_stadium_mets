import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@mui/material";
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

  displayFlex: {
    display: "flex",
  },

  occupancySection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    margin: "20px 25px 0 0",
    [theme.breakpoints.down(1181)]: {
      margin: "20px 5px 0 0",
    },
    [theme.breakpoints.down(1025)]: {
      margin: "20px 5px 0 0",
    },
  },

  headerRight: {
    display: "flex",
    flex: 0.9,
  },
  headerCenter: { flex: 1.5, marginRight: 12, marginBottom: 2 },
  headerTextStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(1181)]: {
      fontSize: 14,
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 14,
    },
  },
  outdoorsHeaderStyle: {
    visibility: "hidden",
  },
  parkingTabContainer: {
    top: "65%",
    left: "50%",
    padding: "7px 10px 10px 10px",
    zIndex: 1111,
    position: "absolute",
    transform: " translate(-42%, -50%)",
    [theme.breakpoints.down(1181)]: {
      transform: " translate(-42%, -50%)",
      top: "32px !important",
    },
    [theme.breakpoints.down(1025)]: {
      transform: " translate(-44%, -50%)",
      top: "32px !important",
    },
  },
  customOperationsTabs: {
    "&  .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
    },

    "& .MuiButtonBase-root": {
      marginRight: "0 !important",
      minWidth: "40px !important",
      color: "#1E9C09",
      background: "#000000",
    },
    "& .MuiTab-root": {
      width: "60px",
      height: "48px",
      padding: 0,
      fontSize: "12px !important",
      alignItems: "center",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
        },
      },

      "&:first-child.Mui-selected": {
        // color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
        alignItems: "center",
        [theme.breakpoints.down(1025)]: {
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
      "&:nth-child(2).Mui-selected": {
        // color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
        [theme.breakpoints.down(1025)]: {
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
      "&:nth-child(3).Mui-selected": {
        // color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
      "&:nth-child(4)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
      "&:nth-child(4).Mui-selected": {
        // color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
      "&:nth-child(5).Mui-selected": {
        // color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
        maxWidth: "64px !important",

        color: "#ffffff !important",
        borderTopRightRadius: "10px !important",
        borderBottomRightRadius: "10px !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
      "&:nth-child(6).Mui-selected": {
        // color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
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
    },

    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "10% !important",
      background: "none",
    },
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
        fontWeight: 400,
      },
      [theme.breakpoints.down(1181)]: {
        fontSize: "9px !important",
        width: "28px",
        height: "28px",
        fontWeight: 400,
      },

      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        borderTopLeftRadius: "10px !important",
        borderBottomLeftRadius: "10px !important",
        [theme.breakpoints.down(1025)]: {
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
          minWidth: "35px !important",
        },
        [theme.breakpoints.down(1181)]: {
          minWidth: "35px !important",
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
            width: "24px",
            height: "28px",
          },
        },
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "10% !important",
      background: "none",
    },
  },

  firstChild: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    "& :first-child": {
      fontSize: 30,
      color: "#FFF844",
      lineHeight: "40px",
      fontWeight: 600,
      [theme.breakpoints.down(1025)]: {
        fontSize: 15,
        lineHeight: "27px",
      },
      [theme.breakpoints.down(1181)]: {
        fontSize: 15,
        lineHeight: "27px",
      },
    },
    "& :nth-child(2)": {
      fontSize: 18,
      color: "#fff",
      lineHeight: "39px",
      margin: "0 8px",
      [theme.breakpoints.down(1025)]: {
        fontSize: 12,
        lineHeight: "23px",
      },
      [theme.breakpoints.down(1181)]: {
        fontSize: 12,
        lineHeight: "23px",
      },
    },
    "& :nth-child(3)": {
      fontSize: 18,
      color: "#fff",
      lineHeight: "34px",
      [theme.breakpoints.down(1025)]: {
        fontSize: 15,
        lineHeight: "27px",
      },
      [theme.breakpoints.down(1181)]: {
        fontSize: 15,
        lineHeight: "27px",
      },
    },
  },
  lastChild: {
    marginLeft: 26,
    [theme.breakpoints.down(1181)]: {
      marginLeft: 42,
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: 12,
    },

    "& :first-child": {
      fontSize: 30,
      color: "#FF9344",
      lineHeight: "40px",
      fontWeight: 600,
      [theme.breakpoints.down(1025)]: {
        fontSize: 18,
        lineHeight: "27px",
      },
      [theme.breakpoints.down(1181)]: {
        fontSize: 18,
        lineHeight: "27px",
      },
    },
    "& :nth-child(2)": {
      fontSize: 14,
      color: "#FF9344",
      lineHeight: "21px",
      margin: "0 6px 0 -4px",
      [theme.breakpoints.down(1025)]: {
        fontSize: 10,
        lineHeight: "14px",
      },
      [theme.breakpoints.down(1811)]: {
        fontSize: 10,
        lineHeight: "14px",
      },
    },
    "& :nth-child(3)": {
      fontSize: 14,
      color: "#fff",
      lineHeight: "21px",
      [theme.breakpoints.down(1025)]: {
        fontSize: 10,
        lineHeight: "14px",
      },
      [theme.breakpoints.down(1811)]: {
        fontSize: 10,
        lineHeight: "14px",
      },
    },
  },
  line: {
    width: "1px",
    height: "15px",
    position: "absolute",
    right: "-21px",
    background: "#C0BCBC",
    top: " 14px",
    [theme.breakpoints.down(1025)]: {
      top: "6px",
      right: "-15px",
    },
    [theme.breakpoints.down(1811)]: {
      top: "6px",
      right: "-15px",
    },
  },
  dashboardMenu: {
    position: "absolute",
    right: `7px`,
    top: `0px`,
    padding: "7px 10px 10px 10px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(1811)]: {
      right: `86px`,
      top: "3px",
    },
    [theme.breakpoints.down(1025)]: {
      right: `72px`,
      top: "3px",
    },
  },
  videoLeftSide: {
    position: "relative",
  },
  innerOccupancy: {
    display: "flex",
  },

  birdEyeImage: {
    width: "55px",
    cursor: "pointer",
    [theme.breakpoints.down(1811)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
  },

  menuIconImg: {
    width: 50,
    marginRight: 10,
  },
  mobileIconImg: {
    width: 50,
    cursor: "pointer !important",
    marginRight: 10,
    [theme.breakpoints.down(1811)]: {
      width: "35px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "35px",
    },
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
      [theme.breakpoints.down(1025)]: {
        fontSize: "9px !important",
        width: "28px",
        height: "28px",
      },
      [theme.breakpoints.down(1811)]: {
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
          minWidth: "42px !important",
        },
        [theme.breakpoints.down(1811)]: {
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
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1811)]: {
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
          minWidth: "42px !important",
        },
        [theme.breakpoints.down(1811)]: {
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
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
          },
          [theme.breakpoints.down(1811)]: {
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
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1811)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        "& div": {
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1811)]: {
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
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1811)]: {
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
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1811)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1811)]: {
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
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1811)]: {
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
        [theme.breakpoints.down(1025)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        [theme.breakpoints.down(1811)]: {
          minWidth: "42px !important",
          fontSize: "9px !important",
        },
        "& div": {
          width: "40px",
          height: "38px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1811)]: {
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
          [theme.breakpoints.down(1025)]: {
            width: "24px",
            height: "28px",
            fontSize: "9px !important",
          },
          [theme.breakpoints.down(1811)]: {
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
}));

export default useStyles;
