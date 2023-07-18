import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  displayFlex: {
    display: "flex",
    // marginBottom: 8,
  },
  displayFlexStyle: {
    display: "flex",
  },
  analyticsHeader: {
    display: "flex",
    background: "#1A1A1A",
    boxShadow: "0px 0px 15px 8px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(16px)",
    padding: 12,
    alignItems: "center",
  },
  notificationList: {
    background: "#282828",
  },
  analyticsGrid: {
    padding: 16,
  },
  infoIconSection: {
    padding: 12,
    margin: 16,
    background: "#282828",
    display: "flex",
    justifyContent: "space-between",
  },
  GraphSection: {
    background: "#272727",
    color: "white",
    "@media (max-height: 820px)": {
      "& .highcharts-container": {
        height: "220px !important",
        width: "250px !important",
        "& .highcharts-root": {
          height: "160px !important",
          width: "250px !important",
        },
        "& .highcharts-xaxis-labels": {
          top: "-70px !important",
        },
      },
    },
    "@media (max-height: 768px)": {
      "& .highcharts-container": {
        height: "200px !important",
        width: "236px !important",
        "& .highcharts-root": {
          height: "160px !important",
          width: "218px !important",
        },
        "& .highcharts-xaxis-labels": {
          top: "-70px !important",
        },
      },
    },
    "@media (min-height: 1080px)": {
      "& .highcharts-container": {
        height: "320px !important",
        "& .highcharts-root": {
          height: "320px !important",
        },
      },
    },
    "@media (min-height: 1120px)": {
      "& .highcharts-container": {
        height: "334px !important",
        width: "380px !important",
        "& .highcharts-root": {
          height: "289px !important",
          width: "380px !important",
        },
      },
    },
    "@media (min-width: 2000px)": {
      "& .highcharts-container": {
        height: "320px !important",
        "& .highcharts-root": {
          height: "320px !important",
        },
      },
    },
    "@media (min-width: 2048px)": {
      "& .highcharts-container": {
        height: "550px !important",
        width: "440px !important",
        "& .highcharts-root": {
          height: "500px !important",
          width: "440px !important",
        },
        "& .highcharts-xaxis-labels": {
          top: "170px !important",
          "& span": {
            fontSize: "16px !important",
          },
        },
      },
    },
    "@media (min-width: 2566px)": {
      "& .highcharts-container": {
        height: "504px !important",
        width: "600px !important",
        "& .highcharts-root": {
          height: "480px !important",
          width: "600px !important",
        },
        "& .highcharts-axis-labels": {
          top: "154px !important",
          left: "35px !important",
        },
      },
    },
    "@media (min-width: 2732px)": {
      "& .highcharts-container": {
        height: "750px !important",
        width: "640px !important",
        "& .highcharts-root": {
          height: "700px !important",
          width: "640px !important",
        },
        "& .highcharts-xaxis-labels": {
          top: "270px !important",
          "& span": {
            fontSize: "20px !important",
          },
        },
      },
    },
  },
  analyticsContainerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "14px 12px",
  },
  searchBoxSection: {
    flex: 1,
    marginRight: 10,
  },
  searchClass: {
    border: "1px solid #d7d7d7",
    background: "#585858",
    color: "#A8A8A8",
    borderRadius: 6,
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-root": {
      fontWeight: 500,
      fontFamily: `'Poppins', sans-serif !important`,
      [theme.breakpoints.down(1025)]: {
        fontSize: 9,
        lineHeight: "17px !important",
      },
    },
  },
  redButtonStyle: {
    background: "#FF5910",
    fontSize: 13,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    padding: "13px",
    cursor: "pointer",
    [theme.breakpoints.down(1025)]: {
      fontSize: 9,
      lineHeight: "17px !important",
    },
  },

  redButtonStyleInactive: {
    background: "#191919",
    fontSize: 13,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    padding: "13px",
    cursor: "pointer",
    [theme.breakpoints.down(1025)]: {
      fontSize: 9,
      lineHeight: "17px !important",
    },
  },
  mealSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "210px",
    fontSize: 12,
    lineHeight: "19px",
    fontWeight: 300,
    [theme.breakpoints.down(1181)]: {
      minWidth: "150px",
      fontSize: 8,
    },
    [theme.breakpoints.down(1025)]: {
      minWidth: "150px",
      fontSize: 8,
    },
    "& :nth-child(1)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#FC8456",
        width: 9,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
    "& :nth-child(2)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#A593FC",
        width: 9,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
    "& :nth-child(3)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#FFD646",
        width: 9,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
  },

  mealSectionRevenue: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "210px",
    fontSize: 12,
    lineHeight: "19px",
    fontWeight: 300,
    [theme.breakpoints.down(1181)]: {
      minWidth: "130px",
      fontSize: 8,
    },
    [theme.breakpoints.down(1025)]: {
      minWidth: "130px",
      fontSize: 8,
    },
    "& :nth-child(1)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#36F097",
        width: 9,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
    "& :nth-child(2)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#1ED6FF",
        width: 9,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
    "& :nth-child(3)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#268AFF",
        width: 9,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
  },

  utilisationSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "120px",
    fontSize: 12,
    lineHeight: "19px",
    fontWeight: 300,
    [theme.breakpoints.down(1181)]: {
      minWidth: "130px",
      fontSize: 8,
    },
    [theme.breakpoints.down(1025)]: {
      minWidth: "130px",
      fontSize: 8,
    },
    "& :nth-child(1)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#01C6F1",
        width: 12,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
    "& :nth-child(2)": {
      position: "relative",
      "&::before": {
        content: `''`,
        position: "absolute",
        top: 8,
        left: "-22px",
        background: "#FFCA0A",
        width: 12,
        height: 5,
        borderRadius: 10,
        [theme.breakpoints.down(1181)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
        [theme.breakpoints.down(1025)]: {
          width: "7px",
          left: "-15px",
          height: "3px",
        },
      },
    },
  },

  customAnalyticsTabs: {
    "&  .MuiTabs-flexContainer": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-26%, -50%)",
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
      fontSize: "16px",
      alignItems: "center",

      "&:first-child": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        borderTopLeftRadius: "10px !important",
        borderBottomLeftRadius: "10px !important",

        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },

      "&:first-child.Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        alignItems: "center",
        // pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(2).Mui-selected": {
        color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(3)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        // pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(3).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(4)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",

        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(4).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(5)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        // pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(5).Mui-selected": {
        color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(6)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        // pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(6).Mui-selected": {
        color: "#E13827 !important",
        // pointerEvents: "none",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(7)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      // "&:nth-child(7).Mui-selected": {
      //   color: "#E13827 !important",

      //   "& div": {
      //     background: "#FF5910",
      //     border: "1px solid #fff",
      //     borderRadius: "10px",
      //     width: "35px",
      //     height: "35px",
      //     alignItems: "center",

      //     display: "flex",

      //     justifyContent: "center",
      //   },
      // },
      "&:nth-child(8)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        color: "#ffffff !important",
        borderRight: "1px solid #ffffff !important",
        pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(8).Mui-selected": {
        color: "#E13827 !important",
        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(7)": {
        marginRight: "0 !important",
        minWidth: "45px !important",
        maxWidth: "64px !important",
        color: "#ffffff !important",
        borderTopRightRadius: "10px !important",
        borderBottomRightRadius: "10px !important",
        // pointerEvents: "none",
        "& div": {
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
      "&:nth-child(7).Mui-selected": {
        color: "#E13827 !important",

        "& div": {
          background: "#FF5910",
          border: "1px solid #fff",
          borderRadius: "10px",
          width: "35px",
          height: "35px",
          alignItems: "center",

          display: "flex",

          justifyContent: "center",
        },
      },
    },

    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "10% !important",
      background: "none",
    },
  },
  selectItem: {
    justifyContent: "flex-end",
    display: "flex",
  },
  analyticsPage: {
    background: "#1A1A1A;",
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

  analyticsNotificationListItems: {
    padding: 16,
    margin: 10,
    color: "white",
    fontSize: 16,
    border: " 0.5px solid #767575",
    borderRadius: 5,
    background: "#191919",
    cursor: "pointer",
    [theme.breakpoints.down(1181)]: {
      fontSize: 13,
      lineHeight: "17px !important",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 13,
      lineHeight: "17px !important",
    },
  },
  analyticsNotificationListSection: {
    height: "calc(100vh - 146px)",
    overflow: "auto",

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
  analyticsNotificationListItemsActive: {
    padding: 16,
    margin: 10,
    color: "white",
    fontSize: 16,
    border: " 0.5px solid #767575",
    borderRadius: 5,
    background: "#FF5910",
    cursor: "pointer",
    [theme.breakpoints.down(1181)]: {
      fontSize: 13,
      lineHeight: "17px !important",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 13,
      lineHeight: "17px !important",
    },
  },
  analyticsBody: {
    background: "#151515",
    height: "calc(100vh - 101px)",
  },
  mobileIconImg: {
    width: 43,
    cursor: "pointer",
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuIconImg: {
    width: 45,
    marginRight: 10,
  },
  graphHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 31px",
    alignItems: "flex-end",
    [theme.breakpoints.down(1181)]: {
      padding: "14px 8px",
    },
    [theme.breakpoints.down(1025)]: {
      padding: "14px 8px",
    },
    [theme.breakpoints.up(2731)]: {
      padding: "30px 24px",
    },
  },
  graphTitle: {
    color: "#FFF744",
    fontSize: 16,
    letterSpacing: "1px",
    textTransform: "uppercase",
    [theme.breakpoints.down(1181)]: {
      fontSize: 9,
      lineHeight: "17px !important",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 9,
      lineHeight: "17px !important",
    },
    [theme.breakpoints.up(2731)]: {
      fontSize: 26,
      lineHeight: "32px !important",
    },
  },
  revenueChartLegend: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 13,
    fontWeight: 400,
  },
  mealChartLegend: {
    position: "absolute",
    right: "1%",
    top: "31%",
    // transform: "translate(-50%, -50%)",
    fontSize: 9,
    fontWeight: 400,
    [theme.breakpoints.down(1181)]: {
      fontSize: 5,
      top: "13% !important",
      lineHeight: "15px !important",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 5,
      top: "13% !important",
      lineHeight: "15px !important",
    },
    [theme.breakpoints.up(2047)]: {
      fontSize: 12,
      top: "13% !important",
      lineHeight: "30px !important",
    },
  },
  mealChartLegendtab3: {
    position: "absolute",
    right: "50%",
    top: "50%",
    transform: "translate(60%, -36%)",
    fontSize: 13,
    fontWeight: 400,
    [theme.breakpoints.down(1181)]: {
      fontSize: 4,
      lineHeight: "10px !important",
      top: "43%",
      transform: "translate(47%, -36%)",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 4,
      lineHeight: "10px !important",
      top: "47%",
      transform: "translate(50%, -36%)",
    },
    [theme.breakpoints.up(2047)]: {
      fontSize: 9,
      lineHeight: "17px !important",
      top: "46%",
      transform: "translate(22%, -36%)",
    },
    [theme.breakpoints.up(2731)]: {
      fontSize: 10,
      lineHeight: "20px !important",
      top: "49%",
      transform: "translate(50%, -36%)",
    },
  },
  mealChartLegendBorder: {
    width: "6px",
    height: "6px",
    display: "flex",
    margin: "6px",
    [theme.breakpoints.down(1181)]: {
      width: "3px",
      height: "3px",
      margin: "3px",
    },
    [theme.breakpoints.down(1025)]: {
      width: "3px",
      height: "3px",
      margin: "3px",
    },
    [theme.breakpoints.up(2047)]: {
      width: "8px",
      height: "8px",
      margin: "8px",
    },
    [theme.breakpoints.up(2731)]: {
      width: "7px",
      height: "7px",
      margin: "7px",
    },
  },

  inventoryChartLegend: {
    position: "absolute",
    right: "28%",
    top: "40%",
    // transform: "translate(-50%, -50%)",
    fontSize: 13,
    fontWeight: 400,
    [theme.breakpoints.down(1181)]: {
      fontSize: 8,
      lineHeight: "21px !important",
      top: "53%",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 8,
      lineHeight: "21px !important",
      top: "55%",
    },
  },
  inventoryChartLegendBorder: {
    width: "6px",
    height: "6px",
    display: "flex",
    margin: "6px",
  },
  revenueChartLegendBorder: {
    width: "6px",
    height: "6px",
    display: "flex",
    margin: "6px",
  },
  graphCircularSection: {
    margin: "0px 0px 0px 30px",
    [theme.breakpoints.down(1181)]: {
      width: "300px !important",
      height: "218px !important",
    },
    [theme.breakpoints.down(1025)]: {
      width: "300px !important",
      height: "200px !important",
    },

    [theme.breakpoints.up(2047)]: {
      width: "640px !important",
      height: "540px !important",
    },
    [theme.breakpoints.up(2731)]: {
      width: "640px !important",
      height: "750px !important",
    },
  },
  mealsIncident: {
    position: "absolute",
    left: "50%",
    top: "53%",
    transform: "translate(-50%, -50%)",
    fontSize: 16,
    fontWeight: 500,
    [theme.breakpoints.down(1181)]: {
      fontSize: 9,
      top: "44%",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: 9,
      top: "48%",
    },
    [theme.breakpoints.up(2047)]: {
      top: "48%",
      transform: "translate(-64%, -50%)",
    },
    [theme.breakpoints.up(2731)]: {
      top: "50%",
      transform: "translate(-44%, -50%)",
    },
  },
}));

export default useStyles;
