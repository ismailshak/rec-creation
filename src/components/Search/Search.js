import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./Search.css";
import Grid from "../Grid/Grid";

class Search extends Component {
  constructor() {
    super()
    this.state = {
      whichInfo: "",
    }
  }

  handleClick = (e) => {
    if(e.target.innerText === "Games") {
      this.setState({whichInfo: "games"})
    } else {
      this.setState({whichInfo: "events"})
    }
    
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
        {this.state.whichInfo === "games" && <Grid data={this.state.whichInfo}/>}
        {this.state.whichInfo === "events" && <Grid data={this.state.whichInfo}/>}
        
        
      </div>
    );
  }
}

export default Search;
