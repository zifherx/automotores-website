import { CarouselMarcas } from "./components/CarouselMarcas";
import { CarouselPortada } from "./components/CarouselPortada";
import { MasBuscados } from "./components/MasBuscados";
import { VideoSection } from "./components/VideoSection";

export default function HomePage() {
  return (
    <>
      <CarouselPortada />
      <CarouselMarcas />
      <MasBuscados />
      <VideoSection />
      <p>Servicios</p>
      <p>Asesoría</p>
    </>
  );
}
