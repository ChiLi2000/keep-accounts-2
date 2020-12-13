import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect}
  from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
      <Nav/>
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return (
    <div>
      <h2>Tags</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>Money</h2>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>Statistics</h2>
    </div>
  );
}

function NoMatch(){
  return (
    <div>
      页面找不到啦
    </div>
  )
}
export default App;
