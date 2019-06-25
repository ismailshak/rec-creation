import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Host from "../Host/Host";
import Game from "../Game/Game";
import Event from "../Event/Event";
import Search from "../Search/Search";
import CreateGame from "../CreateGame/CreateGame";
import Grid from "../Grid/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <div className="nav-logo-container">
            <Link to="/">
              <img src="Logo.png" alt="Home" className="nav-logo" />
            </Link>
          </div>
          <div className="nav-buttons-container">
            <Link to="../Search" className="nav-buttons">
              Search
            </Link>
            <Link to="../Host" className="nav-buttons">
              Host
            </Link>
            <Link to="../CreateGame" className="nav-buttons">
              Submit Game
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/Host" exact component={Host} />
            <Route path="/Game" exact component={Game} />
            <Route path="/Grid" exact component={Grid} />
            <Route path="/Event" exact component={Event} />
            <Route path="/CreateGame" exact component={CreateGame} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
