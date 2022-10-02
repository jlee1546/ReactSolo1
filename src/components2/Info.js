import React from "react";
import Image from "../LauraSmith.png";

function Info() {
  return (
    <main>
      <div className="info">
        <img className="info--image" alt="Laura Smith" src={Image} />
        <div className="info--info">
          <h2>Laura Smith</h2>
          <h3>Frontend Developer</h3>
          <h5>laurasmith.website</h5>
          <div className="buttons">
            <button>
              <i className="fa-solid fa-envelope email-icon"></i> Email
            </button>
            <button>
              <i className="fa-brands fa-square twitter-icon"></i> Twitter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Info;
