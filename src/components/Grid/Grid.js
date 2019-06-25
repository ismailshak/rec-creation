import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Grid.css";
import Game from "../Game/Game";
import Event from "../Event/Event";

class Grid extends Component {
  render() {
    return (
      <div>
        <input type="text" name="search" />
        <button type="button">search</button>
        <Switch>
          <Route path="/Game" exact component={Game} />
          <Route path="/Event" exact component={Event} />
        </Switch>
      </div>
    );
  }
}

export default Grid;
