import Image from "next/image";

import type { OptionalWrapperComponentType } from "@types";

export const Navbar: OptionalWrapperComponentType = () => (
  <div className="flex h-20 w-full items-center justify-center bg-gradient-to-b from-background">
    <div className="tablet:flex hidden select-none">
      <Image
        priority
        alt="PrimeflixDB"
        height={35}
        src={"/PrimeflixDB.svg"}
        width={200}
      />
    </div>
  </div>
);
