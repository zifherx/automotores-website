import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { redes_sociales } from "./Redes.data";

export function BotonesRedes() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {redes_sociales.map(({ href, icon: Icon, id, name }) => (
        <TooltipProvider key={id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={href}
                target="_blank"
                className="rounded-full bg-blueInka w-fit p-2 flex justify-center"
              >
                <Icon className="w-5 h-5 text-white" strokeWidth={2} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Ir a {name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
