/* eslint-disable @next/next/no-img-element */
import { iCardServicios } from "./CardServicios.props";

export function CardServicios(props: iCardServicios) {
  const { id, imageUrl, title } = props;

  return (
    <div className="bg-white rounded-2xl shadow-md w-fit h-[200px] md:w-[220px] md:h-[200px] p-6 hover:shadow-xl transition ">
      <div className="flex flex-col">
        <img
          src={`/images/servicios/${imageUrl}`}
          alt={title}
          className="w-24 mx-auto"
        />
        <h3 className="text-grisDarkInka font-bold text-center mt-5">
          {title}
        </h3>
      </div>
    </div>
  );
}
