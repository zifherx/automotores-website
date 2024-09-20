import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { iFeaturesVehicleProps } from "./FeaturesVehicle.props";
import { cn } from "@/lib/utils";

export function FeaturesVehicle(props: iFeaturesVehicleProps) {
  const { features } = props;
  const { features1, features2 } = features;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="py-16">
        <Tabs defaultValue="features1" className="w-full mx-auto">
          <TabsList className="w-fit md:w-[400px] mx-auto mb-10 grid grid-cols-2 text-lg font-headRegular">
            <TabsTrigger value="features1">Potencia y Motor</TabsTrigger>
            <TabsTrigger value="features2">Especificaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="features1">
            <p className="text-center text-3xl md:text-4xl font-headRegular text-grisDarkInka mb-10">
              Potencia y Motor
            </p>
            <div className="grid grid-cols-4 gap-1 md:gap-8 items-center">
              {features1.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-center gap-y-1",
                    index === 4 ? "border-none" : "border-r border-r-black"
                  )}
                >
                  <p className="text-xs md:text-sm md:font-textRegular">
                    {item.superTitle}
                  </p>
                  <p className="text-2xl md:text-5xl font-textRegular text-grisDarkInka">
                    {item.mainTitle}
                  </p>
                  <p className="text-xs md:text-sm md:font-textMedium">
                    {item.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="features2">
            <p className="text-center text-3xl md:text-4xl font-headRegular text-grisDarkInka mb-10">
              Especificaciones
            </p>
            <div className="grid grid-cols-4 gap-1 md:gap-8 items-center">
              {features2.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-center gap-y-1",
                    index === 4 ? "border-none" : "border-r border-r-black"
                  )}
                >
                  <p className="text-xs md:text-sm md:font-textRegular">
                    {item.superTitle}
                  </p>
                  <p className="text-2xl md:text-5xl font-textRegular text-grisDarkInka">
                    {item.mainTitle}
                  </p>
                  <p className="text-xs md:text-sm md:font-textMedium">
                    {item.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
