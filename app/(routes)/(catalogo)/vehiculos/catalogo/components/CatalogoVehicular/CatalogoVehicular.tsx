"use client";

import { useEffect, useState } from "react";

import { FiltrosCatalogo } from "../FiltrosCatalogo";
import { ListVehicles } from "../ListVehicles";
import { iCatalogoProps } from "./Catalogo.props";
import { iVehicleCar } from "@/interfaces/iVehicler";
import { MigajasPan } from "@/components/MigajasPan";
import { useRouter, useSearchParams } from "next/navigation";

export function CatalogoVehicular(props: iCatalogoProps) {
  const { vehiculos } = props;

  const router = useRouter();

  const searchParams = useSearchParams();
  let marcaFound = searchParams.get("marca");

  const [filteredVehicles, setFilteredVehicles] = useState<iVehicleCar[]>();
  const [filtros, setFiltros] = useState({
    marca: marcaFound ? marcaFound : "",
    carroceria: "",
  });

  useEffect(() => {
    let filtered = vehiculos;

    if (filtros.marca) {
      filtered = filtered.filter((item) => {
        return item.marca.toLowerCase().includes(filtros.marca.toLowerCase());
      });
    }

    if (filtros.carroceria) {
      filtered = filtered.filter((item) => {
        return item.carroceria
          .toLowerCase()
          .includes(filtros.carroceria.toLowerCase());
      });
    }

    setFilteredVehicles(filtered);
  }, [filtros, vehiculos]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFiltros((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFiltros({
      marca: "",
      carroceria: "",
    });
    router.replace("/vehiculos/catalogo");
  };

  return (
    <div className="bg-plomoInka">
      <div className="md:max-w-screen-2xl md:mx-auto p-8 md:p-4">
        <div className="p-4">
          <MigajasPan marca={filtros.marca} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <FiltrosCatalogo
            clearFilter={clearFilters}
            filters={filtros}
            setFilter={handleFilterChange}
          />
          <ListVehicles vehiculos={filteredVehicles} />
        </div>
      </div>
    </div>
  );
}
