import React, { Component } from "react";
import "./Event.css";
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

class Event extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      editIsOpen: false,
      deleteIsOpen: false
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios
      .get(url + "/api/events/id/" + extension)
      .then(res => this.setState({ event: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  deleteEvent = e => {
    e.preventDefault();
    console.log("deleting");
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios
      .delete(url + "/api/events/delete/" + extension, {
        headers: { Authorization: "bearer " + localStorage.token }
      })
      .then(res => this.setState({ event: res.data }))
      .then(_ => this.props.history.push("/search/events"))
      .catch(err => {
        console.log(err);
      });
  };

  handleEditForm = e => {
    e.preventDefault();
    console.log("editing");
    let url = "https://rec-creation-api.herokuapp.com";
    let extension = this.props.match.params.id;
    axios
      .put(url + "/api/events/edit/" + extension, {
        headers: { Authorization: "bearer " + localStorage.token }
      })
      .then(_ => this.props.history.push("/search/events"))
      .catch(err => {
        console.log(err);
      });
  };

  openEditModal = () => {
    this.setState({ editIsOpen: true });
  };

  openDeleteModal = () => {
    this.setState({ deleteIsOpen: true });
  };

  closeEditModal = () => {
    this.setState({ editIsOpen: false });
  };

  closeDeleteModal = () => {
    this.setState({ deleteIsOpen: false });
  };

  render() {
    return (
      <div className="Event">
        <div className="event-container">
          <div className="event-event-container">
            {this.state.event.name && (
              <div className="event-info-container">
                <h1>{this.state.event.name}!</h1>
                <ul className="game-list">
                  <li>
                    <span className="bold-font">
                      <h3>Host:</h3>
                    </span>
                    {this.state.event.host.firstName}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Location:</h3>
                    </span>
                    {this.state.event.location}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Game:</h3>
                    </span>
                    {this.state.event.game.name}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Type:</h3>
                    </span>
                    {this.state.event.type}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Participants:</h3>
                    </span>
                    {this.state.event.participants}
                  </li>
                  <li>
                    <span className="bold-font">
                      <h3>Description:</h3>
                    </span>
                    {this.state.event.description}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="event-buttons-container">
            <input
              onClick={this.openEditModal}
              type="button"
              className="button"
              value="Edit"
            />
            <input
              onClick={this.openDeleteModal}
              ype="button"
              className="button"
              value="Delete"
            />
            <input
              onClick={this.handleAttend}
              type="button"
              className="button"
              value="Attend"
            />
          </div>
          <div className="event-attending-container" />
        </div>
        <Modal
          className="modal"
          isOpen={this.state.editIsOpen}
          onRequestClose={this.closeEditModal}
          style={customStyles}
        >
          <form className="host-form" onSubmit={this.handleEditForm}>
            Name:{" "}
            <input
              type="text"
              defaultValue={this.state.event.name}
              className="name host-input"
              name="name"
            />
            Game:
            <select className="game host-input" name="gameList">
              <option value="" disabled selected>
                Select an option
              </option>
              {this.props.games.map((game, index) => {
                if (this.state.event.game) {
                  if (game._id === this.state.event.game._id) {
                    return (
                      <option key={index} selected="selected" value={game._id}>
                        {game.name}
                      </option>
                    );
                  } else {
                    return (
                      <option key={index} value={game._id}>
                        {game.name}
                      </option>
                    );
                  }
                }
              })}
            </select>
            Location:
            <input
              type="text"
              defaultValue={this.state.event.location}
              className="location host-input"
              name="location"
            />
            Type:
            <select className="type host-input" name="typeList">
              <option value="" disabled selected>
                Select an option
              </option>
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
            Participants:
            <input
              type="text"
              defaultValue={this.state.event.participants}
              className="participants host-input"
              name="participants"
            />
            Description:
            <textarea
              className="description host-input"
              defaultValue={this.state.event.description}
              rows="10"
              name="description"
            />
            <input type="submit" className="submit" value="Submit" />
          </form>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.deleteIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeDeleteModal}
          style={customStyles}
        >
          <span>Are you sure?</span>
          <div className="yes-no-button-container">
            <button className="yes-no-buttons" onClick={this.deleteEvent}>
              Yes
            </button>
            <button className="yes-no-buttons" onClick={this.closeDeleteModal}>
              No
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Event;
