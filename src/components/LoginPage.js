import React, { Component } from "react";
import firebase from "./Firebase.js"; // <--- add this line

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const self = this;
    firebase
      .auth()
      .signInAnonymouslyAndRetrieveData()
      .catch(function(error) {})
      .then(function(user) {
        var user = firebase.auth().currentUser;

        if (user != null) {
          user
            .updateProfile({
              displayName: self.state.name
            })
            .then(function() {})
            .catch(function(error) {});
        }
      });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    let { name } = this.state;
    return (
      <div class="login-container">
        <img class="logo" src="/../src/assets/logo.png" />

        <div class="login-wrapper">
          <form class="login-form" onSubmit={this.handleSubmit}>
            <div>
              <p class="welcome">Welcome to Wedcast</p>
              <p class="get-started">
                To get started we'll just need your name.
              </p>
            </div>
            <input
              class="name-input"
              type="text"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <input class="submit-name-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
