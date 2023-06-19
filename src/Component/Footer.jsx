import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <div className="blank-line"></div>
      <div className="footer">
        <h3>
          Questions? Call <span>000-800-919-1694</span>
        </h3>
        <div className="row">
          <div className="col">
            <Link to="#">FAQ</Link>
            <Link to="#">Media Centre</Link>
            <Link to="#">Ways to Watch</Link>
            <Link to="#">Cookie Preferences</Link>
            <Link to="#">speed Test</Link>
          </div>
          <div className="col">
            <Link to="#">Help Centre</Link>
            <Link to="#">Investor Relations</Link>
            <Link to="#">Terms of Use</Link>
            <Link to="#">Corporate information</Link>
            <Link to="#">Legal Notices</Link>
          </div>
          <div className="col">
            <Link to="#">Account</Link>
            <Link to="#">Jobs</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#">Only on Netflix</Link>
          </div>
        </div>
        <select name="" id="language" className="lang">
          <option value="en">English</option>
          <option value="hin">Hindi</option>
        </select>
        <h5>Netflix India</h5>
      </div>
    </>
  );
}
