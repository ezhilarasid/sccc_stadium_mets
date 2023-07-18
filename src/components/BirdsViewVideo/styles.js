import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  videoWrapperOne: {
    flex: 1,
    height: "calc(100vh - 10vh)",
    overflowY: "scroll",
    marginTop: 20,

    "& .MuiImageList-root": {
      overflow: "unset !important",
      marginTop: 0,

      "& .MuiImageListItem-root": {
        margin: 5,
        "& ..MuiImageListItem-img": {},
      },

      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(97 97 97 / 90%)",
        outline: "1px solid slategrey",
        borderRadius: 5,
      },
    },
  },
  videoWrapperTwo: {
    flex: 1,
    marginTop: 20,

    "& .MuiImageList-root": {
      overflow: "unset !important",
      marginTop: 0,

      "& .MuiImageListItem-root": {
        margin: 5,
        "& ..MuiImageListItem-img": {},
      },

      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(97 97 97 / 90%)",
        outline: "1px solid slategrey",
        borderRadius: 5,
      },
    },
  },
  birdsViewVideoWrapper: {
    display: "flex",
    flex: 1,
  },
  videoText: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  videoTextHeader: {
    display: "flex",
    justifyContent: "space-between",
    background:
      "linear-gradient(180deg, rgba(53, 53, 53, 0.9) 14.97%, rgba(11, 10, 10, 0) 97.91%)",
    padding: 10,
  },
  recordIconStyle: {
    display: "inline-flex",
    width: "8px",
    marginRight: "5px",
  },
  videoTextHeaderLeftRow1: {
    display: "flex",
    fontSize: "11px",
    letterSpacing: "1px",
    fontWeight: 500,
    color: "white",
  },
  videoTextHeaderLeftRow2: {
    fontSize: "11px",
    letterSpacing: "1px",
    fontWeight: 500,
    color: "white",
    margin: "3px 0 0 13px",
  },
  videoTextHeaderRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    fontSize: "11px",
    letterSpacing: "1px",
    fontWeight: 500,
    color: "white",
  },
  videoTextFooter: {
    display: "flex",
    justifyContent: "flex-end",
    margin: 16,
  },
  fullScreenImageStyle: {
    width: "25px",
    cursor: "pointer",
  },
  videoPreviewPanel: {
    background: theme.palette.darkGrayFour,
    height: "calc(100vh - 587px)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "24px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: theme.palette.lightGrayTwo,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "-5px 8px 0px 8px",
  },
  videoInnerListItem: {
    height: "calc(100vh - 490px)",
    overflowY: "auto",
    margin: "0px 10px 0px 6px",
  },
  cameraNotSelected: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "24px",
    textTransform: "uppercase",
    color: theme.palette.lightGrayTwo,
    margin: 20,
    letterSpacing: "0.1em",
  },
  cameraDefaultPreview: {
    height: "23.7vh",
    background: theme.palette.darkGrayFour,
    borderRadius: "2px",
    textAlign: "center",
    color: theme.palette.lightGrayTwo,
    overflow: "hidden",
  },
}));

export default useStyles;
