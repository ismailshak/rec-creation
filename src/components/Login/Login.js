import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            isValid: true
        }
    }

    handleForm = (e) => {
        e.preventDefault()
        let t = e.target
        if(!t.email.value || !t.password.value) {
            this.setState({isValid: false})
        } else {
            let returnedObj = {
                email: t.email.value,
                password: t.password.value,
            }
            console.log(returnedObj)
            this.props.handleLogin(returnedObj);
            this.setState({isValid: true})
            // this.props.history.push("/")
        }
    }

    render() {
        return (
            <div>
                <div className="signup-text-container">
                        <h3>Fill out the form below!</h3>
                        {!this.state.isValid && <p className="signup-error">fill out all the fields!</p>}
                        {this.props.isLoggedIn && <p>SUCCESS</p>}
                        {!this.props.isLoggedIn && <p>FAILED</p>}
                    </div>
                <form className="" onSubmit={this.handleForm}>
                    Email:
                    <input type="text" name="email"/>
                    Password:
                    <input type="password" name="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;