import { TitleSection } from "@/components/TitleSection";
import { FormCotizacion } from "../FormCotizacion";
import { iSideformProps } from "./Sideform.prop";

export function Sideform(props: iSideformProps) {
  const { myCar } = props;
  return (
    <div>
      <TitleSection
        title="Mi Cotización"
        classname="font-headMedium text-3xl text-center uppercase"
      />
      <p className="text-center mt-3 text-lg font-textRegular text-grisInka">
        Estás cotizando en Automotores Inka
      </p>
      <FormCotizacion myCar={myCar} />
    </div>
  );
}
