import { iMenuMobile } from "@/interfaces/iMenuMobile";
import { BookOpenText, House, MapPin, Users, Wrench } from "lucide-react";

export const menuMobile: iMenuMobile[] = [
  {
    id: 1,
    title: "Inicio",
    href: "/",
    icon: House,
  },
  {
    id: 2,
    title: "Catálogo",
    href: "/vehiculos/catalogo",
    icon: BookOpenText,
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
