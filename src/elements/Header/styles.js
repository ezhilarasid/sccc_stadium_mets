import { styled } from "@mui/material/styles";
import { pallete } from "theme";

export const RootContainer = styled("div")`
  position: absolute;
  left: ${(28 / 5760) * window.innerWidth}px;
  top: ${(24 / 3240) * window.innerHeight}px;
  z-index: 1111;
  display: inline-flex;
  align-items: center;
  background-color: ${pallete.logoBackgroundBlack};
  border-radius: ${(25 / 5760) * window.innerWidth}px;
`;

export const Image = styled("img")`
  height: ${(190 / 3240) * window.innerHeight}px;
  width: auto;
  border-radius: ${(25 / 5760) * window.innerWidth}px;
  background-color: ${pallete.logoBackgroundBlue};
`;

export const PageName = styled("div")`
  padding: ${(65 / 3240) * window.innerHeight}px
    ${(40 / 5760) * window.innerWidth}px;
  font-size: ${(50 / 3240) * window.innerHeight}px;
  line-height: ${(60 / 3240) * window.innerHeight}px;
  font-weight: 800;
  letter-spacing: 0.25em;
  color: ${pallete.orange2};
  font-family: Barlow-ExtraBold;
`;
