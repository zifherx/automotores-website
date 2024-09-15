import { TitleSection } from "@/components/TitleSection";
import { FormCotizacion } from "../FormCotizacion";

export function Sideform() {
  return (
    <div>
      <TitleSection
        title="Mi Cotización"
        classname="font-headMedium text-3xl text-center uppercase"
      />
      <p className="text-center mt-3 text-lg font-textRegular text-grisInka">
        Estás cotizando en Automotores Inka
      </p>
      <FormCotizacion />
    </div>
  );
}
