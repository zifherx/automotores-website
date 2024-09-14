import { BannerVehicle } from "../BannerVehicle";
import { CotizaAhora } from "../CotizaAhora";
import { FeaturesVehicle } from "../FeaturesVehicle";
import { FichaTecnica } from "../FichaTecnica/FichaTecnica";
import { SectionColor } from "../SectionColor";
import { SectionGallery } from "../SectionGallery";
import { iVehicleProps } from "./Vehicle.props";

export function Vehicle(props: iVehicleProps) {
  const { vehicle } = props;

  return (
    <>
      <BannerVehicle
        marca={vehicle.marca.name}
        modelo={vehicle.name}
        imagenBase={vehicle.imageBase}
      />
      <FeaturesVehicle features={vehicle.features} />
      <FichaTecnica href={vehicle.ficha_tecnica} />
      <SectionColor colores={vehicle.colores} />
      <SectionGallery galeria={vehicle.gallery} />
      <CotizaAhora modelo={vehicle.name} imagenBase={vehicle.imageBase} />
    </>
  );
}
