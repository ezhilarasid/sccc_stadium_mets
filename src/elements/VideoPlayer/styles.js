import { styled } from "@mui/material/styles";
import UnstyledIcon from "../Icon";

export const RootContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Player = styled("video")`
  width: 100%;
  height: 100%;
`;

export const ControlsContainer = styled("div")`
  position: absolute;
  bottom: 10px;
  left: 11px;
  width: calc(100% - 42px);
  padding: 15px 10px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 6px;
`;

export const SeekBarTrack = styled("div")`
  border-radius: 6px;
  width: calc(100% - 20px);
  margin: 0px 10px;
  height: 3px;
  background-color: #5a5757;
  transition: all 0.3s ease;
  transform-origin: bottom;
  cursor: pointer;

  &:hover {
    transform: scaleY(2);

    span {
      opacity: 1;
    }
  }
`;

export const SeekBarStroke = styled(SeekBarTrack)`
  position: relative;
  background-color: #ffffff;
  margin: 0px;
  width: ${({ progress }) => progress * 100}%;

  &:hover {
    transform: none;
  }
`;

export const SeekBarThumb = styled("span")`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translate(-50%, -25%) scaleX(2);
  opacity: 0;
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: #fff;
  transition: all 0.3s ease;
  transform-origin: center;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;

export const Icon = styled(UnstyledIcon)`
  cursor: pointer;
  transistion: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const DurationText = styled("div")`
  font-size: 12px;
  color: #ffffff;
  line-height: 14px;
`;
