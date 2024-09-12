import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { iBtnShorcut } from "./BtnShorcut.props";
import { cn } from "@/lib/utils";

export function BtnShorcut(props: iBtnShorcut) {
  const { className, icon: Icon, tooltip } = props;
  return tooltip === null ? (
    <Icon className={cn("w-7 h-7 cursor-pointer", className)} strokeWidth={2} />
  ) : (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon
            className={cn("w-7 h-7 cursor-pointer", className)}
            strokeWidth={2}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
