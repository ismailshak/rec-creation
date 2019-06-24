import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Host from "../Host/Host";
import Game from "../Game/Game";
import Event from "../Event/Event";
import Search from "../Search/Search";
import CreateGame from "../CreateGame/CreateGame";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">
            <img src="Logo.png" alt="Home" />
          </Link>

          <Link to="../Search">Search</Link>
          <Link to="../Host">Host</Link>
          <Link to="../CreateGame">Submit Game</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/Host" exact component={Host} />
            <Route path="/Game" exact component={Game} />
            <Route path="/Event" exact component={Event} />
            <Route path="/CreateGame" exact component={CreateGame} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
