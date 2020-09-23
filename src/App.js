import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import Alumni from "./components/pages/Alumni";
import PastEvents from "./components/pages/PastEvents";
import JoinUs from "./components/pages/JoinUs";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/alumni' component={Alumni} />
            <Route exact path='/pastevents' component={PastEvents} />
            <Route exact path='/joinus' component={JoinUs} />
            <Route exact path='/team' component={Team} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
