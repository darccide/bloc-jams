import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <div className="container player-control-panel">
        <div className="music-player">
          <div className="row">
            {/* SONG INFO AND PLAYER CONTROLS */}
            <div className="col-12">
              <div
                className="container song-info-and-play-controls"
                id="buttons"
              >
                <button id="previous" onClick={this.props.handlePrevClick}>
                  <i id="controls" className="fas fa-backward" />
                </button>
                <button id="play-pause" onClick={this.props.handleSongClick}>
                  <i
                    id="controls"
                    className={
                      this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play'
                    }
                  />
                </button>
                <button id="next" onClick={this.props.handleNextClick}>
                  <i id="controls" className="fas fa-forward" />
                </button>
              </div>
            </div>
            {/* TRACK TIME / SONG SEEKING SLIDER */}
            <div className="col-12">
              <div className="sliders">
                <div className="current-time">
                  <p className="current-song-title">
                    {this.props.currentSong.title}
                  </p>
                  {this.props.formatTime(this.props.currentTime)} {' / '}
                  {this.props.formatTime(this.props.duration)}
                </div>
                <input
                  type="range"
                  className="seek-bar"
                  value={this.props.currentTime / this.props.duration || 0}
                  max="1"
                  min="0"
                  step="0.01"
                  onChange={this.props.handleTimeChange}
                />
              </div>
            </div>
            {/* VOLUME SLIDER */}
            <div className="col-12">
              <div className="sliders">
                {'Volume'}
                <input
                  type="range"
                  className="seek-bar"
                  value={this.props.volume}
                  max="1"
                  min="0"
                  step="0.01"
                  onChange={this.props.handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerBar;
