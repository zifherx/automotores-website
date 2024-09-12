import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "",
    default: "Probando",
  },
};

export default function PageInternaModelo() {
  return (
    <div className="max-w-7xl mx-auto border-2 border-purple-400 p-8">
      <p>Migajas de pan</p>
      <p>Banner de marca y portada</p>
      <p>Descripción del producto</p>
      <p>Caracterísiticas principal con tabs</p>
      <p>Ficha Técnica</p>
      <p>Galeria</p>
      <p>Call to Action</p>
    </div>
  );
}
