"use client";
import { useParams } from "next/navigation";

import { GraciasPersonalizado } from "../GraciasPersonalizado";
import { VolverCasa } from "../VolverCasa";

export function GraciasSection() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="max-w-6xl p-4 md:p-10 mx-auto">
      <div className="bg-plomoInka rounded-b-xl pb-8">
        <div className="flex flex-col items-center justify-center h-git gap-5">
          <GraciasPersonalizado slug={`${slug}`} />
          <VolverCasa />
        </div>
      </div>
    </div>
  );
}
