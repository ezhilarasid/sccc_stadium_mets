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
  closeIconSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    cursor: "pointer",
  },
  presetName: {
    padding: "0 10px 20px 10px",
  },
  presetCameraContainer: {
    display: "flex",
    alignItems: "center",
    padding: "15px 15px 30px 15px",
  },
  cameraListSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cameraListContainer: {
    padding: "0 15px 20px 15px",
    height: "calc(100vh - 444px)",
    overflow: "auto",
    "& .MuiCheckbox-root": {
      color: theme.palette.white,
    },
  },
  editPresetSearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  presetnText: {
    fontSize: "20px !important",
    letterSpacing: " 0.15em",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "34px",
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
        background: " #FF5910",
        color: "white",
      },
      "&:hover": {
        border: "1px solid" + theme.palette.white,
      },
      "&.Mui-disabled": {
        opacity: 0.3,
        color: theme.palette.white + "!important",
        border: "1px solid" + theme.palette.white,
      },
    },
  },
  avatharEdit: {
    background: theme.palette.lightOrange + "!important",
    width: "30px !important",
    height: "30px !important",
    color: theme.palette.black + "!important",
    marginRight: "10px !important",
    fontFamily: `'Poppins', sans-serif !important`,
    fontSize: "15px !important",
    fontWeight: 500,
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },
  avatarHeader: {
    display: "flex",
    padding: "10px 15px",
  },
  avatarTitle: {
    fontFamily: `'Poppins', sans-serif !important`,
    fontSize: "18px !important",
    lineHeight: "normal",
    fontWeight: 600,
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
  searchIconSection: {
    marginRight: 12,
    cursor: "pointer",
  },
  searchCloseIconSection: {
    marginRight: 12,
    cursor: "pointer",
    width: 30,
    transform: "rotate(137deg)",
  },
  noResultStyle: {
    textAlign: "center",
    color: theme.palette.lightGrayFour,
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
