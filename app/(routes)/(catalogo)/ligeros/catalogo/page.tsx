import type { Metadata } from "next";

import { CatalogoVehicular } from "./components/CatalogoVehicular";
import { listVehicles } from "@/data/listVehicles";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Catálogo",
  },
};

export default function CatalogoPage() {
  return (
    <>
      <CatalogoVehicular vehiculos={listVehicles} />
    </>
  );
}
