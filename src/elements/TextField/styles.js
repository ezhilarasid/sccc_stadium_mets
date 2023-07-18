import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(
  {
    inputText: {
      background: "#ffffff",
      "& .MuiInputBase-root": {
        "& input[type=number]": {
          "-moz-appearance": "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      },
    },
  },
  { index: 1 }
);
export default styles;
