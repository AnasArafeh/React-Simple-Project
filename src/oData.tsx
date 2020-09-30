import React from "react";
import { Link, Route } from "react-router-dom";

import dataT, { contextT, stateX } from "./types";

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

export const DataContext = React.createContext<contextT>({
  state: initialState,
  dispatch: null,
});

export function OriginalData() {
  return (
    <Link to="/Table">
      <button>Submit</button>
    </Link>
  );
}
