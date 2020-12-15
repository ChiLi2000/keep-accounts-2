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
import styled from "styled-components";

const AppWrapper = styled.div`
  color: #333;
`
function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

export default App;
