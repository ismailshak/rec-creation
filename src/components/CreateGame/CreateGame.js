import React, { Component } from "react";
import "./CreateGame.css";

class CreateGame extends Component {


  handleForm = (e) => {
    e.preventDefault()
    let returnedForm = {
      "name" : e.target.name.value,
      "supplies": e.target.supplies.value,
      "players": parseInt(e.target.players.value),
      "rules": e.target.rules.value,
      "image": e.target.image.value,
    }
    console.log(returnedForm)
  }
  

  render() {
    return (
      <div>
        <h1>CreateGame!</h1>
        <form onSubmit={this.handleForm}>
          Name:
          <input type="text" name="name" />
<<<<<<< HEAD
          Supplies Needed:
          <input type="text" name="supplies" placeholder="pen, paper, etc"/>
          Minimum Number of Players:
          <input type="text" name="players" />
          Image:
          <input type="text" name="image" placeholder="enter image url" />
          Rules:
          <textarea name="rules" />
          {/* <input
=======
          <p>Supplies Needed:</p>
          <input type="text" name="supplies" />
          <p>Number of Players:</p>
          <select id="players">
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>20</option>
          </select>
          {/* <p>21+ ?</p>
          yes
          <input type="radio" id="yes" name="yes" value="yes" />
          no
          <input type="radio" id="no" name="no" value="no" /> */}
          <p>Image:</p>
          <input
>>>>>>> 5615d02fff5b36e9c01c6b16e9d50111744aa988
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
