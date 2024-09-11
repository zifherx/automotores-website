import { TitleSection } from "@/components/TitleSection";
import { TabRedAutomotriz } from "./components/TabRedAutomotriz";

export default function UbicanosPage() {
  return (
    <div className="p-6">
      <TitleSection
        title="RED AUTOMOTRIZ DE AUTOMOTORES INKA"
        classname="text-center text-2xl uppercase font-extrabold text-grisDarkInka"
      />
      <TabRedAutomotriz />
    </div>
  );
}
