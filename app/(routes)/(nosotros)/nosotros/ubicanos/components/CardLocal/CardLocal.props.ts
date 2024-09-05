export interface iCardUbicanos {
  id: number;
  city: string;
  sedeImage: string;
  sedeName: string;
  sedeAddress: string;
  scheduleRegular: string;
  scheduleExtended: string;
  linkHowArrived: string;
}

export interface iTabContent {
  params: iCardUbicanos;
}
