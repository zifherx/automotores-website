import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/Email-Template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const dataForm = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      // from: `Acme <onboarding@resend.dev>`,
      from: `Bot <frojasq@ziphonex.com>`,
      to: [`${dataForm.email}`],
      subject: `Nueva Cotización`,
      react: EmailTemplate({
        fullname: dataForm.nombres,
        tipoDocumento: dataForm.tipo_documento,
        nroDocumento: dataForm.numero_documento,
        celular: dataForm.celular,
        email: dataForm.email,
        departamento: dataForm.departamento,
        concesionario: dataForm.concesionario,
        intencionCompra: dataForm.intencion_compra,
        checkDatosPersonales: dataForm.checkDatosPersonales,
        checkPromociones: dataForm.checkPromociones,
        brandCar: dataForm.brandCar,
        nameCar: dataForm.nameCar,
        imageCar: dataForm.imageCar,
        priceCar: dataForm.priceCar,
      }),
      text: "Message Cotización",
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
