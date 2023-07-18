import { styled } from "@mui/material/styles";
import { pallete } from "theme";

export const RootContainer = styled("div")`
  position: relative;
  width: ${(724 / 5760) * window.innerWidth}px;
  height: ${(724 / 5760) * window.innerWidth}px;
  border-radius: ${(724 / 5760) * window.innerWidth}px;
  background-color: ${pallete.circularGaugeBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
`;

export const LabelContainer = styled("div")`
  width: ${(370 / 5760) * window.innerWidth}px;
  height: ${(370 / 5760) * window.innerWidth}px;
  border-radius: ${(370 / 5760) * window.innerWidth}px;
  background-color: ${pallete.circularGaugeForeground};
  position: absolute;
  left: 50%;
  top: 49%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelValue = styled("div")`
  font-size: ${(110 / 3240) * window.innerHeight}px;
  line-height: ${(183 / 3240) * window.innerHeight}px;
  color: ${pallete.white};
`;

export const LabelUnit = styled("span")`
  font-size: ${(80 / 3240) * window.innerHeight}px;
  line-height: ${(117 / 3240) * window.innerHeight}px;
`;

export const LabelTag = styled("div")`
  font-size: ${(38 / 3240) * window.innerHeight}px;
  line-height: ${(46 / 3240) * window.innerHeight}px;
  color: ${pallete.orange2};
`;
