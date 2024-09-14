"use client";

import Link from "next/link";
import { iFichaTecnicaProps } from "./FichaTecnica.props";
import { Download } from "lucide-react";

export function FichaTecnica(props: iFichaTecnicaProps) {
  const { href } = props;

  return (
    <div className="mx-auto w-fit">
      <Link
        href={href}
        target="_blank"
        className="py-2 px-4 rounded-xl bg-[#F1F5F9]  flex items-center font-headRegular text-black text-lg hover:bg-redInka hover:text-white transition-all"
      >
        <Download className="w-5 h-5 mr-2" strokeWidth={2} />
        Ficha Técnica
      </Link>
    </div>
  );
}
