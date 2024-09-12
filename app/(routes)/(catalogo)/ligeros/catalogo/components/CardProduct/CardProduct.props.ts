export interface iCardProduct {
  vehicle: iVehicleCar;
}

export interface iVehicleCar {
  id: number;
  image_url: string;
  carroceria: string;
  marca: string;
  modelo: string;
  precio: number;
  isEntrega48H: boolean;
  isGLP: boolean;
  isGas: boolean;
  isActive: boolean;
}
