"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { CardVehicular } from "@/components/CardVehicular";

import { listVehicles } from "@/data/listVehicles";

export function CarouselCards() {
  const just_offer = listVehicles.filter((item) => item.isEntrega48H);

  return (
    <Carousel
      className="py-10"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000 })]}
    >
      <CarouselContent>
        {just_offer.map((item) => (
          <CarouselItem key={item.id} className="sm:basis-1 lg:basis-1/3">
            <CardVehicular vehicle={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
