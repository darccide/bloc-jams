import React from 'react';

const Landing = () => (
  <div className="landing">
    <div className="main-title">
      <h1 className="hero-title">Turn the music up!</h1>
    </div>
    <div className="container content">
      <div className="row selling-points">
        <div className="selling-point col-12 col-sm-4" style={{ width: '5em' }}>
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">
            The world is full of music; why should you have to listen to music
            that someone else chose?
          </p>
        </div>
        <div className="selling-point col-12 col-sm-4" style={{ width: '5em' }}>
          <h2 className="point-title">Unlimited and ad-free</h2>
          <p className="point-description">
            No arbitrary limits. No distractions.
          </p>
        </div>
        <div className="selling-point col-12 col-sm-4" style={{ width: '5em' }}>
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">
            Listen to your music on the go. This streaming service is available
            on all mobile platforms.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
