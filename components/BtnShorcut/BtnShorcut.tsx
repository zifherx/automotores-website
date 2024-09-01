import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { iBtnShorcut } from "./BtnShorcut.props";

export function BtnShorcut(props: iBtnShorcut) {
  const { icon: Icon, tooltip } = props;
  return tooltip == null ? (
    <Icon
      className="w-7 h-7 fill-white cursor-pointer"
      color="white"
      strokeWidth={2}
    />
  ) : (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon
            className="w-6 h-6 fill-white cursor-pointer"
            color="white"
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
