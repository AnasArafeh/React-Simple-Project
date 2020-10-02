import React, { useReducer } from "react";
import Nav from "./nav";
import InsertData from "./form";
import TableName from "./Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { reducer } from "./reducers";
import { initialState, LessonsContext } from "./InitialState";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {" "}
      <LessonsContext.Provider value={{ state, dispatch }}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/Table" exact component={TableName} />
            <Route path="/form" exact component={InsertData} />
          </Switch>
        </Router>
      </LessonsContext.Provider>
    </div>
  );
}

export default App;
