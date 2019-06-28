import React, { Component } from "react";
import "./Popular.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Popular extends Component {
  handleClick = id => {
    this.props.history.push("/game/" + id);
  };

  render() {
    let popularGames = [];
    for (let i = 0; i < 4; i++) {
      popularGames.push(this.props.games[i]);
    }

    return (
      <div className="popular">
        <p className="popular-title">Popular</p>
        <div className="popular-divs-container">
          {popularGames.map((game, index) => {
            return (
              <div
                onClick={() => this.handleClick(game._id)}
                className="popular-divs"
                key={index}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="popular-images"
                />
                <span className="popular-caption">{game.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Popular;
