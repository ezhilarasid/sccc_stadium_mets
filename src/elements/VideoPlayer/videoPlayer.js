import { useState, useRef } from "react";
import { VerticalSpace, HorizontalSpace, FlexSpace } from "../Space";
import moment from "moment";
import {
  RootContainer,
  Player,
  ControlsContainer,
  SeekBarTrack,
  SeekBarStroke,
  SeekBarThumb,
  ButtonContainer,
  Icon,
  DurationText,
} from "./styles";

const VideoPlayer = (props) => {
  const { src } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const player = useRef(null);

  const onPlayPauseClick = () => {
    if (!isPlaying) {
      player.current.play();
    } else {
      player.current.pause();
    }

    setIsPlaying((prev) => !prev);
  };

  const onRewindClick = () => {
    const currentTime = player.current.currentTime;
    player.current.currentTime = currentTime - 5;
  };

  const onForwardClick = () => {
    const currentTime = player.current.currentTime;
    player.current.currentTime = currentTime + 2;
  };

  return (
    <RootContainer>
      <Player
        ref={player}
        src={src}
        controls={false}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={() => setCurrentVideoTime(player?.current?.currentTime)}
      />
      <ControlsContainer>
        <SeekBarTrack>
          <SeekBarStroke
            progress={currentVideoTime.toFixed(0) / player?.current?.duration}
          >
            <SeekBarThumb />
          </SeekBarStroke>
        </SeekBarTrack>
        <VerticalSpace count={2} />
        <ButtonContainer>
          <Icon icon="rewind" size={15} onClick={onRewindClick} />
          <HorizontalSpace count={3} />
          <Icon
            icon={isPlaying ? "pause-svgrepo-com" : "play"}
            size={15}
            onClick={onPlayPauseClick}
          />
          <HorizontalSpace count={3} />
          <Icon icon="forward" size={15} onClick={onForwardClick} />
          <HorizontalSpace count={3} />
          <Icon icon="volume" size={15} />
          <HorizontalSpace count={3} />
          <DurationText>
            {moment
              .duration(currentVideoTime.toFixed(0), "seconds")
              .minutes()
              .toLocaleString("en-US", { minimumIntegerDigits: 2 })}
            :
            {moment
              .duration(currentVideoTime.toFixed(0), "seconds")
              .seconds()
              .toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </DurationText>
          <FlexSpace />
          <Icon icon="settings" size={15} />
          <HorizontalSpace count={3} />
          <Icon icon="fullscreen" size={15} />
        </ButtonContainer>
      </ControlsContainer>
    </RootContainer>
  );
};

export default VideoPlayer;
