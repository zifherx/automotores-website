import { cn } from "@/lib/utils";
import { iVideosYoutubeProps } from "./VideosYoutube.props";

export function VideosYoutube(props: iVideosYoutubeProps) {
  const { src, title, className } = props;
  return (
    <iframe
      className={cn("rounded-xl", className)}
      width="100%"
      height="100%"
      src={src}
      title={title}
      allowFullScreen
      allow="accelerometer; autoplay;loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
}
