import { iSubtitle } from "./SubtitleSection.props";

export function SubtitleSection(props: iSubtitle) {
  const { subtitle } = props;
  return (
    <p className="max-w-lg mt-5 text-center mx-auto text-sm md:text-base leading-tight text-grisDarkInka ">
      {subtitle}
    </p>
  );
}
