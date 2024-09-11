"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SubtitleSection } from "@/components/SubtitleSection";
import { TitleSection } from "@/components/TitleSection";

import { listBrands } from "@/data/listBrands";

export function CarouselMarcas() {
  const router = useRouter();

  const subtitle =
    "Contamos con la mayor oferta de marcas del mercado. Desliza y escoge la marca de tu preferencia";

  return (
    <div className="max-w-4xl px-14 lg:max-w-6xl mx-auto py-4 md:px-0 md:py-14 items-center">
      <TitleSection
        title="Elige alguna de nuestras marcas"
        classname="text-center text-2xl uppercase font-extrabold text-grisDarkInka"
      />
      <SubtitleSection subtitle={subtitle} />
      <Carousel
        className="mt-10"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {listBrands
            .filter((item) => item.isActive)
            .map(({ id, brand, src, value }) => (
              <CarouselItem key={id} className="basis-4/12 md:basis-32">
                <Image
                  className="object-contain cursor-pointer border border-grisInka rounded-lg hover:border-black drop-shadow-sm"
                  src={`/images/brands/${src}`}
                  alt={`Marca ${brand}`}
                  width={120}
                  height={120}
                  onClick={() =>
                    router.push(`/vehiculos/catalogo?marca=${value}`)
                  }
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
