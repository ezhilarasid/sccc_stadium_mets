import PregameVideo from "../assets/parking/video1/busExit.webm";
import VehicleParkingVideo from "../assets/video/parkingVideo.webm";
import PeopleCrowdedVideo from "../assets/video/peopleCrowd.webm";
import UnauthorizedVideo from "../assets/video/unauthorizedAccess.webm";

import AccessDeniedVideo from "../assets/security/video1/accessDenied.mp4";
import UnauthorizedAccessVideo from "../assets/security/video1/unauthorizedAccess.mp4";
import CrowedFormingVideo from "../assets/security/video1/crowedForming-1.webm";
import TailgatingVideo from "../assets/security/video1/tailgating.mp4";
import CameraNotFunctionalVideo from "../assets/security/video1/cameraNotFunctional.mp4";
import LicensePlateNumberNotFoundVideo from "../assets/security/video1/licensePlateNumberNotFound.mp4";
import MaintenanceInProgressVideo from "../assets/security/video1/maintenance-In-progress.webm";
import ParkingSlotUnderMaintenanceVideo from "../assets/security/video1/parking-slot-underMaintenance.webm";
import MaintanenceCompletedVideo from "../assets/security/video1/maintenanceCompleted.webm";
import EscalatorMaintenanceVideo from "../assets/security/video1/escalator-maintenance2.webm";
import FireAlertVideo from "../assets/security/video1/fire-alert.webm";
import ReEntryGateClosedVideo from "../assets/security/video1/re-entry-gate-closed.mp4";
import CafeteriaFullVideo from "../assets/security/video1/cafeteria-full-2.webm";
import CleaningVideo from "../assets/security/video1/cleaning.webm";
import CrowedFormingThreeVideo from "../assets/security/video1/crowed-forming3.webm";
import ElectricRepairingVideo from "../assets/security/video1/electricRepairing.webm";
import EscalatorIssueVideo from "../assets/security/video1/escalatorIssue.webm";
import EternceExitVideo from "../assets/security/video1/eternceExit.webm";
import GateOpenVideo from "../assets/security/video1/gateOpen.webm";

