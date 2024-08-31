"use client";

import Image from "next/image";

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

import { images_brands } from "./CarouselMarcas.data";

export function CarouselMarcas() {
  return (
    <div className="max-w-4xl px-14 pt-10 lg:max-w-6xl mx-auto md:px-0 md:py-10 items-center">
      <TitleSection title="Elige alguna de nuestras marcas" />
      <SubtitleSection />
      <Carousel
        className="py-10"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {images_brands.map(({ id, alt, src }) => (
            <CarouselItem key={id} className="basis-4/12 md:basis-32">
              <Image
                className="object-contain border border-grisInka rounded-lg hover:border-black"
                src={`/images/brands/${src}`}
                alt={alt}
                width={120}
                height={120}
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
