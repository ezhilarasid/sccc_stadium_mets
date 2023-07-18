import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  menuBg: {
    height: "100vh",
  },
  newyorkMets: {
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: "0.25em",
    color: theme.palette.scccBlueOne,
    background: theme.palette.logoOrange,
    display: "inline-flex",
    padding: "24px 48px",
    fontFamily: "Barlow-ExtraBold",
    [theme.breakpoints.down(1025)]: {
      fontSize: 20,
      lineHeight: "27px !important",
      padding: "20px 30px",
    },
    [theme.breakpoints.down(1181)]: {
      fontSize: 20,
      lineHeight: "27px !important",
      padding: "20px 30px",
    },
  },
  smartCommand: {
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "40px",
    letterSpacing: "0.25em",
    color: theme.palette.white,
    marginTop: 24,
    fontFamily: "Barlow-ExtraBold",
    [theme.breakpoints.down(1025)]: {
      fontSize: 15,
      lineHeight: "24px !important",
    },
    [theme.breakpoints.down(1181)]: {
      fontSize: 15,
      lineHeight: "24px !important",
    },
  },
  menuSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 40px",
  },
  menuIconSection: {
    width: 50,
    height: 50,
    display: "flex",
    [theme.breakpoints.down(1025)]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.down(1181)]: {
      width: 32,
      height: 32,
    },
  },
  menuContainer: {
    position: "fixed",
    bottom: "120px",
    width: "100%;",
  },
  newyorkContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "70px",
  },
  innerMenuSection: {
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      "& .show-text": {
        display: "block !important",
        bottom: "-76px !important",
        [theme.breakpoints.down(1025)]: {
          bottom: "-58px !important",
        },
        [theme.breakpoints.down(1181)]: {
          bottom: "-58px !important",
        },
      },
    },
  },
  innerMenuSectionActive: {
    position: "relative",
    cursor: "pointer",
    transform: "scale(1.6)",
    filter: " blur(0.3px)",
    transition: "all .5s ease",
    filter: "drop-shadow(1px 0px 3px rgba(218, 226, 255, 0.8))",
  },
  innerMenuSectionDefault: {
    position: "relative",
    cursor: "pointer",
    width: "100%",
    "&:hover": {
      transform: "scale(1.6)",
      filter: " blur(0.3px)",
      transition: "all .5s ease",
      filter: "drop-shadow(1px 0px 3px rgba(218, 226, 255, 0.8))",
    },
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "24px",
    color: theme.palette.white,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    textShadow: "0px 1px 10px rgba(218, 226, 255, 0.8)",
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "none",
    width: " 250px !important",
    textAlign: "center",
    [theme.breakpoints.down(1025)]: {
      fontSize: 10,
      lineHeight: "17px !important",
    },
    [theme.breakpoints.down(1181)]: {
      fontSize: 10,
      lineHeight: "17px !important",
    },
  },

  menuTitleActive: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "24px",
    color: theme.palette.white,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    textShadow: "0px 1px 10px rgba(218, 226, 255, 0.8)",
    position: "absolute",
    display: "block !important",
    bottom: "-76px !important",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: " 250px !important",
    textAlign: "center",
    [theme.breakpoints.down(1025)]: {
      fontSize: 10,
      lineHeight: "17px !important",
      bottom: "-58px !important",
    },
    [theme.breakpoints.down(1181)]: {
      fontSize: 10,
      lineHeight: "17px !important",
      bottom: "-58px !important",
    },
  },
}));

export default useStyles;
