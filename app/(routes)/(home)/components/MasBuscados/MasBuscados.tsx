import { TitleSection } from "@/components/TitleSection";
import { CarouselCards } from "../CarouselCards";

export function MasBuscados() {
  return (
    <div className="max-w-6xl mx-auto items-center p-6 md:p-0">
      <TitleSection
        title="Los más buscados"
        classname="text-center text-2xl uppercase font-extrabold text-grisDarkInka"
      />
      <CarouselCards />
    </div>
  );
}
