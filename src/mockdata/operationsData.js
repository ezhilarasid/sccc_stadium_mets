import heatMapIcons from "assets/heatMapIcons";

const operationsData = {
  values: [
    {
      type: "ALL",
      totalSlots: "400",
      available: "300",
      occupied: "180",
      occupiedPercentage: "50",

      iconsInfo: [
        {
          type: "VIP",

          total: "100",

          available: "150",

          occupied: "100",

          icon: "",
        },

        {
          type: "Person Disabilities",

          total: "25",

          available: "100",

          occupied: "25",

          icon: "",
        },

        {
          type: "Electric Vehicle",

          total: "10",

          available: "150",

          occupied: "10",

          icon: "",
        },

        {
          type: "Car",

          total: "200",

          available: "270",

          occupied: "200",

          icon: "",
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 99.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 100.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 98.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 98.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 96.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 90.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 98.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 99.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 100.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 98.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 98.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 96.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 90.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 98.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-04-11T11:00:00",
              count: 100.0,
            },
            {
              node: "2022-05-11T12:00:00",
              count: 30.0,
            },
            {
              node: "2022-06-11T13:00:00",
              count: 77.0,
            },
            {
              node: "2022-07-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-08-11T15:00:00",
              count: 37.0,
            },
            {
              node: "2022-09-11T16:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 67.0,
            },
            // {
            //   node: "2022-11-11T18:00:00",
            //   count: 97.0,
            // },
            // {
            //   node: "2022-12-11T19:00:00",
            //   count: 17.0,
            // },
            // {
            //   node: "2023-01-11T21:00:00",
            //   count: 47.0,
            // },
            // {
            //   node: "2023-02-11T22:00:00",
            //   count: 27.0,
            // },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
          ],
        },
      },
      notifications: {
        events: {
          totalCount: "07",
          list: [
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-01",
              title: "Restaurant Is Under Maintenance",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate - 2",
              parkingLot: "2nd Floor",
              img: heatMapIcons?.restaurentsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75639912188559,
                lng: -73.8455779035223,
              },
            },
            {
              category: "operations",
              subCategory: "restRooms",
              id: "restRooms-02",
              title: "Restroom Cleaning Inprogress",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate -1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.restRoomsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75396452722524,
                lng: -73.84898036967088,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-08",
              title: "Restocking done",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate - 2 | Looby",
              parkingLot: "Vending machine",
              img: heatMapIcons?.entranceEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75580887886097,
                lng: -73.84758933379399,
              },
            },
            {
              category: "operations",
              subCategory: "lounge",
              id: "lounge-04",
              title: "Restaurant Is Operational Now",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "2nd Floor",
              parkingLot: "Cafeteria",
              img: heatMapIcons?.loungeEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75630205972699,
                lng: -73.8446825618667,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-05",
              title: "Restocking done",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "2nd Floor",
              parkingLot: "Cafeteria",
              img: heatMapIcons?.machineEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757565449429244,
                lng: -73.8448645115886,
              },
            },

            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-02",
              title: "Restaurant Is Getting Clean",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Bay-1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.restaurentsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75746591723262,
                lng: -73.84502426484521,
              },
            },
          ],
        },
        incidents: {
          totalCount: "09",
          list: [
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-06",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Capacity - 25 people | Wait Time - 6Min",
              img: heatMapIcons?.restaurentsIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.7562015717988,
                lng: -73.84654830185943,
              },
            },
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-07",
              title: "Not Operational",
              timeStamp: "12-15-2022 | 09:00 AM",
              // vehicleId: "#34567C15A",
              spot: "Gate - 5",
              parkingLot: "Entrance Gate",
              img: heatMapIcons?.restRoomsIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.755499076095866,
                lng: -73.85073052400854,
              },
            },
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-08",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate -2",
              parkingLot: "MainEntrance",
              img: heatMapIcons?.entranceIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.755731770372066,
                lng: -73.84707434600564,
              },
            },
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-09",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate -3",
              parkingLot: "Parking Lot - A",
              img: heatMapIcons?.entranceIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.755217214916826,
                lng: -73.84692272126547,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-10",
              title: "Not Operational",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby - 2",
              parkingLot: "Vending Machine - 10",
              img: heatMapIcons?.entranceIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75454016146857,
                lng: -73.84902351001494,
              },
            },
            {
              category: "operations",
              subCategory: "lounge",
              id: "lounge-11",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Capacity - 10 People | Wait Time - 30Min",
              parkingLot: "Gate - 5",
              img: heatMapIcons?.loungeIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75757582964839,
                lng: -73.84654713488888,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-12",
              title: "Stock Level 30 %",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Vending Machine - 14",
              img: heatMapIcons?.machineIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757790149512246,
                lng: -73.8452731152781,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-13",
              title: "High Temperature",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Vending Machine - 15",
              img: heatMapIcons?.machineIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757790149512246,
                lng: -73.8452731152781,
              },
            },
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-15",
              title: "Closed for cleaning",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Restaurants - 14",
              img: heatMapIcons?.machineIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757790149512246,
                lng: -73.8452731152781,
              },
            },
          ],
        },
        operationalAlerts: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-13",
              title: "Not Operational",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "2nd Floor ",
              parkingLot: "Restaurants Closed",
              img: heatMapIcons?.restaurentsOrangeIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75821379870699,
                lng: -73.84564461840797,
              },
            },
            {
              category: "operations",
              subCategory: "restRooms",
              id: "restRooms-14",
              title: "Smoke Detected",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Exit Entrance",
              img: heatMapIcons?.restRoomsAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757744302090195,
                lng: -73.84825322940326,
              },
            },
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-15",
              title: "Re-Entry Gate Closed",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate - 6",
              parkingLot: "Re-Entry Gate",
              img: heatMapIcons?.entranceAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.755263624572834,
                lng: -73.8464228057143,
              },
            },
            {
              category: "operations",
              subCategory: "lounge",
              id: "lounge-16",
              title: "Restaurants Open",
              timeStamp: "12-15-2022 | 09:00 AM",
              // vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Stall No 15",
              img: heatMapIcons?.loungeAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75579742480395,
                lng: -73.8456817967569,
              },
            },
          ],
        },
      },
      heatMaps: [
        {
          type: "Heavy Crowd",
          count: "100",
          img: heatMapIcons?.heatMap1,
          width: "30px",
          location: {
            x: 1530,
            y: 1435,
          },
        },
        {
          type: "Moderate Crowd",
          count: "100",
          img: heatMapIcons?.heatMap2,
          width: "30px",
          location: {
            x: 1530,
            y: 1150,
          },
        },
        {
          type: "Medium Crowd",
          count: "100",
          img: heatMapIcons?.heatMap3,
          width: "20px",
          location: {
            x: 1530,
            y: 1000,
          },
        },
        {
          type: "Less Crowd",
          count: "100",
          img: heatMapIcons?.heatMap4,
          width: "30px",
          location: {
            x: 1820,
            y: 1100,
          },
        },
        {
          id: "05",
          img: heatMapIcons?.heatMap5,
          width: "30px",
          location: {
            x: 1880,
            y: 950,
          },
        },
        {
          id: "06",
          img: heatMapIcons?.heatMap6,
          width: "60px",
          location: {
            x: 850,
            y: 1130,
          },
        },
        {
          id: "07",
          img: heatMapIcons?.heatMapList,
          width: "120px",
          location: {
            x: -700,
            y: 100,
          },
        },
        {
          id: "08",
          img: heatMapIcons?.heatMap7,
          width: "30px",
          location: {
            x: 2410,
            y: 980,
          },
        },
        {
          id: "09",
          img: heatMapIcons?.heatMap8,
          width: "40px",
          location: {
            x: 2520,
            y: 890,
          },
        },
        {
          id: "10",
          img: heatMapIcons?.heatMap9,
          width: "50px",
          location: {
            x: 300,
            y: 2130,
          },
        },
        {
          id: "11",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 1820,
            y: 1890,
          },
        },
        {
          id: "12",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 2420,
            y: 2250,
          },
        },
        {
          id: "13",
          img: heatMapIcons?.heatMap11,
          width: "18px",
          location: {
            x: 1720,
            y: 890,
          },
        },
        {
          id: "14",
          img: heatMapIcons?.heatMap12,
          width: "30px",
          location: {
            x: 660,
            y: 1535,
          },
        },
        {
          id: "15",
          img: heatMapIcons?.heatMap13,
          width: "20px",
          location: {
            x: 880,
            y: 2480,
          },
        },
      ],
    },
    {
      type: "Restaurants",
      totalSlots: "400",
      available: "300",
      occupied: "180",
      occupiedPercentage: "50",

      iconsInfo: [
        {
          type: "VIP",

          total: "100",

          available: "150",

          occupied: "100",

          icon: "",
        },

        {
          type: "Person Disabilities",

          total: "25",

          available: "100",

          occupied: "25",

          icon: "",
        },

        {
          type: "Electric Vehicle",

          total: "10",

          available: "150",

          occupied: "10",

          icon: "",
        },

        {
          type: "Car",

          total: "200",

          available: "270",

          occupied: "200",

          icon: "",
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-04-11T11:00:00",
              count: 100.0,
            },
            {
              node: "2022-05-11T12:00:00",
              count: 30.0,
            },
            {
              node: "2022-06-11T13:00:00",
              count: 77.0,
            },
            {
              node: "2022-07-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-08-11T15:00:00",
              count: 37.0,
            },
            {
              node: "2022-09-11T16:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 67.0,
            },
            // {
            //   node: "2022-11-11T18:00:00",
            //   count: 97.0,
            // },
            // {
            //   node: "2022-12-11T19:00:00",
            //   count: 17.0,
            // },
            // {
            //   node: "2023-01-11T21:00:00",
            //   count: 47.0,
            // },
            // {
            //   node: "2023-02-11T22:00:00",
            //   count: 27.0,
            // },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
          ],
        },
      },
      notifications: {
        events: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-01",
              title: "Restaurant Is Under Maintenance ",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate - 2",
              parkingLot: "2nd Floor",
              img: heatMapIcons?.restaurentsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75639912188559,
                lng: -73.8455779035223,
              },
            },
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-02",
              title: "Restaurant Is Getting Clean",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Bay-1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.restaurentsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75746591723262,
                lng: -73.84502426484521,
              },
            },
          ],
        },
        incidents: {
          totalCount: "10",
          list: [
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-06",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Capacity - 25 people | Wait Time - 6Min",
              img: heatMapIcons?.restaurentsIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.7562015717988,
                lng: -73.84654830185943,
              },
            },
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-15",
              title: "Closed for cleaning",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Restaurants - 14",
              img: heatMapIcons?.machineIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757790149512246,
                lng: -73.8452731152781,
              },
            },
          ],
        },
        operationalAlerts: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "restaurants",
              id: "restaurants-13",
              title: "Not Operational",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "2nd Floor ",
              parkingLot: "Restaurants Closed",
              img: heatMapIcons?.restaurentsOrangeIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75821379870699,
                lng: -73.84564461840797,
              },
            },
            {
              category: "operations",
              subCategory: "restRooms",
              id: "restRooms-14",
              title: "Smoke Detected",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Exit Entrance",
              img: heatMapIcons?.restRoomsAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757744302090195,
                lng: -73.84825322940326,
              },
            },
          ],
        },
      },
      heatMaps: [
        {
          id: "09",
          img: heatMapIcons?.heatMap8,
          width: "40px",
          location: {
            x: 2520,
            y: 890,
          },
        },
        {
          id: "10",
          img: heatMapIcons?.heatMap9,
          width: "50px",
          location: {
            x: 300,
            y: 2130,
          },
        },
        {
          id: "11",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 1820,
            y: 1890,
          },
        },
        {
          id: "16",
          img: heatMapIcons?.heatMapList,
          width: "120px",
          location: {
            x: -700,
            y: 100,
          },
        },
      ],
    },
    {
      type: "RestRooms",
      totalSlots: "400",
      available: "300",
      occupied: "180",
      occupiedPercentage: "50",

      iconsInfo: [
        {
          type: "VIP",

          total: "100",

          available: "150",

          occupied: "100",

          icon: "",
        },

        {
          type: "Person Disabilities",

          total: "25",

          available: "100",

          occupied: "25",

          icon: "",
        },

        {
          type: "Electric Vehicle",

          total: "10",

          available: "150",

          occupied: "10",

          icon: "",
        },

        {
          type: "Car",

          total: "200",

          available: "270",

          occupied: "200",

          icon: "",
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 87.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-04-11T11:00:00",
              count: 100.0,
            },
            {
              node: "2022-05-11T12:00:00",
              count: 30.0,
            },
            {
              node: "2022-06-11T13:00:00",
              count: 77.0,
            },
            {
              node: "2022-07-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-08-11T15:00:00",
              count: 37.0,
            },
            {
              node: "2022-09-11T16:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 67.0,
            },
            // {
            //   node: "2022-11-11T18:00:00",
            //   count: 97.0,
            // },
            // {
            //   node: "2022-12-11T19:00:00",
            //   count: 17.0,
            // },
            // {
            //   node: "2023-01-11T21:00:00",
            //   count: 47.0,
            // },
            // {
            //   node: "2023-02-11T22:00:00",
            //   count: 27.0,
            // },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
          ],
        },
      },
      notifications: {
        events: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "restRooms",
              id: "restRooms-22",
              title: "Restroom Cleaning Inprogress",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate -1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.restRoomsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75396452722524,
                lng: -73.84898036967088,
              },
            },
          ],
        },
        incidents: {
          totalCount: "10",
          list: [
            {
              category: "operations",
              subCategory: "restRooms",
              id: "restRooms-02",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Gate -1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.restRoomsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75611258264126,
                lng: -73.84682722742556,
              },
            },
          ],
        },
        operationalAlerts: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "restRooms",
              id: "restRooms-14",
              title: "Smoke Detected",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Exit Entrance",
              img: heatMapIcons?.restRoomsAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757744302090195,
                lng: -73.84825322940326,
              },
            },
          ],
        },
      },
      heatMaps: [
        {
          id: "12",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 2420,
            y: 2250,
          },
        },
        {
          id: "13",
          img: heatMapIcons?.heatMap11,
          width: "18px",
          location: {
            x: 1720,
            y: 890,
          },
        },
        {
          id: "14",
          img: heatMapIcons?.heatMap12,
          width: "30px",
          location: {
            x: 660,
            y: 1535,
          },
        },
        {
          id: "15",
          img: heatMapIcons?.heatMap13,
          width: "20px",
          location: {
            x: 880,
            y: 2480,
          },
        },
        {
          id: "16",
          img: heatMapIcons?.heatMapList,
          width: "120px",
          location: {
            x: -700,
            y: 100,
          },
        },
      ],
    },
    {
      type: "Entrance",
      totalSlots: "400",
      available: "300",
      occupied: "180",
      occupiedPercentage: "50",

      iconsInfo: [
        {
          type: "VIP",

          total: "100",

          available: "150",

          occupied: "100",

          icon: "",
        },

        {
          type: "Person Disabilities",

          total: "25",

          available: "100",

          occupied: "25",

          icon: "",
        },

        {
          type: "Electric Vehicle",

          total: "10",

          available: "150",

          occupied: "10",

          icon: "",
        },

        {
          type: "Car",

          total: "200",

          available: "270",

          occupied: "200",

          icon: "",
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 27.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-04-11T11:00:00",
              count: 100.0,
            },
            {
              node: "2022-05-11T12:00:00",
              count: 30.0,
            },
            {
              node: "2022-06-11T13:00:00",
              count: 77.0,
            },
            {
              node: "2022-07-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-08-11T15:00:00",
              count: 37.0,
            },
            {
              node: "2022-09-11T16:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 67.0,
            },
            // {
            //   node: "2022-11-11T18:00:00",
            //   count: 97.0,
            // },
            // {
            //   node: "2022-12-11T19:00:00",
            //   count: 17.0,
            // },
            // {
            //   node: "2023-01-11T21:00:00",
            //   count: 47.0,
            // },
            // {
            //   node: "2023-02-11T22:00:00",
            //   count: 27.0,
            // },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
          ],
        },
      },
      notifications: {
        events: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-23",
              title: "Entrance Gate Opened",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Bay-1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.restaurentsEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75656299613403,
                lng: -73.84705479457227,
              },
            },
          ],
        },
        incidents: {
          totalCount: "10",
          list: [
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-24",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Bay-1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.entranceIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.755731770372066,
                lng: -73.84707434600564,
              },
            },
          ],
        },
        operationalAlerts: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "entrance",
              id: "entrance-27",
              title: "Entrance Gate Closed",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Bay-1",
              parkingLot: "Ground Floor",
              img: heatMapIcons?.entranceAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.755263624572834,
                lng: -73.8464228057143,
              },
            },
          ],
        },
      },
      heatMaps: [
        {
          id: "12",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 2420,
            y: 2250,
          },
        },
        {
          id: "13",
          img: heatMapIcons?.heatMap11,
          width: "18px",
          location: {
            x: 1720,
            y: 890,
          },
        },
        {
          id: "14",
          img: heatMapIcons?.heatMap12,
          width: "30px",
          location: {
            x: 660,
            y: 1535,
          },
        },
        {
          id: "15",
          img: heatMapIcons?.heatMap13,
          width: "20px",
          location: {
            x: 880,
            y: 2480,
          },
        },
        {
          id: "16",
          img: heatMapIcons?.heatMapList,
          width: "120px",
          location: {
            x: -700,
            y: 100,
          },
        },
      ],
    },
    {
      type: "Lounge",
      totalSlots: "400",
      available: "300",
      occupied: "180",
      occupiedPercentage: "50",

      iconsInfo: [
        {
          type: "VIP",

          total: "100",

          available: "150",

          occupied: "100",

          icon: "",
        },

        {
          type: "Person Disabilities",

          total: "25",

          available: "100",

          occupied: "25",

          icon: "",
        },

        {
          type: "Electric Vehicle",

          total: "10",

          available: "150",

          occupied: "10",

          icon: "",
        },

        {
          type: "Car",

          total: "200",

          available: "270",

          occupied: "200",

          icon: "",
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-04-11T11:00:00",
              count: 100.0,
            },
            {
              node: "2022-05-11T12:00:00",
              count: 30.0,
            },
            {
              node: "2022-06-11T13:00:00",
              count: 77.0,
            },
            {
              node: "2022-07-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-08-11T15:00:00",
              count: 37.0,
            },
            {
              node: "2022-09-11T16:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 67.0,
            },
            // {
            //   node: "2022-11-11T18:00:00",
            //   count: 97.0,
            // },
            // {
            //   node: "2022-12-11T19:00:00",
            //   count: 17.0,
            // },
            // {
            //   node: "2023-01-11T21:00:00",
            //   count: 47.0,
            // },
            // {
            //   node: "2023-02-11T22:00:00",
            //   count: 27.0,
            // },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
          ],
        },
      },
      notifications: {
        events: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "lounge",
              id: "lounge-04",
              title: "Restaurant Is Operational Now",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "2nf Floor",
              parkingLot: "Cafeteria",
              img: heatMapIcons?.loungeEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75630205972699,
                lng: -73.8446825618667,
              },
            },
          ],
        },
        incidents: {
          totalCount: "10",
          list: [
            {
              category: "operations",
              subCategory: "lounge",
              id: "lounge-11",
              title: "Crowd Forming",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Capacity - 10 People | Wait Time - 30Min",
              parkingLot: "Gate - 5",
              img: heatMapIcons?.loungeIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75757582964839,
                lng: -73.84654713488888,
              },
            },
          ],
        },
        operationalAlerts: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "lounge",
              id: "lounge-16",
              title: "Restaurants Open",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Ground Floor",
              parkingLot: "Stall No 15",
              img: heatMapIcons?.loungeAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75579742480395,
                lng: -73.8456817967569,
              },
            },
          ],
        },
      },
      heatMaps: [
        {
          id: "12",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 2420,
            y: 2250,
          },
        },
        {
          id: "13",
          img: heatMapIcons?.heatMap11,
          width: "18px",
          location: {
            x: 1720,
            y: 890,
          },
        },
        {
          id: "14",
          img: heatMapIcons?.heatMap12,
          width: "30px",
          location: {
            x: 660,
            y: 1535,
          },
        },
        {
          id: "15",
          img: heatMapIcons?.heatMap13,
          width: "20px",
          location: {
            x: 880,
            y: 2480,
          },
        },
        {
          id: "16",
          img: heatMapIcons?.heatMapList,
          width: "120px",
          location: {
            x: -700,
            y: 100,
          },
        },
      ],
    },
    {
      type: "VendingMachine",
      totalSlots: "400",
      available: "300",
      occupied: "180",
      occupiedPercentage: "50",

      iconsInfo: [
        {
          type: "VIP",

          total: "100",

          available: "150",

          occupied: "100",

          icon: "",
        },

        {
          type: "Person Disabilities",

          total: "25",

          available: "100",

          occupied: "25",

          icon: "",
        },

        {
          type: "Electric Vehicle",

          total: "10",

          available: "150",

          occupied: "10",

          icon: "",
        },

        {
          type: "Car",

          total: "200",

          available: "270",

          occupied: "200",

          icon: "",
        },
      ],
      analytics: {
        day: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-10-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2022-10-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-10-11T18:00:00",
              count: 57.0,
            },
          ],
        },
        weekly: {
          analytics: [
            {
              node: "2022-04-11T11:00:00",
              count: 100.0,
            },
            {
              node: "2022-05-11T12:00:00",
              count: 30.0,
            },
            {
              node: "2022-06-11T13:00:00",
              count: 77.0,
            },
            {
              node: "2022-07-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-08-11T15:00:00",
              count: 37.0,
            },
            {
              node: "2022-09-11T16:00:00",
              count: 27.0,
            },
            {
              node: "2022-10-11T17:00:00",
              count: 67.0,
            },
            // {
            //   node: "2022-11-11T18:00:00",
            //   count: 97.0,
            // },
            // {
            //   node: "2022-12-11T19:00:00",
            //   count: 17.0,
            // },
            // {
            //   node: "2023-01-11T21:00:00",
            //   count: 47.0,
            // },
            // {
            //   node: "2023-02-11T22:00:00",
            //   count: 27.0,
            // },
          ],
        },
        monthly: {
          analytics: [
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2022-10-11T11:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T12:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2023-02-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2023-03-11T16:00:00",
              count: 17.0,
            },
            {
              node: "2023-04-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2023-05-11T18:00:00",
              count: 97.0,
            },
            {
              node: "2023-06-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-07-11T21:00:00",
              count: 47.0,
            },
          ],
        },
        yearly: {
          analytics: [
            {
              node: "2022-05-11T11:00:00",
              count: 17.0,
            },
            {
              node: "2022-06-11T12:00:00",
              count: 47.0,
            },
            {
              node: "2022-07-11T13:00:00",
              count: 57.0,
            },
            {
              node: "2022-08-11T14:00:00",
              count: 47.0,
            },
            {
              node: "2022-09-11T15:00:00",
              count: 87.0,
            },
            {
              node: "2022-10-11T16:00:00",
              count: 67.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
            {
              node: "2022-12-11T18:00:00",
              count: 57.0,
            },
            {
              node: "2023-01-11T19:00:00",
              count: 87.0,
            },
            {
              node: "2023-02-11T21:00:00",
              count: 47.0,
            },
            {
              node: "2023-03-11T22:00:00",
              count: 77.0,
            },
            {
              node: "2022-11-11T17:00:00",
              count: 27.0,
            },
          ],
        },
      },
      notifications: {
        events: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-05",
              title: "Restocking done",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "2nd Floor",
              parkingLot: "Cafeteria",
              img: heatMapIcons?.machineEventIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757565449429244,
                lng: -73.8448645115886,
              },
            },
          ],
        },
        incidents: {
          totalCount: "10",
          list: [
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-10",
              title: "Not Operational",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby - 2",
              parkingLot: "Vending Machine - 10",
              img: heatMapIcons?.entranceIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75454016146857,
                lng: -73.84902351001494,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-12",
              title: "Stock Level 30 %",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Vending Machine - 14",
              img: heatMapIcons?.machineIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75802821608067,
                lng: -73.84569981696167,
              },
            },
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-13",
              title: "High Temperature",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Vending Machine - 15",
              img: heatMapIcons?.machineIncidentIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.757790149512246,
                lng: -73.8452731152781,
              },
            },
          ],
        },
        operationalAlerts: {
          totalCount: "3",
          list: [
            {
              category: "operations",
              subCategory: "vendingMachine",
              id: "vendingMachine-33",
              title: "Not Operational",
              timeStamp: "12-15-2022 | 09:00 AM",
              //vehicleId: "#34567C15A",
              spot: "Lobby",
              parkingLot: "Vending Machine - 16",
              img: heatMapIcons?.machineAlertIcon,
              width: "30px",
              video: "",
              location: {
                lat: 40.75795973198927,
                lng: -73.84613167763173,
              },
            },
          ],
        },
      },
      heatMaps: [
        {
          id: "12",
          img: heatMapIcons?.heatMap10,
          width: "30px",
          location: {
            x: 2420,
            y: 2250,
          },
        },
        {
          id: "13",
          img: heatMapIcons?.heatMap11,
          width: "18px",
          location: {
            x: 1720,
            y: 890,
          },
        },
        {
          id: "14",
          img: heatMapIcons?.heatMap12,
          width: "30px",
          location: {
            x: 660,
            y: 1535,
          },
        },
        {
          id: "15",
          img: heatMapIcons?.heatMap13,
          width: "20px",
          location: {
            x: 880,
            y: 2480,
          },
        },
        {
          id: "16",
          img: heatMapIcons?.heatMapList,
          width: "120px",
          location: {
            x: -700,
            y: 100,
          },
        },
      ],
    },
  ],
};
export default operationsData;
