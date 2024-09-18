import Link from "next/link";
import Image from "next/image";

import { iCotizaAhoraProps } from "./CotizaAhora.props";
import { RevealElement } from "@/components/RevealElement";
import { PencilLine } from "lucide-react";

export function CotizaAhora(props: iCotizaAhoraProps) {
  const { imagenBase, modelo } = props;

  return (
    <div className="p-0 lg:p-6 max-w-7xl mx-auto my-14 lg:my-24">
      <div className="bg-black rounded-xl p-6 relative lg:p-24">
        <RevealElement
          position="bottom"
          className="flex lg:absolute lg:-right-28 top-0 lg:top-0 "
        >
          <Image
            className="mx-auto"
            src={`/images/models/${imagenBase}`}
            alt={modelo}
            width={600}
            height={600}
          />
        </RevealElement>

        <div className="lg:max-w-lg lg:flex gap-x-6 mx-auto lg:mx-0">
          <div className="text-white flex flex-col gap-3 text-center lg:text-left">
            <div className="">
              <p className="text-lg font-textRegular">
                ¿Aún no estás seguro de cotizar?
              </p>
              <h3 className="text-2xl">
                ¡Entérate de información exclusiva sobre este {modelo}!
              </h3>
            </div>

            <Link
              href="#"
              className="py-2 px-3 bg-transparent mx-auto lg:mx-0 flex items-center rounded-xl text-lg w-fit font-headMedium border-2 border-white hover:bg-white hover:text-black"
            >
              <PencilLine className="w-5 h-5 mr-2" />
              Cotizar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
