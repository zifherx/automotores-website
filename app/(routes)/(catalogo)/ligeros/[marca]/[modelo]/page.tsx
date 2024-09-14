import type { Metadata } from "next";
import { SectionVehicle } from "./components/SectionVehicle";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Modelo",
  },
};

export default function PageInternaModelo() {
  return (
    <>
      <SectionVehicle />
    </>
  );
}
