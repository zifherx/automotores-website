import { iDepartamento } from "@/interfaces/iUbicacion";

export const listDepartamentos: iDepartamento = {
  ancash: [
    { id: 1, name: "SAI Meiggs 1", value: "sai-meiggs-1" },
    { id: 2, name: "SAI Meiggs 2", value: "sai-meiggs-2" },
  ],
  lambayeque: [
    { id: 1, name: "SAI Boulevard", value: "sai-boulevard" },
    { id: 2, name: "SAI Panamericana", value: "sai-panamericana" },
  ],
  la_libertad: [{ id: 1, name: "SAI Cluster", value: "sai-cluster" }],
  lima: [
    { id: 1, name: "SAI Angamos", value: "sai-angamos" },
    { id: 2, name: "SAI Ayacucho", value: "sai-ayacucho" },
  ],
};
