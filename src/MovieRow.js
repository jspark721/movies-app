import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    // console.log(this.props.movie.title)
    const movieUrl = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = movieUrl
  }
  render() {
    return <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img className="movie-poster" alt="poster" src= {this.props.movie.poster_src} />
          </td>
          <td>
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input type="button" onClick={this.viewMovie.bind(this)} value="More Info" />
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow
