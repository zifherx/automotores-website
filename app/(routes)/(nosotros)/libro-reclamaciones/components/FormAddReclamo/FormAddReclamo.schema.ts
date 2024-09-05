import { z } from "zod";

export const formSchema = z.object({
  // 1. Datos del Consumidor
  tipo_documento: z.string({ message: "Debe seleccionar una opción." }),
  nro_documento: z
    .string()
    .min(8, { message: "El campo debe contener al menos 8 caracteres." })
    .max(20, { message: "El campo no debe superar los 20 caracteres" }),
  nombres: z.string(),
  apellidos: z.string(),
  email: z.string().email(),
  celular: z.string().max(9),
  departamento: z.string(),
  provincia: z.string(),
  distrito: z.string(),
  direccion: z.string().optional(),
  // 2. Datos del bien adquirido
  tipo_bien: z.enum(["producto", "servicio"]),
  sede_compra: z.string(),
  // moneda: z.enum(["pen", "usd"]),
  moneda: z.string(),
  importe_bien: z.number(),
  descripcion_bien: z.string(),
  // 3. Detalle del reclamo y solicitud del reclamante
  tipo_solicitud: z.enum(["reclamo", "queja"]),
  detalle_solicitud: z.string(),
  pedido_solicitud: z.string(),
  isConforme: z.boolean(),
});
