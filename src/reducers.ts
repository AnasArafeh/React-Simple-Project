import { AddItem } from "./action_types";
import { AddDataToTheTable } from "./function";
import { actionT, stateX } from "./types";

export function reducer(state: stateX, action: actionT): stateX {
  switch (action.type) {
    case AddItem:
      return AddDataToTheTable(state, action);
    default:
      return { ...state };
  }
}
