import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Home.css";
import Popular from "../Popular/Popular";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-info-container">
          <div className="home-text-container">
            <span className="home-intro-title">Welcome to Rec|Creation!</span>
            <span className="home-intro-text">
              Looking for ideas? Want to host an event?<br/>
              Find it all here. Have fun and meet new people! (proper marketing
              intro needed
            </span>
          </div>
        </div>
        <div className="home-buttons-container">
          <Link className="nav-buttons" to="/host">
            Host
          </Link>
          <Link className="nav-buttons" to="/search/games">
            Games
          </Link>
          <Link className="nav-buttons" to="/search/events">
            Events
          </Link>
        </div>

        <Route path="/" render={props => <Popular games={this.props.games}  {...props}/>} />
      </div>
    );
  }
}

export default Home;
