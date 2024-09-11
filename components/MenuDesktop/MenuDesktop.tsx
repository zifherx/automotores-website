"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ListItem } from "../ListItem";

import { listBrands } from "@/data/listBrands";
import { headerMenu_1 } from "./MenuDesktop.data";

export function MenuDesktop() {
  const bolsa_trabajo =
    "https://pe.computrabajo.com/sociedad%20de%20automotores%20inka%20sac/empleos";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent text-white text-lg"
              )}
            >
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white text-lg">
            Vehículos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:grid-cols-2">
              {listBrands.map(({ id, brand, href }) => (
                <ListItem key={id} href={href} title={brand} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white text-lg">
            Nosotros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/nosotros/quienes-somos" title="Nuestra Empresa">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/nosotros/ubicanos" title="Ubícanos">
                Sección dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href={bolsa_trabajo} title="Bolsa de Trabajo">
                Productos complementarios como tazas, molinillos, prensasa, etc.
              </ListItem>
              <ListItem
                href="/nosotros/libro-reclamaciones"
                title="Libro de Reclamaciones"
              >
                Productos complementarios como tazas, molinillos, prensasa, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white text-lg">
            Posventa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {headerMenu_1.map(({ id, title, description, href }) => (
                <ListItem key={id} title={title} href={href}>
                  {description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
