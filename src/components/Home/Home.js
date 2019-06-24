import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Rec-Creation!</h1>
        <h4>Welcome to Rec-Creation!</h4>
        <p>The place to look up your favorite games and events.</p>
        <button type="button">Host</button>
        <button type="button">Search</button>
      </div>
    );
  }
}

export default Home;
