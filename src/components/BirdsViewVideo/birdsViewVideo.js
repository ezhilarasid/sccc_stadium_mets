import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import moment from "moment";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Clock from "react-live-clock";
import UnauthorizedVideo from "../../assets/video/unauthorizedAccess.webm";
import FullScreenIcon from "../../assets/fullScreenIcon.svg";
import RedCircle from "../../assets/redCircle.svg";

import useStyles from "./styles";

const BirdsViewVideo = (props) => {
  const {
    pageName,
    columnSpan,
    selectIndex,
    addPreset,
    selectList,
    selectedCamId,
    previewVideo,
    edit,
    presetPanelActive,
  } = props;
  const {
    videoWrapperOne,
    videoWrapperTwo,
    videoText,
    videoTextHeader,
    recordIconStyle,
    videoTextHeaderLeftRow1,
    videoTextHeaderLeftRow2,
    videoTextHeaderRight,
    videoTextFooter,
    fullScreenImageStyle,
    birdsViewVideoWrapper,
    videoInnerListItem,
    videoPreviewPanel,
    cameraNotSelected,
    cameraDefaultPreview,
  } = useStyles();

  const [videoURL, setVideoURL] = useState();

  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("100%");

  const [colSpan, setColSpan] = useState(5);

  useEffect(() => {
    setColSpan(columnSpan);
    setWidth("80%");
    setHeight("80%");
  }, [columnSpan]);

  useEffect(() => {
    if (pageName) {
      switch (pageName) {
        case "birdsview":
          setVideoURL(UnauthorizedVideo);
          setColSpan(columnSpan);
          break;
        default:
          break;
      }
    }
  }, [pageName]);

  const currentDate = moment().format("MM-DD-YYYY");

  const filterData = selectList?.filter((item) => item.id === selectIndex);

  const cameraListName =
    filterData &&
    filterData[0]?.cameraList?.map((value, index) => ({
      id: index,
      cameraName: value.title,
      url: value.video,
      checked: value?.isChecked,
    }));

  let updatedList;

  let numberArray = [];
  // for (let i = 0; i < selectedCamId?.length; i++) {
  //   numberArray.push(
  //     addPreset ? parseInt(selectedCamId[i] - 1) : parseInt(selectedCamId[i])
  //   );
  // }

  if (numberArray && numberArray?.length > 0) {
    updatedList = numberArray?.map(
      (item) => cameraListName && cameraListName[item]
    );
  }

  const previewVideoList = [0, 1, 2, 3, 4, 5, 6, 7];

  let previewArray = [];
  let previewCount;

  if (edit) {
    previewCount = selectedCamId?.cameraList?.map((item) => {
      if (item.isChecked === true) {
        previewArray.push(item);
      }
    });
  } else if (addPreset && !edit) {
    previewCount = selectedCamId?.map((item) => {
      if (item.isChecked === true) {
        previewArray.push(item);
      }
    });
  }
  return (
    <>
      <div className={birdsViewVideoWrapper}>
        {!addPreset && !edit && presetPanelActive ? (
          <div className={videoWrapperOne}>
            <ImageList sx={{ width: "100%" }} cols={colSpan}>
              {cameraListName?.map((item, index) => (
                <>
                  {item?.checked && (
                    <ImageListItem key={index}>
                      <ReactPlayer
                        muted
                        playing
                        loop={true}
                        // controls={true}
                        url={item?.url}
                        width="100%"
                        height="100%"
                      />
                      <div className={videoText}>
                        <div className={videoTextHeader}>
                          <div>
                            <div className={videoTextHeaderLeftRow1}>
                              {" "}
                              <img
                                src={RedCircle}
                                alt="Record Icon"
                                className={recordIconStyle}
                              />
                              <p>{item?.cameraName}</p>
                            </div>
                          </div>
                          <div className={videoTextHeaderRight}>
                            <div>
                              {currentDate} |{" "}
                              <Clock
                                format="HH:mm:ss"
                                interval={1000}
                                ticking={true}
                                style={{ color: "white" }}
                              />
                            </div>
                            <div> </div>
                          </div>
                        </div>
                        <div className={videoTextFooter}>
                          <img
                            src={FullScreenIcon}
                            alt="Full screen Icon"
                            className={fullScreenImageStyle}
                          />
                        </div>
                      </div>
                    </ImageListItem>
                  )}
                </>
              ))}
            </ImageList>
          </div>
        ) : edit ? (
          <div className={videoWrapperTwo}>
            <div className={videoInnerListItem}>
              <ImageList sx={{ width: "100%" }} cols={colSpan}>
                {previewArray?.length > 0 ? (
                  selectedCamId &&
                  selectedCamId?.cameraList?.map((item, index) => (
                    <>
                      {item.isChecked && (
                        <ImageListItem key={index}>
                          <ReactPlayer
                            muted
                            playing
                            loop={true}
                            // controls={true}
                            url={item?.video}
                            width="100%"
                            height="100%"
                          />
                          <div className={videoText}>
                            <div className={videoTextHeader}>
                              <div>
                                <div className={videoTextHeaderLeftRow1}>
                                  {" "}
                                  <img
                                    src={RedCircle}
                                    alt="Record Icon"
                                    className={recordIconStyle}
                                  />
                                  <p>{item?.title}</p>
                                </div>
                              </div>
                              <div className={videoTextHeaderRight}>
                                <div>
                                  {currentDate} |{" "}
                                  <Clock
                                    format="HH:mm:ss"
                                    interval={1000}
                                    ticking={true}
                                    style={{ color: "white" }}
                                  />
                                </div>
                                <div> </div>
                              </div>
                            </div>
                            <div className={videoTextFooter}>
                              <img
                                src={FullScreenIcon}
                                alt="Full screen Icon"
                                className={fullScreenImageStyle}
                              />
                            </div>
                          </div>
                        </ImageListItem>
                      )}
                    </>
                  ))
                ) : (
                  <>
                    {previewVideoList.map((val) => {
                      return (
                        <div className={cameraDefaultPreview}>
                          {" "}
                          <ImageListItem></ImageListItem>
                        </div>
                      );
                    })}
                  </>
                )}
              </ImageList>
            </div>
            <div className={videoPreviewPanel}>
              {previewVideo ? (
                <ReactPlayer
                  muted
                  playing
                  loop={true}
                  // controls={true}
                  url={previewVideo}
                  width="100%"
                  height="100%"
                />
              ) : (
                "Select VIDEO TO PREVIEW"
              )}
            </div>
          </div>
        ) : !presetPanelActive ? (
          <div className={videoWrapperOne}>
            <ImageList sx={{ width: "100%" }} cols={colSpan}>
              {cameraListName?.map((item, index) => (
                <>
                  {item?.checked && (
                    <ImageListItem key={index}>
                      <ReactPlayer
                        muted
                        playing
                        loop={true}
                        // controls={true}
                        url={item?.url}
                        width="100%"
                        height="100%"
                      />
                      <div className={videoText}>
                        <div className={videoTextHeader}>
                          <div>
                            <div className={videoTextHeaderLeftRow1}>
                              {" "}
                              <img
                                src={RedCircle}
                                alt="Record Icon"
                                className={recordIconStyle}
                              />
                              <p>{item?.cameraName}</p>
                            </div>
                          </div>
                          <div className={videoTextHeaderRight}>
                            <div>
                              {currentDate} |{" "}
                              <Clock
                                format="HH:mm:ss"
                                interval={1000}
                                ticking={true}
                                style={{ color: "white" }}
                              />
                            </div>
                            <div> </div>
                          </div>
                        </div>
                        <div className={videoTextFooter}>
                          <img
                            src={FullScreenIcon}
                            alt="Full screen Icon"
                            className={fullScreenImageStyle}
                          />
                        </div>
                      </div>
                    </ImageListItem>
                  )}
                </>
              ))}
            </ImageList>
          </div>
        ) : (
          <div className={videoWrapperTwo}>
            <div className={videoInnerListItem}>
              <ImageList sx={{ width: "100%" }} cols={colSpan}>
                {previewArray?.length > 0 ? (
                  selectedCamId &&
                  selectedCamId?.map((item, index) => (
                    <>
                      {item.isChecked && (
                        <ImageListItem key={index}>
                          <ReactPlayer
                            muted
                            playing
                            loop={true}
                            // controls={true}
                            url={item?.video}
                            width="100%"
                            height="100%"
                          />
                          <div className={videoText}>
                            <div className={videoTextHeader}>
                              <div>
                                <div className={videoTextHeaderLeftRow1}>
                                  {" "}
                                  <img
                                    src={RedCircle}
                                    alt="Record Icon"
                                    className={recordIconStyle}
                                  />
                                  <p>{item?.title}</p>
                                </div>
                              </div>
                              <div className={videoTextHeaderRight}>
                                <div>
                                  {currentDate} |{" "}
                                  <Clock
                                    format="HH:mm:ss"
                                    interval={1000}
                                    ticking={true}
                                    style={{ color: "white" }}
                                  />
                                </div>
                                <div> </div>
                              </div>
                            </div>
                            <div className={videoTextFooter}>
                              <img
                                src={FullScreenIcon}
                                alt="Full screen Icon"
                                className={fullScreenImageStyle}
                              />
                            </div>
                          </div>
                        </ImageListItem>
                      )}
                    </>
                  ))
                ) : (
                  <>
                    {previewVideoList.map((val) => {
                      return (
                        <div className={cameraDefaultPreview}>
                          {" "}
                          <ImageListItem></ImageListItem>
                        </div>
                      );
                    })}
                  </>
                )}
              </ImageList>
            </div>
            <div className={videoPreviewPanel}>
              {previewVideo ? (
                <ReactPlayer
                  muted
                  playing
                  loop={true}
                  // controls={true}
                  url={previewVideo}
                  width="100%"
                  height="100%"
                />
              ) : (
                <div>"Select VIDEO TO PREVIEW"</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BirdsViewVideo;
