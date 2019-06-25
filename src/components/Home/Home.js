import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Popular from "../Popular/Popular";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-info-container">
          <div className="home-text-container">
            <h1>Welcome to Rec|Creation!</h1>
            <p>
              Looking for ideas? Want to host an event? <br />
              Find it all here. Have fun and meet new people! (proper marketing
              intro needed
            </p>
          </div>
        </div>
        <div className="home-buttons-container">
          <Link className="nav-buttons" to="/host">
            Host
          </Link>
          <Link className="nav-buttons" to="/search">
            Search
          </Link>
        </div>

        <Popular games={this.props.games} />
      </div>
    );
  }
}

export default Home;
