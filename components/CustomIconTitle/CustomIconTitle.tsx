import { cn } from "@/lib/utils";
import { iCustomIConTitle } from "./CustomIconTitle.props";

export function CustomIconTitle(props: iCustomIConTitle) {
  const { icon: Icon, titleDark, titleLight, className } = props;

  return (
    <div className="flex items-center gap-x-2">
      <div className="p-2 bg-slate-300/20 rounded-lg">
        <Icon className={cn("w-16 h-16", className)} strokeWidth={2} />
      </div>
      <p className={cn("text-3xl uppercase font-bold", className)}>
        {titleDark} <br />
        <span className="font-light">{titleLight}</span>
      </p>
    </div>
  );
}
