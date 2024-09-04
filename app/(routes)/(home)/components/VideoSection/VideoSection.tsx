import { VideoPlayer } from "@/components/VideoPlayer";
import { iVideoPlayer } from "@/components/VideoPlayer/VideoPlayer.props";

export function VideoSection() {
  const configPlayer: iVideoPlayer = {
    autoplay: true,
    classname: "rounded-2xl",
    controls: true,
    source: "/videos/video_home.mp4",
    type: "video/mp4",
  };

  return (
    <div className="bg-black w-full mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%,1fr] text-white px-4 py-8 md:px-0 md:py-10">
        <div className="p-0">
          <VideoPlayer config={configPlayer} />
        </div>
        <div className="flex flex-col items-start justify-center mt-5 md:ml-8">
          <h2 className="text-xl md:text-2xl font-extrabold md:font-bold mb-3 md:mb-5">
            CONOCE NUESTRA ATENCIÓN CORPORATIVA
          </h2>
          <p className="text-sm md:text-base text-justify font-normal">
            En Automotores Inka, somos el mejor aliado para tu negocio, con mas
            de 14 años de experiencia en el rubro automotriz, nos hace una
            empresa de confianza para cumplir tu sueño del auto propio.
          </p>
        </div>
      </div>
    </div>
  );
}
