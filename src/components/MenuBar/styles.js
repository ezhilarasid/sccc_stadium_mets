import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  bottomMenuImg: {
    width: "100%",
  },
  bottomMenuSection: {
    position: "fixed",
    bottom: "-48px",
    left: "50%",
    width: 400,
    cursor: "pointer",
    transform: "translate(-50%, -50%)",
    zIndex: "111111",
  },
  positionRelative: {
    position: "relative",
  },
  arrowUpImg: {
    position: "absolute",
    top: "50%",
    left: "47%",
    transform: "translate(-50%, -50%)",
    width: 25,
    animation: "slide 2s linear infinite",
  },
  arrowDownImg: {
    position: "absolute",
    top: "50%",
    left: "47%",
    transform: "translate(-50%, -50%)",
    width: 25,
    animation: "slideDown 2s linear infinite",
  },
  menuBackDropOpen: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "11111",
    width: "100%",
    background: "rgba(2, 10, 60, 57%)",
    backdropFilter: "blur(8px)",
    transform: "translateY(0%)",
    transition: "transform 0.5s ease-in-out",
  },
  menuBackDropClose: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "11111",
    width: "100%",
    background: "rgba(2, 10, 60, 0.3)",
    backdropFilter: "blur(8px)",
    transform: "translateY(100%)",
    transition: "transform 0.5s ease-in",
  },
}));

export default useStyles;
