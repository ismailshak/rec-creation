import React, { Component } from "react";
import "./CreateGame.css";

class CreateGame extends Component {
  constructor() {
    super()
    this.state = {
      isValid: true,
    }
  }

  handleForm = e => {
    e.preventDefault()
    let t = e.target;
    if(!t.name.value || !t.supplies.value || !t.players.value || !t.rules.value || !t.image.value) {
      this.setState({isValid: false})
    } else {
      let returnedForm = {
        name: t.name.value,
        supplies: t.supplies.value,
        players: parseInt(t.players.value),
        rules: t.rules.value,
        image: t.image.value
      };
      console.log(returnedForm);
    }
   
  };

  render() {
    return (
      <div className="CreateGame">
        <div className="create-info-container">
          <div className="create-text-container">
            <h3>Submit A New Game! Fill out the form below.</h3>
            {!this.state.isValid && <p className="create-error">Fill out all the fields!</p>}
          </div>
          <form className="create-form" onSubmit={this.handleForm}>
            Name:
            <input type="text" className="create-input" name="name" />
            Supplies:
            <input type="text" className="create-input" name="supplies" placeholder="pen, paper, etc" />
            Min. Players:
            <input type="text" className="create-input" name="players" />
            Image:
            <input type="text" className="create-input" name="image" placeholder="enter image url" />
            Rules:
            <textarea className="rules create-input" name="rules" />
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateGame;
