import React, { Component } from "react";
import "./Host.css";

class Host extends Component {
  render() {
    return (
      <div className="Host">
        <div className="host-info-container">
          <form className="host-form">
            <h3>Host an Event! Fill out the form below.</h3>
            Game
            <select className="Game">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            Location
            <input type="text" className="location" />
            Type
            <select className="Type">
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
            Number of Participants
            <input type="text" className="participants" />
            Discription
            <textarea name="participants" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Host;
