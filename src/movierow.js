import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id + "-" + this.props.movie.title.replace(/\s+/g, '-')
        window.location.href = url
    }

    render() {
        return <table className="cssTables" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.poster_src}/>
            </td>
            <td className="absorbing-column">
              <b>{this.props.movie.title}</b>
              <p>{this.props.movie.overview}</p>
              <p><b>Popularity:</b> {this.props.movie.vote_count} people voted.</p>
              <p><b>Average Score:</b> {this.props.movie.vote_average}</p>

              <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow