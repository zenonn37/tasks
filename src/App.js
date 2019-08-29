import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './styles/style.css';
import Task from "./pages/Task";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Navbar from './components/navigation/Navbar'
import SideBar from './components/side/SideBar';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import store from "./store";
import ProjectModal from './components/ProjectModal';

function App() {

  useEffect(() => {
    //Init Materialize
    M.AutoInit();

  })
  return (
    <Provider store={store}>
      <Router history={history}>

        <div className="app">
          <Navbar />
          <main className="main-content">
            <SideBar />
            <ProjectModal />
            <div className="content">
              <div className="container">
                <Switch>
                  <Route path="/" exact component={Task} />
                  <Route path="/auth" component={Auth} />
                  <Route path="/about" component={About} />
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>



    </Provider>
  );
}

export default App;
