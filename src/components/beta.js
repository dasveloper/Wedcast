import React, { Component } from "react";
import firebase from "./Firebase.js"; // <--- add this line

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      error: null,
      success: null
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    event.preventDefault();
    const self = this;
    firebase
      .database()
      .ref("emails")
      .push({email: self.state.email},function(error) {
        if (error)
          self.setState({success: null, error: "Email not submitted, please try again"});
        else{
          self.emailInput.value = "";
          self.setState({success: "Email submitted successfully", error: null, email:null});
        }
      })
     
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    return (
      <div>
        <div class="hero">
          <div class="hero-bg" />
          <div class="hero-left">
            <div class="hero-inner">
              <img class="hero-logo" src="/../src/assets/logo.png" />
              <p class="hero-tagline">
                Let your guests be the photographers and capture every moment of
                your special day.
              </p>
              <div class="ios-appstore-wrapper">
                <img class="ios-appstore" src="/../src/assets/apple.svg" />
                <p class="ios-appstore-text">
                  Coming soon to the <span>AppStore</span>
                </p>
              </div>
            </div>
          </div>
          <div class="hero-right">
            <img class="phone-img" src="/../src/assets/phone372x760.png" />
          </div>
        </div>
        <section class="intro">
          <p>
            Wedcast is a photo sharing app designed to make your special day
            even more special by putting your guests in charge of the
            photography. No more displosable cameras, our easy to use app allows
            everyone to participate.
          </p>

          <br />
          <br />
          <h3>We're looking for beta testers!</h3>
        <form id="ph-email-form" onSubmit={this.handleSubmit}>
            <input
            ref={el => this.emailInput = el}

              type="email"
              name="email"
              id="ph-email"
              placeholder="Email Address"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}

            />
            <input
              type="submit"
              value="Submit"
              name="subscribe"
              id="ph-subscribe-button"
            />
          </form>

          <p>
            Submit your email and recieve an invitation to beta test Wedcast
            before it goes live.
          </p>
          {false && (
            <a class="find-wedcast" href="cast">
              Find a Wedcast
            </a>
          )}
        </section>
        <section class="feature">
          <div class="feature-left">
            <h3 class="feature-header">Save your memories</h3>
            <p class="feature-text">
              You and your guests can conveiently download all of your wedding
              pictures straight to your phone or computer.
            </p>
          </div>
          <div class="feature-right">
            <img
              class="feature-image"
              src="/../src/assets/walkthrough-photos.jpg"
            />
          </div>
        </section>
        <section class="feature">
          <div class="feature-right">
            <img
              class="feature-image"
              src="/../src/assets/walkthrough-laptop.jpg"
            />
          </div>
          <div class="feature-left">
            <h3 class="feature-header">Can't make the wedding?</h3>
            <p class="feature-text">
              Photos taken at the wedding will be livestreamed to your unique
              Wedcast url allowing you and your guests to watch the event live
              from any device.
            </p>
          </div>
        </section>
        <section class="feature">
          <div class="feature-left">
            <h3 class="feature-header">Project your Wedcast</h3>
            <p class="feature-text">
              Connect a projector at your wedding venue to your Wedcast url and
              you will be able to see your guest's photos live as they are
              taken.
            </p>
          </div>
          <div class="feature-right">
            <img
              class="feature-image"
              src="/../src/assets/walkthrough-projector.jpg"
            />
          </div>
        </section>
        <section class="email">
          <h2 class="email-address">Email: support@wedcast.app</h2>
        </section>
      </div>
    );
  }
}
