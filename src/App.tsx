import React, { useReducer, useContext } from "react";
import Nav from "./nav";
import InsertData from "./form";
import TableName from "./Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import dataT, { actionT, contextT, stateX } from "./types";
import { DataContext, initialState } from "./oData";
//export const AddData = createContext();
/*<Route path="/types" exact component={DataTypes} />*/
function App() {
  const OldData = useContext(DataContext);
  function reducer(state: stateX, action: actionT): stateX {
    switch (action.type) {
      case "add":
        return {
          ...state,
          statex: [...state.statex, action.payload],
        };
      default:
        return { ...state };
    }
  }

  // state: {
  //   id: action.payload.id,
  //   name: action.payload.name,
  //   mobile: action.payload.mobile,
  //   address: action.payload.address,
  // },
  // I need to make the initial state as an object of an item and this item should be an array not the object it self to be an array
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {" "}
      <DataContext.Provider value={{ state, dispatch }}>
        <Router>
          {/* <InsertData />
          <TableName /> */}
          <Nav />
          <Switch>
            <Route path="/Table" exact component={TableName} />
            <Route path="/form" exact component={InsertData} />
          </Switch>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
