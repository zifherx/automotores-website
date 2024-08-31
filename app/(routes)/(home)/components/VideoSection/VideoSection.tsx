export function VideoSection() {
  return (
    <div className="bg-black w-full mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%,1fr] text-white px-4 py-8 md:px-0 md:py-10">
        <div className="p-0">
          <video
            className="rounded-2xl"
            autoPlay
            controls
            disablePictureInPicture
          >
            <source src="/videos/video_home.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col items-start justify-center mt-5 ml-8">
          <h2 className="font-extrabold md:font-bold mb-3 md:mb-5">
            CONOCE NUESTRA ATENCIÓN CORPORATIVA
          </h2>
          <p className="text-sm md:text-lg text-justify font-light">
            En Automotores Inka, somos el mejor aliado para tu negocio, con mas
            de 14 años de experiencia en el rubro automotriz, nos hace una
            empresa de confianza para cumplir tu sueño del auto propio.
          </p>
        </div>
      </div>
    </div>
  );
}
