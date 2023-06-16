import React from "react";

export default function Home() {
  return (
    <>
      <div className="body">
        <div className="home-color">
          <div className="home">
            <div className="home-first">
              <div className="nav-bar">
                <img
                  src="/img/netflix-logo-history-32.png"
                  alt="img not found"
                />
                <ul>
                  <li>
                    <select name="" id="language">
                      <option value="en">English</option>
                      <option value="hin">Hindi</option>
                    </select>
                  </li>
                  <li>
                    <button>Sign in</button>
                  </li>
                </ul>
              </div>
              {/* second home started */}
              <div className="home-second">
                <h1>Unlimited movies, TV shows and more</h1>
                <br />
                <h3>Watch anywhere, Cancel anytime.</h3>
                <br />
                <h4>
                  ready to watch? Enter your email to create or restart your
                  membership.
                </h4>
                <div className="input-button">
                  <input
                    type="email"
                    name="emailhome"
                    id="email-home"
                    placeholder="Email address"
                  />
                  <button type="submit">Get Started{">"} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
