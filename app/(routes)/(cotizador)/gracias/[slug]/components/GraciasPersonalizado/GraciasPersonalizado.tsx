import { useState } from "react";
import Image from "next/image";

import { probando } from "@/app/actions";
import { iGraciasPersonalizadoProps } from "./Gracias.props";

export function GraciasPersonalizado(props: iGraciasPersonalizadoProps) {
  const { slug } = props;
  const [email, setEmail] = useState("");

  async function mainData() {
    const query = await probando(slug);
    if (query?.email !== undefined) {
      setEmail(query.email);
    }
  }

  mainData();

  return (
    <div className="text-center">
      <Image
        src={`/images/portada/banner_subaru_1.png`}
        alt="Portada Gracias"
        width={900}
        height={600}
        className="mb-10 object-cover w-full"
      />
      <h1 className="text-xl md:text-2xl uppercase font-textItalicBold mb-2">
        ¡Su solicitud ha sido enviada con éxito! 🎉
      </h1>
      <p className="text-grisDarkInka font-textRegular text-sm md:text-base">
        En breve nos pondremos en contacto contigo al correo suministrado{" "}
        {email}.
      </p>
      <p className="mt-2 md:mt-5 text-grisDarkInka font-textRegular text-sm md:text-base">
        Gracias por confiar en Automotores Inka
      </p>
    </div>
  );
}
