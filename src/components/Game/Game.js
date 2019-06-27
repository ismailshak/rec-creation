import React, { Component } from "react";
import "./Game.css";
import Event from "../Event/Event";
import axios from "axios";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameObj: {}
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios
      .get(url + "/api/games/id/" + extension)
      .then(res => this.setState({ gameObj: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Game">
        <div className="game-container">
          <div className="game-info-container">
            {this.state.gameObj.name && (
              <div>
                <img
                  className="image"
                  src={this.state.gameObj.image}
                  alt="icon"
                />
                <h1>{this.state.gameObj.name}!</h1>
                <ul className="game-list">
                  <li>
                    <span className="bold-font">
                      <h3>Supplies Needed:</h3>
                    </span>
                    {this.state.gameObj.supplies}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Number of Player:</h3>
                    </span>
                    {this.state.gameObj.players}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Rules:</h3>
                    </span>
                    {this.state.gameObj.rules}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="game-event-container">
            <Event />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
