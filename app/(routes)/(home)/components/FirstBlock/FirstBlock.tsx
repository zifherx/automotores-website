"use client";

import CountUp from "react-countup";

import { CarouselVehicular } from "../CarouselVehicular";

export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 py-8 lg:px-0 lg:py-14 items-center">
      <div className="p-4 lg:pl-36">
        <h1 className="text-5xl lg:text-8xl font-bold text-blueDarkInka">
          Como caído
          <span className="mx-1 md:mx-5">del cielo</span>
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-2xl max-w-sm md:max-w-xs text-center md:text-left">
          Tenemos más de{" "}
          <strong>
            {" "}
            <CountUp end={14} start={1} duration={2.5} enableScrollSpy /> marcas
          </strong>{" "}
          esperando por ti
        </p>
      </div>

      <CarouselVehicular />
    </div>
  );
}
