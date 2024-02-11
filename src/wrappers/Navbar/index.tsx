import type { OptionalWrapperComponentType } from "@types";

import {
  Home,
  Logo,
  Movies,
  NavLink,
  People,
  Period,
  Tv,
} from "@components/shared";

export const Navbar: OptionalWrapperComponentType = () => (
  <div className="fixed z-10 h-24 w-full bg-gradient-to-b from-background p-6">
    <div className="flex w-full  items-end">
      <div className="mr-6 flex h-full select-none items-end">
        <Logo />
      </div>

      <div className="flex items-center">
        <NavLink className="flex h-full px-2" href={"/"}>
          <Home />
        </NavLink>

        <Period />

        <NavLink className="flex h-full px-2" href={"/movies"}>
          <Movies />
        </NavLink>

        <Period />

        <NavLink className="mx-2 flex h-full" href={"/tv"}>
          <Tv />
        </NavLink>

        <Period />

        <NavLink className="mx-2 flex h-full" href={"/people"}>
          <People />
        </NavLink>
      </div>
    </div>
  </div>
);
