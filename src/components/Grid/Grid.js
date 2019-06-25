import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
        <input type="text" name="search" />
        <button type="button">search</button>
      </div>
    );
  }
}

export default Grid;
