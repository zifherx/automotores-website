"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { CardVehicular } from "@/components/CardVehicular";

import { vehicles_offers } from "./CarouselCards.data";

export function CarouselCards() {
  const just_offer = vehicles_offers.filter((item) => item.isOffer);

  return (
    <Carousel
      className="py-10"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000 })]}
    >
      <CarouselContent>
        {just_offer.map((item) => (
          <CarouselItem key={item.id} className="sm:basis-1 lg:basis-1/3">
            <CardVehicular
              key={item.modelo}
              carroceria={item.carroceria}
              imageUrl={item.image_url}
              marca={item.marca}
              modelo={item.modelo}
              precio={item.precio}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
