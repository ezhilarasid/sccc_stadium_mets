import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  customCheckbox: {
    "&.Mui-checked": {
      color: `${theme.palette.white} !important`,
    },
  },
}));

export default useStyles;
