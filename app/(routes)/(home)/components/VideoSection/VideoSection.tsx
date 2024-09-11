import { VideosYoutube } from "@/components/VideosYoutube/VideosYoutube";

export function VideoSection() {
  return (
    <div className="bg-black w-full mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%,1fr] text-white px-4 py-8 md:px-0 md:py-10">
        <div className="p-0">
          <VideosYoutube
            className="h-[400px]"
            src="https://www.youtube.com/embed/vwM9Ik-FpMA?si=axwv30na1a_SdUW3&amp;controls=0&amp;playlist=vwM9Ik-FpMA&amp;loop=1"
            title="Somos el mejor aliado para tu negocio"
          />
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
