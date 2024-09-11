import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { data_sedes } from "./RedAutomotriz.data";
import { CardLocal } from "../CardLocal";

export function TabRedAutomotriz() {
  return (
    <div className="max-w-7xl mx-auto py-6 md:py-10">
      <Tabs defaultValue="chiclayo" className="w-full ">
        <TabsList className="flex items-center p-5 w-fit mx-auto mb-5">
          <TabsTrigger value="chiclayo">Chiclayo</TabsTrigger>
          <TabsTrigger value="chimbote">Chimbote</TabsTrigger>
          <TabsTrigger value="lima">Lima</TabsTrigger>
          <TabsTrigger value="trujillo">Trujillo</TabsTrigger>
        </TabsList>
        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-5 md:gap-x-6">
          {data_sedes.map((item) => (
            <TabsContent key={item.id} value={item.city}>
              <CardLocal params={item} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
