import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect}
  from "react-router-dom";
import NoMatch from "./views/Nomatch";
import Money from "./views/Money";
import Tags from "./views/Tags";
import Statistics from "./views/Statistics";

function App() {
  return (
    <Router>
        <Switch>
          <Redirect exact from="/" to="/money"/>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
