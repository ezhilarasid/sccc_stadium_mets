import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  sliderMainClass: {
    margin: 10,
    padding: 10,
    background: "rgba(0, 0, 0, 0.78)",
    borderRadius: "10px",
  },
  sliderHeading: {
    color: "#FF5910",
    letterSpacing: "1px",
  },
  sliderRow2: {
    display: "flex",
    justifyContent: "space-between",
  },
  sliderValueClass: {
    color: "#FFF744",
    fontWeight: 500,
    fontSize: 20,
    margin: 0,
  },
  sliderContentClass: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sliderRow3: {
    display: "flex",
    justifyContent: "space-between",
  },
  sliderImageClass: {
    width: 25,
    marginTop: 5,
  },
  sliderRow4: {
    display: "flex",
  },
  sliderRow4Left: { display: "flex" },
  availableValue: {
    color: "#FFF844",
    fontSize: 28,
    fontWeight: 400,
    margin: "0",
  },
  occupiedValue: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: 500,
    margin: "13px 0 0 0",
  },
  spanBar: {
    color: "white",
    margin: "13px 6px",
    fontSize: 20,
  },
  sliderRow4Right: {},
}));

export default useStyles;
