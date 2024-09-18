"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { RevealElement } from "@/components/RevealElement";

import { iBannerVehicleProps } from "./BannerVehicle.props";
import { useParams, useRouter } from "next/navigation";

export function BannerVehicle(props: iBannerVehicleProps) {
  const { marca, modelo, imagenBase } = props;
  const router = useRouter();
  const params = useParams();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[160px] lg:w-[280px] p-0 lg:p-6">
          <div className="uppercase text-left">
            <p className="text-2xl lg:text-4xl font-headRegular">{marca}</p>
            <p className="text-3xl lg:text-5xl font-headMedium">{modelo}</p>
          </div>
          <div className="mt-5 flex flex-col gap-y-3">
            <Button
              className="bg-redInka text-white text-sm w-fit md:w-full md:text-base rounded-full hover:bg-redDarkInka font-textMedium"
              onClick={() => router.push(`/cotizacion?modelo=${params.modelo}`)}
            >
              Cotízalo ahora
            </Button>
            <Button
              variant="outline"
              className="border border-redInka rounded-full text-sm w-fit md:w-full md:text-base text-redInka font-textMedium hover:bg-white hover:text-redDarkInka"
            >
              Solicita un test drive
            </Button>
          </div>
        </div>
        <RevealElement position="bottom" className="lg:-mr-28">
          <img
            className="w-[600px] h-auto object-cover drop-shadow-xl"
            src={`/images/models/${imagenBase}`}
            alt={modelo}
          />
        </RevealElement>
      </div>
    </div>
  );
}
