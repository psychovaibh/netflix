import React from "react";

function Frequent(props) {
  return (
    <>
      <div className="freq">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          <h2>what is netflix?</h2>
          <button className="btn">+</button>{" "}
        </div>
        <div className="questions">
          <h2>How much does Netflix cost?</h2>
          <button className="btn">+</button>{" "}
        </div>
        <div className="questions">
          <h2>Where can I watch?</h2>
          <button className="btn">+</button>{" "}
        </div>
        <div className="questions">
          <h2>How do I cancel?</h2>
          <button className="btn">+</button>{" "}
        </div>
        <div className="questions">
          <h2>what can I watch on Netflix?</h2>
          <button className="btn">+</button>{" "}
        </div>
        <div className="questions">
          <h2>Is Netflix good for kids?</h2>
          <button className="btn">+</button>{" "}
        </div>

        <div className="email">
          <h2>
            Ready to watch? Enter your email to create or restart your
            membrship.
          </h2>
          <section>
          <input
            type="email"
            name="emailhome"
            id="email-home"
            placeholder="Email address"
          />
          <button className="submit-button" type="submit">
            Get Started{">"}{" "}
          </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Frequent;
