import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import logger from "redux-logger";
import type { Epic, EpicMiddleware } from "redux-observable";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic } from "@redux/epics";
import { reducer } from "@redux/reducer";
import type { UnknownAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

export type EpicMiddlewareType = EpicMiddleware<
  UnknownAction,
  UnknownAction,
  ReduxStateType,
  unknown
>;
export type EpicType = Epic<
  UnknownAction,
  UnknownAction,
  ReduxStateType,
  unknown
>;

const epicMiddleware = createEpicMiddleware();

const appStore = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware).concat(logger),
  reducer,
});

export const store = (): typeof appStore => appStore;

(epicMiddleware as unknown as EpicMiddlewareType).run(rootEpic);

export type AppStoreType = ReturnType<typeof store>;
export type ReduxStateType = ReturnType<AppStoreType["getState"]>;
export type ReduxDispatchType = AppStoreType["dispatch"];

export const useAppDispatch = (): ReduxDispatchType => useDispatch();
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector;
export const useAppStore: () => AppStoreType = useStore;
