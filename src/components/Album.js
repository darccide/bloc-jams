import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import { Table } from 'reactstrap';

class Album extends Component {
  constructor(props) {
    super(props);
    // FIND ALBUM INFO FROM URL
    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });
    // SET ALBUM COMPONENT STATE
    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 0.5,
      isPlaying: false
    };
    // CREATE AUDIO ELEMENT / SET ELEMENT TO PLAY FIRST SONG
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  // AUDIO PLAYBACK METHODS
  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener(
      'timeupdate',
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      'durationchange',
      this.eventListeners.durationchange
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      'timeupdate',
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      'durationchange',
      this.eventListeners.durationchange
    );
  }
  // PLAY FUNCTION
  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }
  // PAUSE FUNCTION
  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }
  // SET CURRENT SONG
  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }
  // PLAY/PAUSE BUTTON
  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }
  // PREVIOUS TRACK BUTTON
  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }
  // NEXT TRACK BUTTON
  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.min(
      currentIndex + 1,
      this.state.album.songs.length - 1
    );
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }
  // TIME CHANGE FUNCTION
  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }
  // VOLUME CHANGE FUNCTION
  handleVolumeChange(e) {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: e.target.value });
  }
  // FORMAT TIME FUNCTION
  formatTime(totalseconds) {
    const minutes = Math.floor(totalseconds / 60);
    const seconds = Math.floor(totalseconds - minutes * 60);
    if (isNaN(totalseconds)) {
      return '-:--';
    } else {
      return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
  }
  // CHECK SONG STATE FOR PLAY/PAUSE/TRACK NUMBER DISPLAY
  songState(song) {
    return (
      this.state.isPlaying &&
      song === this.state.currentSong &&
      this.state.currentTime !== this.state.duration
    );
  }
  // RENDER ALBUM/TRACKS/PLAYER
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="album-player">
              {/* RENDER ALBUM ART */}
              <div id="album-info">
                <img
                  id="album-cover-art"
                  src={this.state.album.albumCover}
                  alt={this.state.album.title}
                />
                <div className="album-details">
                  <h1 id="album-title">{this.state.album.title}</h1>
                  <h2 className="artist">{this.state.album.artist}</h2>
                  <div id="release-info">{this.state.album.releaseInfo}</div>
                </div>

                {/* RENDER PLAYER BAR */}
                <PlayerBar
                  isPlaying={this.state.isPlaying}
                  currentSong={this.state.currentSong}
                  volume={this.state.volume}
                  album={this.state.album}
                  currentTime={this.audioElement.currentTime}
                  duration={this.audioElement.duration}
                  handleSongClick={() =>
                    this.handleSongClick(this.state.currentSong)
                  }
                  handlePrevClick={() => this.handlePrevClick()}
                  handleNextClick={() => this.handleNextClick()}
                  handleTimeChange={e => this.handleTimeChange(e)}
                  handleVolumeChange={e => this.handleVolumeChange(e)}
                  formatTime={e => this.formatTime(e)}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="track-list">
              {/* RENDER SONG LIST TABLE */}

              <Table id="song-list">
                <thead>
                  <tr>
                    <th>Track</th>
                    <th>Title</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <colgroup>
                  <col id="song-number-column" />
                  <col id="song-title-column" />
                  <col id="song-duration-column" />
                </colgroup>
                <tbody>
                  {/* MAPPING SONG INFO */}
                  {this.state.album.songs.map((song, index) => (
                    <tr
                      className="song"
                      key={index}
                      onClick={() => this.handleSongClick(song)}
                    >
                      <td className="song-actions">
                        <button className="play-pause-button">
                          <span className="song-number">
                            {this.songState(song) ||
                            (!this.state.isPlaying &&
                              song === this.state.currentSong &&
                              this.state.currentTIme > 0) ? (
                              !this.state.isPlaying ? (
                                <i className="fas fa-play" />
                              ) : (
                                ''
                              )
                            ) : (
                              index + 1
                            )}
                          </span>
                          <i
                            className={
                              this.songState(song) ? '' : 'fas fa-play'
                            }
                          />
                          <i
                            className={
                              this.songState(song) ? 'fas fa-pause' : ''
                            }
                          />
                        </button>
                      </td>
                      <td className="song-title">{song.title}</td>
                      <td className="song-duration">
                        {this.formatTime(song.duration)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
