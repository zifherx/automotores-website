"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TitleSection } from "@/components/TitleSection";
import { CardServicios } from "@/components/CardServicios";

import { svgServices } from "./CarouselServicios.data";

export function CarouselServicios() {
  return (
    <div className="bg-plomoInka w-full py-20">
      <div className="max-w-7xl mx-auto items-center justify-center px-14 lg:px-0">
        <TitleSection title="Nuestros Servicios" />

        <Carousel
          className="py-10"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent>
            {svgServices.map((item) => (
              <CarouselItem key={item.id} className="basis-2/3 md:basis-1/5">
                <CardServicios title={item.title} imageUrl={item.imageUrl} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
