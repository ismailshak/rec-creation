import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import logo from "./trophy.png";
import Home from "../Home/Home";
import Host from "../Host/Host";
import Game from "../Game/Game";
import Event from "../Event/Event";
import Search from "../Search/Search";
import CreateGame from "../CreateGame/CreateGame";
import Grid from "../Grid/Grid";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import axios from "axios";


let url = "https://rec-creation-api.herokuapp.com"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      events: [],
      userID: localStorage.userID,
      isLoggedIn: false,
      name: ""
    };
  }
  componentDidMount() {

    console.log(this.props)

    if(localStorage.token) {
      this.setState({isLoggedIn: true})
    }


    axios
      .get(url+"/api/games")
      .then(res => {
        this.setState({ games: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  

  handleSignup = (obj) => {
    
    axios.post(url+"/signup", obj)
      .then(res => {
        localStorage.token = res.data.token;
        localStorage.userID = res.data.userID;
        this.setState({ 
          isLoggedIn: true,
          userID: res.data.userID
        })
      })
      .get(url+"/id/"+localStorage.userID)
      .then(res => console.log(res.data))//this.setState({name: res.data.firstName}))
      .catch(err => console.log(err));

  }

  handleLogin = (obj) => {
    axios.post(url+"/api/users/login", obj)
      .then(res => {
        console.log(res)
        localStorage.token = res.data.token;
        localStorage.userID = res.data.userID;
        this.setState({ 
          isLoggedIn: true, 
          userID: res.data.userID 
        });
      })
      .catch(err => console.log(err));
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: false,
      userID: "",
    });
    localStorage.clear();
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <div className="nav-logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </Link>
            <Link to="/">
              <span className="title">Rec|Creation</span>
            </Link>
          </div>
          <div className="nav-buttons-container">
            <Link to="/search/games" className="nav-links">
              Games
            </Link>
            <Link to="/search/events" className="nav-links">
              Events
            </Link>
            <Link to="/host" className="nav-links">
              Host
            </Link>
            <Link to={this.state.isLoggedIn ? "/create-game" : "/login"} className="nav-links">
              Submit Game
            </Link>
            {!this.state.isLoggedIn && <Link to="/login" className="nav-buttons">
              Login
            </Link>}
            {!this.state.isLoggedIn && <Link to="/signup" className="nav-buttons">
              Signup
            </Link>}
            {this.state.isLoggedIn && <span className="nav-greeting">{"Hello, "  + this.state.firstName }</span>}
            {this.state.isLoggedIn && <Link onClick={this.handleLogout} to="/" className="nav-buttons">Logout</Link>}
            
          </div>
        </nav>
        <Switch>
          {this.state.games.length !== 0 && (
            <Route
              path="/"
              exact
              render={props => <Home games={this.state.games} {...props} />}
            />
          )}

          <Route
            path="/search/games"
            exact
            render={props => (
              <Search data={this.state.games} type="games" {...props} />
            )}
          />
          <Route
            path="/search/events"
            exact
            render={props => (
              <Search data={this.state.events} type="events" {...props} />
            )}
          />
          <Route
            path="/host"
            exact
            render={props => <Host games={this.state.games} {...props} isLoggedIn={this.state.isLoggedIn} />}
          />
          <Route path="/game/:id" exact render={props => <Game {...props} />} />
          <Route path="/grid" exact component={Grid} />
          <Route path="/event/:id" exact component={Event} />
          <Route path="/create-game" exact component={CreateGame} />
          <Route path="/login" exact render={props => <Login handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} {...props}/>}/>
          <Route path="/signup" exact render={props => <Signup handleSignup={this.handleSignup} {...props}/>}/>
          {this.state.games.length !== 0 && (
            <Route
              path="/"
              exact
              render={props => <Home games={this.state.games} {...props}/>}
            />
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
