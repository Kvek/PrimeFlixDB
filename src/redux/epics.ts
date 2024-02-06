import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";

import type { EpicType } from "@redux/store";

export const rootEpic: EpicType = (action$, store$, dependencies) =>
  (combineEpics() as unknown as EpicType)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );
