import { MapPin } from "lucide-react";
import { BotonesRedes } from "../BotonesRedes";
import Link from "next/link";

export function EnlacesContacto() {
  return (
    <div className="flex justify-end text-blueDarkInka">
      <Link
        href="/ubicanos"
        className="flex gap-x-2 uppercase font-bold text-sm items-center lg:mr-28"
      >
        <MapPin className="w-4 h-4" strokeWidth={2} />
        Encuentra tu tienda
      </Link>
      <BotonesRedes />
    </div>
  );
}
