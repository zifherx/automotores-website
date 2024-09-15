export interface iDepartamento {
  [key: string]: iConcesionario[];
}

export interface iConcesionario {
  id: number;
  name: string;
  value: string;
}
