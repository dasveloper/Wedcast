import React, { Component } from "react";
import firebase from "./Firebase.js"; // <--- add this line

import { SocialIcon } from "react-social-icons";
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
    if (!this.validateEmail(email)) {
      this.setState({
        success: "",
        error: "Invalid email address"
      });
      return;
    }

    firebase
      .database()
      .ref("emails")
      .push({ email: email, type: "newsletter:index" }, function(error) {
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
    let { success, error } = this.state;
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
                <a
                  class="ios-appstore-text"
                  href="https://itunes.apple.com/us/app/wedcast/id1407471155?ls=1&mt=8"
                >
                  Available on the <span>AppStore</span>
                </a>
              </div>
              <div class="ios-appstore-wrapper">
                <img class="ios-appstore" src="/../src/assets/play.svg" />
                <a
                  class="ios-appstore-text"
                  href="   https://play.google.com/store/apps/details?id=com.wedcast"
                >
                  Get it on <span>Google Play</span>
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
            photography. No more disposable cameras, our easy to use app allows
            everyone to participate.
          </p>
        </section>

        <div class="lower-hero-wrapper">
          <img class="lower-hero" src="/../src/assets/hero-web.jpg" />
        </div>
        <div class="mission">
          <h3 class="mission-header">Why use Wedcast?</h3>
          <p>
            Here at Wedcast our mission is to provide a stress free and
            enjoyable experience when it comes to taking and managing your
            wedding photos. For that reason, here are our vows to you:
          </p>
          <ul class="vows">
            <li class="vow">
              <h4 class="vow-header">No upsells</h4>
              <p class="vow-details">
                There's no room for suprises on your big day. For that reason we
                believe in upfront pricing. No hidden costs, locked features, or
                degraded quality you will recieve the full experience for one
                low cost.
              </p>
            </li>
            <li class="vow">
              <h4 class="vow-header">No limits</h4>
              <p class="vow-details">
                Unlimited guests. Unlimited photos. Unlimited downloads. Your
                wedding day can be as limitless as your love, with Wedcast you
                will create unlimited memories.
              </p>
            </li>
            <li class="vow">
              <h4 class="vow-header">No ads</h4>
              <p class="vow-details">
                You want your wedding day to be perfect and you will be the
                center of attention. We vow to never distract your guests from
                what really matter with ugly, distracting advertisements.{" "}
              </p>
            </li>
          </ul>
        </div>

        <h3 class="feature-header">Features</h3>

        <section class="feature">
          <div class="feature-right">
            <img
              class="feature-image"
              src="/../src/assets/walkthrough-signup.jpg"
            />
          </div>
          <div class="feature-left">
            <h3 class="feature-header">No-hassle signup</h3>
            <p class="feature-text">
              Don't bother with emails and passwords on the big day, your guests
              can join with only a name.
            </p>
          </div>
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
        <h3 class="download-header">Download now:</h3>

        <section class="appstore-cta-wrapper">
          <div class="appstore-cta">
            <img
              class="appstore-cta-icon"
              src="/../src/assets/apple-black.svg"
            />
            <a
              class="appstore-cta-text"
              href="https://itunes.apple.com/us/app/wedcast/id1407471155?ls=1&mt=8"
            >
              Available on the <span>AppStore</span>
            </a>
          </div>
          <div class="appstore-cta">
            <img class="appstore-cta-icon" src="/../src/assets/play.svg" />
            <a
              class="appstore-cta-text"
              href="   https://play.google.com/store/apps/details?id=com.wedcast"
            >
              Get it on <span>Google Play</span>
            </a>
          </div>
        </section>
        <section class="social">
          <div class="social-inner">
            <SocialIcon
              network="twitter"
              url="https://twitter.com/wedcastapp"
              style={{ height: 60, width: 60 }}
            />
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com/wedcast"
              style={{ height: 60, width: 60 }}
            />
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/wedcastapp/"
              style={{ height: 60, width: 60 }}
            />
          </div>
        </section>
        <section class="email">
          <h2 class="email-address">Email: support@wedcast.app</h2>
        </section>
        <section class="beta">
          <h3>Subscribe to our newsletter!</h3>

          {success != "" && <p class="success-message">{success}</p>}
          {error != "" && <p class="error-message">{error}</p>}

          <form id="ph-email-form" onSubmit={this.handleSubmit}>
            <input
              ref={el => (this.emailInput = el)}
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
            Subscribe and recieve latstest Wedcast news as well as all deals and
            promotions.
          </p>
        </section>
      </div>
    );
  }
}
