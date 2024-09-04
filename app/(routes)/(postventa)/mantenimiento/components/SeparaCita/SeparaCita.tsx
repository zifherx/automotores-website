import { CustomIconTitle } from "@/components/CustomIconTitle";
import { Button } from "@/components/ui/button";
import {
  Building,
  Building2,
  Calendar,
  CalendarCheck,
  MapPin,
} from "lucide-react";

export function SeparaCita() {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-x-5 md:mb-20">
      <div className="shadow-[0_0_10px_0_rgba(0,0,0,0.5)] transition flex flex-col p-6">
        <CustomIconTitle
          icon={CalendarCheck}
          titleDark="Agenda"
          titleLight="tu cita"
          className="text-blueInka"
        />

        <div className="grid grid-cols-2 items-center mt-5">
          <p className="max-w-xs">
            Ubica el taller más cercano y agenda tu cita indicando fecha y hora
            aquí
          </p>

          <Button className="bg-blueInka text-white w-fit mx-auto shadow-lg hover:bg-blueDarkInka">
            Agenda aquí
            <Calendar className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <div className="hidden shadow-[0_0_10px_0_rgba(0,0,0,0.5)] transition p-6">
        <CustomIconTitle
          icon={Building2}
          titleDark="Encuentra"
          titleLight="tu taller"
          className="text-blueInka"
        />

        <div className="grid grid-cols-2 items-center mt-5">
          <p className="max-w-xs">
            Ubica el taller más cercano y agenda tu cita indicando fecha y hora
            aquí
          </p>

          <Button className="bg-blueDarkInka text-white w-fit mx-auto hover:bg-blueDarkInka">
            Ubica tu taller
            <MapPin className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
