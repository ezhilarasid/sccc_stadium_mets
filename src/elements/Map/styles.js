import { styled } from "@mui/material/styles";
import theme from "../../theme";

export const mapContainerStyles = {
  width: "100%",
  height: "100%",
};

export const mapStyleWidth = {
  width: "100%",
  height: "100%",
};

export const RootContainer = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const CursorPopup = styled("div")`
  position: absolute;
  top: ${({ offset }) => offset.y + 10}px;
  left: ${({ offset }) => offset.x + 10}px;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(19, 24, 54, 0.85);
  z-index: 10000;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const CursorPopupCompartment = styled("div")`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CursorPopupIcon = styled("img")`
  height: 18px;
  width: auto;
`;

export const CursorPopupText = styled("div")`
  color: #fff744;
  font-weight: 400;
`;
