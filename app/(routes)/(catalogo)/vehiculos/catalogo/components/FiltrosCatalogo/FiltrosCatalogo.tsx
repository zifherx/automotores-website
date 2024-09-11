import { Button } from "@/components/ui/button";
import { TitleFilters } from "../TitleFilters";
import { iFilterProps } from "./iFilter.interface";
import { Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { listBrands } from "@/data/listBrands";
import { listCarroceria } from "@/data/listChasis";

export function FiltrosCatalogo(props: iFilterProps) {
  const { clearFilter, setFilter, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilter(filter, value);
  };

  return (
    <div className="bg-white border border-grisInka/35 rounded-lg w-full lg:w-[300px] p-4 h-fit">
      <TitleFilters />
      <div className="mt-8 flex flex-col lg:justify-start gap-8 lg:gap-y-5">
        <div>
          <h4 className="text-lg font-headMedium mb-2 text-blueInka">Marca</h4>
          <Select
            onValueChange={(value) => handleFilter("marca", value)}
            value={filters.marca}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una marca" />
            </SelectTrigger>
            <SelectContent>
              {listBrands
                .filter((item) => item.isActive)
                .map(({ id, value, brand }) => (
                  <SelectItem
                    key={id}
                    value={value}
                    className="capitalize font-textMedium"
                  >
                    {brand}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h4 className="text-lg font-headMedium mb-0 text-blueInka">
            Carrocería
          </h4>
          <Select
            onValueChange={(value) => handleFilter("carroceria", value)}
            value={filters.carroceria}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una carrocería" />
            </SelectTrigger>
            <SelectContent>
              {listCarroceria.map(({ id, label, value }) => (
                <SelectItem
                  key={id}
                  value={value}
                  className="capitalize font-textMedium"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Button
          className="bg-blueInka font-semibold uppercase mt-5 w-full hover:bg-blueDarkInka"
          onClick={clearFilter}
        >
          Borrar Filtros
          <Trash className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
