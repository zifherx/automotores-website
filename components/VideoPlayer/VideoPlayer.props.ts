export interface iVideoPlayer {
  source: string;
  type: string;
  autoplay: boolean;
  controls: boolean;
  classname: string;
}

export interface iConfigVideoPlayer {
  config: iVideoPlayer;
}
