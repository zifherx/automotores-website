import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BtnShorcut } from "../BtnShorcut";

export function MenuMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <BtnShorcut icon={Menu} />
      </PopoverTrigger>
      <PopoverContent>
        <p>Option 01</p>
        <p>Option 02</p>
        <p>Option 03</p>
        <p>Option 04</p>
        <p>Option 05</p>
      </PopoverContent>
    </Popover>
  );
}
