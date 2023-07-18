import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Menu, MenuItem, IconButton } from "@mui/material";
import HomeImg from "../../assets/menu/Home.svg";
import ParkingImg from "../../assets/menu/Parking.svg";
import SecurityImg from "../../assets/menu/Security.svg";
import EnergyImg from "../../assets/menu/Energy.svg";
import OutdoorImg from "../../assets/menu/Outdoor.svg";
import AnalyticsImg from "../../assets/menu/Analytics.svg";
import FanexperienceImg from "../../assets/menu/Fanexperience.svg";
import DigitalTwinImg from "../../assets/menu/DigitalTwin.svg";
import FoodImg from "../../assets/menu/Food.svg";
import SettingsImg from "../../assets/menu/Settings.svg";
import OperationImg from "../../assets/menu/Operations.svg";
import ProfileImg from "../../assets/menu/Profile.svg";
import useStyles from "./styles";
import { setUserLogin } from "redux/actions/loginActions";

const MenuList = (props) => {
  const {
    menuBg,
    newyorkMets,
    smartCommand,
    menuSection,
    menuIconSection,
    menuContainer,
    newyorkContainer,
    menuTitle,
    innerMenuSection,
    innerMenuSectionActive,
    menuTitleActive,
    innerMenuSectionDefault,
  } = useStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuIcon = [
    {
      image: HomeImg,
      content: "Home",
      id: "dashboard",
    },
    {
      image: ParkingImg,
      content: "Parking",
      id: "parking",
    },
    {
      image: SecurityImg,
      content: "Security",
      id: "security",
    },
    // {
    //   image: EnergyImg,
    //   content: "Energy MGMT",
    //   id: "",
    // },
    {
      image: OutdoorImg,
      content: "Outdoors & Ambience",
      id: "outdoors",
    },
    {
      image: AnalyticsImg,
      content: "Analytics",
      id: "analytics",
    },
    // {
    //   image: FanexperienceImg,
    //   content: "FAN EXP",
    //   id: "",
    // },
    {
      image: DigitalTwinImg,
      content: "Digital Twin",
      id: "",
    },
    {
      image: FoodImg,
      content: "Food & Concessions",
      id: "foodconcessions",
    },
    {
      image: SettingsImg,
      content: "Operations & Infra",
      id: "operations",
    },
    {
      image: OperationImg,
      content: "Birds eye VIEW",
      id: "birdsview",
    },
    {
      image: ProfileImg,
      content: "Profile",
      id: "profile",
    },
  ];

  let pathName;

  useEffect(() => {
    if (window?.location?.pathname) {
      pathName = window?.location?.pathname;

      switch (pathName) {
        case "/dashboard":
          setActivePage(menuIcon ? menuIcon[0]?.id : null);
          break;
        case "/parking":
          setActivePage(menuIcon ? menuIcon[1]?.id : null);
          break;
        case "/video/parking":
          setActivePage(menuIcon ? menuIcon[1]?.id : null);
          break;
        case "/security":
          setActivePage(menuIcon ? menuIcon[2]?.id : null);
          break;
        case "/video/security":
          setActivePage(menuIcon ? menuIcon[2]?.id : null);
          break;
        case "/outdoors":
          setActivePage(menuIcon ? menuIcon[3]?.id : null);
          break;
        case "/video/outdoors":
          setActivePage(menuIcon ? menuIcon[3]?.id : null);
          break;
        case "/analytics":
          setActivePage(menuIcon ? menuIcon[4]?.id : null);
          break;
        case "/foodconcessions":
          setActivePage(menuIcon ? menuIcon[6]?.id : null);
          break;
        case "/video/foodconcessions":
          setActivePage(menuIcon ? menuIcon[6]?.id : null);
          break;
        case "/operations":
          setActivePage(menuIcon ? menuIcon[7]?.id : null);
          break;
        case "/video/operations":
          setActivePage(menuIcon ? menuIcon[7]?.id : null);
          break;
        case "/birdsview":
          setActivePage(menuIcon ? menuIcon[8]?.id : null);
          break;
        case "/profile":
          setActivePage(menuIcon ? menuIcon[9]?.id : null);
          break;

        default:
          break;
      }
    }
  }, []);

  const handleClick = (event, id) => {
    if (activePage === id || id === "") {
      props.selectedSamePage(true);
    } else if (id === "dashboard" || id === "") {
      navigate("/dashboard");
    } else if (id === "parking") {
      navigate("/parking", { state: id });
    } else if (id === "security") {
      navigate("/security", { state: id });
    } else if (id === "analytics") {
      navigate("/analytics", { state: id });
    } else if (id === "operations") {
      navigate("/operations", { state: id });
    } else if (id === "outdoors") {
      navigate("/outdoors", { state: id });
    } else if (id === "foodconcessions") {
      navigate("/foodconcessions", { state: id });
    } else if (id === "birdsview") {
      navigate("/birdsview", { state: id });
    } else if (id === "profile") {
      navigate("/profile", { state: id });
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.clear();
  //   dispatch(setUserLogin({}));
  //   navigate("/login");
  // };

  return (
    <>
      <Grid container className={menuBg}>
        <Grid item xs={12} className={newyorkContainer}>
          <div>
            <div className={newyorkMets}>NEW YORK METS</div>
            <div className={smartCommand}>SMART COMMAND CONTROL CENTER_</div>
          </div>
        </Grid>
        <Grid item xs={12} className={menuContainer}>
          <div>
            <div className={menuSection}>
              {menuIcon &&
                menuIcon.length > 0 &&
                menuIcon.map((image, index) => {
                  return (
                    <div className={innerMenuSection} key={index}>
                      <p className={`${menuIconSection}`}>
                        <img
                          src={image.image}
                          className={
                            activePage === image.id
                              ? innerMenuSectionActive
                              : innerMenuSectionDefault
                          }
                          onClick={(event) => handleClick(event, image.id)}
                        />
                      </p>
                      {activePage === image.id ? (
                        <p className={menuTitleActive}>{image.content}</p>
                      ) : (
                        <p className={`${menuTitle} show-text`}>
                          {image.content}
                        </p>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </Grid>
        {/* <Menu
          anchorEl={anchorEl}
          id="dots-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          className="CustomMenu"
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: "#000000",
              color: "#ffffff",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              border: "1px solid #FFFFFF",
              mt: 1.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "#000000",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
                borderLeft: "1px solid #ffffff",
                borderTop: "1px solid #ffffff",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
        </Menu> */}
      </Grid>
    </>
  );
};

export default MenuList;
