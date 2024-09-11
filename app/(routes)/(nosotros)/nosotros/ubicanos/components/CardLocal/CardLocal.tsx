/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { iTabContent } from "./CardLocal.props";
import { MapPin } from "lucide-react";

export function CardLocal(props: iTabContent) {
  const { params } = props;
  const {
    sedeImage,
    sedeName,
    sedeAddress,
    scheduleRegular,
    scheduleExtended,
    linkHowArrived,
  } = params;

  return (
    <div className="relative pb-1 bg-white rounded-lg shadow-xl hover:shadow-2xl hover:border-black border border-grisInka/40">
      <img
        src={`/images/nosotros/${sedeImage}`}
        alt={sedeName}
        className="rounded-t-lg aspect-[3/2] mx-auto"
      />

      <div className="relative p-4">
        <h2 className="font-bold text-lg text-blueInka drop-shadow-md">
          {sedeName}
        </h2>
        <p className="font-light font-base">{sedeAddress}</p>
        <h2 className="font-bold text-grisDarkInka mt-4">
          Horario de atención
        </h2>
        <p className="mt-2 text-sm">Lunes a Viernes</p>
        <p className="font-base">{scheduleRegular}</p>
        <p className="mt-2 text-sm">Sábados</p>
        <p className="font-base">{scheduleExtended}</p>

        <Link
          href={linkHowArrived}
          target="_blank"
          className="flex items-center justify-start mt-6 text-blueInka text-sm font-semibold"
        >
          <MapPin className="mr-1 w-5 h-5" />
          Cómo llegar
        </Link>
      </div>
    </div>
  );
}
