import { cn } from "@/lib/utils";
import { iTitleProps } from "./TitleSection.props";

export function TitleSection(props: iTitleProps) {
  const { title, classname } = props;

  return <h2 className={cn("font-headBold", classname)}>{title}</h2>;
}
