import { formatPENPrice, formatUSDPrice } from "@/lib/formatPrice";
import { iMyCarSelectedProp } from "./MyCarSelected.props";

export function MyCarSelected(props: iMyCarSelectedProp) {
  const { myCar } = props;

  const tc = 4.1;

  if (!myCar) return <p>No se seleccionó modelo</p>;

  return (
    <div className="flex flex-col md:pt-24">
      <div className="sticky top-0 z-20 text-center">
        <img
          className="object-cover w-full hover:drop-shadow-lg "
          src={`/images/models/${myCar?.imageBase}`}
          alt={myCar.name.toUpperCase()}
        />
        <p className="uppercase font-headRegular text-3xl">
          {myCar.marca.name} - {myCar?.name}
        </p>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-headBold">
            {formatUSDPrice(myCar.precioBase)}
          </p>
          <p className="mx-2 text-3xl font-headLight">|</p>
          <p className="text-2xl font-headBold">
            {formatPENPrice(myCar.precioBase * tc)}
          </p>
        </div>
      </div>
    </div>
  );
}
