import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    // const movies = [
    //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle..." },
    //   {id: 1, poster_src: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg", title: "Deadpool 2", overview: "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life."}
    // ]
    //
    // let movieRows =[]
    //
    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })
    //
    // this.state = { rows: movieRows }

    this.performSearch("man")
  }

  performSearch(searchTerm) {
    console.log("Perform search using movieDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=f737c6529027c853be15b4b75c82737d&language=en-US&query=" + searchTerm;

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched movie data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        let movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow= <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch movie data")
      }
    })
  }

  searchHandler(event) {
    // console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
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

        <input className="search-bar" onChange={this.searchHandler.bind(this)} placeholder="Search for a movie" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
