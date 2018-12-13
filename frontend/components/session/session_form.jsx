import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.runDemoLogin = this.runDemoLogin.bind(this);

    this.state = {
      username: "Username",
      password: "Password"
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username === "Username" ? "" : this.state.username,
      password: this.state.password === "Password" ? "" : this.state.password
    };
    this.props.processForm(user);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearInput(e) {
    switch (e.target.name) {
      case "username":
        this.state.username === "Username" ? this.setState({username: ""}) : null
        break;
      case "password":
        this.state.password === "Password" ? this.setState({password: ""}) : null
        break;
      default:
        null
    }
  }

  runDemoLogin(e) {
    if (e.target.name === "demoLogin") {
      e.preventDefault();
      const user = {
        username: "GuestLogin",
        password: "123456",
        email: "demologinemail@eventfull.com",
        first_name: "Guest",
        last_name: "GuestLN"
      };
      this.props.processForm(user);
    }
  }

  renderErrors(type) {
    if (this.props.errors && this.props.errors.length !== 0) {
      const usernameInput = document.getElementById("loginFormUsernameInput");
      const passwordInput = document.getElementById("loginFormPasswordInput");
      usernameInput.classList.remove("inputFieldErrorStyling");
      passwordInput.classList.remove("inputFieldErrorStyling");
      const usernameErrors = [];
      const passwordErrors = [];
      this.props.errors.forEach( error => {
        if (error.includes("Username")){
          usernameErrors.push(error);
          usernameInput.classList.add("inputFieldErrorStyling");
        } else if (error.includes("Password")) {
          passwordErrors.push(error);
          passwordInput.classList.add("inputFieldErrorStyling");
        } else {
          usernameErrors.push(error);
          usernameInput.classList.add("inputFieldErrorStyling");
          passwordInput.classList.add("inputFieldErrorStyling");
        }
      });
      if (type === "username") {
        return this.renderUsernameErrors(usernameErrors);
      } else {
        return this.renderPasswordErrors(passwordErrors);
      }
    }
  }

  renderUsernameErrors(errors) {
    const errorStr = errors.join(", ");
    return (
      <p className="loginErrors">{errorStr}</p>
    );
  }

  renderPasswordErrors(errors) {
    const errorStr = errors.join(", ");
    return (
      <p className="loginErrors">{errorStr}</p>
    );
  }

  componentWillUnmount(){
    this.props.clearSessionErrors();
  }

  render() {
    const loginGetStartedText = ( this.props.formtype === "signup" ? "Let's get started" : "Welcome back");
    const headerText = ( this.props.formtype === "signup" ? "sign up" : "log in");
    const buttonText = ( this.props.formtype === "signup" ? "Sign Up" : "Log In");
    const demoLoginButton = ( this.props.formtype === "signup" ? null :
      <input
        onClick={this.runDemoLogin}
        type="submit"
        name="demoLogin"
        value="Demo Login">
      </input>);

    return (
      <div className="loginContainer">
        <p className="loginIcon">e</p>
        <p className="loginGetStartedText">{loginGetStartedText}</p>
        <p className="loginExplanationText">Enter your username and password to {headerText}.</p>
        <form onSubmit={this.handleSubmit} className="loginForm">
          <label>
            <input
              type="text"
              id="loginFormUsernameInput"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              onClick={this.clearInput} />
            <br/>
            {this.renderErrors("username")}
          </label>
          <label>
            <input
              type="password"
              id="loginFormPasswordInput"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              onClick={this.clearInput} />
            <br/>
            {this.renderErrors("password")}
          </label>
          <input type="submit" value={buttonText}></input>
          {demoLoginButton}
        </form>
      </div>
    );
  }
}

export default SessionForm;
