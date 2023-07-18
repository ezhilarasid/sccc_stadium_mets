import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  searchInput: {
    border: `1px solid ${theme.palette.grey}`,
    background: "red",
  },
}));

export default useStyles;
