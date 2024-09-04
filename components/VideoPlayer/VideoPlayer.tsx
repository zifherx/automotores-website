import { iConfigVideoPlayer } from "./VideoPlayer.props";

export function VideoPlayer(props: iConfigVideoPlayer) {
  const { config } = props;
  const { autoplay, classname, controls, source, type } = config;

  return (
    <video
      className={classname}
      autoPlay={autoplay}
      controls={controls}
      disablePictureInPicture
    >
      <source src={source} type={type} />
    </video>
  );
}
