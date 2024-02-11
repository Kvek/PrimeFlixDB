"use client";

import { useAppSelector } from "@redux/store";
import { selectAuthenticated } from "@redux/user/selector";

import type { OptionalWrapperComponentType } from "@types";

import { Login, Logout } from "@components/shared";

export const AuthCta: OptionalWrapperComponentType = () => {
  const authenticated = useAppSelector(selectAuthenticated);

  return (
    <div className="flex w-[80px] items-end justify-center">
      {authenticated ? <Logout /> : <Login />}
    </div>
  );
};
