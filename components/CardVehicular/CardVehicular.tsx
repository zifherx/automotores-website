/* eslint-disable @next/next/no-img-element */
import { formatUSDPrice } from "@/lib/formatPrice";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { iCardVehicular } from "./CardVehicular.props";

export function CardVehicular(props: iCardVehicular) {
  const { carroceria, imageUrl, marca, modelo, precio } = props;
  return (
    <Card className="w-[380px] md:w-[350px] border border-grisInka rounded-xl hover:border-black">
      <CardHeader>
        <img
          src={`/images/models/${imageUrl}`}
          alt={modelo}
          className="object-contain h-[200px]"
        />
        <p className="text-xs text-grisDarkInka text-right">
          Imagen referencial
        </p>
      </CardHeader>
      <CardContent className="text-grisDarkInka">
        <p className="capitalize leading-tight">{carroceria}</p>
        <p className="capitalize font-bold leading-tight">{marca}</p>
        <p className="capitalize font-semibold leading-tight">{modelo}</p>
        <p className="mt-5">Desde</p>
        <p className="text-center font-bold text-2xl">
          {formatUSDPrice(precio)}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="uppercase h-5 py-4 mb-2 w-full rounded-2xl bg-redInka text-white hover:bg-redDarkInka">
          Cotizar
        </Button>
        <Button className="uppercase h-5 py-4 text-xs w-full rounded-2xl bg-grisInka text-white hover:bg-grisDarkInka">
          Ver más detalles del auto
        </Button>
      </CardFooter>
    </Card>
  );
}
