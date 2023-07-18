import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import moment from "moment";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Clock from "react-live-clock";
import birdsEyeView from "mockdata/birdsEyeView";

import VehicleParkingVideo from "../../assets/video/parkingVideo.webm";
import PeopleCrowdedVideo from "../../assets/video/peopleCrowd.webm";
import UnauthorizedVideo from "../../assets/video/unauthorizedAccess.webm";
import FullScreenIcon from "../../assets/fullScreenIcon.svg";
import ParkingCameraImage from "../../assets/parkingCameraImage.svg";
import RedCircle from "../../assets/redCircle.svg";

import VehicleParkedVideo from "../../assets/parking/video1/vehicleParked.mp4";
import vehicleEnteredVideo from "../../assets/parking/video1/vehicleEntered.mp4";
import VehicleEntryExitVideo from "../../assets/parking/video1/entry-exit-cars.mp4";
import AccidentDetectedVideo from "../../assets/parking/video1/accidentDetected.mp4";
import OccupancyFiftyVideo from "../../assets/parking/video1/parkingFull.webm";
import busEnteredVideo from "../../assets/parking/video1/busEntered.webm";
import busExitVideo from "../../assets/parking/video1/busExit.webm";
import WrongParkingVideo from "../../assets/parking/video1/wrongParking.webm";
import ReverseParkingVideo from "../../assets/parking/video1/reverseParking.webm";
import CloseParkingVideo from "../../assets/parking/video1/closeParking.mp4";
import NoParkingVideo from "../../assets/parking/video1/noParking.webm";
// import MaintenanceVideo from "../../assets/parking/video1/maintenance.webm";
import MaintenanceVideo1 from "../../assets/parking/video1/maintenanceInProgress.webm";
import ParkingAvailableVideo from "../../assets/parking/video1/parkingAvailable.webm";
import BadParking from "../../assets/parking/video1/bad-parking.mp4";
import IllegalParking from "../../assets/parking/video1/illegalParking.webm";
import VehicleParkedTwo from "../../assets/parking/video1/vehicleParked-2.mp4";
import OccupancySeventyFive from "../../assets/parking/video1/occupancySeventyFive.webm";
import VehicleEntryExit from "../../assets/parking/video1/vehicleEntryExit.mp4";
import CrowdforminParking from "../../assets/parking/video1/crowdformin_parking.mp4";

import AccessDeniedVideo from "../../assets/security/video1/accessDenied.mp4";
import UnauthorizedAccessVideo from "../../assets/security/video1/unauthorizedAccess.mp4";
import CrowedFormingVideo from "../../assets/security/video1/crowedForming-1.webm";
import TailgatingVideo from "../../assets/security/video1/tailgating.mp4";
import CameraNotFunctionalVideo from "../../assets/security/video1/cameraNotFunctional.mp4";
import LicensePlateNumberNotFoundVideo from "../../assets/security/video1/licensePlateNumberNotFound.mp4";
import MaintenanceInProgressVideo from "../../assets/security/video1/maintenance-In-progress.webm";
import ParkingSlotUnderMaintenanceVideo from "../../assets/security/video1/parking-slot-underMaintenance.webm";
import MaintanenceCompletedVideo from "../../assets/security/video1/maintenanceCompleted.webm";
import EscalatorMaintenanceVideo from "../../assets/security/video1/escalator-maintenance2.webm";
import FireAlertVideo from "../../assets/security/video1/fire-alert.webm";
import ReEntryGateClosedVideo from "../../assets/security/video1/re-entry-gate-closed.mp4";
import CafeteriaFullVideo from "../../assets/security/video1/cafeteria-full-2.webm";
import CleaningVideo from "../../assets/security/video1/cleaning.webm";
import CrowedFormingThreeVideo from "../../assets/security/video1/crowed-forming3.webm";
import ElectricRepairingVideo from "../../assets/security/video1/electricRepairing.webm";
import EscalatorIssueVideo from "../../assets/security/video1/escalatorIssue.webm";
import EternceExitVideo from "../../assets/security/video1/eternceExit.webm";
import GateOpenVideo from "../../assets/security/video1/gateOpen.webm";

