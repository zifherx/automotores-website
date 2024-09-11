import { TitleSection } from "@/components/TitleSection";
import { data_Copyright } from "./copyright.data";
import { ParrafoSection } from "@/components/ParrafoSection";

export default function CopyrightPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-y-5">
      <TitleSection
        title="Propiedad Intelectual"
        classname="text-center text-blueInka text-2xl font-extrabold uppercase"
      />
      {data_Copyright.map(({ id, title, parrafos }) => (
        <ParrafoSection key={id} title={title} parrafos={parrafos} />
      ))}
    </div>
  );
}
