/* eslint-disable @next/next/no-img-element */
"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { RevealElement } from "@/components/RevealElement";

import { listVehicles } from "@/data/listVehicles";

export function CarouselVehicular() {
  return (
    <RevealElement position="bottom" className="flex justify-end">
      <Carousel
        className="lg:ml-36 lg:-mb-14"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {listVehicles.map(({ id, modelo, image_url }) => (
            <CarouselItem key={id}>
              <img
                src={`/images/models/${image_url}`}
                alt={modelo}
                className="object-cover w-[700px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </RevealElement>
  );
}
