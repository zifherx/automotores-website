/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Car } from "lucide-react";

import { Button } from "../ui/button";
import { formatPENPrice, formatUSDPrice } from "@/lib/formatPrice";

import { iCardProduct } from "./CardVehicular.props";

export function CardVehicular(props: iCardProduct) {
  const { vehicle } = props;
  const { carroceria, image_url, marca, modelo, precio, isEntrega48H, isGLP } =
    vehicle;
  const tc = 4.1;
  return (
    <div className="relative p-1 rounded-xl shadow-md bg-white border border-grisInka/55 hover:border-black">
      <Image
        src={`/images/models/${image_url}`}
        alt={modelo}
        width={400}
        height={600}
        className="object-contain h-[200px]"
        priority
      />
      <p className="text-xs text-grisDarkInka text-right mr-5">
        Imagen referencial
      </p>
      <div className="p-4">
        <div className="flex justify-between gap-5 ">
          <div className="text-grisDarkInka leading-tight">
            <p className="font-bold text-xl">{carroceria}</p>
            <p className="font-medium text-xl">{marca}</p>
            <p className="font-bold text-xl">{modelo}</p>
          </div>
          <div className=" h-fit">
            {isGLP && (
              <Image
                src={`/images/offers/glp-gratis.png`}
                alt="GLP Gratis"
                width={100}
                height={50}
                priority
              />
            )}
            {isEntrega48H && (
              <Image
                src={`/images/offers/disponibilidad-48.png`}
                alt="Disponibilidad 48 horas"
                width={100}
                height={50}
                priority
              />
            )}
          </div>
        </div>

        <p className="mt-5 font-medium">Desde</p>
        <p className="text-center text-black text-lg font-bold mt-3">
          {formatUSDPrice(precio)} | {formatPENPrice(precio * tc)}
        </p>

        <Button className=" mt-8 w-full h-6 py-4 uppercase text-[12px] rounded-2xl bg-redInka text-white hover:bg-redDarkInka">
          Ver más detalles del auto
          <Car className="w-5 h-5 ml-2" strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
}
