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
  closeIcon: {
    cursor: "pointer",
  },
  presetName: {
    padding: "0 15px 20px 15px",
  },
  presetCameraContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 15px 30px 15px",
  },
  cameraListContainer: {
    padding: "0 15px 20px 15px",
    height: "calc(100vh - 444px)",
    overflow: "auto",
    "& .MuiCheckbox-root": {
      color: theme.palette.white,
    },
  },
  cameraListItems: {
    borderRadius: "5px",
    margin: "0 0 10px 0",
    background: theme.palette.darkGrayTwo,
    border: "1px solid" + theme.palette.white,
    cursor: "pointer",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  videoPreviewIconStyle: {
    width: 25,
    cursor: "pointer",
  },
  searchBoxContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  presetTextfield: {
    "& .MuiFormControl-root": {
      width: "100% !important",
      background: "transparent",
      border: "1px solid" + theme.palette.white,
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "transparent !important",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  },
  presetNameItem: {
    marginBottom: 8,
  },
  presetnText: {
    fontSize: "20px !important",
    letterSpacing: " 0.15em",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "34px",
  },
  cancelButton: {
    marginRight: 16,
  },
  saveButtonSection: {
    display: "flex",
    alignItems: "center",
    background: theme.palette.darkGrayOne,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: 14,
    justifyContent: "flex-end",
    position: "fixed",
    bottom: "92px",
    "& .MuiButtonBase-root": {
      fontSize: "14px !important",
      letterSpacing: " 0.15em",
      fontFamily: "Poppins, sans-serif",
      lineHeight: "21px",
      borderRadius: "50px",
      marginLeft: 16,
      padding: "10px 24px",
      border: "1px solid" + theme.palette.white,
      color: "white",
      "&.MuiButton-containedPrimary": {
        background: theme.palette.logoOrange,
        color: "white",
      },
      "&:hover": {
        border: "1px solid" + theme.palette.white,
      },
      "&.Mui-disabled": {
        opacity: 0.3,
        color: "white !important",
        border: "1px solid" + theme.palette.white,
      },
    },
  },
  searchClass: {
    border: "1px solid #d7d7d7",
    background: "#585858",
    color: "#A8A8A8",
    borderRadius: 6,
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-root": {
      fontWeight: 500,
      fontFamily: `'Poppins', sans-serif !important`,
    },
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
  noResultStyle: {
    textAlign: "center",
    color: "#5B5B5B",
  },
}));

export default useStyles;
