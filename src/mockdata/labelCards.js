import VipIcon from "../assets/Icons/vip.svg";
import DisabilityIcon from "../assets/Icons/disability.svg";
import EnergyIcon from "../assets/Icons/energy.svg";
import CarIcon from "../assets/Icons/car.svg";
import AlertIcon from "../assets/Icons/alert.svg";
import TailGatingIcon from "../assets/Icons/tailGating.svg";
import PeopleIcon from "../assets/Icons/people.svg";
import RestrictedIcon from "../assets/Icons/restricted.svg";
import EnergyChargeIcon from "../assets/Icons/energyCharge.svg";
import DropIcon from "../assets/Icons/drop.svg";
import EnergyMeterIcon from "../assets/Icons/energyMeter.svg";
import Co2Icon from "../assets/Icons/co2.svg";
import BulbIcon from "../assets/Icons/bulb.svg";
import WifiIcon from "../assets/Icons/wifi.svg";
import WaveIcon from "../assets/Icons/wave.svg";
import DustParticles from "../assets/Icons/dustParticles.svg";
import DollarIcon from "../assets/Icons/dollar.svg";
import ClockIcon from "../assets/Icons/time.svg";
import SettingsIcon from "../assets/Icons/settings.svg";
import Label6Icon1 from "../assets/Icons/label6Icon1.svg";
import Label6Icon2 from "../assets/Icons/label6Icon2.svg";
import Label6Icon3 from "../assets/Icons/label6Icon3.svg";
import Label6Icon4 from "../assets/Icons/label6Icon4.svg";
import FoodIcon1 from "../assets/Icons/FoodIcon1.svg";
import FoodIcon2 from "../assets/Icons/FoodIcon2.svg";
import FoodIcon3 from "../assets/Icons/FoodIcon3.svg";
import FoodIcon4 from "../assets/Icons/FoodIcon4.svg";
import OperationsIcon1 from "../assets/Icons/OperationsIcon1.svg";
import OperationsIcon2 from "../assets/Icons/OperationsIcon2.svg";
import OperationsIcon3 from "../assets/Icons/OperationsIcon3.svg";
import OperationsIcon4 from "../assets/Icons/OperationsIcon4.svg";

