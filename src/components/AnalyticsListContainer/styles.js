import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  analyticsNotificationListItems: {
    padding: 16,
    margin: 10,
    color: theme.palette.white,
    fontSize: 16,
    border: " 0.5px solid " + theme.palette.lightGrayOne,
    borderRadius: 5,
    background: theme.palette.darkGrayThree,
    cursor: "pointer",
  },
}));

export default useStyles;
