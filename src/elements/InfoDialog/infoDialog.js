import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import carImage from "../../assets/carImage.svg";
import VideoPlayer from "../VideoPlayer";
import theme from "../../theme";
import List from "data/infoDialogData";
import useStyles from "./styles";

const DialogWrapper = styled(Dialog)(({ theme }) => ({
  "&.MuiModal-root": {
    zIndex: "111111 !important",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    marginTop: "66px !important",
  },
  "& .MuiPaper-root": {
    height: "calc(100vh - 118px)",
    width: "100vw",
    maxWidth: "1722px",
    background: "#1A1919",
    backdropFilter: "blur(2.5px)",
    color: "white",
    padding: 24,
  },
  "& .MuiDialog-container": {
    background: "rgb(0 0 0 / 0.4)",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
  },
}));

const InfoDialog = (props) => {
  const {
    busDetails,
    headerStyle,
    closeButton,
    infoDialogSection,
    carImageClass,
    videoPlayerClass,
    timeStampStyle,
  } = useStyles();

  const { selectedListItem, type, dateTimeFormat } = props;
  const [title, setTitle] = useState(selectedListItem?.title?.toLowerCase());
  const [category, setCategory] = useState(
    selectedListItem?.category?.toLowerCase()
  );
  const [imageVideo, setImageVideo] = useState({
    image: "",
    video: "",
  });

  useEffect(() => {
    for (let i = 0; i < List?.length; i++) {
      if (title === List[i]?.title && category === List[i]?.category) {
        setImageVideo({
          image: List[i]?.image,
          video: List[i]?.video,
        });
      }
    }
  }, [selectedListItem]);
  const [open, setOpen] = useState(!false);

  const handleClose = () => {
    setOpen(!open);
    props.handleClose();
  };

  return (
    <>
      <DialogWrapper open={open} className={infoDialogSection}>
        <div className={headerStyle}>
          {selectedListItem?.title}{" "}
          {`${
            selectedListItem && selectedListItem.vehicleNumber
              ? selectedListItem?.vehicleNumber
              : selectedListItem?.vehicleId
              ? `| Vehicle - ${selectedListItem?.vehicleId} | `
              : ""
          }

          ${selectedListItem?.spot || selectedListItem?.subTitle1 ? "|" : ""}
          ${
            (selectedListItem && selectedListItem?.spot) ||
            selectedListItem?.subTitle1
              ? selectedListItem?.spot || selectedListItem?.subTitle1
              : selectedListItem?.spot || selectedListItem?.subTitle1
              ? `| Spot -${selectedListItem?.spot} ${selectedListItem?.subTitle1} `
              : ""
          }`}{" "}
          {"- "} <div className={timeStampStyle}> {dateTimeFormat}</div>
        </div>
        <div className={closeButton}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              top: 12,
              color: theme.palette.white,
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Grid container className={busDetails}>
          <Grid item xs={12} className={carImageClass}>
            {type === "PREVIEW" && (
              <img
                src={imageVideo?.image}
                width={"100%"}
                className={carImageClass}
              />
            )}
            {type === "VIDEO" && (
              <ReactPlayer
                playing
                muted
                controls={true}
                className={videoPlayerClass}
                url={imageVideo?.video}
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload nofullscreen",
                    },
                  },
                }}
              />
            )}
          </Grid>
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialog;
