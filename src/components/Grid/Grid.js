import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  render() {
    return (
      <div>
        <h3>{"List of our "+this.props.name}</h3>
        <input type="text" name="search" />
        <button type="button">search</button>
        <div>
          {this.props.data.map((data, index) => {
            return <div><span>{data.name}</span></div>
          })}
        </div>
      </div>
    );
  }
}

export default Grid;
