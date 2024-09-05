import Image from "next/image";

export default function CaratulaReclamacion() {
  return (
    <div className="bg-plomoInka text-black flex flex-col md:flex-row items-center gap-x-5 p-4">
      <Image
        src={`/images/logo_2.png`}
        alt="Logo Empresa"
        width={200}
        height={40}
      />
      <h1 className="font-bold text-center md:text-left text-lg sm:text-xl md:text-2xl">
        Libro de Reclamaciones Digital - Automotores Inka SAC
      </h1>
    </div>
  );
}
