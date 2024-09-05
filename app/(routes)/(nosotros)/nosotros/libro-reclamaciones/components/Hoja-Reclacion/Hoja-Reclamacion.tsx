import { Label } from "@/components/ui/label";
import { FormAddReclamo } from "../FormAddReclamo";

export function HojaReclamacion() {
  let diaDeHoy = new Date();

  const fechaHoy = diaDeHoy.toLocaleDateString("es-pe", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const horaHoy = diaDeHoy.toLocaleTimeString("es-pe", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const nroReclamo = diaDeHoy.getTime();

  return (
    <div className="bg-white p-2 md:p-6">
      <div className="flex items-center justify-between pb-5">
        <div className="flex justify-start gap-x-8 md:gap-x-24 ">
          <div className="flex flex-col gap-y-1">
            <Label
              htmlFor="fechaReclamo"
              className="font-bold capitalize text-lg"
            >
              Fecha
            </Label>
            <Label id="fechaReclamo" className="text-base">
              {fechaHoy}
            </Label>
          </div>

          <div className="flex flex-col gap-y-1">
            <Label
              htmlFor="horaReclamo"
              className="font-bold capitalize text-lg"
            >
              Hora
            </Label>
            <Label id="horaReclamo" className="text-base">
              {horaHoy}
            </Label>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-y-1">
          <Label htmlFor="nroReclamo" className="font-bold capitalize text-lg">
            N° Reclamo
          </Label>
          <Label id="nroReclamo" className="text-base">
            HR-{nroReclamo}
          </Label>
        </div>
      </div>

      <FormAddReclamo />
    </div>
  );
}
