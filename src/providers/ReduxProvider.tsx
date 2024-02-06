"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import type { AppStoreType } from "@redux/store";
import { store } from "@redux/store";

import type { WrapperComponentType } from "@types";

export const ReduxProvider: WrapperComponentType = ({ children }) => {
  const storeRef = useRef<AppStoreType>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
