import React, { Component } from "react";
import SlideShow from "./SlideShow";
import LoginPage from "./LoginPage";
import PrivateFeed from "./PrivateFeed";

import firebase from "./Firebase.js"; // <--- add this line

export default class Cast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      hasAccess: null
    };
    this.grantAccess = this.grantAccess.bind(this);
  }
  checkAccess() {
    let self = this;
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(
        `feeds/feedNew/${this.props.match.params.id}/members/${currentUser.uid}`
      )
      .once("value", function(snapshot) {
        console.log("has permission");

        self.setState({ hasAccess: true });
      })
      .catch(function(error) {
        var errorCode = error.code;
        if (errorCode === "PERMISSION_DENIED") {
          console.log("no permission");
          self.setState({ hasAccess: false });
        }
      });
  }
  grantAccess() {
    this.setState({ hasAccess: true });
  }
  componentDidMount() {
    let self = this;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
        this.checkAccess();
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    let { loggedIn, hasAccess } = this.state;
    return (
      <div class="cast-wrapper">
        {!loggedIn && <LoginPage castId={this.props.match.params.id} />}
        {!hasAccess &&
          loggedIn && (
            <PrivateFeed
              grantAccess={this.grantAccess}
              castId={this.props.match.params.id}
            />
          )}
        {loggedIn &&
          hasAccess && <SlideShow castId={this.props.match.params.id} />}
      </div>
    );
  }
}
