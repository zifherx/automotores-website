import Image from "next/image";

export function BannerBlock() {
  return (
    <div className="max-w-7xl md:mx-auto my-10 mx-6 md:mt-20 bg-blueInka">
      <div className="grid grid-cols-1 md:grid-cols-[60%,1fr] gap-x-0 ">
        <div>
          <Image
            src="/images/servicios/imgBanner.png"
            alt="Banner Separa tu cita"
            width={800}
            height={600}
          />
        </div>
        <div className="my-auto p-10">
          <div className="text-white items-center justify-center">
            <h2 className="text-xl md:text-5xl text-center leading-1 font-bold">
              Gestiona tu Servicio de Taller
            </h2>
            <p className="mt-5 text-sm text-justify leading-tight">
              Ahora puedes agendar, reagendar o cancelar tu cita de
              mantenimiento desde tu computador o dispositivo móvil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
