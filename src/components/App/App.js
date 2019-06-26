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

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }
  componentDidMount() {
    const url = "https://rec-creation-api.herokuapp.com/api/games";

    axios.get(url).then(res => {
      this.setState({ games: res.data });
    })
    .catch((err) => {
        console.log(err)
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
            <Link to="/"><span className="title">Rec|Creation</span></Link>
          </div>
          <div className="nav-buttons-container">
            <Link to="/search" className="nav-links">
              Games
            </Link>
            <Link to="/search" className="nav-links">
              Events
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
          <Switch>
            {this.state.games.length !== 0 && <Route
              path="/"
              exact
              render={props => <Home games={this.state.games} {...props}/>}
            />}
            
            <Route
              path="/search"
              exact
              render={props => <Search games={this.state.games} {...props}/>}
            />
            <Route path="/host" exact render={props => <Host games={this.state.games} {...props}/>} />
            <Route path="/game/:id" exact render={props => <Game {...props}/>} />
            <Route path="/grid" exact component={Grid} />
            <Route path="/event/:id" exact component={Event} />
            <Route path="/create-game" exact component={CreateGame} />
          </Switch>
      </div>
    );
  }
}

export default App;
