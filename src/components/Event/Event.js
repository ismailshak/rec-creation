import React, { Component } from "react";
import "./Event.css";
import axios from "axios";
import Game from "../Game/Game";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      event : {}
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
              </div>
            )}
          </div>
          <div className="event-buttons-container">
            <input type="button" className="button" value="Edit" />
            <input type="button" className="button" value="Delete" />
          </div>
          <div className="game-event-container">
            <Event />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
