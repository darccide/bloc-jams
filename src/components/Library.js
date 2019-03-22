import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className="library">
        <div className="container">
          <div className="row">
            {this.state.albums.map((album, index) => (
              <div className="col-sm-6 col-md-3" key={index}>
                <div className="library-item">
                  <Link
                    to={`/album/${album.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <img
                      src={album.albumCover}
                      alt={album.title}
                      className="library-image"
                    />
                    <h3 id="artist-info">{album.title}</h3>
                    <h5 id="artist-info">{album.artist}</h5>
                    <p id="artist-info">{album.songs.length} songs</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Library;
