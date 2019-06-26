import React, { Component } from "react";
import "./Game.css";
import Event from "../Event/Event";
import axios from "axios";

class Game extends Component {
  constructor() {
    super()
    this.state = {
      gameObj: {}
    }
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios.get(url+"/api/games/id/"+extension)
      .then(res => this.setState({gameObj: res.data}))
      .catch((err) => {
        console.log(err)
    })
  }

  render() {
    return (
      <div>
        {this.state.gameObj.name && (
          <div>
        
        <img src={this.state.gameObj.image} alt="icon" />
        <h1>{this.state.gameObj.name}!</h1>
        <ul>
          <li>Supplies Needed: {this.state.gameObj.supplies}</li>
          <li>Number of Player: {this.state.gameObj.players}</li>
          <li>Rules: {this.state.gameObj.rules}</li>
        </ul>
        </div>
        )}
        <div>
          <Event />
        </div>
      </div>
    );
  }
}

export default Game;
