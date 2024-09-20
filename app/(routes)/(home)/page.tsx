import { AsesoriaSection } from "./components/AsesoriaSection";
import { CallToAction } from "./components/CallToAction";
import { CarouselMarcas } from "./components/CarouselMarcas";
import { CarouselPortada } from "./components/CarouselPortada";
import { CarouselServicios } from "./components/CarouselServicios";
import { FirstBlock } from "./components/FirstBlock";
import { MasBuscados } from "./components/MasBuscados";
import { VideoSection } from "./components/VideoSection";

export default function HomePage() {
  return (
    <>
      {/* <FirstBlock /> */}
      <CarouselPortada />
      <CarouselMarcas />
      <MasBuscados />
      <CallToAction imageSource="geely-action1.jpeg" />
      <VideoSection />
      <CarouselServicios />
      <CallToAction imageSource="geely-action2.jpeg" />
      {/* <AsesoriaSection /> */}
    </>
  );
}
