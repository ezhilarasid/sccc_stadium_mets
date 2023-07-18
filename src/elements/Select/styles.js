import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";
const useStyles = makeStyles(
  {
    customSvgClass: {
      position: "absolute",
      right: 4,
      top: 15,
      "& .MuiSelect-iconOpen": {
        fill: "#FF5910 !important",
      },
    },

    customSelectVideo: {
      minWidth: "100px !important",
      minheight: "5px !important",
      "& .MuiSelect-select": {
        padding: "10px 0px",
      },
      "& .MuiInputBase-root": {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff !important",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff !important",
        },
        "& .MuiSvgIcon-root": {
          position: "absolute",
          right: "10px",
        },
        "& .MuiSelect-iconOutlined": {
          color: "#FFFFFF !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff",
          "&.Mui-focused": {
            borderColor: "#fff !important",
          },
        },
      },
    },

    customSelectVideoInactive: {
      minWidth: "100px !important",
      minheight: "5px !important",
      "& .MuiSelect-select": {
        padding: "10px 0px",
      },
      "& .MuiInputBase-root": {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
        opacity: 0.2,
        pointerEvents: "none",

        "& .MuiSvgIcon-root": {
          position: "absolute",
          right: "10px",
        },
      },

      "& .MuiSelect-iconOutlined": {
        color: "#FFFFFF !important",
      },
    },
    customSelect: {
      minWidth: "100px !important",
      minheight: "5px !important",
      "& .MuiSelect-select": {
        padding: "10px 11px",
      },
      "& .MuiInputBase-root": {
        borderRadius: "50px",
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
        color: "#E76A34",
        "& .MuiSvgIcon-root": {
          position: "absolute",
          right: "10px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          color: "#E76A34",
          border: "1px solid #E76A34 !important",
        },
      },

      "& .MuiSelect-iconOutlined": {
        color: "#E76A34 !important",
      },
    },
    tableSelect: {
      "& .MuiInputBase-root": {
        marginTop: 12,
      },
      "& .MuiSelect-select": {
        padding: "0 30px 0 0 !important",
        color: "white !important",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        display: "none !important",
      },
      "& .MuiFormLabel-root": {
        color: "white !important",
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: "white !important",
      },
      "& .MuiSvgIcon-root": {
        color: "white !important",
      },
      "& .MuiInput-root": {
        color: "white !important",
      },
      "& .MuiInput-root:before": {
        display: "none",
      },
      "& .MuiInput-root:after": {
        display: "none",
      },
    },
    presentText: {
      fontFamily: `'Poppins', sans-serif !important`,
      fontSize: "16px !important",
      fontWeight: 600,
      [theme.breakpoints.down(1025)]: { fontSize: "14px !important" },
    },
    presentSelected: {
      color: "#FF5910",
      paddingLeft: "10px",

      // overflow: "hidden",
      // textOverflow: "ellipsis",
      fontFamily: `'Poppins', sans-serif !important`,
      fontSize: "16px !important",
      fontWeight: 600,
      [theme.breakpoints.down(1025)]: { fontSize: "14px !important" },
    },
  },
  { index: 1 }
);
export default useStyles;
