import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { iMigajasPanProps } from "./MigajasPan.props";

export function MigajasPan(props: iMigajasPanProps) {
  const { rutaMarca, rutaModelo } = props;

  return (
    <Breadcrumb className="mb-8 md:mb-0">
      <BreadcrumbList className="headRegular text-lg">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-grisInka hover:text-black">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/ligeros/catalogo">
            Catalogo Ligeros
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={`/ligeros/catalogo?marca=${rutaMarca}`}
            className="capitalize"
          >
            {rutaMarca}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{rutaModelo}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
