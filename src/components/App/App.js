import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import logo from "./trophy.png";
import Home from "../Home/Home";
import Host from "../Host/Host";
import Game from "../Game/Game";
import Event from "../Event/Event";
import Search from "../Search/Search";
import CreateGame from "../CreateGame/CreateGame";
import Grid from "../Grid/Grid";
import axios from "axios";
// import "../loader";
import Popular from "../Popular/Popular";

class App extends Component {
  componentDidMount() {
    const url = "";

    axios.get(url).then(res => {
      let exercise = res.data;
      this.setState({ exercise: exercise });
    });
  }
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <div className="nav-logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </Link>
            <span className="title">Rec|Creation</span>
          </div>
          <div className="nav-buttons-container">
            <Link to="/search" className="nav-links">
              Search
            </Link>
            <Link to="/host" className="nav-links">
              Host
            </Link>
            <Link to="/create-game" className="nav-links">
              Submit Game
            </Link>
            <Link to="/login" className="nav-buttons">
              Login
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/host" exact component={Host} />
            <Route path="/game" exact component={Game} />
            <Route path="/grid" exact component={Grid} />
            <Route path="/event" exact component={Event} />
            <Route path="/create-game" exact component={CreateGame} />
          </Switch>
          {/* <div className="Popular">
            <Popular />
          </div> */}
        </main>
      </div>
    );
  }
}

export default App;
