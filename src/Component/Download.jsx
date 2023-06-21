import React from "react";

function Download(props) {
  return (
    <>
      <div className="download">
        <div className="img">
          <img src="/img/mobile-0819.jpg" alt="" />
          <div className="animated">
            <img src="/img/boxshot.png" alt="" />
            <h5>Starnger Things <br /> <span>Downloading...</span></h5>
            <div className="logo"></div>
          </div>
        </div>

        <div className="download-text">
          <h1>
            Download your <br />
            shows to watch <br />
            offline
          </h1>
          <h5>
            Save your favourites easily and always <br />
            have something to watch.
          </h5>
        </div>
      </div>
      <div className="blank-line"></div>
    </>
  );
}

export default Download;
