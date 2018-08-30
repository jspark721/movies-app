import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initializer");

    const movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle..." },
      {id: 1, poster_src: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg", title: "Deadpool 2", overview: "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life."}
    ]

    let movieRows =[]

    movies.forEach((movie) => {
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    })

    this.state = { rows: movieRows }
  }

  render() {
    return (
      <div>

        <table className="title-bar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="45" src="camera.png" />
              </td>
              <td>
                <h1>Movie Searcher</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="search-bar" placeholder="Search for a movie" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
