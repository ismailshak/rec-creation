import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import axios from "axios";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "75%",
    width: "40%"
  }
};

class Game extends Component {
  constructor() {
    super();
    this.state = {
      gameObj: {},
      modalIsOpen: false
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios
      .get(url + "/api/games/id/" + extension)
      .then(res => this.setState({ gameObj: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="Game">
        <div className="game-container">
          <div className="game-game-container">
            {this.state.gameObj.name && (
              <div className="game-info-container">
                <div className="game-img-title">
                  <img
                    className="image"
                    src={this.state.gameObj.image}
                    alt="icon"
                  />
                  <h1>{this.state.gameObj.name}!</h1>
                </div>
                <div className="game-list">
                  <div>
                    <span className="bold-font">Supplies Needed:</span>
                  </div>
                  <div>
                    <span>{this.state.gameObj.supplies}</span>
                  </div>
                  <div>
                    <span className="bold-font">Number of Player:</span>
                  </div>
                  <div>
                    <span>{this.state.gameObj.players}</span>
                  </div>
                  <div className="button-game-container">
                    <button className="button-game" onClick={this.openModal}>
                      Rules
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="game-event-container">
            <div className="event-list-container">
              {" "}
              <h3>List of events</h3>
              <ul className="event-list">
                {this.state.gameObj.events !== undefined
                  ? this.state.gameObj.events.map(event => {
                      if (event.status) {
                        return (
                          <Link to={"/event/" + event._id}>
                            <li className="game-event-link">
                              <i
                                className="fas fa-circle
                                game-open-event"
                              />
                              {event.name}
                            </li>
                          </Link>
                        );
                      } else {
                        return (
                          <Link to={"/event/" + event._id}>
                            <li className="game-event-link">
                              <i className="fas fa-lock game-closed-event" />
                              {event.name}
                            </li>
                          </Link>
                        );
                      }
                    })
                  : ""}
              </ul>
            </div>
          </div>
        </div>
        <Modal
          className="modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <span>Rules:</span>
          {this.state.gameObj.name && (
            <div className="event-rules-text">{this.state.gameObj.rules}</div>
          )}

          <button className="submit" onClick={this.closeModal}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

export default Game;
