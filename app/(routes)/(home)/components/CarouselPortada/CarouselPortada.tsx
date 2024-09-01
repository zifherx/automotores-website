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

import { images_banner } from "./Carousel.data";

export function CarouselPortada() {
  return (
    <div className="w-full h-auto">
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
        <CarouselContent>
          {images_banner.map(({ id, alt, src }) => (
            <CarouselItem key={id}>
              <Image src={src} alt={alt} width={2000} height={780} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-20" />
        <CarouselNext className="mr-20" />
      </Carousel>
    </div>
  );
}
