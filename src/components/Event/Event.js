import React, { Component } from "react";
import "./Event.css";
import axios from "axios";

class Event extends Component {
  constructor(props) {
    super(props);
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
    // let listEvents = [];
    // for (let i = 0; i < this.state.events.lenght; i++) {
    //   listEvents.push(this.props.events[i]);
    return (
      <div className="Event">
        <h1>Hello</h1>
      </div>
    );
    // }
  }
}

export default Event;
