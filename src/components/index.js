import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}
