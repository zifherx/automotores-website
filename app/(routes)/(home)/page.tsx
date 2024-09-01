import { AsesoriaSection } from "./components/AsesoriaSection";
import { CarouselMarcas } from "./components/CarouselMarcas";
import { CarouselPortada } from "./components/CarouselPortada";
import { CarouselServicios } from "./components/CarouselServicios";
import { FirstBlock } from "./components/FirstBlock";
import { MasBuscados } from "./components/MasBuscados";
import { VideoSection } from "./components/VideoSection";

export default function HomePage() {
  return (
    <>
      <FirstBlock />
      {/* <CarouselPortada /> */}
      <CarouselMarcas />
      <MasBuscados />
      <VideoSection />
      <CarouselServicios />
      <AsesoriaSection />
    </>
  );
}
