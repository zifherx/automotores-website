import { Metadata } from "next";

import { GraciasSection } from "./components/Gracias-Section";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Gracias",
  },
};

export default function GraciasPage() {
  return (
    <>
      <GraciasSection />
    </>
  );
}
