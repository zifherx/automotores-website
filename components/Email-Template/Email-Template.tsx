/* eslint-disable @next/next/no-img-element */
import { CircleCheckBig } from "lucide-react";
import { iEmailTemplateProps } from "./EmailTemplate.props";
import { formatPENPrice, formatUSDPrice } from "@/lib/formatPrice";

const fechaActual = new Date();
const nroCotizacion =
  fechaActual.getFullYear() +
  "" +
  fechaActual.getMonth() +
  "" +
  fechaActual.getDate() +
  "" +
  fechaActual.getHours() +
  "" +
  fechaActual.getMinutes();

export const EmailTemplate: React.FC<Readonly<iEmailTemplateProps>> = ({
  fullname,
  tipoDocumento,
  nroDocumento,
  celular,
  email,
  departamento,
  concesionario,
  intencionCompra,
  checkDatosPersonales,
  checkPromociones,
  brandCar,
  imageCar,
  nameCar,
  priceCar,
}) => (
  <div className="bg-white p-10">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-5">
        <CircleCheckBig className="w-16 h-16 text-green-600" strokeWidth={2} />
        <h2 className="uppercase text-3xl">
          {/* ¡Nueva cotización {new Date().getTime()}! */}
          ¡Nueva cotización {nroCotizacion}!
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="p-5 ml-16">
          <ul className="text-base list-inside list-disc space-y-2">
            <li className="flex justify-between">
              <b className="font-headRegular">Cliente:</b> {fullname}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Tipo Documento:</b>{" "}
              {tipoDocumento}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">N° Documento:</b> {nroDocumento}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Celular:</b> {celular}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Email:</b> {email}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Departamento:</b> {departamento}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Concesionario:</b> {concesionario}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Intención:</b> {intencionCompra}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Uso de Datos Personales:</b>{" "}
              {checkDatosPersonales.toString()}
            </li>
            <li className="flex justify-between">
              <b className="font-headRegular">Autorización a newsletter:</b>{" "}
              {checkPromociones}
            </li>
          </ul>
        </div>

        <div className="text-center ">
          <img className="mx-auto" src={imageCar} alt={nameCar} />
          <p className="text-2xl font-headBold">{brandCar}</p>
          <p className="text-3xl font-headMedium text-redInka">{nameCar}</p>
          <p className="text-xl font-textMedium">
            {formatUSDPrice(priceCar)} | {formatPENPrice(priceCar * 4.1)}
          </p>
        </div>
      </div>
    </div>
  </div>
);
