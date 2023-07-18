import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  headerStyle: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "27px",
    textTransform: "uppercase",
    marginBottom: 20,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  timeStampStyle: {
    fontSize: "15px",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  tripsElementSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14.11px 14.38px",
  },
  infoListItem: {
    borderBottomLeftRadius: "6px",
    borderTopLeftRadius: "6px",
    padding: "8px 0px 2px 8px",
    flex: 1,
  },
  tripsSection: {
    border: "1px solid #DDDDDD",
    borderBottomLeftRadius: "6px",
    borderTopLeftRadius: "6px",
    marginRight: 4,
    height: "calc(100vh - 356px)",
    overflow: "auto",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      height: "calc(100vh - 400px)",
    },
  },

  tripsSearchIconBg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "28px",
    height: "28px",
    borderRadius: "14px",
    background: "#404040",
    paddingTop: "2px",
    cursor: "pointer",
  },

  violationSearchIconBg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "28px",
    height: "28px",
    borderRadius: "14px",
    background: "#808080",
    paddingTop: "2px",
    cursor: "pointer",
  },

  violationElementSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px",
    fontWeight: 500,
    fontFamily: `'Poppins', sans-serif !important`,
  },

  violationSection: {
    background: "#111111",
    height: "calc(100vh - 246px) !important",
    overflow: "auto",
    [theme.breakpoints.down("lg")]: {
      height: "calc(100vh - 266px) !important",
    },
  },
  subListRow: {
    marginBottom: "12px !important",
  },
  subListSection: {
    paddingRight: 12,
  },
  infoVideoTitle: {
    marginLeft: 8,
  },
  tripsElementListSection: {
    height: "calc(100vh - 415px)",
    overflow: "auto",
    [theme.breakpoints.down("lg")]: {
      height: "calc(100vh - 459px)",
    },
  },
  videoMapSection: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 355px)",
  },
  infoMainListClassName: {
    height: "100%",
    background: theme.palette.grey4,
    borderBottomLeftRadius: "6px",
    borderTopLeftRadius: "6px",
    margin: "8px 0px 2px 8px",
    flex: 1,
  },
  infoMainListClassNameOne: {
    borderBottomLeftRadius: "6px",
    borderTopLeftRadius: "6px",
    margin: "8px 0px 2px 8px",
    flex: 1,
    overflow: "hidden",
  },
  infoDialogClassName: {
    display: "flex",
    border: `1px solid ${theme.palette.white}`,
    background: theme.palette.black,
    margin: 6,
    borderRadius: 4,
    "& .MuiInputBase-input": {
      color: theme.palette.white,
    },
    "& .MuiButtonBase-root": {
      color: theme.palette.white,
    },
  },
  pastViolationsClass: {
    display: "flex",
    border: `1px solid ${theme.palette.white}`,
    background: theme.palette.black,
    margin: 16,
    borderRadius: 4,
    "& .MuiInputBase-input": {
      color: theme.palette.white,
    },
    "& .MuiButtonBase-root": {
      color: theme.palette.white,
    },
  },
  carImageClass: {
    height: "calc(100vh - 172px)",
    objectFit: "cover",
  },
}));

export default useStyles;
