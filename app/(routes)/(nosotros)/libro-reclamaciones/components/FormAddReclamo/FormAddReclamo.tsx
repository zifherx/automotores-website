"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./FormAddReclamo.schema";
import Link from "next/link";
import { OctagonAlert } from "lucide-react";

export function FormAddReclamo() {
  const formReclamo = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // 1. Datos del Consumidor
      tipo_documento: "",
      nro_documento: "",
      nombres: "",
      apellidos: "",
      email: "",
      celular: "",
      departamento: "",
      provincia: "",
      distrito: "",
      direccion: "",
      // 2. Datos del bien adquirido
      tipo_bien: "producto",
      sede_compra: "",
      moneda: "",
      importe_bien: 0,
      descripcion_bien: "",
      // 3. Detalle del reclamo y solicitud del reclamante
      tipo_solicitud: "reclamo",
      detalle_solicitud: "",
      pedido_solicitud: "",
      isConforme: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const { isValid } = formReclamo.formState;

  return (
    <Form {...formReclamo}>
      <form onSubmit={formReclamo.handleSubmit(onSubmit)} className="w-full">
        <h2 className="font-bold text-base md:text-lg md:col-span-2">
          1. Identificación del Consumidor Reclamante
        </h2>
        <div className="grid md:grid-cols-2 gap-y-5 gap-x-2 md:gap-y-6 md:gap-x-4 p-1 md:p-2">
          {/* Tipo Documento */}
          <FormField
            control={formReclamo.control}
            name="tipo_documento"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Tipo de Documento</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tipo de documento" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CE">Carnet de Extranjería</SelectItem>
                    <SelectItem value="DNI">DNI</SelectItem>
                    <SelectItem value="RUC">RUC</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nro Documento */}
          <FormField
            control={formReclamo.control}
            name="nro_documento"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Nro de Documento</FormLabel>
                <FormControl>
                  <Input
                    placeholder="DNI"
                    {...field}
                    minLength={8}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nombres */}
          <FormField
            control={formReclamo.control}
            name="nombres"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Dwayne" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Apellidos */}
          <FormField
            control={formReclamo.control}
            name="apellidos"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Jhonson" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Correo Electrónico */}
          <FormField
            control={formReclamo.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Correo Electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="ejemplo@dominio.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Celular */}
          <FormField
            control={formReclamo.control}
            name="celular"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Celular</FormLabel>
                <FormControl>
                  <Input placeholder="999666000" {...field} maxLength={9} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
              {/* Departamento */}
              <FormField
                control={formReclamo.control}
                name="departamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Departamento</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un departamento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ancash">Ancash</SelectItem>
                        <SelectItem value="la_libertad">La Libertad</SelectItem>
                        <SelectItem value="lambayeque">Lambayeque</SelectItem>
                        <SelectItem value="lima">Lima</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Provincia */}
              <FormField
                control={formReclamo.control}
                name="provincia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Provincia</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una provincia" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="chiclayo">Chiclayo</SelectItem>
                        <SelectItem value="lima">Lima</SelectItem>
                        <SelectItem value="santa">Santa</SelectItem>
                        <SelectItem value="trujillo">Trujillo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Distrito */}
              <FormField
                control={formReclamo.control}
                name="distrito"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Distrito</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un distrito" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="chiclayo">Chiclayo</SelectItem>
                        <SelectItem value="chimbote">Chimbote</SelectItem>
                        <SelectItem value="surco">Surco</SelectItem>
                        <SelectItem value="surquillo">Surquillo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Dirección */}
          <FormField
            control={formReclamo.control}
            name="direccion"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-bold">Dirección</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ingresa tu dirección de domicilio"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h2 className="font-bold text-base md:text-lg md:col-span-2 mt-5 md:mt-10">
          2. Identificación del Bien Contratado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 p-2">
          {/* Tipo de Bien */}
          <FormField
            control={formReclamo.control}
            name="tipo_bien"
            render={({ field }) => (
              <FormItem className="space-y-3 col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Tipo de bien</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row space-x-2 items-center"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="producto" />
                      </FormControl>
                      <FormLabel className="font-normal">Producto</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="servicio" />
                      </FormControl>
                      <FormLabel className="font-normal">Servicio</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sucursal */}
          <FormField
            control={formReclamo.control}
            name="sede_compra"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Sede</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una Sede" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CC Boulevard">
                      Chiclayo - CC Boulevard
                    </SelectItem>
                    <SelectItem value="Ex Fundo Iris">
                      Chiclayo - Ex Fundo Iris
                    </SelectItem>
                    <SelectItem value="surco">Lima - Surco</SelectItem>
                    <SelectItem value="surquillo">Lima - Surquillo</SelectItem>
                    <SelectItem value="Cluster">Trujillo - Cluster</SelectItem>
                    <SelectItem value="Motor Plaza">
                      Trujillo - Motor Plaza
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Moneda de Monto */}
          <FormField
            control={formReclamo.control}
            name="moneda"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Moneda</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una moneda" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pen">S/. (PEN)</SelectItem>
                    <SelectItem value="usd">$ (USD)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Monto Reclamado */}
          <FormField
            control={formReclamo.control}
            name="importe_bien"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Monto Reclamado</FormLabel>
                <FormControl>
                  <Input placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Descripción */}
          <FormField
            control={formReclamo.control}
            name="descripcion_bien"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-bold">
                  Descripción de compra
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ingresa el detalle del producto o servicio"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h2 className="font-bold text-base md:text-lg md:col-span-2 mt-5 md:mt-10">
          3. Detalle de la Reclamación y/o Pedido del Consumidor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 p-2">
          {/* Tipo de Solicitud */}
          <FormField
            control={formReclamo.control}
            name="tipo_solicitud"
            render={({ field }) => (
              <FormItem className="space-y-3 col-span-2 md:col-span-1">
                <FormLabel className="font-bold">Tipo de Solicitud</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row space-x-2 items-center"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="reclamo" />
                      </FormControl>
                      <FormLabel className="font-normal">Reclamo</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="queja" />
                      </FormControl>
                      <FormLabel className="font-normal">Queja</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Detalle de Solicitud */}
          <FormField
            control={formReclamo.control}
            name="detalle_solicitud"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-bold">
                  Detalle de Solicitud
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ingresa el detalle del reclamo o queja"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pedido de Solicitud */}
          <FormField
            control={formReclamo.control}
            name="pedido_solicitud"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-bold">Pedido</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ingresa el pedido del reclamo o queja"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Conformidad */}
        <FormField
          control={formReclamo.control}
          name="isConforme"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 col-span-2 my-5 p-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Me encuentro conforme con los términos de mi reclamos y queja
                </FormLabel>
                <FormDescription>
                  Aceptas nuestros{" "}
                  <Link
                    href="/legal/terminos-condiciones"
                    className="hover:text-black hover:font-semibold"
                  >
                    Términos de servicio y Política
                  </Link>{" "}
                  de privacidad.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full md:col-span-2 bg-blueInka"
          disabled={!isValid}
        >
          Generar Reclamo
          <OctagonAlert className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </Form>
  );
}
