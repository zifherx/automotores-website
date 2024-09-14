/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { iBannerVehicleProps } from "./BannerVehicle.props";

export function BannerVehicle(props: iBannerVehicleProps) {
  const { marca, modelo, imagenBase } = props;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[250px] p-6">
          <div className="text-5xl uppercase font-headMedium text-left">
            <p>{marca}</p>
            <p>{modelo}</p>
          </div>
          <div className="mt-6 flex flex-col gap-y-3">
            <Button className="bg-redInka text-white text-base rounded-full hover:bg-redDarkInka font-textMedium">
              Cotízalo ahora
            </Button>
            <Button
              variant="outline"
              className="border border-redInka rounded-full text-base text-redInka font-textMedium hover:bg-white hover:text-redDarkInka"
            >
              Solicita un test drive
            </Button>
          </div>
        </div>
        <div className="-mr-28">
          <img
            className="w-[600px] h-auto object-cover drop-shadow-xl"
            src={`/images/models/${imagenBase}`}
            alt={modelo}
          />
        </div>
      </div>
    </div>
  );
}
