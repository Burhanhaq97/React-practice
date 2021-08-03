import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
    </>
  );
};

export default App;