import FireControlVideo from "../../assets/operations/videos/Fire-control-room.mp4";
import HighTemperatureVideo from "../../assets/operations/videos/High-temperature.webm";
import NotOpeartionalVideo from "../../assets/operations/videos/Not-operational.webm";
import EntryGateVideo from "../../assets/operations/videos/re-entry-gate-close.webm";
import RestaurentCleaningVideo from "../../assets/operations/videos/Restaurant-cleaning.mp4";
import RestaurantCloseVideo from "../../assets/operations/videos/restaurant-close.webm";
import RestaurantMaintenanceVideo from "../../assets/operations/videos/Restaurant-maintenance.mp4";
import RestaurantOpenVideo from "../../assets/operations/videos/restaurant-open.webm";
import RestaurantOperationalVideo from "../../assets/operations/videos/Restaurant-operational.mp4";
import RestroomCleanedVideo from "../../assets/operations/videos/Restroom-cleaned.mp4";
import SmokeDetectedVideo from "../../assets/operations/videos/Smoke-detected2.webm";
import StockLevel from "../../assets/operations/videos/Stock-level-30.webm";
import VendingMachineStuckVideo from "../../assets/operations/videos/Vending-machine-got-stuck.mp4";
import VendingMachineOperationalVideo from "../../assets/operations/videos/Vending-machine-not-operational.webm";
import VendingMachineReStockingVideo from "../../assets/operations/videos/Vending-machine-Restocking-done.mp4";

import GoodSignalStrengthVideo from "../../assets/outdoor/video/GoodSignalStrength.mp4";
import HazardousAQIVideo from "../../assets/outdoor/video/HazardousAQI.mp4";
import HighElectricityConsumptionVideo from "../../assets/outdoor/video/HighElectricityConsumption.mp4";
import ModerateAQIVideo from "../../assets/outdoor/video/ModerateAQI.mp4";
import WeakSignalStrengthVideo from "../../assets/outdoor/video/WeakSignalStrength.mp4";
import WifiNotOperationalVideo from "../../assets/outdoor/video/WifiNotOperational.mp4";

import LowInventoryLevelVideo from "../../assets/food/video/LowInventoryLevel.mp4";
import OrderDelayedVideo from "../../assets/food/video/OrderDelayed.mp4";
import PendingOrderVideo from "../../assets/food/video/PendingOrder.mp4";
import FoodRestaurantOpenVideo from "../../assets/food/video/RestaurantOpen.mp4";
import NotOperationalVideo from "../../assets/operations/videos/Not-operational.webm";
import RestaurantUnderMaintenanceVideo from "../../assets/operations/videos/restaurantMaintance.mp4";
import CleaningInprogressVideo from "../../assets/operations/videos/cleaningInprogress.mp4";

import useStyles from "./styles";

