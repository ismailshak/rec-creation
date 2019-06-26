import React, { Component } from "react";
import "./Host.css";

class Host extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host: null,
      games: props.games,
      isValid: true,
    }
  }
 
  handleForm = (e) => {
    e.preventDefault()
    let t = e.target;
    if(!t.name.value || !t.location.value || !t.gameList.value || !t.typeList.value) {
      this.setState({isValid: false})
    } else {
      
      let returnedForm = {
        "name": t.name.value,
        "host": this.state.host,
        "location": t.location.value,
        "game": t.gameList.value,
        "type": t.typeList.value,
        "status": true
      }
      console.log(returnedForm)
      this.setState({isValid: true})
    }
  }

  render() {
    return (
      <div className="Host">
        <div className="host-info-container">
          <div className="host-text-container">
            <h3>Host an Event! Fill out the form below.</h3>
            {!this.state.isValid && <p className="host-error">Fill out all the fields!</p>}
          </div>
          
          <form className="host-form" onSubmit={this.handleForm}>
            Name: <input type="text" className="name host-input" name="name" />
            Game:
            <select className="game host-input" name="gameList">
              {this.state.games.map((game, index) => {
                return <option key={index}>{game.name}</option>
              })}
              
            </select>
            Location:
            <input type="text" className="location host-input" name="location"/>
            Type:
            <select className="type host-input" name="typeList">
              <option value="" disabled selected>Select an option</option>
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
            Participants:
            <input type="text" className="participants host-input" name="participants"/>
            Description:
            <textarea className="description host-input" rows="10" name="description" />
            <input type="submit" className="submit" value="Submit"/>
          </form>
          
        </div>
      </div>
    );
  }
}

export default Host;
