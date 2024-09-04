import {
  BookOpen,
  Briefcase,
  Building,
  Car,
  Cookie,
  Copyright,
  NotebookText,
  Phone,
  Scale,
  Users,
} from "lucide-react";

import { iMenuFooter } from "./MenuFooter.interface";

export const menu_footer: iMenuFooter[] = [
  {
    id: 1,
    title: "Vehículos",
    submenu: [
      {
        id: 1,
        href: "/catalogo",
        label: "Catálogo",
        icon: Car,
      },
    ],
  },
  {
    id: 2,
    title: "Posventa",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Separa tu cita",
        icon: NotebookText,
      },
    ],
  },
  {
    id: 3,
    title: "Nosotros",
    submenu: [
      {
        id: 1,
        href: "/quienes-somos",
        label: "Quiénes somos",
        icon: Users,
      },
      {
        id: 2,
        href: "/ubicanos",
        label: "Ubícanos",
        icon: Building,
      },
      {
        id: 3,
        href: "#",
        label: "Contáctanos",
        icon: Phone,
      },
      {
        id: 4,
        href: "#",
        label: "Trabaja con nosotros",
        icon: Briefcase,
      },
      {
        id: 5,
        href: "#",
        label: "Libro de reclamaciones",
        icon: BookOpen,
      },
    ],
  },
  {
    id: 4,
    title: "Legal",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Copyright",
        icon: Copyright,
      },
      {
        id: 2,
        href: "#",
        label: "Términos y condiciones",
        icon: Scale,
      },
      {
        id: 3,
        href: "#",
        label: "Política de cookies",
        icon: Cookie,
      },
    ],
  },
];
