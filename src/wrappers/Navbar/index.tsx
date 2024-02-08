import Image from "next/image";

import type { OptionalWrapperComponentType } from "@types";

export const Navbar: OptionalWrapperComponentType = () => (
  <div className="fixed h-24 w-full bg-gradient-to-b from-background p-6">
    <div className="h-12 w-full">
      <div className="relative h-full w-40 select-none">
        <Image
          priority
          alt="PrimeflixDB"
          fill={true}
          src={"/PrimeflixDB.svg"}
        />
      </div>
    </div>
  </div>
);
