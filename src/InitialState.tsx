import React from "react";

import { contextT, stateX } from "./types";

export const initialState: stateX = {
  statex: [
    {
      id: 1,
      name: "anas",
      mobile: "0755555",
      address: "khalda",
    },
    {
      id: 2,
      name: "ayman",
      mobile: "076666666",
      address: "amman",
    },
    {
      id: 3,
      name: "arafeh",
      mobile: "078888888",
      address: "jordan",
    },
  ],
};

export const LessonsContext = React.createContext<contextT>({
  state: initialState,
  dispatch: null,
});
