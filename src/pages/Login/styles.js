import { makeStyles } from "@mui/styles";
import TransportBg from "../../assets/login-bg.jpg";
import theme from "../../theme";
const useStyles = makeStyles(() => ({
  loginBg: {
    backgroundImage: `url("${TransportBg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  loginFirstLogo: {
    marginBottom: "-4px",
  },
  innerloginBg: {
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8.5px)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoSection: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    [theme.breakpoints.down("1537")]: {
      marginBottom: 18,
    },
  },
  loginFieldBox: {
    maxWidth: 486,
    margin: "0 auto",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.12)",
    borderRadius: "15px",
    [theme.breakpoints.down("1537")]: {
      maxWidth: 300,
      margin: "0 auto",
    },
  },
  logoImage: {
    width: "100%",
  },
  fieldTitle: {
    color: theme.palette.white,
    textAlign: "left",
    marginBottom: "8px !important",
    textTransform: "uppercase",
    fontSize: "16px !important",
    marginLeft: "18px !important",
    letterSpacing: "0.235em !important",
    fontWeight: "500 !important",
    fontFamily: `'Poppins', sans-serif !important`,
    [theme.breakpoints.down("1537")]: {
      fontSize: "11px !important",
    },
  },
  customTextField: {
    marginBottom: 30,
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      color: "#7c7c7c",
      background: " #101010",
      borderRadius: "15px",
      fontStyle: "italic",
      fontWeight: "500 !important",
      fontFamily: `'Poppins', sans-serif !important`,
      letterSpacing: "0.235em !important",
      [theme.breakpoints.up(2000)]: {
        borderRadius: "30px",
      },
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "&.MuiInputBase-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("1537")]: {
      marginBottom: 18,
    },
  },
  loginButton: {
    "& .MuiButton-root": {
      color: "#fff",
      fontSize: "18px",
      border: "0.5px solid #E13827",
      background: "#E13827",
      borderRadius: "15px",
      lineHeight: "21px",
      padding: "16px 2px",
      textTransform: "uppercase !important",
      letterSpacing: "0.235em",
      fontWeight: "700 !important",
      fontFamily: `'Poppins', sans-serif !important`,
      [theme.breakpoints.down("1537")]: {
        fontSize: "16px !important",
      },
      [theme.breakpoints.up("2000")]: {
        borderRadius: "30px",
      },
    },
    "& .MuiButtonBase-root:hover": {
      border: "0.5px solid #E13827",
      background: "#E13827",
    },
  },
  poweredBySection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formikErrorClass: {
    color: "white",
    padding: 0,
    margin: 0,
    paddingTop: 5,
    fontSize: 13,
    fontWeight: "300",
  },
  eyeOff: {
    width: 17,
    cursor: "pointer",
  },
  attherate: {
    color: theme.palette.white,
    fontStyle: "normal",
  },
  forgotPassword: {
    fontStyle: "italic !important",
    fontSize: "13px !important",
    lineHeight: "28px !important",
    letterSpacing: "1px !important",
    textDecoration: "underline !important",
    color: "#FFFFFF",
    fontWeight: "200 !important",
    fontFamily: `'Poppins', sans-serif !important`,
    cursor: "pointer",
    marginTop: " 4px !important",
  },
  poweredBySection: {
    position: "fixed",
    bottom: "55px !important",
  },
  poweredBy: {
    fontSize: "13px !important",
    lineHeight: "19px !important",
    textAlign: "center",
    color: "#FFFFFF",
    letterSpacing: "0.235em !important",
    fontWeight: "400 !important",
    fontFamily: `'Poppins', sans-serif !important`,
    [theme.breakpoints.down("1537")]: {
      fontSize: "10px !important",
    },
  },
}));
export default useStyles;
