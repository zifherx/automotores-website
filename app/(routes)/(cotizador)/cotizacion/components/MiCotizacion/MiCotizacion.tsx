"use client";
import { useSearchParams } from "next/navigation";

import { Sideform } from "../SideForm";
import { MyCarSelected } from "../MyCarSelected";

import { getRouteForModel } from "@/lib/routingDynamic";
import { listModelos } from "@/data/listVehicles";

export function MiCotizacion() {
  const searchParams = useSearchParams();
  const modelParam = searchParams.get("modelo");

  const filteredCar = listModelos.find(
    (vehicle) => getRouteForModel(vehicle.name.toLowerCase()) === modelParam
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* <div className="p-10 flex flex-row-reverse md:flex-row justify-between items-center"> */}
      <div className="p-5 md:p-10 flex flex-col-reverse gap-10 md:grid md:grid-cols-2">
        <Sideform myCar={filteredCar} />
        <MyCarSelected myCar={filteredCar} />
      </div>
    </div>
  );
}
