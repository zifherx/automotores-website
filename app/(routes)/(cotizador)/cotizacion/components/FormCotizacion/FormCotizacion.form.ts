import { z } from "zod";

export const formCotizacionSchema = z.object({
  nombres: z.string().min(3).max(50),
  // tipo_documento: z.enum(["DNI","RUC","Carnet de Extranjeria","Pasaporte"]),
  tipo_documento: z.string(),
  numero_documento: z.string().min(8).max(20),
  email: z.string().email(),
  celular: z.string().length(9),
  departamento: z.string(),
  concesionario: z.string(),
  intencion_compra: z.string(),
  checkDatosPersonales: z.boolean(),
  checkPromociones: z.string(),
});