const birdsEyeView = [
  {
    id: 0,
    type: "all",
    title: "ALL",
    count: "6",
    cameraList: [
      {
        id: "1",
        name: "cam1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: PeopleCrowdedVideo,
        isChecked: true,
      },
      {
        id: "2",
        name: "cam2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: AccessDeniedVideo,
        isChecked: true,
      },
      {
        id: "3",
        name: "cam3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: UnauthorizedAccessVideo,
        isChecked: true,
      },
      {
        id: "4",
        name: "cam4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: CrowedFormingVideo,
        isChecked: true,
      },
      {
        id: "5",
        name: "cam5",
        title: "ENTRANCE - CAM 5",
        thumbnail: "",
        video: TailgatingVideo,
        isChecked: true,
      },
      {
        id: "6",
        name: "cam6",
        title: "ENTRANCE - CAM 6",
        thumbnail: "",
        video: CameraNotFunctionalVideo,
        isChecked: true,
      },
      {
        id: "7",
        name: "cam7",
        title: "ENTRANCE - CAM 7",
        thumbnail: "",
        video: LicensePlateNumberNotFoundVideo,
        isChecked: true,
      },
      {
        id: "8",
        name: "cam8",
        title: "ENTRANCE - CAM 8",
        thumbnail: "",
        video: MaintenanceInProgressVideo,
        isChecked: true,
      },
      {
        id: "9",
        name: "cam9",
        title: "ENTRANCE - CAM 9",
        thumbnail: "",
        video: ParkingSlotUnderMaintenanceVideo,
        isChecked: true,
      },
      {
        id: "10",
        name: "cam10",
        title: "ENTRANCE - CAM 10",
        thumbnail: "",
        video: MaintanenceCompletedVideo,
        isChecked: true,
      },
      {
        id: "11",
        name: "cam11",
        title: "ENTRANCE - CAM 11",
        thumbnail: "",
        video: EscalatorMaintenanceVideo,
        isChecked: true,
      },
      {
        id: "12",
        name: "cam12",
        title: "ENTRANCE - CAM 12",
        thumbnail: "",
        video: FireAlertVideo,
        isChecked: true,
      },
      {
        id: "13",
        name: "cam13",
        title: "ENTRANCE - CAM 13",
        thumbnail: "",
        video: GateOpenVideo,
        isChecked: true,
      },
      {
        id: "14",
        name: "cam14",
        title: "ENTRANCE - CAM 14",
        thumbnail: "",
        video: ReEntryGateClosedVideo,
        isChecked: true,
      },
      {
        id: "15",
        name: "cam15",
        title: "ENTRANCE - CAM 15",
        thumbnail: "",
        video: CafeteriaFullVideo,
        isChecked: true,
      },
      {
        id: "16",
        name: "cam16",
        title: "ENTRANCE - CAM 16",
        thumbnail: "",
        video: CleaningVideo,
        isChecked: true,
      },
      {
        id: "17",
        name: "cam17",
        title: "ENTRANCE - CAM 17",
        thumbnail: "",
        video: CrowedFormingThreeVideo,
        isChecked: true,
      },
      {
        id: "18",
        name: "cam18",
        title: "ENTRANCE - CAM 18",
        thumbnail: "",
        video: ElectricRepairingVideo,
        isChecked: true,
      },
      {
        id: "19",
        name: "cam19",
        title: "ENTRANCE - CAM 19",
        thumbnail: "",
        video: EscalatorIssueVideo,
        isChecked: true,
      },
      {
        id: "20",
        name: "cam20",
        title: "ENTRANCE - CAM 20",
        thumbnail: "",
        video: EternceExitVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 1,
    type: "preGame",
    title: "PREGAME",
    count: "10",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: PregameVideo,
        video: CrowedFormingVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: GateOpenVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: PregameVideo,
        video: TailgatingVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: PeopleCrowdedVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 2,
    type: "inGame",
    title: "INGAME",
    count: "01",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: UnauthorizedAccessVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: PeopleCrowdedVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: CameraNotFunctionalVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: CrowedFormingThreeVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 3,
    type: "postGame",
    title: "POSTGAME",
    count: "03",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: AccessDeniedVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: GateOpenVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: ElectricRepairingVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: EternceExitVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 4,
    type: "events",
    title: "EVENTS",
    count: "02",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: MaintenanceInProgressVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: CafeteriaFullVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: CrowedFormingThreeVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: ReEntryGateClosedVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 5,
    type: "outdoors",
    title: "OUTDOORS",
    count: "01",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: TailgatingVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: CrowedFormingVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: EscalatorMaintenanceVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: EscalatorIssueVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 6,
    type: "concessions",
    title: "CONCESSIONS",
    count: "02",
    cameraList: [
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: PeopleCrowdedVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: GateOpenVideo,
        isChecked: true,
      },

      {
        id: "5",
        title: "ENTRANCE - CAM 5",
        thumbnail: "",
        video: CrowedFormingThreeVideo,
        isChecked: true,
      },
      {
        id: "6",
        title: "ENTRANCE - CAM 6",
        thumbnail: "",
        video: UnauthorizedAccessVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 7,
    type: "tailgateAreas",
    title: "TAILGATE AREAS",
    count: "03",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: TailgatingVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: UnauthorizedAccessVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: CameraNotFunctionalVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: EternceExitVideo,
        isChecked: true,
      },
    ],
  },
  {
    id: 8,
    type: "vip",
    title: "VIP",
    count: "03",
    cameraList: [
      {
        id: "1",
        title: "ENTRANCE - CAM 1",
        thumbnail: "",
        video: PregameVideo,
        isChecked: true,
      },
      {
        id: "2",
        title: "ENTRANCE - CAM 2",
        thumbnail: "",
        video: ParkingSlotUnderMaintenanceVideo,
        isChecked: true,
      },
      {
        id: "3",
        title: "ENTRANCE - CAM 3",
        thumbnail: "",
        video: GateOpenVideo,
        isChecked: true,
      },
      {
        id: "4",
        title: "ENTRANCE - CAM 4",
        thumbnail: "",
        video: CrowedFormingThreeVideo,
        isChecked: true,
      },
    ],
  },
];
export default birdsEyeView;
