import { Metadata } from "next";
import { MiCotizacion } from "./components/MiCotizacion";
import { FooterCondiciones } from "./components/FooterCondiciones";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Cotización",
  },
};

export default function CotizadorPage() {
  return (
    <>
      <MiCotizacion />
      <FooterCondiciones />
    </>
  );
}
