import heatMapIcons from "assets/heatMapIcons";
const notifications = {
  notifications: {
    events: {
      totalCount: "23",
      list: [
        {
          category: "parking",
          id: "evt-01",
          title: "Vehicle Parked",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "A1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.75636780531853,
            lng: -73.84443159837639,
          },
        },
        {
          category: "parking",
          id: "evt-02",
          title: "Vehicle Entered",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "A1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.75614683681981,
            lng: -73.84506520790768,
          },
        },
        {
          category: "parking",
          id: "evt-03",
          title: "Vehicle Parked",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "B1",
          parkingLot: "Parking Lot - B",
          img: "",
          video: "",
          location: {
            lat: 40.7586943218119,
            lng: -73.84695240950991,
          },
        },
        {
          category: "parking",
          id: "evt-04",
          title: "Vehicle Entered",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "A1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.7581222590056,
            lng: -73.84767627474734,
          },
        },
        {
          category: "parking",
          id: "evt-05",
          title: "Vehicle Entered",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#24567C15A",
          spot: "C2",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.758220602839714,
            lng: -73.84743857009768,
          },
        },
        {
          category: "parking",
          id: "evt-06",
          title: "Vehicle Parked",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#24567C15A",
          spot: "C2",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.75649703006932,
            lng: -73.84762906841908,
          },
        },
        {
          category: "parking",
          id: "evt-07",
          title: "Vehicle Exited",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#24567C15A",
          spot: "A2",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.75635810900475,
            lng: -73.84786553392162,
          },
        },
        {
          category: "parking",
          id: "evt-08",
          title: "Occupancy 50%",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#24567C15A",
          spot: "A2",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.754506831981736,
            lng: -73.84925801909061,
          },
        },
        {
          category: "parking",
          id: "evt-09",
          title: "Vehicle Entered",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#24567C15A",
          spot: "E2",
          parkingLot: "Parking Lot - E",
          img: "",
          video: "",
          location: {
            lat: 40.75588158821897,
            lng: -73.84422133300635,
          },
        },
        {
          category: "parking",
          id: "evt-10",
          title: "Accident Detected",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#14567C15A",
          spot: "A3",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.75756929325999,
            lng: -73.84747819815442,
          },
        },
        {
          category: "parking",
          id: "evt-11",
          title: "Bus Entered",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#14567C15A",
          spot: "Bus Lot",
          parkingLot: "Bus Lot - B1",
          img: "",
          video: "",
          location: {
            lat: 40.75740469829044,
            lng: -73.8480106885973,
          },
        },
        {
          category: "parking",
          id: "evt-12",
          title: "Bus Exited",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#14567C15A",
          spot: "Bus Lot",
          parkingLot: "Bus Lot -  B2",
          img: "",
          video: "",
          location: {
            lat: 40.75664488754454,
            lng: -73.84801024923001,
          },
        },

        {
          category: "security",

          id: "evt-16",

          title: "Access Denied",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#34567C15A",

          spot: "A1",

          parkingLot: "Parking Lot - A",

          img: "",

          video: "",

          location: {
            lat: 40.75636780531853,

            lng: -73.84443159837639,
          },
        },

        {
          category: "security",

          id: "evt-17",

          title: "License Plate Number Not Found",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#34567C15A",

          spot: "A1",

          parkingLot: "Parking Lot - A",

          img: "",

          video: "",

          location: {
            lat: 40.75636780531853,

            lng: -73.84443159837639,
          },
        },

        {
          category: "security",

          id: "evt-18",

          title: "Maintenance Completed",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#34567C15A",

          spot: "D1",

          parkingLot: "Parking Lot - D",

          img: "",

          video: "",

          location: {
            lat: 40.75614683681981,

            lng: -73.84506520790768,
          },
        },

        {
          category: "security",

          id: "evt-19",

          title: "Maintenance Inprogress",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#24567C15A",

          spot: "E1",

          parkingLot: "Parking Lot - E",

          img: "",

          video: "",

          location: {
            lat: 40.7586943218119,

            lng: -73.84695240950991,
          },
        },

        {
          category: "security",

          id: "evt-20",

          title: "License Plate Number Not Found",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#24567C15A",

          spot: "F2",

          parkingLot: "Parking Lot - F",

          img: "",

          video: "",

          location: {
            lat: 40.75613573461027,

            lng: -73.84741526816791,
          },
        },

        {
          category: "foodConcessions",
          id: "evt-24",
          title: "Low Inventory Level",
          restauratName: "Pat LaFrieda's",
          inventoryLevel: "10%",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.758262252016614,
            lng: -73.84503880243874,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-25",
          title: "Order Delayed",
          restauratName: "Pat LaFrieda's",
          orderNumber: "#123",
          delayedTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.75828389919421,
            lng: -73.84535173355135,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-26",
          title: "Pending Order",
          restauratName: "Pat LaFrieda's",
          pendingOrders: "05",
          pendingTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.75763747326478,
            lng: -73.84654886530086,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-27",
          title: "Crowd Forming",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Parking Lot - B1",

          img: "",

          video: "",

          location: {
            lat: 40.75757469615152,

            lng: -73.8450628377235,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-28",
          title: "Unauthorized Access",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Main entrance door",

          img: "",

          video: "",

          location: {
            lat: 40.75763316274552,

            lng: -73.84484348051029,
          },
        },
        {
          category: "outdoorAmbience",
          id: "evt-29",
          title: "Moderate AQI",
          subTitle1: "AQI- 100",
          subTitle2: "Park chop hill Bus parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.75572739114349,
            lng: -73.84642543119146,
          },
        },
        {
          category: "outdoorAmbience",
          id: "evt-30",
          title: "Good Signal Strength",
          subTitle1: "Wifi#16",
          subTitle2: "Parking Lot-C",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.756212594470774,
            lng: -73.84937992578129,
          },
        },
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
          spot: "Gate - 2 | Lobby",
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

        {
          category: "foodConcessions",
          id: "evt-31",
          title: "Restaurant Is Under Maintenance",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",
          img: "",
          video: "",
          location: {
            lat: 40.758262252016614,
            lng: -73.84503880243874,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-32",
          title: "Restaurant Is Under Maintenance",
          restauratName: "The Porsche Club",
          timeStamp: "12-15-2022 | 09:00 AM",
          img: "",
          video: "",
          location: {
            lat: 40.75828389919421,
            lng: -73.84535173355135,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-33",
          title: "Restroom Cleaning Inprogress",
          restauratName: "The Porsche Club",
          timeStamp: "12-15-2022 | 09:00 AM",
          img: "",
          video: "",
          location: {
            lat: 40.757129089463184,
            lng: -73.84687907688999,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-34",
          title: "Entrance Gate Opened",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "Bay - B1",
          parkingLot: "Ground Floor",
          img: "",
          video: "",
          location: {
            lat: 40.75757469615152,

            lng: -73.8450628377235,
          },
        },
        {
          category: "foodConcessions",
          id: "evt-35",
          title: "Restaurant Is Operational Now",
          restauratName: "The Porsche Club",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "2nd Floor",
          parkingLot: "Cafeteria",
          img: "",
          video: "",
          location: {
            lat: 40.75763316274552,
            lng: -73.84484348051029,
          },
        },
      ],
    },
    incidents: {
      totalCount: "25",
      list: [
        {
          category: "parking",
          id: "ict-01",
          title: "Wrong Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "A1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.75828536114887,
            lng: -73.84695417342891,
          },
        },
        {
          category: "parking",
          id: "ict-02",
          title: "Double Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "A1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.758460764776814,
            lng: -73.84657950595624,
          },
        },
        {
          category: "parking",
          id: "ict-03",
          title: "Reverse Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "A1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.756309118139086,
            lng: -73.84875469078845,
          },
        },
        {
          category: "parking",
          id: "ict-04",
          title: "Double Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "B1",
          parkingLot: "Parking Lot - B",
          img: "",
          video: "",
          location: {
            lat: 40.75710978495599,
            lng: -73.8489565128386,
          },
        },
        {
          category: "parking",
          id: "ict-05",
          title: "Accident Detected",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "B1",
          parkingLot: "Parking Lot - B",
          img: "",
          video: "",
          location: {
            lat: 40.75668202276822,
            lng: -73.8496273805259,
          },
        },
        {
          category: "parking",
          id: "ict-06",
          title: "Close Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "B1",
          parkingLot: "Parking Lot - B",
          img: "",
          video: "",
          location: {
            lat: 40.755735756887695,
            lng: -73.84898421515462,
          },
        },
        {
          category: "parking",
          id: "ict-07",
          title: "Reverse Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.75387933244808,
            lng: -73.84981835804898,
          },
        },
        {
          category: "parking",
          id: "ict-08",
          title: "Wrong Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.757944725202286,
            lng: -73.84774250035763,
          },
        },
        {
          category: "parking",
          id: "ict-09",
          title: "Wrong Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.754888326876774,
            lng: -73.84857614587526,
          },
        },
        {
          category: "parking",
          id: "ict-10",
          title: "Double Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "D1",
          parkingLot: "Parking Lot - D",
          img: "",
          video: "",
          location: {
            lat: 40.7563347135207,
            lng: -73.85012508279607,
          },
        },
        {
          category: "parking",
          id: "ict-11",
          title: "Close Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#34567C15A",
          spot: "D1",
          parkingLot: "Parking Lot - D",
          img: "",
          video: "",
          location: {
            lat: 40.75665215356642,
            lng: -73.84836111476568,
          },
        },
        {
          category: "security",

          id: "ict-12",

          title: "Unauthorized Access",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Main entrance door",

          img: "",

          video: "",

          location: {
            lat: 40.7581222590056,

            lng: -73.84767627474734,
          },
        },

        {
          category: "security",

          id: "ict-13",

          title: "Tailgating",

          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "A1",

          parkingLot: "Parking Lot - A",

          img: "",

          video: "",

          location: {
            lat: 40.75776025632783,

            lng: -73.84616127801175,
          },
        },

        {
          category: "security",

          id: "ict-14",

          title: "Tailgating",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Main entrance door",

          img: "",

          video: "",

          location: {
            lat: 40.75770315020442,

            lng: -73.845689103859,
          },
        },

        {
          category: "security",

          id: "ict-15",

          title: "Crowd Forming",

          timeStamp: "12-15-2022 | 09:00 AM",

          //vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Parking Lot - B",

          img: "",

          video: "",

          location: {
            lat: 40.75754004638837,

            lng: -73.84511916302989,
          },
        },

        {
          category: "security",

          id: "ict-16",

          title: "Accident Detected",

          timeStamp: "12-15-2022 | 09:00 AM",

          vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Parking Lot - A",

          img: "",

          video: "",

          location: {
            lat: 40.756925850947106,

            lng: -73.8467737930021,
          },
        },

        {
          category: "security",

          id: "ict-17",

          title: "Crowd Forming",

          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B2",

          parkingLot: "Parking Lot - B",

          img: "",

          video: "",

          location: {
            lat: 40.756812081841524,

            lng: -73.84708102308713,
          },
        },

        {
          category: "foodConcessions",
          id: "ict-26",
          title: "Low Inventory Level",
          restauratName: "Pat LaFrieda's",
          inventoryLevel: "10%",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.756996278330654,
            lng: -73.84445184415326,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-27",
          title: "Order Delayed",
          restauratName: "Pat LaFrieda's",
          orderNumber: "#123",
          delayedTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-28",
          title: "Pending Order",
          restauratName: "Pat LaFrieda's",
          pendingOrders: "05",
          pendingTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-29",
          title: "Crowd Forming",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Parking Lot - B1",

          img: "",

          video: "",

          location: {
            lat: 40.756707363728836,

            lng: -73.84806674636111,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-30",
          title: "Unauthorized Access",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Main entrance door",

          img: "",

          video: "",

          location: {
            lat: 40.75675206167507,

            lng: -73.84716318457585,
          },
        },
        {
          category: "outdoorAmbience",
          id: "ict-31",
          title: "Hazardous AQI",
          subTitle1: "AQI-200",
          subTitle2: "Park chop hill Bus parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.75756638098499,
            lng: -73.84735433852819,
          },
        },
        {
          category: "outdoorAmbience",
          id: "ict-32",
          title: "High Electricity Consumption",
          subTitle1: "LP#12",
          subTitle2: "Parking Lot A",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.75853003429391,
            lng: -73.84705709631649,
          },
        },
        {
          category: "outdoorAmbience",
          id: "ict-33",
          title: "Low Bandwidth",
          subTitle1: "Wifi#32",
          subTitle2: "Left Field",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "outdoorAmbience",
          id: "ict-34",
          title: "Weak Signal Strength",
          subTitle1: "Wifi#42",
          subTitle2: "Stengel",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.7571245686096,
            lng: -73.84702381453208,
          },
        },
        {
          category: "outdoorAmbience",
          id: "ict-35",
          title: "High Electricity Consumption",
          subTitle1: "Wifi#42",
          subTitle2: "Left Field",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.75617286869527,
            lng: -73.84575078627893,
          },
        },

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

        {
          category: "foodConcessions",
          id: "ict-36",
          title: "Low Inventory Level",
          restauratName: "Pat LaFrieda's",
          inventoryLevel: "10%",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.756996278330654,
            lng: -73.84445184415326,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-37",
          title: "Order Delayed",
          restauratName: "Pat LaFrieda's",
          orderNumber: "#123",
          delayedTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-38",
          title: "Pending Order",
          restauratName: "Pat LaFrieda's",
          pendingOrders: "05",
          pendingTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-39",
          title: "Crowd Forming",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "Restaurant Entrance",
          img: "",
          video: "",
          location: {
            lat: 40.756707363728836,

            lng: -73.84806674636111,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-40",
          title: "Unauthorized Access",
          restauratName: "Shake Shack Hamburgers",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "Kitchen",
          img: "",
          video: "",
          location: {
            lat: 40.75675206167507,

            lng: -73.84716318457585,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-41",
          title: "Restaurant Closed",
          restauratName: "The Porsche Club",
          timeStamp: "12-15-2022 | 09:00 AM",
          img: "",
          video: "",
          location: {
            lat: 40.757635398864174,
            lng: -73.84664658572008,
          },
        },
        {
          category: "foodConcessions",
          id: "ict-42",
          title: "Crowd Forming",
          restauratName: "The Porsche Club",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "Restaurant Entrance",
          img: "",
          video: "",
          location: {
            lat: 40.757129089463184,
            lng: -73.84687907688999,
          },
        },
      ],
    },
    operationalAlerts: {
      totalCount: "20",
      list: [
        {
          category: "parking",
          id: "opr-01",
          title: "No Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          //vehicleId: "#54567C15A",
          spot: "F1",
          parkingLot: "Parking Lot - F",
          img: "",
          video: "",
          location: {
            lat: 40.755301325633475,
            lng: -73.84856925263351,
          },
        },
        {
          category: "parking",
          id: "opr-02",
          title: "No Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          //vehicleId: "#54567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.755698337853495,
            lng: -73.84501569681177,
          },
        },
        {
          category: "parking",
          id: "opr-03",
          title: "Accident Detected",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#54567C15A",
          spot: "B1",
          parkingLot: "Parking Lot - B",
          img: "",
          video: "",
          location: {
            lat: 40.755254266984274,
            lng: -73.84539461420266,
          },
        },
        {
          category: "parking",
          id: "opr-04",
          title: "Close Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#54567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.75459034705933,
            lng: -73.84766516701225,
          },
        },

        {
          category: "parking",
          id: "opr-07",
          title: "No Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          //vehicleId: "#54567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - C",
          img: "",
          video: "",
          location: {
            lat: 40.75599140563482,
            lng: -73.84799644562368,
          },
        },

        {
          category: "security",
          id: "opr-09",
          title: "Fire Alert",
          timeStamp: "12-15-2022 | 09:00 AM",
          //vehicleId: "#54567C15A",
          spot: "F1",
          parkingLot: "Parking Lot - F",
          img: "",
          video: "",
          location: {
            lat: 40.75649703006932,
            lng: -73.84762906841908,
          },
        },

        {
          category: "security",
          id: "opr-11",
          title: "Camera Not Functional",
          timeStamp: "12-15-2022 | 09:00 AM",
          // vehicleId: "#54567C15A",
          spot: "G1",
          parkingLot: "Parking Lot - G",
          img: "",
          video: "",
          location: {
            lat: 40.75658660155622,
            lng: -73.8446681009993,
          },
        },
        {
          category: "security",
          id: "opr-12",
          title: "Elevators Not Functional",
          timeStamp: "12-15-2022 | 09:00 AM",
          //vehicleId: "#54567C15A",
          spot: "Lobby",
          parkingLot: "2nd floor",
          img: "",
          video: "",
          location: {
            lat: 40.756154810687136,
            lng: -73.84683235855547,
          },
        },
        {
          category: "security",
          id: "opr-13",
          title: "Re-entry Gate Closed",
          timeStamp: "12-15-2022 | 09:00 AM",
          //vehicleId: "#54567C15A",
          spot: "D1",
          parkingLot: "Parking Lot - D",
          img: "",
          video: "",
          location: {
            lat: 40.75635810900475,
            lng: -73.84786553392162,
          },
        },

        {
          category: "security",
          id: "opr-18",
          title: "Double Parking",
          timeStamp: "12-15-2022 | 09:00 AM",
          vehicleId: "#54567C15A",
          spot: "C1",
          parkingLot: "Parking Lot - A",
          img: "",
          video: "",
          location: {
            lat: 40.75629467396769,
            lng: -73.84390996414311,
          },
        },

        {
          category: "foodConcessions",
          id: "opr-20",
          title: "Low Inventory Level",
          restauratName: "Pat LaFrieda's",
          inventoryLevel: "10%",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.75756638098499,
            lng: -73.84735433852819,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-21",
          title: "Order Delayed",
          restauratName: "Pat LaFrieda's",
          orderNumber: "#123",
          delayedTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-22",
          title: "Pending Order",
          restauratName: "Pat LaFrieda's",
          pendingOrders: "05",
          pendingTime: "15 mins",
          timeStamp: "12-15-2022 | 09:00 AM",

          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-23",
          title: "Crowd Forming",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Parking Lot - B1",

          img: "",

          video: "",

          location: {
            lat: 40.756707363728836,

            lng: -73.84806674636111,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-24",
          title: "Unauthorized Access",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",

          // vehicleId: "#34567C15A",

          spot: "B1",

          parkingLot: "Main entrance door",

          img: "",

          video: "",

          location: {
            lat: 40.75675206167507,

            lng: -73.84716318457585,
          },
        },
        {
          category: "outdoorAmbience",
          id: "opr-25",
          title: "Not Operational",
          subTitle1: "Wifi #14",
          subTitle2: "Parking Slot B",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.756903977127216,
            lng: -73.84797234538736,
          },
        },
        {
          category: "outdoorAmbience",
          id: "opr-26",
          title: "Not Operational",
          subTitle1: "LP#15",
          subTitle2: "Lobby",
          timeStamp: "12-15-2022 | 09:00 AM",
          airQuality: "",
          voc: "",
          co2: "",
          pm2: "",
          pm10: "",
          img: "",
          video: "",
          location: {
            lat: 40.756437581297455,
            lng: -73.8469988531938,
          },
        },

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

        {
          category: "foodConcessions",
          id: "opr-27",
          title: "Operational Now",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",
          img: "",
          video: "",
          location: {
            lat: 40.75756638098499,
            lng: -73.84735433852819,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-28",
          title: "Not Operational",
          restauratName: "Pat LaFrieda's",
          timeStamp: "12-15-2022 | 09:00 AM",
          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-29",
          title: "Smoke Detected",
          restauratName: "Shake Shack Hamburgers",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "Restaurant Exit Gate",
          img: "",
          video: "",
          location: {
            lat: 40.7571482748172,
            lng: -73.84681583272432,
          },
        },
        {
          category: "foodConcessions",
          id: "opr-30",
          title: "Camera Not Functional",
          restauratName: "Shake Shack Hamburgers",
          timeStamp: "12-15-2022 | 09:00 AM",
          spot: "Restaurant Entrance",
          img: "",
          video: "",
          location: {
            lat: 40.75739954092732,
            lng: -73.84686247037784,
          },
        },
      ],
    },
  },
};
export default notifications;
