import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./Search.css";
import Game from "../Game/Game";
import Event from "../Event/Event";
import Grid from "../Grid/Grid";

class Search extends Component {
  render() {
    return (
      <div>
        <h1>Search!</h1>
        <Link className="nav-buttons" to="/host">
          Host
        </Link>
        <Link className="nav-buttons" to="/search">
          Search
        </Link>
        <Switch>
          <Redirect path="/Grid" exact component={Grid} />
          <Route path="/Game" exact component={Game} />
          <Route path="/Event" exact component={Event} />
        </Switch>
      </div>
    );
  }
}

export default Search;
