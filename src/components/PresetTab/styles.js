import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  presetContainer: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "16px",
    margin: "18px 17px 14px 16px",
    borderBottom: "3px solid" + theme.palette.darkGrayFive,
  },
  divider: {
    border: "1px solid" + theme.palette.darkGrayFive,
    margin: "0 10px 0 10px !important",
    borderWidth: "1px",
  },
  addIcon: {
    cursor: "pointer",
  },
  presetnText: {
    fontSize: "20px !important",
    letterSpacing: " 0.15em",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "34px",
  },
  presetHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchIconSection: {
    marginRight: 12,
    cursor: "pointer",
  },
  closeIconSection: {
    marginRight: 12,
    cursor: "pointer",
    width: 30,
    transform: "rotate(137deg)",
  },
  addIconSection: {
    cursor: "pointer",
  },
  addIconSectionInactive: {
    opacity: 0.2,
    pointerEvents: "none",
  },
  notificationScoll: {
    height: "calc(100vh - 188px) !important",
    overflow: "auto",
  },
  searchClass: {
    border: "1px solid" + theme.palette.lightGrayThree,
    background: theme.palette.lightGrayFour,
    color: theme.palette.lightGrayFive,
    borderRadius: 6,
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-root": {
      fontWeight: 500,
      fontFamily: `'Poppins', sans-serif !important`,
    },
  },
  noResultStyle: {
    textAlign: "center",
    color: theme.palette.lightGrayTwo,
    fontWeight: 600,
  },
}));

export default useStyles;
