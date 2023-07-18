import React, { useEffect, useState, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material";
import SvgIcon from "@material-ui/core/SvgIcon";
import NativeSelect from "@mui/material/NativeSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import videoSelectIcon from "../../assets/videoSelectIcon.svg";
import useStyles from "./styles.js";
const INF_Select = (props) => {
  const {
    customSelect,
    tableSelect,
    selectOptions,
    customSelectVideo,
    customSvgClass,
    presentSelected,
    presentText,
    customSelectVideoInactive,
  } = useStyles();
  const {
    selectList,
    handleSelect,
    customWidth,
    customHeight,
    variant,
    selectLabel,
    disabled,
    graphName,
    pageName,
    tabIndexParkingTabs,
    presetPanelActive,
    selectIndex,
  } = props;

  const [selectedValue, setselectedValue] = useState(
    pageName !== "birdsEyeView" && selectList && selectList[1]?.value
  );

  useEffect(() => {
    if (selectList?.length > 0) {
      if (pageName === "birdsEyeView") {
        const selectedData = selectList?.filter(
          (item) => item.id === selectIndex
        );

        setselectedValue(
          selectedData?.length === 0
            ? selectList && selectList[0]?.value
            : selectedData && selectedData[0]?.value
        );
      }
    }
  }, [selectList, selectIndex]);

  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e) => {
    setselectedValue(e.target.value);

    if (pageName === "birdsEyeView") {
      const selectedValue = selectList?.find(
        (item) => item?.value === e.target.value
      );
      handleSelect(e.target.value, graphName, selectedValue?.id);
    } else {
      let newSelectedIndex = 0;
      if (selectList && selectList.length > 0) {
        for (let i = 0; i <= selectList.length; i++) {
          if (selectList[i]?.value === e?.target?.value) {
            newSelectedIndex = i;
          }
        }
      }
      handleSelect(e.target.value, graphName, newSelectedIndex);
    }
  };

  useEffect(() => {
    if (selectList && selectList[0] && selectList[0].value !== "Day") {
      setselectedValue(selectList && selectList[0]?.value);
    }
  }, []);

  function CustomSvgIcon(props) {
    return (
      <div className={customSvgClass}>
        <svg
          {...props}
          width="30"
          height="30"
          viewBox="0 0 103 103"
          // fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_260_1650)">
            <g filter="url(#filter1_b_260_1650)">
              <rect
                width="83"
                height="83"
                rx="41.5"
                transform="matrix(-1 0 0 1 92 9)"
                fill="#FF5910"
              />
              <rect
                x="1.5"
                y="-1.5"
                width="86"
                height="86"
                rx="43"
                transform="matrix(-1 0 0 1 95 9)"
                stroke="white"
                strokeWidth="3"
              />
            </g>
          </g>
          <path
            d="M72.1757 50.7806H65.2722V48.4794C65.2722 47.2091 64.2413 46.1782 62.971 46.1782H56.0675C54.7973 46.1782 53.7664 47.2091 53.7664 48.4794V50.7806H28.4535C27.1832 50.7806 26.1523 51.8115 26.1523 53.0817C26.1523 54.352 27.1832 55.3829 28.4535 55.3829H53.7664V57.6841C53.7664 58.9543 54.7973 59.9852 56.0675 59.9852H62.971C64.2413 59.9852 65.2722 58.9543 65.2722 57.6841V55.3829H72.1757C73.446 55.3829 74.4769 54.352 74.4769 53.0817C74.4769 51.8115 73.446 50.7806 72.1757 50.7806Z"
            fill="white"
          />
          <path
            d="M28.4535 38.1246H36.5076V40.4258C36.5076 41.696 37.5385 42.7269 38.8088 42.7269H45.7123C46.9825 42.7269 48.0134 41.696 48.0134 40.4258V38.1246H72.1757C73.446 38.1246 74.4769 37.0937 74.4769 35.8234C74.4769 34.5532 73.446 33.5223 72.1757 33.5223H48.0134V31.2211C48.0134 29.9508 46.9825 28.9199 45.7123 28.9199H38.8088C37.5385 28.9199 36.5076 29.9508 36.5076 31.2211V33.5223H28.4535C27.1832 33.5223 26.1523 34.5532 26.1523 35.8234C26.1523 37.0937 27.1832 38.1246 28.4535 38.1246Z"
            fill="white"
          />
          <path
            d="M72.1757 68.0398H48.0134V65.7387C48.0134 64.4684 46.9825 63.4375 45.7123 63.4375H38.8088C37.5385 63.4375 36.5076 64.4684 36.5076 65.7387V68.0398H28.4535C27.1832 68.0398 26.1523 69.0707 26.1523 70.341C26.1523 71.6113 27.1832 72.6422 28.4535 72.6422H36.5076V74.9433C36.5076 76.2136 37.5385 77.2445 38.8088 77.2445H45.7123C46.9825 77.2445 48.0134 76.2136 48.0134 74.9433V72.6422H72.1757C73.446 72.6422 74.4769 71.6113 74.4769 70.341C74.4769 69.0707 73.446 68.0398 72.1757 68.0398Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_260_1650"
              x="0"
              y="0"
              width="103"
              height="103"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.89 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_260_1650"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_260_1650"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_260_1650"
              x="-5"
              y="-5"
              width="111"
              height="111"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_260_1650"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_260_1650"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <>
      {variant === "standard" ? (
        <div className={tableSelect}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {selectLabel}
            </InputLabel>
            <Select
              name="select"
              value={selectedValue}
              onChange={handleChange}
              disabled={disabled}
            >
              {selectList &&
                selectList?.length > 0 &&
                selectList?.map((item, index) => (
                  <MenuItem
                    className={selectOptions}
                    value={item.label}
                    key={index}
                  >
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      ) : pageName !== "security" && pageName !== "birdsEyeView" ? (
        <ThemeProvider
          theme={createTheme({
            palette: { primary: { main: "#2B2B2B" } },

            components: {
              MuiPaper: {
                styleOverrides: {
                  root: {
                    top:
                      pageName === "analytics"
                        ? "54px !important"
                        : "46px !important",
                    backgroundColor: "#000000",
                  },
                },
              },
              MuiMenuItem: {
                styleOverrides: {
                  root: {
                    color: "white",
                    backgroundColor: "#000000",
                    // fontSize: "10px",

                    // "&.MuiMenuItem-root": {
                    //   margin: "5px",
                    // },

                    "&.Mui-selected": {
                      "&.MuiMenuItem-root": {
                        backgroundColor: "#FF5910",
                      },

                      // "&.Mui-focusVisible": { background: "orange" },
                    },
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  },
                },
              },
            },
          })}
        >
          <FormControl
            className={customSelect}
            style={{ width: customWidth, height: customHeight }}
          >
            <Select
              name="select"
              value={selectedValue}
              onChange={handleChange}
              disabled={disabled}
              displayEmpty
              renderValue={() =>
                selectedValue
                  ? pageName === "security" || pageName === "birdsEyeView"
                    ? "PRESET - " + selectedValue
                    : selectedValue
                  : ""
              }
              sx={{
                height: customHeight,
                width: customWidth,
                cursor: "pointer",
              }}
              // IconComponent={pageName === "security" ? CustomSvgIcon : ""}
            >
              {selectList &&
                selectList?.length > 0 &&
                selectList?.map((item, index) => (
                  <MenuItem key={index} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      ) : (
        <ThemeProvider
          theme={createTheme({
            palette: { primary: { main: "#2B2B2B" } },

            components: {
              MuiPaper: {
                styleOverrides: {
                  root: {
                    top: "70px !important",
                    backgroundColor: "#000000",
                  },
                },
              },
              MuiMenuItem: {
                styleOverrides: {
                  root: {
                    color: "white",
                    backgroundColor: "#000000",
                    fontSize: "12px !important",
                    fontWeight: 500,
                    fontFamily: `'Poppins', sans-serif !important`,

                    "&.MuiMenuItem-root": {
                      margin: "5px",
                    },

                    "&.Mui-selected": {
                      "&.MuiMenuItem-root": {
                        backgroundColor: "#FF5910",
                      },

                      // "&.Mui-focusVisible": { background: "orange" },
                    },
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  },
                },
              },
            },
          })}
        >
          <FormControl
            className={
              !presetPanelActive ? customSelectVideo : customSelectVideoInactive
            }
            style={{
              width: customWidth,
              height: customHeight,
            }}
          >
            <Select
              name="select"
              value={selectedValue}
              onChange={handleChange}
              disabled={disabled}
              displayEmpty
              renderValue={() =>
                selectedValue ? (
                  pageName === "security" || pageName === "birdsEyeView" ? (
                    <div
                      style={{
                        display: "flex",
                        paddingRight: "15px",
                        paddingLeft: "15px",
                      }}
                    >
                      {" "}
                      <p className={presentText}>PRESET -</p>{" "}
                      <p className={presentSelected}>{selectedValue}</p>
                    </div>
                  ) : (
                    selectedValue
                  )
                ) : (
                  ""
                )
              }
              sx={{
                color: "#FFFFFF",
                height: customHeight,
                // width: "fit-content",
                width: customWidth,
                cursor: "pointer",
              }}
              IconComponent={CustomSvgIcon}
            >
              {selectList &&
                selectList?.map((item, index) => (
                  <MenuItem key={index} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      )}
    </>
  );
};
export default INF_Select;
