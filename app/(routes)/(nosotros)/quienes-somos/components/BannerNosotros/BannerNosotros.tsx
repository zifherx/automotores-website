import { VideoPlayer } from "@/components/VideoPlayer";
import { iVideoPlayer } from "@/components/VideoPlayer/VideoPlayer.props";

export function BannerNosotros() {
  const configPlayer: iVideoPlayer = {
    autoplay: true,
    classname: "aspect-video",
    controls: true,
    source: "/videos/video_nosotros.mp4",
    type: "video/mp4",
  };
  return (
    <div className="w-full bg-black p-0 opacity-95">
      <VideoPlayer config={configPlayer} />
    </div>
  );
}
