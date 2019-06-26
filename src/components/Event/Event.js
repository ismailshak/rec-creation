import React, { Component } from "react";
import "./Event.css";
import axios from "axios";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    // let url = "https://rec-creation-api.herokuapp.com";
    // let extension = this.props.match.params.id;
    // axios
    //   .get(url + "/api/events/events/game/" + extension)
    //   .then(res => this.setState({ events: res.data }))
    //   .catch(err => {
    //     console.log(err);
    //   });
    // console.log(this.state);
  }
  render() {
    // let listEvents = [];
    // for (let i = 0; i < this.state.events.lenght; i++) {
    //   listEvents.push(this.props.events[i]);
    return (
      <div className="Event">
        <div className="event-text-container">
          <h3>List of events</h3>
          <div className="event-info-container">
            <ul className="event-list">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </div>
    );
    // }
  }
}

export default Event;