const labelCards = {
  labels: [
    {
      id: "parking",
      name: "Parking",
      totalSlots: "500",
      available: "670",
      occupied: "335",
      occupiedPercentage: "50",
      values: [
        {
          type: "VIP",
          total: "100",
          available: "200",
          occupied: "100",
          icon: VipIcon,
        },
        {
          type: "Accessibility",
          total: "25",
          available: "50",
          occupied: "25",
          icon: DisabilityIcon,
        },
        {
          type: "Electric Vehicle",
          total: "10",
          available: "150",
          occupied: "10",
          icon: EnergyIcon,
        },
        {
          type: "General",
          total: "200",
          available: "270",
          occupied: "200",
          icon: CarIcon,
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 117.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 157.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 187.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 267.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 227.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 257.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 287.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 247.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 277.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 109.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 157.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 177.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 137.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 227.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 267.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 297.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 217.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 127.0,
            },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 107.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 127.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 157.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 287.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 217.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 127.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 297.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 187.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 247.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 177.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 117.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 147.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 157.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 187.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 267.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 227.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 257.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 287.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 247.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 277.0,
            },
          ],
        },
      },
    },
    {
      id: "security",
      name: "Security",
      resolved: "3",
      outstanding: "4",
      today: "2",
      values: [
        {
          type: "Incidents",
          total: "56",
          available: "174",
          icon: AlertIcon,
        },
        {
          type: "Tailgating",
          total: "26",
          available: "174",
          icon: TailGatingIcon,
        },
        {
          type: "Crowd Forming",
          total: "05",
          available: "174",
          icon: PeopleIcon,
        },
        {
          type: "Unauthorize Access",
          total: "25",
          available: "174",
          icon: RestrictedIcon,
        },
      ],
      analytics: {
        day: {
          analyticsData: [
            {
              metricName: "tailgating",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "crowdforming",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "unauthorizedaccess",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
          ],
        },
        weekly: {
          analyticsData: [
            {
              metricName: "tailgating",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "crowdforming",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "unauthorizedaccess",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
          ],
        },
        monthly: {
          analyticsData: [
            {
              metricName: "tailgating",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "crowdforming",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "unauthorizedaccess",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
          ],
        },
        yearly: {
          analyticsData: [
            {
              metricName: "tailgating",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "crowdforming",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
            {
              metricName: "unauthorizedaccess",
              analytics: [
                {
                  node: "2022-10-11T11:00:00",
                  count: 56,
                },
                {
                  node: "2022-10-11T12:00:00",
                  count: 247.0,
                },
                {
                  node: "2022-10-11T13:00:00",
                  count: 347.0,
                },
                {
                  node: "2022-10-11T14:00:00",
                  count: 447.0,
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "energy",
      name: "Energy Management",
      energyConsumption: "220",
      energySavedPercentage: "34",
      values: [
        {
          type: "Electricity Consumption",
          total: "174",
          available: "174",
          icon: EnergyChargeIcon,
        },
        {
          type: "Water Consumption",
          total: "26",
          available: "174",
          icon: DropIcon,
        },
        {
          type: "HVAC",
          total: "20",
          available: "174",
          icon: EnergyMeterIcon,
        },
        {
          type: "Co2 Emmission",
          total: "36",
          available: "174",
          icon: Co2Icon,
        },
      ],
    },
    {
      id: "outdoors",
      name: "Outdoors & Ambience",
      co2level: "140",
      voclevel: "551",
      percentage: "49",
      values: [
        {
          type: "Electricity Consumed",
          total: "24",
          available: "174",
          icon: BulbIcon,
        },
        {
          type: "Wifi",
          total: "20",
          available: "174",
          icon: WifiIcon,
        },
        {
          type: "Air Quality Index",
          total: "70",
          available: "174",
          icon: WaveIcon,
        },
        {
          type: "Dust Level",
          total: "684",
          available: "174",
          icon: DustParticles,
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics",
      currentSpendings: "354",
      lastSpendings: "550",
      observation: "4",
      observationPercentage: "36",
      values: [
        {
          type: "Income",
          total: "$244",
          available: "174",
          icon: DollarIcon,
        },
        {
          type: "Hours Saved",
          total: "10",
          available: "174",
          icon: ClockIcon,
        },
        {
          type: "Total Incidents",
          total: "500",
          available: "174",
          icon: AlertIcon,
        },
        {
          type: "Total Operational Alerts",
          total: "25",
          available: "174",
          icon: SettingsIcon,
        },
      ],
    },
    {
      id: "fanExperience",
      name: "Fan Experience",
      ads: "36",
      rewards: "14",
      events: "50",
      observationPercentage: "1519",
      values: [
        {
          type: "Fan Events",
          total: "50",
          available: "174",
          icon: Label6Icon1,
        },
        {
          type: "Fan Engagement",
          total: "70%",
          available: "174",
          icon: Label6Icon2,
        },
        {
          type: "Fan Events",
          total: "05",
          available: "174",
          icon: Label6Icon3,
        },
        {
          type: "Total Fans",
          total: "2500",
          available: "174",
          icon: Label6Icon4,
        },
      ],
    },
    {
      id: "foodConcessions",
      name: "Food & Concessions",
      meals: "50",
      snacks: "35",
      drinks: "15",
      orders: "300",
      values: [
        {
          type: "Visitors",
          total: "130",
          available: "130",
          icon: FoodIcon1,
        },
        {
          type: "Orders",
          total: "75",
          available: "75",
          icon: FoodIcon2,
        },
        {
          type: "Inventory",
          total: "65%",
          available: "65%",
          icon: FoodIcon3,
        },
        {
          type: "Income",
          total: "$123K",
          available: "$123K",
          icon: FoodIcon4,
        },
      ],
    },
    {
      id: "operationsInfra",
      name: "Operations & Infra",
      totalSlots: "500",
      available: "300",
      occupied: "105",
      occupiedPercentage: "35",
      values: [
        {
          type: "Waiting Time",
          total: "2",
          available: "200",
          occupied: "100",
          icon: OperationsIcon1,
        },
        {
          type: "Sanitisation Level",
          total: "70%",
          available: "50",
          occupied: "25",
          icon: OperationsIcon2,
        },
        {
          type: "Total Incidents",
          total: "50",
          available: "150",
          occupied: "10",
          icon: OperationsIcon3,
        },
        {
          type: "Total Operational Alerts",
          total: "12",
          available: "270",
          occupied: "200",
          icon: OperationsIcon4,
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 117.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 157.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 187.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 267.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 227.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 257.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 287.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 247.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 277.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 109.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 157.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 177.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 137.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 227.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 267.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 297.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 217.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 127.0,
            },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 107.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 127.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 157.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 287.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 217.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 127.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 297.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 187.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 247.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 177.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 117.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 147.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 157.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 147.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 187.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 267.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 227.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 257.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 287.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 247.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 277.0,
            },
          ],
        },
      },
    },
  ],
};
export default labelCards;
