import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tooltip from "elements/Tooltip";
import EyeOff from "../../assets/Eye-Off.svg";
import OpenEyeIcon from "../../assets/openEyeIcon.svg";
import FullScreen from "../../assets/Fullscreen-icon.svg";
import ExitFullScreen from "../../assets/minimize-screen.svg";
import profileDp from "../../assets/profile-dp.svg";
import Header from "elements/Header";
import MenuBar from "components/MenuBar";
import Button from "@mui/material/Button";
import { setUserLogin } from "redux/actions/loginActions";
import useStyles from "./styles";

const Profile = () => {
  const {
    loginBg,
    innerloginBg,
    mobileIconImg,
    dashboardMenu,
    mobileMenuSection,
    bottomBlackline,
    dashboardSection,
    loginFieldBox,
    profileHeader,
    profileDisplay,
    profileTitleSection,
    profileTitle,
    profileButton,
    userName,
    userEmail,
    userPassword,
    userPermission,
    innerUserPermission,
    profileSection,
    eyeOff,
    profileFirstColumn,
    passwordStar,
    userEmpty,
    userPhone,
    profileRoleStyle,
  } = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const userData = useSelector((state) => state?.login?.loginData);

  const [isFullScreen, setIsFullScreen] = useState(
    document.fullscreenElement !== null ? false : true
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [backGroundClearAll, setBackGroundClearAll] = useState(false);
  useEffect(() => {
    document.addEventListener("fullscreenchange", (event) => {
      setIsFullScreen((prev) => !prev);
    });
  }, []);
  const fullScreenView = () => {
    if (document.fullscreenElement) {
      // setIsFullScreen(true);

      document.exitFullscreen();
    } else {
      // setIsFullScreen(false);

      document.body.requestFullscreen();
    }
  };
  const backGroundClear = (isOpen) => {
    setBackGroundClearAll(isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    dispatch(setUserLogin({}));
    navigate("/login");
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={loginBg}>
        <Grid container>
          <Grid xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Header pageName="PROFILE" />

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className={dashboardMenu}
              >
                <div className={mobileMenuSection}>
                  <Tooltip
                    tooltipValue={
                      !isFullScreen ? "Exit Full Screen" : "Full Screen"
                    }
                  >
                    <img
                      className={mobileIconImg}
                      src={!isFullScreen ? ExitFullScreen : FullScreen}
                      onClick={fullScreenView}
                    />
                  </Tooltip>
                </div>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container className={innerloginBg}>
          <Grid xs={12}>
            <Grid container className={loginFieldBox}>
              <Grid item xs={12} className={profileHeader}>
                <div className={profileTitleSection}>
                  <img
                    src={userData?.profilePicture}
                    alt="profile dp"
                    className={profileDisplay}
                  />
                  <div className={profileTitle}>
                    <p>{userData?.firstName}</p>
                    <p>Operations Head</p>
                  </div>
                </div>
                <div className={profileButton}>
                  <Button
                    variant="outlined"
                    type="submit"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </Button>
                </div>
              </Grid>
              <Grid xs={12}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className={userName}
                  >
                    <div>
                      <p>username</p>
                      <p>{userData?.userName}</p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className={userEmail}
                  >
                    <div>
                      <p>Email</p>
                      <p>{userData?.email}</p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    className={userPassword}
                  >
                    <div className={profileFirstColumn}>
                      <p>Password</p>
                      <div className={profileSection}>
                        <div>
                          {showPassword ? (
                            <p className={passwordStar}>{userData?.password}</p>
                          ) : (
                            <p className={passwordStar}>**********</p>
                          )}
                        </div>

                        <div>
                          <img
                            className={eyeOff}
                            src={showPassword ? OpenEyeIcon : EyeOff}
                            onClick={handlePasswordVisibility}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12}>
                <Grid container>
                  <Grid item xs={4} className={userEmail}>
                    <div>
                      <p>role</p>
                      <p className={profileRoleStyle}>{userData?.roles[0]}</p>
                    </div>
                  </Grid>
                  <Grid item xs={4} className={userPhone}>
                    <div>
                      <p>phone</p>
                      <p>{userData?.phoneNum}</p>
                    </div>
                  </Grid>
                  <Grid item xs={4} className={userEmpty}></Grid>
                </Grid>
              </Grid>
              <Grid xs={12}>
                <Grid container>
                  <Grid item xs={12} className={userPermission}>
                    <div className={innerUserPermission}>
                      <p>PermissionS</p>
                      <p>Pre Game, In Game, Pro Game</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={bottomBlackline}></div>
        <MenuBar backGroundClear={backGroundClear} />
      </div>
    </>
  );
};

export default Profile;
