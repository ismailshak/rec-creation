import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Search.css";
import Grid from "../Grid/Grid";

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
      type: props.type,
      searchInput: ""
    };
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
          <h3 className="search-text">{"List of our "+this.state.type}</h3>
          <input className="search-input" type="text" name="search" onChange={this.handleChange}/>
        </div>
        <Route render={props => <Grid data={this.state.data} type={this.state.type} {...props}/>} />
      </div>
    );
  }
}

export default Search;
