import React, { Component } from "react";
import "./Host.css";

class Host extends Component {
  constructor() {
    super()
    this.state = {
      host: null
    }
  }
 
  handleForm = (e) => {
    e.preventDefault()
    let returnedForm = {
      "name" : e.target.name.value,
      "host": this.state.host,
      "location": e.target.location.value,
      "game": e.target.gameList.value,
      "type": e.target.typeList.value,
      "status": true
    }
    console.log(returnedForm)
  }

  render() {
    return (
      <div className="Host">
        <div className="host-info-container">
        <h3>Host an Event! Fill out the form below.</h3>
            Game
          <form className="host-form" onSubmit={this.handleForm}>
            Name:
            <input type="text" name="name" />
            <select className="Game" name="gameList">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            Location
            <input type="text" className="location" name="location"/>
            Type
            <select className="Type" name="typeList">
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
            Number of Participants
            <input type="text" className="participants" name="participants"/>
            Description
            <textarea name="description" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Host;
