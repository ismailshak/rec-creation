import React, { Component } from "react";
import "./Game.css";
import Event from "../Event/Event";

class Game extends Component {
  render() {
    return (
      <div>
        <img src="IMG.png" alt="Img" />
        <h1>Game!</h1>
        <div>
          <Event />
        </div>
      </div>
    );
  }
}

export default Game;
