import { SubmenuItem } from "../SubmenuItem";

import { menu_footer } from "./MenuFooter.data";

export function MenuFooter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 py-5 md:py-10">
      {menu_footer.map(({ id, submenu, title }) => (
        <div key={id} className="text-grisDarkInka gap-y-5">
          <h2 className="text-lg uppercase font-bold mb-5">{title}</h2>
          {submenu.map((item) => (
            <SubmenuItem key={item.id} items={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
