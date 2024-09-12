/* eslint-disable react/no-unescaped-entities */
import { Frown } from "lucide-react";
import { CardProduct } from "../CardProduct";
import { iVehicleCar } from "../CardProduct/CardProduct.props";

import { iListVehiclesProps } from "./ListVehicles.props";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ListVehicles(props: iListVehiclesProps) {
  const { vehiculos } = props;

  const [counterVehicles, setCounterVehicles] = useState(9);
  const dataFilteredVehicles = vehiculos?.slice(0, counterVehicles);

  const loadMoreVehicles = () => {
    setCounterVehicles(counterVehicles + 3);
  };

  if (!dataFilteredVehicles || !vehiculos) {
    return;
  }

  return (
    <div>
      <h2 className="text-xl font-bold uppercase mb-3 text-blueInka">
        Ofertas en Autos, SUV's y Pickup's
      </h2>

      <p className="text-grisDarkInka text-justify mb-10 leading-snug">
        Encuentra tu auto entre las más de 14 marcas que tenemos disponibles
        para ti. Podrás evaluar tu financiamiento y simular tu crédito online.
        Comienza el sueño de tu nuevo auto con nosotros.
      </p>

      {vehiculos?.length === 0 && (
        <p className="text-3xl text-center">
          No se han encontrado vehículos con estos filtros
          <Frown className="w-20 h-20 mx-auto" />
        </p>
      )}

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dataFilteredVehicles.map((item: iVehicleCar) => (
          <CardProduct key={item.id} vehicle={item} />
        ))}
      </div>
      <div className="text-center my-8">
        {counterVehicles < vehiculos.length && (
          <Button
            className="p-6 text-white bg-blueInka transition-all duration-150 cursor-pointer rounded-xl hover:bg-blueDarkInka"
            onClick={loadMoreVehicles}
          >
            Ver más modelos
          </Button>
        )}
      </div>
    </div>
  );
}
