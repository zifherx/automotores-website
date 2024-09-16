import { EmailTemplate } from "@/components/Email-Template";

const datos = {
  fullname: "Fernando Rojas",
  tipoDocumento: "DNI",
  nroDocumento: "70365832",
  celular: "924063422",
  email: "frojasq@ziphonex.com",
  departamento: "La_Libertad",
  concesionario: "sai-cluster",
  intencionCompra: "este-mes",
  checkDatosPersonales: true,
  checkPromociones: "yes",
  //unidad
  brandCar: "Baic",
  nameCar: "X35",
  imageCar: "/images/models/baic/new-x35.png",
  priceCar: 14990,
};

export default function NuevaCotizacionPage() {
  return (
    <>
      <EmailTemplate
        fullname={datos.fullname}
        tipoDocumento={datos.tipoDocumento}
        nroDocumento={datos.nroDocumento}
        celular={datos.celular}
        email={datos.email}
        departamento={datos.departamento}
        concesionario={datos.concesionario}
        intencionCompra={datos.intencionCompra}
        checkDatosPersonales={datos.checkDatosPersonales}
        checkPromociones={datos.checkPromociones}
        brandCar={datos.brandCar}
        nameCar={datos.nameCar}
        imageCar={datos.imageCar}
        priceCar={datos.priceCar}
      />
    </>
  );
}
