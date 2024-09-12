import { iMenuMobile } from "@/interfaces/iMenuMobile";
import { Car, House, MapPin, Truck, Users, Wrench } from "lucide-react";

export const menuMobile: iMenuMobile[] = [
  {
    id: 1,
    title: "Inicio",
    href: "/",
    icon: House,
  },
  {
    id: 2,
    title: "Catálogo de Ligeros",
    href: "/ligeros/catalogo",
    icon: Car,
  },
  {
    id: 2,
    title: "Catálogo de Camiones",
    href: "/camiones/catalogo",
    icon: Truck,
  },
  {
    id: 3,
    title: "Quiénes Somos",
    href: "/nosotros/quienes-somos",
    icon: Users,
  },
  {
    id: 4,
    title: "Ubícanos",
    href: "/nosotros/ubicanos",
    icon: MapPin,
  },
  {
    id: 5,
    title: "Separa tu cita",
    href: "/posventa/mantenimiento",
    icon: Wrench,
  },
];
