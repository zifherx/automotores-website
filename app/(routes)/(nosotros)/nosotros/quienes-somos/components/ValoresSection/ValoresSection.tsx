import { SubtitleSection } from "@/components/SubtitleSection";
import { TitleSection } from "@/components/TitleSection";

import { ValoresCard } from "../ValoresCard";

export function ValoresSection() {
  const subtitle =
    "Te invitamos a vivir nuestros valores, en cada acción y decisión que tomes";

  return (
    <div className="max-5xl mx-auto p-10 md:p-16">
      <TitleSection
        title="Nuestros Valores"
        classname="text-center text-2xl uppercase font-extrabold text-grisDarkInka"
      />
      <SubtitleSection subtitle={subtitle} />
      <ValoresCard />
    </div>
  );
}
