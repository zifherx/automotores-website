import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BtnShorcut } from "../BtnShorcut";
import { menuMobile } from "@/data/menuMobile";
import Link from "next/link";

export function MenuMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <BtnShorcut icon={Menu} />
      </PopoverTrigger>
      <PopoverContent className="p-2">
        {menuMobile.map(({ id, href, icon: Icon, title }) => (
          <div
            key={id}
            className="flex flew-col items-center pl-3 py-3 hover:bg-blueInka hover:rounded-r-xl hover:text-white"
          >
            <Link
              href={href}
              className="flex flew-row items-center text-lg cursor-pointer"
            >
              <Icon className="w-5 h-5 mr-2" />
              {title}
            </Link>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
