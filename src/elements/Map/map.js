import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  OverlayViewF,
  // MarkerF as
  Marker,
  Polygon,
  Polyline,
  GroundOverlay,
  useLoadScript,
} from "@react-google-maps/api";
import InfoBox from "elements/Marker";
import { VerticalSpace, HorizontalSpace } from "elements/Space";
import markerImages from "assets/Icons/marker-icons";
import {
  SignalStrengthOrange,
  WifiStrengthOrange,
  BluetoothStrengthOrange,
} from "../../assets/Icons";
import appData from "data/appData";
import InfoDialog from "elements/InfoDialog";
import heatMapIcons from "assets/heatMapIcons";
import {
  mapContainerStyles,
  RootContainer,
  mapStyleWidth,
  CursorPopup,
  CursorPopupCompartment,
  CursorPopupIcon,
  CursorPopupText,
} from "./styles";
import { pallete } from "theme";
import notifications from "mockdata/notifications";
import { ConstructionOutlined } from "@mui/icons-material";

const defaultCenter = {
  lat: 40.7567717,
  lng: -73.84601,
};
const defaultZoom = 18;

const Map = (props) => {
  const {
    markers,
    tilted,
    cat,
    marker,
    setCurrentOpenNotification,
    setTabIndex,
    mapStyle,
    center,
    zoom,
    mapType,
    mapStyles,
    hideMarkers,
    polygons,
    overlays,
    openNotifications,
    openCards,
    handlRefElementAutoScroll,
    backGroundClearAll,
    pageName,
    reset,
    resetCards,
    tabIndexParkingTabs,
    show,
    tabIndex,
    setExpandListFocusStopScroll,
    setIsMarkerCloseClicked,
    dateTimeFormat,
    setSearchIsOpen,
    showWifiStrengthPopup,
    actionOnHover,
  } = props;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleMapApiKey, //"AIzaSyCmwqbYb48dfmPqYiWWU0A2kRr54I2L3wE",
    libraries: ["places"],
  });

  const { markerColors } = pallete;

  const [map, setMap] = useState(null);
  const [currentMarker, setCurrentMarker] = useState(marker);
  const [currentClickedMarker, setCurrentClickedMarker] = useState(marker);
  const [zoomValue, setZoomValue] = useState(zoom);
  const [persistedCenter, setPersistedCenter] = useState(null);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const [currentZoomLevel, setCurrentZoomLevel] = useState(0);
  const [popperOpen, popperSetOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [type, setType] = useState(null);
  const [cursorCoordinates, setCursorCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseFocusingOnMap, setIsMouseFocusingOnMap] = useState(false);
  const [currentHoveredMarker, setCurrentHoveredMarker] = useState("");
  const [currentHoveredMarkerPosition, setCurrentHoveredMarkerPosition] = useState({})

  useEffect(() => {
    if (tabIndex) {
      map?.panTo(defaultCenter);
    }
  }, [tabIndex]);

  useEffect(() => {
    if ((tabIndexParkingTabs && pageName === "parking") || show === false) {
      setCurrentMarker("");
      setCurrentOpenNotification("");
      setTabIndex(1);
      map?.panTo(defaultCenter);
    }
  }, [tabIndexParkingTabs, show]);

  useEffect(() => {
    if (
      (backGroundClearAll === true && pageName === "parking") ||
      pageName === "security" ||
      pageName === "outdoor" ||
      pageName === "foodConcession"
    ) {
      setCurrentMarker("");
      setCurrentOpenNotification("");
    } else if (backGroundClearAll === true) {
      setCurrentMarker("");
      // openCards(true);
      // openNotifications(false);
      setCurrentOpenNotification("");
    }
  }, [backGroundClearAll]);

  useEffect(() => {
    if (pageName === "parking" || pageName === "security") {
      map?.panTo(center || defaultCenter);

      if (
        (zoomValue && map?.getZoom() !== zoomValue) ||
        map?.getZoom() !== 17
      ) {
        map?.setZoom(zoomValue || 17);
      }
      setCurrentMarker("");
      setCurrentOpenNotification("");
    } else {
      map?.panTo(center || defaultCenter);

      map?.setZoom(zoomValue || 18);

      setCurrentMarker("");

      setCurrentOpenNotification("");
    }
  }, [reset]);

  useEffect(() => {
    if (
      pageName !== "parking" &&
      pageName !== "security" &&
      pageName !== "outdoor" &&
      pageName !== "foodConcession"
    ) {
      map?.panTo(defaultCenter);
      // map?.setZoom(18);

      setCurrentMarker("");

      openNotifications(false);
      setCurrentOpenNotification("");
    }
  }, [resetCards]);

  const getTabIndex = (type) => {
    switch (type) {
      case "events":
        return 0;
      case "incidents":
        return 1;
      case "opAlerts":
        return 2;
    }
  };

  const onMapMouseMove = (evt) => {
    if (!showWifiStrengthPopup) return null;
    setCursorCoordinates(evt?.pixel);
  };

  const getMarkerIcon = (type, category, hovered) => {
    if (hovered) {
      switch (type) {
        case "events": {
          switch (category) {
            case "outdoorAmbience": {
              return markerImages?.eventFanHover;
            }
            case "foodConcessions":
              return markerImages?.eventFoodHover;
          }
        }
        case "opAlerts": {
          switch (category) {
            case "outdoorAmbience": {
              return markerImages?.incidentFanHover;
            }
            case "foodConcessions":
              return markerImages?.incidentFoodHover;
          }
        }
        case "incidents": {
          switch (category) {
            case "outdoorAmbience": {
              return markerImages?.opAlertFanHover
            }
            case "foodConcessions":
              return markerImages?.opAlertFoodHover;
          }
        }
      }
      return null;
    }
    switch (type) {
      case "events": {
        switch (category) {
          case "parking":
            return markerImages?.eventParking;

          case "security":
            return markerImages?.eventSecurity;

          case "infra":
            return markerImages?.eventInfra;

          case "electricity":
            return markerImages?.eventElectricity;

          case "foodConcessions":
            return markerImages?.eventFood;

          case "fan":
            return markerImages?.eventFan;

          case "outdoorAmbience":
            return markerImages?.eventFan;

          case "restaurants":
            return heatMapIcons?.restaurentsEventIcon;
          case "restRooms":
            return heatMapIcons?.restRoomsEventIcon;
          case "entrance":
            return heatMapIcons?.entranceEventIcon;
          case "lounge":
            return heatMapIcons?.loungeEventIcon;
          case "vendingMachine":
            return heatMapIcons?.machineEventIcon;
        }
        break;
      }
      case "opAlerts": {
        switch (category) {
          case "parking":
            return markerImages?.incidentParking;

          case "security":
            return markerImages?.incidentSecurity;

          case "infra":
            return markerImages?.incidentInfra;

          case "electricity":
            return markerImages?.incidentElectricity;

          case "foodConcessions":
            return markerImages?.incidentFood;

          case "fan":
            return markerImages?.incidentFan;

          case "outdoorAmbience":
            return markerImages?.incidentFan;

          case "restaurants":
            return heatMapIcons?.restaurentsAlertIcon;
          case "restRooms":
            return heatMapIcons?.restRoomsAlertIcon;
          case "entrance":
            return heatMapIcons?.entranceAlertIcon;
          case "lounge":
            return heatMapIcons?.loungeAlertIcon;
          case "vendingMachine":
            return heatMapIcons?.machineAlertIcon;
        }
        break;
      }
      case "incidents": {
        switch (category) {
          case "parking":
            return markerImages?.opAlertParking;

          case "security":
            return markerImages?.opAlertSecurity;

          case "infra":
            return markerImages?.opAlertInfra;

          case "electricity":
            return markerImages?.opAlertElectricity;

          case "foodConcessions":
            return markerImages?.opAlertFood;

          case "fan":
            return markerImages?.opAlertFan;

          case "outdoorAmbience":
            return markerImages?.opAlertFan;

          case "restaurants":
            return heatMapIcons?.restaurentsIncidentIcon;
          case "restRooms":
            return heatMapIcons?.restRoomsIncidentIcon;
          case "entrance":
            return heatMapIcons?.entranceIncidentIcon;
          case "lounge":
            return heatMapIcons?.loungeIncidentIcon;
          case "vendingMachine":
            return heatMapIcons?.machineIncidentIcon;
        }
        break;
      }
    }
  };

  const openInfoWindowOnHover = (
    isMouseOver,
    markerId,
    type,
    location,
    IsMarkerCloseClicked
  ) => {
    if (isMouseOver && !currentClickedMarker) {
      setCurrentMarker(markerId);
    } else {
      setCurrentMarker("");
    }
  };

  const toggleInfoWindow = (markerId, type, location, IsMarkerCloseClicked) => {
    popperSetOpen(false);
    // Commented out for Future Reference
    if (actionOnHover) {
      setCurrentClickedMarker((prev) => {
        setTabIndex(getTabIndex(type));
        if (prev && prev == markerId) {
          if (center && currentZoomLevel >= 17) {
            // map?.panTo(center);
          } else if (currentZoomLevel >= 17) {
            // map?.panTo(defaultCenter);
          }

          if (currentZoomLevel >= 18.5) {
            map?.setZoom(zoomValue);
          }
          return "";
        } else {
          // setPersistedCenter(location);
          // map?.panTo(location);
          return markerId;
        }
      });

      setCurrentOpenNotification((prev) => {
        handlRefElementAutoScroll(prev && prev == markerId ? "" : markerId);
        return prev && prev == markerId ? "" : markerId;
      });

      return null;
    }

    setCurrentMarker((prev) => {
      if (prev && prev == markerId) {
        if (center && currentZoomLevel >= 17) {
          map?.panTo(center);
        } else if (currentZoomLevel >= 17) {
          map?.panTo(defaultCenter);
        }

        if (currentZoomLevel >= 18.5) {
          map?.setZoom(zoomValue);
        }
        return "";
      } else {
        setPersistedCenter(location);
        map?.panTo(location);
        return markerId;
      }
    });

    setCurrentOpenNotification((prev) => {
      handlRefElementAutoScroll(prev && prev == markerId ? "" : markerId);
      return prev && prev == markerId ? "" : markerId;
    });

    setIsMarkerCloseClicked(IsMarkerCloseClicked);
    if (IsMarkerCloseClicked !== true) {
      setSearchIsOpen(false);
    }
    if (pageName === "dashBoard") {
      openCards(false);
      openNotifications(true);
    }

    setTabIndex(getTabIndex(type));
    setExpandListFocusStopScroll(false);
  };

  const getMapTypeControls = () => {
    const defaultMapOptions = {
      mapTypeId: mapType || "satellite",
      disableDefaultUI: true,
      styles: mapStyles,
    };

    if (!window?.google) {
      return defaultMapOptions;
    }

    return {
      ...defaultMapOptions,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.LEFT_BOTTOM,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      rotateControl: true,
    };
  };

  /* 
    north: top,
    south: bottom,
    left: west,
    right: east
  */

  useEffect(() => {
    setCurrentMarker(marker);
    setCurrentClickedMarker(marker);

    setTimeout(() => {
      if (tilted) {
        setZoomValue(18);
      }
    }, 1000);
  }, [marker]);

  useEffect(() => {
    if (center && currentMarker === "" && !actionOnHover) {
      map?.panTo(center);
    } else if (
      setCurrentZoomLevel >= 17 &&
      currentMarker === "" &&
      !actionOnHover
    ) {
      map?.panTo(defaultCenter);
    }
    if (zoom && currentMarker === "") {
      setZoomValue(zoom);
      map?.setZoom(zoom);
    }
  }, [zoom, center, map]);

  useEffect(() => {
    if (currentMarker && !actionOnHover) {
      const index = markers.findIndex((marker) => marker.id === currentMarker);

      map?.panTo(markers[index]?.location);
    } else if ((currentZoomLevel >= 17 || currentZoomLevel <= 16) && !actionOnHover) {
      if (zoom) map?.setZoom(zoom);
      map?.panTo(center || defaultCenter);
    }
  }, [currentMarker]);

  const handlePreviewClick = (event, data) => {
    setShowDialog(true);
    setSelectedListItem(data);
    setType("PREVIEW");
    event.stopPropagation();
  };

  const handleVideoClick = (event, data) => {
    setShowDialog(true);
    setSelectedListItem(data);
    setType("VIDEO");
    event.stopPropagation();
  };

  const handleClickButton = (event) => {
    popperSetOpen((prevOpen) => !prevOpen);
    event.stopPropagation();
  };

  const handleClickAway = (event) => {
    popperSetOpen(false);
    event.stopPropagation();
  };
  const handleClose = () => {
    setShowDialog(false);
    setType(null);
  };

  return (
    <RootContainer>
      {/* <LoadScript
        // googleMapsApiKey={appData.googleMapApiKey}
        onLoad={() => setIsGoogleLoaded(true)}
      > */}
      {isLoaded && (
        <GoogleMap
          onMouseOver={() =>
            showWifiStrengthPopup ? setIsMouseFocusingOnMap(true) : null
          }
          onMouseOut={() =>
            showWifiStrengthPopup ? setIsMouseFocusingOnMap(false) : null
          }
          mapContainerStyle={mapStyle ? mapStyleWidth : mapContainerStyles}
          center={
            actionOnHover
              ? center || defaultCenter
              : currentMarker === ""
              ? center || defaultCenter
              : null
          }
          zoom={zoomValue}
          tilt={tilted ? 45 : 0}
          mapTypeId={mapType || "satellite"}
          options={getMapTypeControls()}
          onLoad={setMap}
          onZoomChanged={() => setCurrentZoomLevel(map?.zoom)}
          onMouseMove={onMapMouseMove}
        >
          {hideMarkers && overlays && (
            <GroundOverlay
              key={overlays.src}
              url={overlays.src}
              bounds={overlays.bounds}
            />
          )}

          {hideMarkers
            ? markers?.map((singleMarker) => {
                if (!window.google || singleMarker.id !== currentMarker) {
                  return null;
                } else {
                  return (
                    <>
                      {currentMarker === singleMarker.id ? (
                        <OverlayViewF
                          position={singleMarker?.location}
                          mapPaneName={"overlayMouseTarget"}
                          key={singleMarker.id}
                        >
                          <>
                            <InfoBox
                              info={singleMarker}
                              toggleInfoWindow={toggleInfoWindow}
                              singleMarkerId={singleMarker.id}
                              singleMarkerType={singleMarker.type}
                              singleMarkerLocation={singleMarker?.location}
                              key={singleMarker.id}
                              handlePreviewClick={handlePreviewClick}
                              handleVideoClick={handleVideoClick}
                              handleClickButton={handleClickButton}
                              handleClickAway={handleClickAway}
                              popperOpen={popperOpen}
                              dateTimeFormat={dateTimeFormat}
                            />
                            <VerticalSpace count={40} />
                          </>
                        </OverlayViewF>
                      ) : null}
                    </>
                  );
                }
              })
            : null}

          {!hideMarkers &&
            markers?.map((singleMarker, index) => {
              if (!window.google) return null;
              return (
                <>
                  {singleMarker.id ? (
                    <Marker
                      position={singleMarker?.location}
                      onClick={() => {
                        toggleInfoWindow(
                          singleMarker.id,
                          singleMarker.type,
                          singleMarker?.location
                        );
                      }}
                      onMouseOver={(evt) => {
                        if (actionOnHover) {
                          setCurrentHoveredMarkerPosition({...evt.pixel})
                          setCurrentHoveredMarker(singleMarker.id);
                          openInfoWindowOnHover(
                            true,
                            singleMarker.id,
                            singleMarker.type,
                            singleMarker?.location
                          );
                        }
                      }}
                      onMouseOut={() => {
                        if (actionOnHover) {
                          setCurrentHoveredMarker("");
                          openInfoWindowOnHover(
                            false,
                            singleMarker.id,
                            singleMarker.type,
                            singleMarker?.location
                          );
                        }
                      }}
                      icon={{
                        url: getMarkerIcon(
                          singleMarker.type,
                          singleMarker.subCategory || singleMarker.category,
                          currentHoveredMarker === singleMarker.id &&
                            !currentClickedMarker
                        ),
                        scaledSize:
                          currentHoveredMarker === singleMarker.id &&
                          !currentClickedMarker
                            ? new window.google.maps.Size(108.6, 89.1)
                            : new window.google.maps.Size(38.5, 45.5),
                      }}
                      key={singleMarker.id}
                      zIndex={currentMarker === singleMarker.id ? 1000 : 1}
                    ></Marker>
                  ) : null}

                  {currentMarker === singleMarker.id ||
                  currentClickedMarker === singleMarker.id ? (
                    <OverlayViewF
                      position={singleMarker?.location}
                      mapPaneName={"overlayMouseTarget"}
                      key={singleMarker.id}
                    >
                      <>
                        <InfoBox
                          currentClickedMarker={currentClickedMarker}
                          newLayout={
                            pageName === "outdoor" ||
                            pageName === "foodConcession"
                          }
                          pageName={pageName}
                          info={singleMarker}
                          toggleInfoWindow={toggleInfoWindow}
                          singleMarkerId={singleMarker.id}
                          singleMarkerType={singleMarker.type}
                          singleMarkerLocation={singleMarker?.location}
                          key={singleMarker.id}
                          handlePreviewClick={handlePreviewClick}
                          handleVideoClick={handleVideoClick}
                          handleClickButton={handleClickButton}
                          handleClickAway={handleClickAway}
                          popperOpen={popperOpen}
                          dateTimeFormat={dateTimeFormat}
                          currentMarkerPosition={currentHoveredMarkerPosition}
                        />
                        <VerticalSpace count={40} />
                      </>
                    </OverlayViewF>
                  ) : null}
                </>
              );
            })}
        </GoogleMap>
      )}
      {showWifiStrengthPopup && isMouseFocusingOnMap ? (
        <CursorPopup
          offset={cursorCoordinates}
          onMouseOver={() =>
            showWifiStrengthPopup ? setIsMouseFocusingOnMap(true) : null
          }
        >
          <CursorPopupCompartment>
            <CursorPopupIcon src={WifiStrengthOrange} />
            <CursorPopupText>-90dBm</CursorPopupText>
          </CursorPopupCompartment>
          <HorizontalSpace count={2} />
          <CursorPopupCompartment>
            <CursorPopupIcon src={BluetoothStrengthOrange} />
            <CursorPopupText>-90dBm</CursorPopupText>
          </CursorPopupCompartment>
          <HorizontalSpace count={2} />
          <CursorPopupCompartment>
            <CursorPopupIcon src={SignalStrengthOrange} />
            <CursorPopupText>-90dBm</CursorPopupText>
          </CursorPopupCompartment>
        </CursorPopup>
      ) : null}
      {/* </LoadScript> */}
      {showDialog && (
        <InfoDialog
          handleClose={handleClose}
          selectedListItem={selectedListItem}
          type={type}
          dateTimeFormat={dateTimeFormat}
        />
      )}
    </RootContainer>
  );
};

export default Map;
