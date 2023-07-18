import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "../../redux/actions/loginActions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import MetsLogo1 from "../../assets/Logo.svg";
import EyeOff from "../../assets/Eye-Off.svg";
import OpenEyeIcon from "../../assets/openEyeIcon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStyles from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const {
    loginBg,
    innerloginBg,
    loginFieldBox,
    logoSection,
    logoImage,
    fieldTitle,
    customTextField,
    loginButton,
    poweredBySection,
    poweredBy,
    formikErrorClass,
    attherate,
    eyeOff,
    forgotPassword,
    loginFirstLogo,
  } = useStyles();

  const user = useSelector((state) => state.login.loginData);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user && user.userName) {
      localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
      navigate("/dashboard");
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    validationSchema: Yup.object({
      userid: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Please Enter email"),
      password: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Please Enter password"),
    }),
    onSubmit: (values) => {
      if (
        ((values?.userid).toLowerCase() === "donnapaul" &&
          values?.password === "Dp@2023#") ||
        ((values?.userid).toLowerCase() === "mikeross" &&
          values?.password === "Mr@2023#") ||
        ((values?.userid).toLowerCase() === "braydentim" &&
          values?.password === "Bt@2023#") ||
        ((values?.userid).toLowerCase() === "jessicarayn" &&
          values?.password === "Jr@2023#") ||
        ((values?.userid).toLowerCase() === "florenceross" &&
          values?.password === "Fr@2023")
      ) {
        let payload = {
          deviceToken: "abcde",
          userName: values.userid,
          passWord: values.password,
        };
        dispatch(getUserLogin(payload));
      } else {
        alert("Incorrect User Credentials");
      }
    },
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={loginBg}>
        <Grid container className={innerloginBg}>
          <Grid item xs={12}>
            <Box className={loginFieldBox}>
              <form onSubmit={formik.handleSubmit}>
                <div className={logoSection}>
                  <div className={loginFirstLogo}>
                    <img className={logoImage} src={MetsLogo1} />
                  </div>
                </div>
                <div className={customTextField}>
                  <Typography variant="h5" className={fieldTitle}>
                    Enter Email
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    placeholder="name@email.com"
                    value={formik.values.userid}
                    onChange={formik.handleChange}
                    type="text"
                    name="userid"
                    endAdornment={<p className={attherate}>@</p>}
                  />
                  {formik.errors.userid && formik.touched.userid && (
                    <p className={formikErrorClass}>{formik.errors.userid}</p>
                  )}
                </div>
                <div className={customTextField}>
                  <Typography variant="h5" className={fieldTitle}>
                    Secret
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="******"
                    endAdornment={
                      <img
                        className={eyeOff}
                        src={showPassword ? OpenEyeIcon : EyeOff}
                        onClick={handlePasswordVisibility}
                      />
                    }
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className={formikErrorClass}>{formik.errors.password}</p>
                  )}
                  <div>
                    <Typography className={forgotPassword} variant="h5">
                      Forgot Password?
                    </Typography>
                  </div>
                </div>
                <div className={loginButton}>
                  <Button variant="outlined" fullWidth type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </Box>
          </Grid>
          <div className={poweredBySection}>
            <Typography variant="h5" className={poweredBy}>
              COPYRIGHT @ 2023 | ALL RIGHTS RESERVED
            </Typography>
          </div>
        </Grid>
      </div>
    </>
  );
};
export default Login;
