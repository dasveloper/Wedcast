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
    const email = this.state.email;
    if (!this.validateEmail(email)){
      this.setState({
        success: "",
        error: "Invalid email address"
      });
      return;
    }
  
    firebase
      .database()
      .ref("emails")
      .push({ email: email, type: 'newsletter:index' }, function(error) {
        if (error)
          self.setState({
            success: "",
            error: "Email not submitted, please try again"
          });
        else {
          self.emailInput.value = "";
          self.setState({
            success: "Email submitted successfully",
            error: "",
            email: null
          });
        }
      });
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    let {success, error} = this.state;
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
                <a class="ios-appstore-text" href ="https://itunes.apple.com/us/app/wedcast/id1407471155?ls=1&mt=8">
                  Available on the <span>AppStore</span>
                </a>
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
          
         
          <a class="find-wedcast" href="cast">Find a Wedcast</a>

        </section>
        <section class="feature">
          <div class="feature-left">
            <h3 class="feature-header">Save your memories</h3>
            <p class="feature-text">
              You and your guests can conveiently download all of your wedding pictures straight to your phone
              or computer.
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
              Photos taken at the wedding will be livestreamed to your unique Wedcast url allowing you and your guests to watch the event live from any device.
            </p>
          </div>
        </section>
        <section class="feature">
          <div class="feature-left">
            <h3 class="feature-header">Project your Wedcast</h3>
            <p class="feature-text">
              Connect a projector at your wedding venue to your Wedcast url and you will be able to see your guest's photos live as they are taken.
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
          <h2 class="email-address">
           Email: support@wedcast.app
          </h2>
        </section>
        <section class="beta">
          <h3>Subscribe to our newsletter!</h3>

   {success != "" && <p class="success-message">{success}</p>}
          {error != "" && <p class="error-message">{error}</p>}
       
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
         <p>Subscribe and recieve latstest Wedcast news as well as all deals and promotions.</p>
        </section>
      </div>
    );
  }
}
