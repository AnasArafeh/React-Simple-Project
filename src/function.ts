import { AddItem } from "./action_types";
import { actionT, stateX } from "./types";

export const AddDataToTheTable = (state: stateX, action: actionT) => {
  return {
    ...state,
    statex: [...state.statex, action.payload],
  };
};
