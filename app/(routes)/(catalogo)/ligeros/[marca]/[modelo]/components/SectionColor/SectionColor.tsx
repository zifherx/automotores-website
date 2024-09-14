"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { TitleSection } from "@/components/TitleSection";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { iSectionColorProps } from "./SectionColor.props";

export function SectionColor(props: iSectionColorProps) {
  const { colores } = props;

  const router = useParams();

  const [selectedColor, setSelectedColor] = useState(colores[0]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-10">
        <TitleSection
          title="Selecciona tu color"
          classname="font-headRegular uppercase text-4xl text-center"
        />
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-8">
              {colores.map((color) => (
                <TooltipProvider key={color.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColor.label === color.label
                            ? "border border-[#E7E7E7]"
                            : "border-8 border-[##E7E7E7]"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color)}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="text-lg font-textRegular">{color.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            <div className="w-full max-w-4xl">
              <Image
                src={`/images/models/${router.marca}/${router.modelo}/variety/${selectedColor.carColor}`}
                className="w-full h-auto hover:drop-shadow-lg"
                width={600}
                height={400}
                alt={`Vehículo ${router.modelo} ${selectedColor.label}`}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
