import { LucideIcon } from "lucide-react";

export interface iMenuFooter {
  id: number;
  title: string;
  submenu: iSubmenuFooter[];
}

export interface iSubmenuFooter {
  id: number;
  icon?: LucideIcon;
  href: string;
  label: string;
}
