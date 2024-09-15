"use client";

import { useParams } from "next/navigation";

import { getRouteForModel } from "@/lib/routingDynamic";

import { Error404 } from "@/components/Error404";

import { listModelos } from "@/data/listVehicles";
import { Vehicle } from "../Vehicle";
import { MigajasPan } from "../MigajasPan";

export function SectionVehicle() {
  const router = useParams();
  const modelId = router.modelo;

  const filteredPage = listModelos.find(
    (vehicle) => getRouteForModel(vehicle.name?.toLowerCase()) === modelId
  );

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <MigajasPan
        rutaMarca={`${router.marca}`}
        rutaModelo={`${router.modelo}`}
      />
      {filteredPage ? <Vehicle vehicle={filteredPage} /> : <Error404 />}
    </div>
  );
}
