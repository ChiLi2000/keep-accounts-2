import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect}
  from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账</Link>
          </li>
          <li>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>

        <hr />

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
      </div>
    </Router>
  );
}

function Tags() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>Dashboard</h2>
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
