import { iDepartamento } from "@/interfaces/iUbicacion";

export const listDepartamentos: iDepartamento = {
  ancash: [
    {
      id: 1,
      name: "SAI Meiggs 1",
      value: "sai-meiggs-1",
      direccion: "Av. Enrique Meiggs 1085",
    },
    {
      id: 2,
      name: "SAI Meiggs 2",
      value: "sai-meiggs-2",
      direccion: "Av. Enrique Meiggs 1144",
    },
  ],
  lambayeque: [
    {
      id: 1,
      name: "SAI Boulevard",
      value: "sai-boulevard",
      direccion: "C.C. Boulevard: Av. Mariscal Nieto N°480",
    },
    {
      id: 2,
      name: "SAI Panamericana",
      value: "sai-panamericana",
      direccion: "Av. Panamericana N° 4200 - Ex fundo iris",
    },
  ],
  la_libertad: [
    {
      id: 1,
      name: "SAI Cluster",
      value: "sai-cluster",
      direccion: "Au. Panamericana 1320 - Víctor Larco",
    },
  ],
  lima: [
    {
      id: 1,
      name: "SAI Angamos",
      value: "sai-angamos",
      direccion: "Av. Angamos N°1669 - Surquillo",
    },
    {
      id: 2,
      name: "SAI Ayacucho",
      value: "sai-ayacucho",
      direccion: "Av. Ayacucho N°126 – Surco",
    },
  ],
};
