import { TitleSection } from "@/components/TitleSection";
import { ParrafoSection } from "@/components/ParrafoSection";

import { data_TerminosCondiciones } from "./terminos.data";

export default function TerminosCondicionesPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-y-5">
      <TitleSection
        title="Términos y condiciones de la Web"
        classname="text-center text-blueInka text-2xl font-extrabold uppercase"
      />

      {data_TerminosCondiciones.map(({ id, title, parrafos }) => (
        <ParrafoSection key={id} title={title} parrafos={parrafos} />
      ))}
    </div>
  );
}
