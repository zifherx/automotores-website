import Link from "next/link";

export function TextCopyright() {
  const actualYear = new Date().getFullYear();

  return (
    <div className="flex items-center justify-between text-xs text-grisDarkInka">
      <span className="text-left">
        &copy; {actualYear} SOCIEDAD AUTOMOTORES INKA S.A.C.
      </span>
      <span className="uppercase text-right">
        DISEÑADO POR &nbsp;
        <Link href="https://ziphonex.com" className="font-bold">
          Ziphonex
        </Link>
      </span>
    </div>
  );
}
