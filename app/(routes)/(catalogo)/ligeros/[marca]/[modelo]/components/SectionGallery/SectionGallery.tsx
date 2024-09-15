/* eslint-disable @next/next/no-img-element */
import { useParams } from "next/navigation";

import { iSectionGalleryProps } from "./SectionGallery.props";
import { TitleSection } from "@/components/TitleSection";

export function SectionGallery(props: iSectionGalleryProps) {
  const { galeria } = props;
  const router = useParams();

  return (
    <div className="max-w-6xl mx-auto p-2">
      <TitleSection
        title="Galería"
        classname="font-headRegular uppercase text-4xl text-center my-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        {galeria.map(({ id, imageUrl, name }) => (
          <div key={id}>
            <img
              className="rounded-lg transition-all hover:scale-105 lg:hover:scale-125"
              src={`/images/models/${router.marca}/${router.modelo}/gallery/${imageUrl}`}
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
