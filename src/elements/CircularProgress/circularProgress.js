import ProgressBar from "react-customizable-progressbar";
import theme, { palette } from "theme";
import {
  RootContainer,
  LabelContainer,
  LabelValue,
  LabelUnit,
  LabelTag,
} from "./styles";

const CircularProgress = (props) => {
  const { label, progress } = props;
  return (
    <RootContainer>
      <LabelContainer>
        <LabelValue>
          {progress}
          <LabelUnit>%</LabelUnit>
        </LabelValue>
        <LabelTag>{label}</LabelTag>
      </LabelContainer>
      <ProgressBar
        progress={progress}
        radius={(270 / 5760) * window.innerWidth}
        trackStrokeWidth={0}
        strokeWidth={(70 / 5760) * window.innerWidth}
        strokeColor={theme.palette.orange2}
      />
    </RootContainer>
  );
};

export default CircularProgress;
