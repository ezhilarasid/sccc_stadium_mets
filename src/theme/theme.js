import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import typography from "./typography";
import palette from "./pallete";
import overrides from "./overrides";

const theme = createTheme();

theme.breakpoints = { ...theme.breakpoints, ...breakpoints };
theme.palette = { ...theme.palette, ...palette };
theme.typography = { ...theme.typography, ...typography };
theme.overrides = { ...theme.overrides, ...overrides };

export default theme;
