import { TitleSection } from "@/components/TitleSection";
import { ParrafoSection } from "@/components/ParrafoSection";

import { data_accesibilidad } from "./accesibilidad.data";

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-y-5">
      <TitleSection
        title="Accesibilidad"
        classname="text-center text-blueInka text-2xl font-extrabold uppercase"
      />

      {data_accesibilidad.map(({ id, title, parrafos }) => (
        <ParrafoSection key={id} title={title} parrafos={parrafos} />
      ))}
    </div>
  );
}
