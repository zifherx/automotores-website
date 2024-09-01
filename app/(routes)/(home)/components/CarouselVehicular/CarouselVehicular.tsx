/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { carousel_autos } from "./CarouselVehicular.data";
import { RevealElement } from "@/components/RevealElement";

export function CarouselVehicular() {
  return (
    <RevealElement position="bottom" className="flex justify-end">
      <Carousel
        className="lg:ml-36 lg:-mb-14"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {carousel_autos.map(({ id, name, vehicle }) => (
            <CarouselItem key={id}>
              <img
                src={`/images/models/${vehicle}`}
                alt={name}
                className="object-cover w-[700px]"
              />
              {/* <Image
                src={`/images/models/${vehicle}`}
                alt={name}
                width={700}
                height={500}
                priority
              /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </RevealElement>
  );
}
