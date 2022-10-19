import React from "react";
import "../SCSS/ProfileCard.scss";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="imgbox">
        <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMjA2/MDAxNTc0NDA1OTMxOTcz.p-3sqhV8ghlvCVWF5ccy8TYlW2sDjQPkQ4QSddPuq8og.J47mSadNJAz9KQXYp_y-EG-znQTl_g2JUhZrHG6bwbcg.JPEG.rlatjsgkr92/maxresdefault-20191122-153322.jpg?type=w800"></img>
      </div>
      <div className="content">
        <div className="detail">
          <h2>
            루루<span>크림히어로즈 도적</span>
          </h2>
          <div className="data">
            <h3>
              342<span>Posts</span>
            </h3>
            <h3>
              120k<span>Followers</span>
            </h3>
            <h3>
              283<span>Following</span>
            </h3>
          </div>
          <div className="btnbox">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
