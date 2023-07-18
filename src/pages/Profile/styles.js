import { makeStyles } from "@mui/styles";
import TransportBg from "../../assets/profile_bg.svg";
import theme from "../../theme";

const useStyles = makeStyles(
  () => ({
    loginBg: {
      backgroundImage: `url("${TransportBg}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    innerloginBg: {
      backdropFilter: "blur(8.5px)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    mobileIconImg: {
      width: 50,
      cursor: "pointer",
      marginRight: 10,
    },
    dashboardMenu: {
      position: "absolute",
      right: `${0 * window.innerWidth}px`,
      top: `0px`,
      padding: 10,
      zIndex: 1000,
    },
    mobileMenuSection: {
      columnGap: "5px",
      display: "flex",
      justifyContent: "flex-end",
      "& :last-child": {
        marginRight: "0 !important",
      },
    },
    dashboardSection: {
      height: "100vh",
      background: "#d7d7d7",
      position: "relative",
    },
    bottomBlackline: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 30,
      background: " rgb(0 0 0 / 86%)",
      zIndex: "11111",
      backdropFilter: "blur(9px)",
    },
    loginFieldBox: {
      maxWidth: 940,
      margin: "0 auto",
      background: "rgba(255, 255, 255, 0.12)",
      color: "white",
      borderBottom: "10px solid #FF5910",
      boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)",
      marginBottom: 130,
      [theme.breakpoints.down("1367")]: {
        maxWidth: 900,
        margin: "0 auto",
        marginBottom: "60px !important",
      },
    },
    profileHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 32,
      background:
        "linear-gradient(179.76deg, #191919 0.21%, rgba(25, 25, 25, 0) 75.7%)",
      border: "1px solid #000000",
      [theme.breakpoints.down("1537")]: {
        padding: 22,
      },
    },
    profileDisplay: {
      width: 150,
    },
    profileTitleSection: {
      display: "flex",
      alignItems: "center",
    },
    profileTitle: {
      marginLeft: 30,
      "& :nth-child(1)": {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "39px",
      },
      "& :nth-child(2)": {
        fontSize: 14,
        lineHeight: "21px",
        color: "#FF5910",
      },
    },
    profileButton: {
      "& .MuiButton-outlined": {
        fontFamily: `'Poppins', sans-serif !important`,
        color: "white",
        border: " 1px solid #fff",
        background: "transparent",
        border: "1px solid #878686",
        borderRadius: " 5px",
        textTransform: "capitalize",
        "&:hover": {
          border: "1px solid #878686",
        },
      },
    },
    userName: {
      background: "rgb(28 28 28 / 95%)",
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      padding: "24px 20px 24px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& :nth-child(1)": {
        lineHeight: "21px",
        textTransform: "uppercase",
        color: "#605D5D",
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: 12,
      },
      "& :nth-child(2)": {
        lineHeight: "27px",
        textTransform: "Capitalize",
        color: "white",
        fontSize: "16px",
      },
    },
    userEmail: {
      background: "rgb(22 22 22 / 95%)",
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      padding: "24px 20px 24px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& :nth-child(1)": {
        lineHeight: "21px",
        textTransform: "uppercase",
        color: "#605D5D",
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: 12,
      },
      "& :nth-child(2)": {
        lineHeight: "27px",
        color: "white",
        fontSize: "16px",
        textTransform: "lowercase",
      },
    },
    userPassword: {
      background: "rgb(28 28 28 / 95%)",
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      padding: "24px 20px 24px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& :nth-child(1)": {
        lineHeight: "21px",
        textTransform: "uppercase",
        color: "#605D5D",
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: 12,
        flex: 1,
      },
      "& :nth-child(2)": {
        lineHeight: "27px",
        textTransform: "Capitalize",
        color: "white",
        fontSize: "16px",
      },
    },
    userPermission: {
      background: "rgb(28 28 28 / 95%)",
      boxShadow: "0px 6px 4px rgb(0 0 0 / 25%)",
      padding: "24px 48px 24px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& :nth-child(1)": {
        lineHeight: "21px",
        textTransform: "uppercase",
        color: "#605D5D",
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: 12,
      },
      "& :nth-child(2)": {
        lineHeight: "27px",
        textTransform: "Capitalize",
        color: "white",
        fontSize: "16px",
        background: "#242424",
        border: "1px solid #151515",
        padding: "20px",
      },
    },
    userPhone: {
      background: "#1c1c1c",
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      padding: "24px 20px 24px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& :nth-child(1)": {
        lineHeight: "21px",
        textTransform: "uppercase",
        color: "#605D5D",
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: 12,
      },
      "& :nth-child(2)": {
        lineHeight: "27px",
        color: "white",
        fontSize: "16px",
        textTransform: "lowercase",
      },
    },
    passwordStar: {
      lineHeight: "27px !important",
      textTransform: "Capitalize !important",
      color: "white !important",
      fontSize: "16px !important",
      margin: "0 !important",
    },
    innerUserPermission: {
      flex: 1,
    },
    eyeIconSection: {
      display: "flex",
      alignItems: "center",
    },
    profileSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    eyeOff: {
      width: 17,
      cursor: "pointer",
    },
    passwordSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    profileFirstColumn: {
      flex: 1,
    },
    userEmpty: {
      background: "#1F1F1F",
    },
    profileRoleStyle: {
      textTransform: "none !important",
    },
  }),
  { index: 1 }
);

export default useStyles;
