import React from 'react'

class MovieRow extends React.Component {
  render() {
    return <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img className="movie-poster" alt="poster" src= {this.props.movie.poster_src} />
          </td>
          <td>
            <tr><h3>{this.props.movie.title}</h3></tr>
            <tr>{this.props.movie.overview}</tr>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow
