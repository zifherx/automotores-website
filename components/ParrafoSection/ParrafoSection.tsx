import { TitleSection } from "@/components/TitleSection";
import { iParrafoSection } from "./ParrafoSection.props";

export function ParrafoSection(props: iParrafoSection) {
  const { title, parrafos } = props;

  return (
    <div>
      {title !== "" && (
        <TitleSection
          title={title}
          classname="text-blueInka mb-4 text-lg text-left font-extrabold"
        />
      )}

      <div className="text-base font-normal flex flex-col gap-y-5 leading-7 text-justify text-grisDarkInka">
        {parrafos.map(({ parrafo }, index) => (
          <p key={index}>{parrafo}</p>
        ))}
      </div>
    </div>
  );
}
