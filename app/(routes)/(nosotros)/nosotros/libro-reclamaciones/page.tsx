import CaratulaReclamacion from "./components/Caratula-Reclamacion/Caratula-Reclamacion";
import { HojaReclamacion } from "./components/Hoja-Reclacion";

export default function LibroReclamacionesPage() {
  return (
    <div className="bg-white max-w-5xl mx-auto p-4 md:p-8">
      <div className="border border-red-400/35 shadow-lg">
        <CaratulaReclamacion />
        <HojaReclamacion />
      </div>
    </div>
  );
}
