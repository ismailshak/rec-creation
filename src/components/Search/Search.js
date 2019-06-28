import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Search.css";
import Grid from "../Grid/Grid";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      events: [],
      type: props.type,
      searchInput: ""
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    axios
      .get(url + "/api/games")
      .then(res => {
        res.data.forEach(item => (item.hidden = false));
        return res.data;
      })
      .then(final =>
        this.setState({
          games: final
        })
      )
      .catch(err => {
        console.log(err);
      });
    axios
      .get(url + "/api/events")
      .then(res => {
        this.setState({ events: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    let arr = this.state.games;
    // let typed user;

    if (value === "") {
      arr.forEach(game => (game.hidden = false));
      this.setState({ games: arr });
    } else {
      arr.forEach(game => (game.hidden = true));
      this.setState({ games: arr });
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === value) {
        arr[i].hidden = false;
      }
    }
    this.setState({ games: arr });
  };

  render() {
    return (
      <div className="Search">
        <div className="search-header-container">
          <h3 className="search-text">
            {"List of our " + this.state.type + ":"}
          </h3>
          <input
            className="search-input"
            type="text"
            name="search"
            onChange={this.handleChange}
          />
        </div>
        {this.state.type === "games" ? (
          <Route
            render={props => (
              <Grid data={this.state.games} type={this.state.type} {...props} />
            )}
          />
        ) : (
          <Route
            render={props => (
              <Grid
                data={this.state.events}
                type={this.state.type}
                {...props}
              />
            )}
          />
        )}
      </div>
    );
  }
}

export default Search;
