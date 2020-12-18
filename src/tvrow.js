import React from 'react'

class TVRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/tv/" + this.props.tv.id + "-" + this.props.tv.title.replace(/\s+/g, '-')
        window.location.href = url
    }

    render() {
        return <table className="cssTables" key={this.props.tv.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.tv.poster_src}/>
            </td>
            <td className="absorbing-column">
              <b>{this.props.tv.original_name}</b> ({this.props.tv.name})
              <p>{this.props.tv.overview}</p>
              <p><b>Popularity:</b> {this.props.tv.vote_count} people voted.</p>
              <p><b>Average Score:</b> {this.props.tv.vote_average}</p>

              <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default TVRow