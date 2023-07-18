/* global google */
import React, { useState, useEffect, useRef } from "react";
import {
  withGoogleMap,
  GoogleMap,
  GroundOverlay,
  OverlayView,
  Marker,
} from "react-google-maps";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import operationsFloorMap from "assets/operationsFloorMap.svg";
import heatMapIcons from "assets/heatMapIcons";
import InfoBox from "elements/Marker";
import appData from "data/appData";
import InfoDialog from "elements/InfoDialog";
import { VerticalSpace } from "elements/Space";

const getMarkerIcon = (type, category) => {
  switch (type) {
    case "events": {
      switch (category) {
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

const getPoints = (tabIndex) => {
  switch (tabIndex) {
    case 0:
      return [
        //1
        new window.google.maps.LatLng(40.75716215899799, -73.84860417703965),
        new window.google.maps.LatLng(40.75712740802814, -73.84857594512238),
        new window.google.maps.LatLng(40.75706057918887, -73.84855124219474),
        //2
        new window.google.maps.LatLng(40.75656069733582, -73.84827245201232),
        new window.google.maps.LatLng(40.7564778288587, -73.84821598817777),
        new window.google.maps.LatLng(40.7564698093232, -73.8482301041364),
        //3
        new window.google.maps.LatLng(40.755497643175545, -73.85077864612506),
        new window.google.maps.LatLng(40.758943087877526, -73.8459094073995),
        //4
        new window.google.maps.LatLng(40.75738488314886, -73.8487222842277),
        //5
        new window.google.maps.LatLng(40.7577991029606, -73.84838304066267),
        //6
        new window.google.maps.LatLng(40.755858384158124, -73.84944634141573),
        //7
        new window.google.maps.LatLng(40.75491101664314, -73.84912735118091),
        //8
        new window.google.maps.LatLng(40.75473458233938, -73.84686403952986),
      ];
    case 1:
      return [
        //1
        new window.google.maps.LatLng(40.75716215899799, -73.84860417703965),
        new window.google.maps.LatLng(40.75712740802814, -73.84857594512238),
        new window.google.maps.LatLng(40.75706057918887, -73.84855124219474),
      ];
    case 2:
      return [
        //2
        new window.google.maps.LatLng(40.75656069733582, -73.84827245201232),
        new window.google.maps.LatLng(40.7564778288587, -73.84821598817777),
        new window.google.maps.LatLng(40.7564698093232, -73.8482301041364),
      ];
    case 3:
      return [
        //3
        new window.google.maps.LatLng(40.755497643175545, -73.85077864612506),
        new window.google.maps.LatLng(40.758943087877526, -73.8459094073995),
        //4
        new window.google.maps.LatLng(40.75738488314886, -73.8487222842277),
      ];
    case 4:
      return [
        //5
        new window.google.maps.LatLng(40.7577991029606, -73.84838304066267),
        //6
        new window.google.maps.LatLng(40.755858384158124, -73.84944634141573),
      ];
    case 5:
      return [
        //7
        new window.google.maps.LatLng(40.75491101664314, -73.84912735118091),
        //8
        new window.google.maps.LatLng(40.75473458233938, -73.84686403952986),
      ];
    default:
      break;
  }
};

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

const defaultCenter = {
  lat: 40.75657053763286,
  lng: -73.84837666160506,
};

const MapCreate = (props) => {
  const {
    mapStyles,
    setCurrentOpenNotification,
    marker,
    handlRefElementAutoScroll,
    markers,
    backGroundClearAll,
    tabIndexOperationAlertTabs,
    tabIndex,
    setExpandListFocusStopScroll,
    setIsMarkerCloseClicked,
    heatMapActive,
    setTabIndex,
    center,
    dateTimeFormat,
    reset,
  } = props;
  const mapRef = useRef();

  const [currentMarker, setCurrentMarker] = useState(marker);
  const [popperOpen, popperSetOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [type, setType] = useState(null);
  const [map, setMap] = useState(center);
  // const [zoomlevel, setZoomLevel] = useState(zoom);

  useEffect(() => {
    setCurrentMarker(marker);
  }, [marker]);

  useEffect(() => {
    if (currentMarker) {
      const index = markers.findIndex((marker) => marker.id === currentMarker);
      setMap(markers[index]?.location);
    }
  }, [currentMarker]);

  useEffect(() => {
    setMap(defaultCenter);
    mapRef?.current?.panTo(defaultCenter);
    setCurrentMarker(null);
  }, [reset]);

  const toggleInfoWindow = (markerId, type, location, IsMarkerCloseClicked) => {
    popperSetOpen(false);
    setCurrentMarker((prev) => {
      if (prev && prev === markerId) {
        setMap(center);
        return "";
      }
      setMap(location);
      return markerId;
    });

    setCurrentOpenNotification((prev) => {
      handlRefElementAutoScroll(prev && prev == markerId ? "" : markerId);
      return prev && prev == markerId ? "" : markerId;
    });
    setIsMarkerCloseClicked(IsMarkerCloseClicked);
    setExpandListFocusStopScroll(false);
    setTabIndex(getTabIndex(type));
  };

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

  const getMapTypeControls = () => {
    const defaultMapOptions = {
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
      fullscreenControl: false,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      rotateControl: true,
    };
  };

  return (
    <>
      <GoogleMap
        ref={mapRef}
        defaultZoom={16.8}
        center={map || defaultCenter}
        options={getMapTypeControls()}
      >
        <GroundOverlay
          key={operationsFloorMap}
          defaultUrl={operationsFloorMap}
          defaultBounds={{
            north: 40.76211912111612,
            south: 40.75107286604807,
            east: -73.84246237978024,
            west: -73.85441072808564,
          }}
        />
        {markers?.map((singleMarker, index) => {
          if (!window.google) return null;

          return (
            <>
              <Marker
                position={singleMarker?.location}
                icon={{
                  url: getMarkerIcon(
                    singleMarker.type,
                    singleMarker.subCategory
                  ),
                  scaledSize: new window.google.maps.Size(38.5, 45.5),
                }}
                key={index}
                onClick={() =>
                  toggleInfoWindow(
                    singleMarker.id,
                    singleMarker.type,
                    singleMarker?.location
                  )
                }
                zIndex={currentMarker === singleMarker.id ? 1000 : 1}
              ></Marker>
              {currentMarker === singleMarker.id ? (
                <OverlayView
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
                </OverlayView>
              ) : null}
            </>
          );
        })}
        {heatMapActive && (
          <HeatmapLayer
            data={getPoints(tabIndexOperationAlertTabs)}
            options={{ radius: 30, opacity: 1 }}
          />
        )}
      </GoogleMap>
      {showDialog && (
        <InfoDialog
          handleClose={handleClose}
          selectedListItem={selectedListItem}
          type={type}
          dateTimeFormat={dateTimeFormat}
        />
      )}
    </>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(MapCreate));

export default function Map(props) {
  return (
    <MapWrapped
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${appData?.googleMapApiKey}&v=3.exp&libraries=geometry,drawing,places,visualization`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: `100%` }} />}
      {...props}
    />
  );
}
