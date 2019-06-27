import React, { Component } from "react";
import "./Event.css";
import axios from "axios";
import Game from "../Game/Game";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      event: {}
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios
      .get(url + "/api/events/id/" + extension)
      .then(res => this.setState({ event: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Event">
        <div className="event-container">
          <div className="event-event-container">
            {this.state.event.name && (
              <div className="event-info-container">
                <h1>{this.state.event.name}!</h1>
                <ul className="game-list">
                  <li>
                    <span className="bold-font">
                      <h3>Host:</h3>
                    </span>
                    {this.state.event.host.firstname}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Location:</h3>
                    </span>
                    {this.state.event.location}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Game:</h3>
                    </span>
                    {this.state.event.game.name}
                    {this.state.event.game.supplies}
                    {this.state.event.game.players}
                    {this.state.event.game.rules}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Type:</h3>
                    </span>
                    {this.state.event.type}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="event-buttons-container">
            <input type="button" className="button" value="Edit" />
            <input type="button" className="button" value="Delete" />
            <input type="button" className="button" value="Attend" />
          </div>
          <div className="event-attending-container" />
        </div>
      </div>
    );
  }
}

export default Event;
