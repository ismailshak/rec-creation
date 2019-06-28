import React, { Component } from "react";
import "./User.css";
import axios from "axios";

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    let url = "https://rec-creation-api.herokuapp.com";
    let extentsion = localStorage.userID;
    axios
      .get(url + "/api/users/id/" + extentsion)
      .then(res => this.setState({ user: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="User">
        <div className="user-container">
          {this.state.user.firstName && (
            <div className="user-user-container">
              <div className="user-data-container">
                {this.state.user.firstName && (
                  <div className="user-info-container">
                    <h1>
                      {this.state.user.firstName} {this.state.user.lastName}!
                    </h1>
                    <h3>{this.state.user.email}</h3>
                  </div>
                )}
                <div className="user-hosting-containter">
                  <h3>Hosting</h3>
                  {this.state.user.hosting.map(host => {
                    return <div className="user-hosting-list">{host.name}</div>;
                  })}
                </div>
                <div className="user-hosting-containter">
                  <h3>Attending</h3>
                  {this.state.user.attending.map(attending => {
                    return (
                      <div className="user-attending-list">
                        {attending.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default User;