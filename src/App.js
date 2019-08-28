import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';
import Task from "./pages/Task";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Navbar from './components/navigation/Navbar'
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import store from "./store";

function App() {

  useEffect(() => {
    //Init Materialize
    M.AutoInit();

  })
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <div className="container">
          <aside>test</aside>
          <Switch>
            <Route path="/" exact component={Task} />
            <Route path="/auth" component={Auth} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
