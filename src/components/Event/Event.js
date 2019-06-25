import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  render() {
    return (
      <div>
        <h1>Event!</h1>
        <div>
          <form>
            <p>Name:</p>
            <input type="text" name="name" />
            <p>Email:</p>
            <input type="email" name="email" />
            <p>Age:</p>
            <input type="text" name="age" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Event;
