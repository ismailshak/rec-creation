import React, { Component } from "react";
import "./Grid.css";

class Grid extends Component {

  handleClick = (id) => {
    this.props.history.push("/game/"+id)
  }

  render() {
    return (
      <div className="Grid">
        <div className="grid-div-container">
          {this.props.data.map((data, index) => {
            return <div onClick={() => this.handleClick(data._id)} className="grid-div" key={index}>
                <img src={data.image} alt={data.name} />
                <span className="grid-caption">{data.name}</span>
              </div>
          })}
        </div>
      </div>
    );
  }
}

export default Grid;
