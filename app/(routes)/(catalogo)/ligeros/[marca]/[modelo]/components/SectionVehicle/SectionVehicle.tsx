"use client";

import { useParams } from "next/navigation";

import { getRouteForModel } from "@/lib/routingDynamic";

import { listModelos } from "@/data/listVehicles";
import { Vehicle } from "../Vehicle";
import { Error404 } from "@/components/Error404";

export function SectionVehicle() {
  const router = useParams();
  const modelId = router.modelo;

  const filteredPage = listModelos.find(
    (vehicle) => getRouteForModel(vehicle.name?.toLowerCase()) === modelId
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      {filteredPage ? <Vehicle vehicle={filteredPage} /> : <Error404 />}
    </div>
  );
}
