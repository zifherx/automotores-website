export interface iCardProduct {
  vehicle: iCardVehicular;
}

export interface iCardVehicular {
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
