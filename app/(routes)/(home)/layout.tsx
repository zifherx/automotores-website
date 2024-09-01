import { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BtnWhatsapp } from "@/components/BtnWhatsapp";

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BtnWhatsapp />
      <Footer />
    </>
  );
}
