import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import Grid from "../Grid/Grid";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichInfo: "",
      events: [],
      games: props.games
    };
  }

  handleClick = e => {
    if (e.target.innerText === "Games") {
      this.setState({ whichInfo: "games" });
    } else {
      this.setState({ whichInfo: "events" });
    }
  };

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com/"
    axios.get(url+"api/events")
      .then(res => {
        this.setState({ events: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="search-info-container">
          <h1>Search!</h1>
          <Link className="nav-buttons" onClick={this.handleClick}>
            Games
          </Link>
          <Link className="nav-buttons" onClick={this.handleClick}>
            Events
          </Link>
        </div>
        {this.state.whichInfo === "games" && (
          <Grid data={this.state.games} type="games" />
        )}
        {this.state.whichInfo === "events" && (
          <Grid data={this.state.events} type="events" />
        )}
      </div>
    );
  }
}

export default Search;
