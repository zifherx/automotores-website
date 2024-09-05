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
        href: "/posventa/mantenimiento",
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
        href: "/nosotros/quienes-somos",
        label: "Quiénes somos",
        icon: Users,
      },
      {
        id: 2,
        href: "/nosotros/ubicanos",
        label: "Ubícanos",
        icon: Building,
      },
      {
        id: 3,
        href: "/nosotros/contactanos",
        label: "Contáctanos",
        icon: Phone,
      },
      {
        id: 4,
        href: "https://pe.computrabajo.com/sociedad%20de%20automotores%20inka%20sac/empleos",
        label: "Trabaja con nosotros",
        icon: Briefcase,
      },
      {
        id: 5,
        href: "/nosotros/libro-reclamaciones",
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
        href: "/legal/copyright",
        label: "Copyright",
        icon: Copyright,
      },
      {
        id: 2,
        href: "/legal/terminos-condiciones",
        label: "Términos y condiciones",
        icon: Scale,
      },
      {
        id: 3,
        href: "/legal/politica-cookies",
        label: "Política de cookies",
        icon: Cookie,
      },
    ],
  },
];
