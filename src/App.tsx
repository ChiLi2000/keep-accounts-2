import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect}
  from "react-router-dom";
import Layout from "./components/Layout";


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

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
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
