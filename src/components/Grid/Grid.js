import React, { Component } from "react";
import "./Grid.css";
import logo from "../App/trophy.png";

class Grid extends Component {
  handleClick = id => {
    if (this.props.type === "games") {
      this.props.history.push("/game/" + id);
    } else {
      this.props.history.push("/event/" + id);
    }
  };

  render() {
    return (
      <div className="Grid">
        <div className="grid-div-container">
          {this.props.data.map((data, index) => {
            if (this.props.type === "games") {
              if (data.hidden === false) {
                return (
                  <div
                    onClick={() => this.handleClick(data._id)}
                    className="grid-div"
                    key={index}
                  >
                    <img src={data.image} alt={data.name} />
                    <span className="grid-caption">{data.name}</span>
                  </div>
                );
              }
            } else {
              return (
                <div
                  onClick={() => this.handleClick(data._id)}
                  className="grid-div-event"
                  key={index}
                >
                  <span className="grid-caption">{data.name}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Grid;
