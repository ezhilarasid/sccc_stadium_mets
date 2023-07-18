import { styled } from "@mui/material/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
      backgroundColor: "#000",
      border: " 1px solid #d7d7d7",
      color: "white",
    },
    zIndex: 1111,
    '&[x-placement*="bottom"] $arrowItem': {
      top: "-2px",
      left: "139px !important",
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
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
}));

export default useStyles;

export const RootContainer = styled("div")`
  border-radius: 5px;
  margin: 0 0 10px 0;
  background: transparent;
  border: 0.5px solid #ffffff;
  cursor: pointer;
`;

export const CollapsedBody = styled("div")`
  background: #1f1f1f;
  padding: 10px;
  border-radius: 5px;
`;

export const DefaultBody = styled("div")`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled("span")`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 1181px) {
    font-size: 13px;
    line-height: 16px;
  }
  @media (max-width: 1025px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const TitleSubText = styled("span")`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 1181px) {
    font-size: 10px;
    line-height: 16px;
    margin-right: 6px;
  }
  @media (max-width: 1025px) {
    font-size: 10px;
    line-height: 16px;
    margin-right: 6px;
  }
`;

export const TitleSubTextValue = styled("span")`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  @media (max-width: 1181px) {
    font-size: 10px;
    line-height: 16px;
  }
  @media (max-width: 1025px) {
    font-size: 10px;
    line-height: 16px;
  }
`;
export const FlexSpace = styled("div")`
  flex: 1;
`;
export const VerticalSpace = styled("div")`
  height: ${({ count }) => count * 4}px;
`;
export const HorizontalSpace = styled("div")`
  width: ${({ count }) => count * 4}px;
`;

export const ExpandedBody = styled("div")`
  background: #101010;
  padding: 10px;
  border-radius: 5px;
`;

export const DetailItems1 = styled("div")`
  flex: 1;
  display: flex;
  justify-content: end;
`;
