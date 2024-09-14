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

export interface iListModels {
  id?: number;
  modelos: iModelCar;
}

export interface iModelCar {
  id: number;
  name: string;
  imageBase: string;
  marca: iMarca;
  carroceria: iCarroceria;
  versiones: iVersion[];
  colores: iColor[];
  precioBase: number;
  features: iFeatures;
  ficha_tecnica: string;
  gallery: iGallery[];
  isEntrega48H: boolean;
  isGLP: boolean;
  isActive: boolean;
}

export interface iGallery {
  id: number;
  name: string;
  imageUrl: string;
}

export interface iFeatures {
  features1: iFeature[];
  features2: iFeature[];
}

export interface iFeature {
  superTitle: string;
  mainTitle: string;
  subTitle: string;
}

export interface iMarca {
  id: number;
  name: string;
  imageUrl: string;
  portadaUrl: string;
}

export interface iCarroceria {
  id: number;
  name: string;
}

export interface iVersion {
  id: number;
  codVersion: string;
  version: string;
  precio: number;
  imageUrl: string;
}

export interface iColor {
  id: number;
  label: string;
  hex: string;
  carColor: string;
  isActive: boolean;
}
