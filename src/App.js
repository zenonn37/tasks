import React from "react";
import Inbox from "./pages/Inbox";
import About from "./pages/About";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Inbox} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
