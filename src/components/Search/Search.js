import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Search.css";
import Grid from "../Grid/Grid";
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.data.map(item => {
        return {
          hidden: false,
          ...item,
        }
      }),
      games: [],
      events: [],
      type: props.type,
      searchInput: ""
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com"
    axios
    .get(url+"/api/games")
    .then(res => {
      this.setState({ games: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  axios
    .get(url+"/api/events")
    .then(res => {
      this.setState({ events: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange = (event) => {
    console.log(event.target.value)
    let data = this.state.data
    for(let i = 0; i < data.length; i++) {
      if(data[i].person.indexOf(event.target.value) !== -1) {
        data[i].hidden = false;
      } else {
        data[i].hidden = true;
      }
    }
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    return (
      <div className="Search">
        <div className="search-header-container">
          <h3 className="search-text">{"List of our "+this.state.type+":"}</h3>
          <input className="search-input" type="text" name="search" onChange={this.handleChange}/>
        </div>
        {this.state.type === "games" 
        ? <Route render={props => <Grid data={this.state.games} type={this.state.type} {...props}/>} /> 
        : <Route render={props => <Grid data={this.state.events} type={this.state.type} {...props}/>} />}
      </div>
    );
  }
}

export default Search;