const VideoContainer = (props) => {
  const { pageName, columnSpan, selectIndex, tabIndexOperationAlertTabs } =
    props;
  const {
    videoWrapper,
    videoText,
    videoTextHeader,
    recordIconStyle,
    videoTextHeaderLeftRow1,
    videoTextHeaderLeftRow2,
    videoTextHeaderRight,
    videoTextFooter,
    fullScreenImageStyle,
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
        case "parking":
          setVideoURL(VehicleParkingVideo);
          setColSpan(5);
          break;
        case "security":
          setVideoURL(PeopleCrowdedVideo);
          setColSpan(5);
          break;
        case "operations":
          setVideoURL(UnauthorizedVideo);
          setColSpan(5);
          break;
        case "birdsview":
          setVideoURL(UnauthorizedVideo);
          setColSpan(columnSpan);
          break;
        case "outdoors":
          setVideoURL(UnauthorizedVideo);
          setColSpan(5);
          break;
        case "foodconcessions":
          setVideoURL(UnauthorizedVideo);
          setColSpan(5);
          break;
        default:
          break;
      }
    }
  }, [pageName]);

  const currentDate = moment().format("MM-DD-YYYY");
  const videoList = birdsEyeView?.map((value, index) => ({
    id: index,
    cameraName: value.title,
    cameraList: value.cameraList,
  }));

  const cameraListName = videoList[selectIndex]?.cameraList?.map(
    (value, index) => ({
      id: index,
      cameraName: value.title,
      url: value.video,
    })
  );
  const itemData = [
    {
      type: "all",
      title: "ALL",
      count: "6",
      cameraList1: [
        {
          id: "1",
          cameraName: "ENTRANCE",
          url:
            pageName === "parking"
              ? VehicleParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? PeopleCrowdedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "2",
          cameraName: "MAIN GATE",
          url:
            pageName === "parking"
              ? ParkingAvailableVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? AccessDeniedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "3",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? MaintenanceVideo1
              : pageName === "security" || pageName === "foodconcessions"
              ? UnauthorizedAccessVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "4",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? NoParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? CrowedFormingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "5",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? CloseParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? TailgatingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "6",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? ReverseParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? CameraNotFunctionalVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "7",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? WrongParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? LicensePlateNumberNotFoundVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "8",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? busExitVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? MaintenanceInProgressVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "9",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? busEnteredVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? ParkingSlotUnderMaintenanceVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "10",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? OccupancyFiftyVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? MaintanenceCompletedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "11",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? AccidentDetectedVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? EscalatorMaintenanceVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "12",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleEntryExitVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? FireAlertVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "13",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? vehicleEnteredVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? ReEntryGateClosedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "14",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleParkedVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? CafeteriaFullVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "15",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? BadParking
              : pageName === "security" || pageName === "foodconcessions"
              ? CleaningVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "16",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? IllegalParking
              : pageName === "security" || pageName === "foodconcessions"
              ? CrowedFormingThreeVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "17",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleParkedTwo
              : pageName === "security" || pageName === "foodconcessions"
              ? ElectricRepairingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "18",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? OccupancySeventyFive
              : pageName === "security" || pageName === "foodconcessions"
              ? EscalatorIssueVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "19",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleEntryExit
              : pageName === "security" || pageName === "foodconcessions"
              ? EternceExitVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "20",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? CrowdforminParking
              : pageName === "security" || pageName === "foodconcessions"
              ? GateOpenVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "A",
      title: "A",
      count: "6",
      cameraList1: [
        {
          id: "1",
          cameraName: "ENTRANCE",
          url:
            pageName === "parking"
              ? VehicleParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? PeopleCrowdedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "2",
          cameraName: "MAIN GATE",
          url:
            pageName === "parking"
              ? ParkingAvailableVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? AccessDeniedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "3",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? MaintenanceVideo1
              : pageName === "security" || pageName === "foodconcessions"
              ? UnauthorizedAccessVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "4",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? NoParkingVideo
              : pageName === "security" || pageName === "foodconcessions"
              ? CrowedFormingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "B",
      title: "B",
      count: "6",
      cameraList1: [
        {
          id: "5",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? CloseParkingVideo
              : pageName === "security"
              ? TailgatingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "6",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? ReverseParkingVideo
              : pageName === "security"
              ? CameraNotFunctionalVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "7",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? WrongParkingVideo
              : pageName === "security"
              ? LicensePlateNumberNotFoundVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "8",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? busExitVideo
              : pageName === "security"
              ? MaintenanceInProgressVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "C",
      title: "C",
      count: "6",
      cameraList1: [
        {
          id: "9",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? busEnteredVideo
              : pageName === "security"
              ? ParkingSlotUnderMaintenanceVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "10",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? OccupancyFiftyVideo
              : pageName === "security"
              ? MaintanenceCompletedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "11",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? AccidentDetectedVideo
              : pageName === "security"
              ? EscalatorMaintenanceVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "12",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleEntryExitVideo
              : pageName === "security"
              ? FireAlertVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "D",
      title: "D",
      count: "6",
      cameraList1: [
        {
          id: "13",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? vehicleEnteredVideo
              : pageName === "security"
              ? ReEntryGateClosedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "14",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleParkedVideo
              : pageName === "security"
              ? CafeteriaFullVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "15",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? BadParking
              : pageName === "security"
              ? CleaningVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "16",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? IllegalParking
              : pageName === "security"
              ? CrowedFormingThreeVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "E",
      title: "E",
      count: "6",
      cameraList1: [
        {
          id: "17",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleParkedTwo
              : pageName === "security"
              ? ElectricRepairingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "18",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? OccupancySeventyFive
              : pageName === "security"
              ? EscalatorIssueVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "19",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleEntryExit
              : pageName === "security"
              ? EternceExitVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "20",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? CrowdforminParking
              : pageName === "security"
              ? GateOpenVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "F",
      title: "F",
      count: "6",
      cameraList1: [
        {
          id: "1",
          cameraName: "ENTRANCE",
          url:
            pageName === "parking"
              ? VehicleParkingVideo
              : pageName === "security"
              ? PeopleCrowdedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "2",
          cameraName: "MAIN GATE",
          url:
            pageName === "parking"
              ? ParkingAvailableVideo
              : pageName === "security"
              ? AccessDeniedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "3",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? MaintenanceVideo1
              : pageName === "security"
              ? UnauthorizedAccessVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "4",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? NoParkingVideo
              : pageName === "security"
              ? CrowedFormingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "G",
      title: "G",
      count: "6",
      cameraList1: [
        {
          id: "5",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? CloseParkingVideo
              : pageName === "security"
              ? TailgatingVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "6",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? ReverseParkingVideo
              : pageName === "security"
              ? CameraNotFunctionalVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "7",
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? WrongParkingVideo
              : pageName === "security"
              ? LicensePlateNumberNotFoundVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "8",
          img: ParkingCameraImage,
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? busExitVideo
              : pageName === "security"
              ? MaintenanceInProgressVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "H",
      title: "H",
      count: "6",
      cameraList1: [
        {
          id: "13",
          img: ParkingCameraImage,
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? vehicleEnteredVideo
              : pageName === "security"
              ? ReEntryGateClosedVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "14",
          img: ParkingCameraImage,
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? VehicleParkedVideo
              : pageName === "security"
              ? CafeteriaFullVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "15",
          img: ParkingCameraImage,
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? BadParking
              : pageName === "security"
              ? CleaningVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "16",
          img: ParkingCameraImage,
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? IllegalParking
              : pageName === "security"
              ? CrowedFormingThreeVideo
              : pageName === "operations" || pageName === "outdoors"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
    {
      type: "BUS SLOT",
      title: "BUS SLOT",
      count: "6",
      cameraList1: [
        {
          id: "1",
          img: ParkingCameraImage,
          cameraName: "LOT 1",
          url:
            pageName === "parking"
              ? busEnteredVideo
              : pageName === "security"
              ? CrowedFormingThreeVideo
              : pageName === "operations"
              ? UnauthorizedVideo
              : "",
        },
        {
          id: "2",
          img: ParkingCameraImage,
          cameraName: "MAIN GATE",
          url:
            pageName === "parking"
              ? busExitVideo
              : pageName === "security"
              ? AccessDeniedVideo
              : pageName === "operations"
              ? UnauthorizedVideo
              : "",
        },
      ],
    },
  ];

  const operationsData = [
    {
      type: "all",
      title: "ALL",
      count: "6",
      cameraList1: [
        {
          id: "1",
          cameraName: "ENTRANCE",
          url: FireControlVideo,
        },
        {
          id: "2",
          cameraName: "MAIN GATE",
          url: HighTemperatureVideo,
        },
        {
          id: "3",
          cameraName: "LOT 1",
          url: NotOpeartionalVideo,
        },
        {
          id: "4",
          cameraName: "LOT 1",
          url: EntryGateVideo,
        },
        {
          id: "5",
          cameraName: "LOT 1",
          url: RestaurentCleaningVideo,
        },
        {
          id: "6",
          cameraName: "LOT 1",
          url: RestaurantCloseVideo,
        },
        {
          id: "7",
          cameraName: "LOT 1",
          url: RestaurantMaintenanceVideo,
        },
        {
          id: "8",
          cameraName: "LOT 1",
          url: RestaurantOpenVideo,
        },
        {
          id: "9",
          cameraName: "LOT 1",
          url: RestaurantOperationalVideo,
        },
        {
          id: "10",
          cameraName: "LOT 1",
          url: RestroomCleanedVideo,
        },
        {
          id: "11",
          cameraName: "LOT 1",
          url: SmokeDetectedVideo,
        },
        {
          id: "12",
          cameraName: "LOT 1",
          url: StockLevel,
        },
        {
          id: "13",
          cameraName: "LOT 1",
          url: VendingMachineStuckVideo,
        },
        {
          id: "14",
          cameraName: "LOT 1",
          url: VendingMachineOperationalVideo,
        },
        {
          id: "15",
          cameraName: "LOT 1",
          url: VendingMachineReStockingVideo,
        },
      ],
    },
    {
      type: "A",
      title: "A",
      count: "6",
      cameraList1: [
        {
          id: "1",
          cameraName: "ENTRANCE",
          url: RestaurantOpenVideo,
        },
        {
          id: "2",
          cameraName: "MAIN GATE",
          url: RestaurentCleaningVideo,
        },
        {
          id: "3",
          cameraName: "LOT 1",
          url: RestaurantCloseVideo,
        },
        {
          id: "4",
          cameraName: "LOT 1",
          url: RestaurantMaintenanceVideo,
        },
      ],
    },
    {
      type: "B",
      title: "B",
      count: "6",
      cameraList1: [
        {
          id: "5",
          cameraName: "LOT 1",
          url: RestroomCleanedVideo,
        },
      ],
    },
    {
      type: "C",
      title: "C",
      count: "6",
      cameraList1: [
        {
          id: "9",
          cameraName: "LOT 1",
          url: EternceExitVideo,
        },
        {
          id: "10",
          cameraName: "LOT 1",
          url: ReEntryGateClosedVideo,
        },
        {
          id: "11",
          cameraName: "LOT 1",
          url: EntryGateVideo,
        },
      ],
    },
    {
      type: "D",
      title: "D",
      count: "6",
      cameraList1: [
        {
          id: "13",
          cameraName: "LOT 1",
          url: RestaurantOperationalVideo,
        },
      ],
    },
    {
      type: "E",
      title: "E",
      count: "6",
      cameraList1: [
        {
          id: "17",
          cameraName: "LOT 1",
          url: VendingMachineReStockingVideo,
        },
        {
          id: "18",
          cameraName: "LOT 1",
          url: VendingMachineOperationalVideo,
        },
        {
          id: "19",
          cameraName: "LOT 1",
          url: VendingMachineStuckVideo,
        },
      ],
    },
  ];

  const outdoorData = [
    {
      type: "all",
      title: "ALL",
      count: "6",
      cameraList1: [
        {
          id: "1",
          url: GoodSignalStrengthVideo,
        },
        {
          id: "2",

          url: ModerateAQIVideo,
        },
        {
          id: "3",
          url: WeakSignalStrengthVideo,
        },
        {
          id: "4",
          url: HighElectricityConsumptionVideo,
        },
        {
          id: "5",
          url: WifiNotOperationalVideo,
        },
        {
          id: "6",
          url: HazardousAQIVideo,
        },
      ],
    },
  ];

  const foodConcessionsData = [
    {
      type: "all",
      title: "ALL",
      count: "6",
      cameraList1: [
        {
          id: "1",
          url: RestaurantUnderMaintenanceVideo,
        },
        {
          id: "2",
          url: CleaningInprogressVideo,
        },
        {
          id: "3",
          url: GateOpenVideo,
        },
        {
          id: "4",
          url: RestaurantOperationalVideo,
        },
        {
          id: "5",
          url: OrderDelayedVideo,
        },
        {
          id: "6",
          url: PendingOrderVideo,
        },
        {
          id: "7",
          url: CrowedFormingVideo,
        },
        {
          id: "8",
          url: UnauthorizedAccessVideo,
        },
        {
          id: "9",
          url: FoodRestaurantOpenVideo,
        },
        {
          id: "10",
          url: RestaurantOperationalVideo,
        },
        {
          id: "11",
          url: SmokeDetectedVideo,
        },
        {
          id: "12",
          url: NotOperationalVideo,
        },
        {
          id: "13",
          url: CameraNotFunctionalVideo,
        },
        {
          id: "14",
          url: LowInventoryLevelVideo,
        },
        {
          id: "15",
          url: VendingMachineReStockingVideo,
        },
      ],
    },
    {
      type: "A",
      title: "A",
      count: "6",
      cameraList1: [
        {
          id: "1",
          url: RestaurantOpenVideo,
        },
        {
          id: "2",
          url: RestaurentCleaningVideo,
        },
        {
          id: "3",
          url: RestaurantCloseVideo,
        },
        {
          id: "4",
          url: RestaurantMaintenanceVideo,
        },
      ],
    },
    {
      type: "B",
      title: "B",
      count: "6",
      cameraList1: [
        {
          id: "5",
          url: RestroomCleanedVideo,
        },
      ],
    },
    {
      type: "C",
      title: "C",
      count: "6",
      cameraList1: [
        {
          id: "9",
          url: EternceExitVideo,
        },
        {
          id: "10",
          url: ReEntryGateClosedVideo,
        },
        {
          id: "11",
          url: EntryGateVideo,
        },
      ],
    },
    {
      type: "D",
      title: "D",
      count: "6",
      cameraList1: [
        {
          id: "13",
          url: RestaurantOperationalVideo,
        },
      ],
    },
    {
      type: "E",
      title: "E",
      count: "6",
      cameraList1: [
        {
          id: "17",
          url: VendingMachineReStockingVideo,
        },
        {
          id: "18",
          url: VendingMachineOperationalVideo,
        },
        {
          id: "19",
          url: VendingMachineStuckVideo,
        },
      ],
    },
  ];

  return (
    <>
      <div className={videoWrapper}>
        {pageName === "security" ? (
          <ImageList sx={{ width: "100%" }} cols={colSpan}>
            {cameraListName?.map((item, index) => (
              <ImageListItem key={index}>
                <ReactPlayer
                  playing
                  loop={true}
                  // controls={true}
                  url={item?.url}
                  muted
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
                        <p>{item.cameraName}</p>
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
            ))}
          </ImageList>
        ) : pageName === "outdoors" ? (
          <ImageList sx={{ width: "100%" }} cols={colSpan}>
            {outdoorData &&
              outdoorData[0]?.cameraList1.map((item, index) => (
                <ImageListItem key={index}>
                  {/* <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          /> */}
                  <ReactPlayer
                    playing
                    loop={true}
                    muted
                    // controls={true}
                    url={item.url}
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
                          <p>
                            {item?.cameraName} CAM {item.id}{" "}
                          </p>
                        </div>
                      </div>
                      {/* <div className={videoTextHeaderRight}> */}
                      {/* <div>
                    <div className={videoTextHeaderLeftRow1}>
                      {" "}
                      <img
                        src={RedCircle}
                        alt="Record Icon"
                        className={recordIconStyle}
                      />
                      <p>
                        {item.cameraName}- CAM {item.id}{" "}
                      </p>
                    </div>
                  </div> */}
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
                      </div>
                      {/* </div> */}
                      {/* <div className={videoTextFooter}>
                  <img
                    src={FullScreenIcon}
                    alt="Full screen Icon"
                    className={fullScreenImageStyle}
                  />
                </div> */}
                    </div>
                  </div>
                </ImageListItem>
              ))}
          </ImageList>
        ) : pageName === "operations" ? (
          <ImageList sx={{ width: "100%" }} cols={colSpan}>
            {(tabIndexOperationAlertTabs === 0 || tabIndexOperationAlertTabs) &&
              operationsData[tabIndexOperationAlertTabs]?.cameraList1.map(
                (item, index) => (
                  <ImageListItem key={index}>
                    <ReactPlayer
                      playing
                      loop={true}
                      muted
                      // controls={true}
                      url={item.url}
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
                            <p>
                              {item?.cameraName}CAM {item.id}{" "}
                            </p>
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
                        </div>
                      </div>
                    </div>
                  </ImageListItem>
                )
              )}
          </ImageList>
        ) : pageName === "foodconcessions" ? (
          <ImageList sx={{ width: "100%" }} cols={colSpan}>
            {(tabIndexOperationAlertTabs === 0 || tabIndexOperationAlertTabs) &&
              foodConcessionsData[tabIndexOperationAlertTabs]?.cameraList1.map(
                (item, index) => (
                  <ImageListItem key={index}>
                    {/* <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          /> */}
                    <ReactPlayer
                      playing
                      loop={true}
                      muted
                      // controls={true}
                      url={item.url}
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
                            <p>
                              {item?.cameraName}CAM {item.id}{" "}
                            </p>
                          </div>
                        </div>
                        {/* <div className={videoTextHeaderRight}> */}
                        {/* <div>
                    <div className={videoTextHeaderLeftRow1}>
                      {" "}
                      <img
                        src={RedCircle}
                        alt="Record Icon"
                        className={recordIconStyle}
                      />
                      <p>
                        {item.cameraName}- CAM {item.id}{" "}
                      </p>
                    </div>
                  </div> */}
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
                        </div>
                      </div>
                    </div>
                  </ImageListItem>
                )
              )}
          </ImageList>
        ) : (
          <ImageList sx={{ width: "100%" }} cols={colSpan}>
            {(tabIndexOperationAlertTabs === 0 || tabIndexOperationAlertTabs) &&
              itemData[tabIndexOperationAlertTabs]?.cameraList1.map(
                (item, index) => (
                  <ImageListItem key={index}>
                    {/* <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              /> */}
                    <ReactPlayer
                      playing
                      loop={true}
                      muted
                      // controls={true}
                      url={item.url}
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
                            <p>
                              {item.cameraName}- CAM {item.id}{" "}
                            </p>
                          </div>
                        </div>
                        {/* <div className={videoTextHeaderRight}> */}
                        {/* <div>
                        <div className={videoTextHeaderLeftRow1}>
                          {" "}
                          <img
                            src={RedCircle}
                            alt="Record Icon"
                            className={recordIconStyle}
                          />
                          <p>
                            {item.cameraName}- CAM {item.id}{" "}
                          </p>
                        </div>
                      </div> */}
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
                        </div>
                        {/* </div> */}
                        {/* <div className={videoTextFooter}>
                      <img
                        src={FullScreenIcon}
                        alt="Full screen Icon"
                        className={fullScreenImageStyle}
                      />
                    </div> */}
                      </div>
                    </div>
                  </ImageListItem>
                )
              )}
          </ImageList>
        )}
      </div>
    </>
  );
};

export default VideoContainer;
