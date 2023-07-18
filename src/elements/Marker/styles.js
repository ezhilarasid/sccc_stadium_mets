import { styled } from "@mui/material/styles";
import theme, { pallete } from "theme";

// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  tripleDot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paper: {
    maxWidth: 400,
    overflow: "auto",
    padding: 16,
  },
  select: {
    width: 200,
  },
  popper: {
    "& .MuiButtonBase-root": {
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "25px",
    },
    "& .MuiPaper-root": {
      marginTop: "15px",
      backgroundColor: "#000",
      border: " 1px solid #d7d7d7",
      color: "white",
    },
    zIndex: 1111,
    '&[x-placement*="bottom"] $arrowItem': {
      top: "-2px",
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        width: 14,
        height: 14,
        background: "black",
        borderTop: " 1px solid #fff",
        borderLeft: "1px solid #fff",
        transform: "rotate(45deg)",
      },
    },
    '&[x-placement*="top"] $arrowItem': {
      bottom: "9px",
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        width: 14,
        height: 14,
        background: "black",
        borderBottom: " 1px solid #fff",
        borderRight: "1px solid #fff",
        transform: "rotate(45deg)",
      },
    },
  },
  arrowItem: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    left: "50%",
    top: "13px",
    backgroundColor: pallete.logoBackgroundBlack,
    transform: "rotateZ(45deg) translateX(-50%)",
    borderColor: "#FFF",
    borderWidth: "1px 0px 0px 1px",
    borderStyle: "solid",
  },
}));

export default useStyles;

export const RootContainer = styled("div")`
  position: relative;
  background-color: transparent;
  padding: 120px 6px;
  z-index: 2222;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const MarkerContainer = styled("div")`
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition: all 0.3s ease;
`;

export const Icon = styled("img")`
  width: ${(102 / 5760) * window.innerWidth}px;
  height: auto;
`;

export const InnerIcon = styled("img")`
  height: ${(60 / 3240) * window.innerHeight}px;
  width: auto;
`;

export const ClickableContainer = styled("div")`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1010;
`;

export const MarkerOverlay = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-75%);
  background-color: transparent;
  width: ${(102 / 5760) * window.innerWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarkerTooltip = styled("div")`
  width: ${({ customWidth }) => (customWidth ? "380px !important" : "318px")};
  width: max-content;
  background: ${({ blackBackground }) =>
    blackBackground
      ? pallete.logoBackgroundBlack
      : pallete.logoBackgroundBlueOne};
  color: ${pallete.white};
  text-align: center;
  border-radius: 6px;
  padding: ${(40 / 5760) * window.innerWidth}px;
  position: absolute;
  z-index: 1050;
  ${({deviations, hoverable, newLayout, size}) => {
    if(newLayout && deviations?.verticalDeviation < 35) {
      if(size === 'small')
        return "bottom: 57%;"

      return "bottom: 10%;"
    }
    else {
      return `bottom: ${hoverable?"124%":"120%"};`
    }
  }}
  ${({deviations, newLayout, size}) => {
    if(newLayout && deviations?.horizontalDeviation < 20) {
      return "left: 835%;"
    }
    else if(newLayout && deviations?.horizontalDeviation > 65) {
      if(size === 'small')
        return "right: -600%;"

      return "right: -1000%;"
    }
    else {
      return "left: 100%;"
    }
  }}
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateX(-30%) scaleY(${({ visible }) => (visible ? 1 : 0)});
  transform-origin: bottom;
  transition: all 0.3s ease;
  backdrop-filter: blur(1.5px);

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 25%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({newLayout}) => newLayout?"transparent":pallete.logoBackgroundBlack} transparent transparent
      transparent;
  }
`;

export const InfoHeaderContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopupContentSection = styled("div")`
  display: flex;
  align-items: center;
`;

export const PopupCompartment = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${(horizontalMargin) => horizontalMargin?40:20}px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const PopupValueContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const PopupValueIcon = styled("img")`
  width: 25px !important;
  height: 25px !important;
  margin-bottom: 8px !important;
  margin-right: 4px !important;
`;

export const PopupValue = styled("div")`
  font-size: ${(54 / 3240) * window.innerHeight}px;
  line-height: ${(64 / 3240) * window.innerHeight}px;
  font-weight: 600;
  color: ${pallete.scccYellowTwo};
`;

export const PopupCompartmentLabel = styled("div")`
  font-size: ${(32 / 3240) * window.innerHeight}px;
  line-height: ${(39 / 3240) * window.innerHeight}px;
  font-weight: 700;
  color: ${pallete.logoOrange};
`;

export const InfoTitle = styled("div")`
  font-size: ${(54 / 3240) * window.innerHeight}px;
  line-height: ${(64 / 3240) * window.innerHeight}px;
  font-weight: 600;
  color: ${pallete.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    color: ${pallete.scccYellowTwo};
  }
`;

export const InfoTime = styled("div")`
  font-size: ${(40 / 3240) * window.innerHeight}px;
  line-height: ${(46 / 3240) * window.innerHeight}px;
  font-weight: 400;
  color: ${pallete.white};
  margin: 0px 14px;
`;

export const InfoContent = styled("div")`
  font-size: ${(45 / 3240) * window.innerHeight}px;
  line-height: ${(54 / 3240) * window.innerHeight}px;
  font-weight: 400;
  color: ${pallete.white};
  text-align: left;
`;

export const CloseIconMarker = styled("div")`
  cursor: pointer;
  text-align: right;
  cursor: pointer;
  text-align: right;
  position: fixed;
  right: 0;
  padding: 5px;

  .MuiSvgIcon-root {
    font-size: 16px;
    line-height: normal;
    margin-bottom: 2px;
  }
`;

export const DetailItems1 = styled("div")`
  flex: 1;
  display: flex;
  justify-content: end;
`;

export const RestaurantName = styled(InfoTitle)`
  font-size: 16px;
`;

export const FoodConcessionIconValue = styled(PopupCompartmentLabel)`
  color: ${pallete.scccYellowTwo};
  text-align: center;
  width: 100%;
  font-size: 20px;
`;

// export const MarkerContainer =
