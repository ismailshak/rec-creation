import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Search.css";
import Game from "../Game/Game";
import Event from "../Event/Event";

class Search extends Component {
  render() {
    return (
      <div>
        <h1>Search!</h1>
        <button type="button">Game</button>
        <button type="button">Event</button>
        <Switch>
          <Route path="/Game" exact component={Game} />
          <Route path="/Event" exact component={Event} />
        </Switch>
      </div>
    );
  }
}

export default Search;
