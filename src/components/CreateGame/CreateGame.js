import React, { Component } from "react";
import "./CreateGame.css";

class CreateGame extends Component {
  handleForm = e => {
    e.preventDefault();
    let returnedForm = {
      name: e.target.name.value,
      supplies: e.target.supplies.value,
      players: parseInt(e.target.players.value),
      rules: e.target.rules.value,
      image: e.target.image.value
    };
    console.log(returnedForm);
  };

  render() {
    return (
      <div>
        <h1>CreateGame!</h1>
        <form className="create-form" onSubmit={this.handleForm}>
          Name:
          <input type="text" name="name" />
          Supplies Needed:
          <input type="text" name="supplies" placeholder="pen, paper, etc" />
          Minimum Number of Players:
          <input type="text" name="players" />
          Image:
          <input type="text" name="image" placeholder="enter image url" />
          Rules:
          <textarea name="rules" />
          {/* <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          /> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateGame;
