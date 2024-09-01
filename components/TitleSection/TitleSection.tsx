import { iTitleProps } from "./TitleSection.props";

export function TitleSection(props: iTitleProps) {
  const { title } = props;

  return (
    <h2 className="text-grisDarkInka uppercase text-xl px-10 md:px-0 md:text-2xl font-extrabold text-center">
      {title}
    </h2>
  );
}
