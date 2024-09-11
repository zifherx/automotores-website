import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { iMigajasProps } from "./MigajasPan.props";

export function MigajasPan(props: iMigajasProps) {
  const { marca } = props;

  return (
    <Breadcrumb>
      <BreadcrumbList className="font-headRegular text-lg">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Catálogo</BreadcrumbPage>
        </BreadcrumbItem>
        {marca !== "" && <BreadcrumbSeparator />}

        {marca && (
          <BreadcrumbItem
            className={
              marca == "dfsk" || marca == "jmc" ? "uppercase" : "capitalize"
            }
          >
            <BreadcrumbPage>{marca}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
