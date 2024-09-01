import Link from "next/link";
import { iSubmenuItem } from "./SubmenuItem.props";
import { cn } from "@/lib/utils";

export function SubmenuItem(props: iSubmenuItem) {
  const { items } = props;
  const { href, label } = items;

  return (
    <Link
      href={href}
      className={cn(
        `flex text-grisDarkInka items-center justify-start font-light`
      )}
    >
      {label}
    </Link>
  );
}
