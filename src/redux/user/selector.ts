import type { ReduxStateType } from "@redux/store";

import type { UserStateInterface } from "./slice";

export const selectUser = ({ user }: ReduxStateType): UserStateInterface =>
  user;

export const selectAuthenticated = ({
  user: { authenticated },
}: ReduxStateType): boolean => authenticated;
