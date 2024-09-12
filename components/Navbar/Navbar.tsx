"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { MenuDesktop } from "../MenuDesktop";
import { MenuMobile } from "../MenuMobile";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-[#F8F8F8] w-full">
      <div className="h-20 flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-7xl">
        <Image
          className="cursor-pointer"
          src="/images/logo-color.png"
          alt="Logo Automotores Inka"
          width={200}
          height={40}
          onClick={() => router.push("/")}
          priority
        />

        <div className="items-center justify-between hidden sm:flex">
          <MenuDesktop />
        </div>

        <div className="flex sm:hidden">
          <MenuMobile />
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-5">
          {/* <Button className="border border-white bg-transparent hover:border-blueDarkInka hover:bg-white hover:text-black">
            Cotiza Aquí
            <Car className="ml-2 w-5 h-5" />
          </Button> */}
          {/* <BtnShorcut icon={Heart} tooltip="Ir al wishlist" /> */}
          {/* <ToggleTheme /> */}
        </div>
      </div>
    </nav>
  );
}
