import React, { Component } from "react";
import "./Host.css";

class Host extends Component {
  render() {
    return (
      <div>
        <h3>Host an Event! Fill out the form belwo.</h3>
        <form>
          <select className="Game">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" name="location" />
          <select className="Type">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" name="participants" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Host;
