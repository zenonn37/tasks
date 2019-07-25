import React from "react";
import Inbox from "./pages/Inbox";
import About from "./pages/About";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <header className="App-header">
            <h1>Task</h1>
          </header>
          <Route path="/" exact component={Inbox} />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
