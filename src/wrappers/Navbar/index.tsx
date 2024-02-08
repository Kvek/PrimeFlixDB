import Image from "next/image";

import type { OptionalWrapperComponentType } from "@types";

import { AuthCta } from "./ui/AuthCta";

export const Navbar: OptionalWrapperComponentType = () => (
  <div className="flex h-20 w-full bg-gradient-to-b from-background p-4">
    <div className="flex h-10 w-full">
      <div className="hidden h-full flex-1 select-none tablet:flex">
        <div className="flex h-full w-full justify-center">
          <div className="relative flex w-52 items-end">
            <Image
              priority
              alt="PrimeflixDB"
              fill={true}
              src={"/PrimeflixDB.svg"}
            />
          </div>
        </div>
      </div>

      <nav className="flex">
        <AuthCta />
      </nav>
    </div>
  </div>
);
