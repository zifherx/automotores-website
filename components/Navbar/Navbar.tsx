"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Heart } from "lucide-react";

import { BtnShorcut } from "../BtnShorcut";
import { ToggleTheme } from "../ToggleTheme";
import { MenuDesktop } from "../MenuDesktop";
import { MenuMobile } from "../MenuMobile";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-blueInka w-full">
      <div className="h-20 flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-7xl">
        <Image
          className="cursor-pointer"
          src="/images/logo_1.png"
          alt="Logo Automotores Inka"
          width={200}
          height={40}
          onClick={() => router.push("/")}
        />

        <div className="items-center justify-between hidden sm:flex">
          <MenuDesktop />
        </div>

        <div className="flex sm:hidden">
          <MenuMobile />
        </div>

        <div className="bg-transparent">
          {/* <div className="flex items-center justify-between gap-2 sm:gap-5"> */}
          {/* <BtnShorcut icon={Heart} tooltip="Ir al wishlist" /> */}
          {/* <ToggleTheme /> */}
        </div>
      </div>
    </nav>
  );
}
