import React, { Component } from "react";
import "./CreateGame.css";

class CreateGame extends Component {
  render() {
    return (
      <div>
        <h1>CreateGame!</h1>
        <form>
          <p>Name:</p>
          <input type="text" name="name" />
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
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateGame;
