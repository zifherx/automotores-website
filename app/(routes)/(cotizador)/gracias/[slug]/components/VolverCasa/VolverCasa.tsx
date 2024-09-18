import Link from "next/link";
import { Home } from "lucide-react";

export function VolverCasa() {
  return (
    <Link href="/" className="flex hover:underline mt-5 hover:text-redDarkInka">
      <Home className="w-5 h-5 mr-2" />
      Volver a la página principal
    </Link>
  );
}
