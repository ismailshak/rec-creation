import React, { Component } from "react";
import "./Game.css";
import Event from "../Event/Event";

class Game extends Component {
  render() {
    return (
      <div>
        <img src="IMG.png" alt="Img" />
        <h1>Game!</h1>
        <li>
          <ul>Supplies Needed:</ul>
          <ul>Number of Player:</ul>
          <ul>21+?</ul>
          <ul>Rules/Instruction</ul>
        </li>
        <div>
          <Event />
        </div>
      </div>
    );
  }
}

export default Game;
