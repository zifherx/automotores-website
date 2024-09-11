import { Filter } from "lucide-react";

export function TitleFilters() {
  return (
    <>
      <h3 className="text-blueInka mb-2 font-bold text-xl uppercase flex flex-row items-center">
        <Filter className="mr-2 w-5 h-5" />
        Filtros
      </h3>
      <div className="h-px bg-blueInka my-1">&nbsp;</div>
    </>
  );
}
