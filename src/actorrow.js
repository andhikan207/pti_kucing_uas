import React from 'react'

class ActorRow extends React.Component {
    viewPerson() {
        const url = "https://www.themoviedb.org/person/" + this.props.person.id + "-" + this.props.person.name.replace(/\s+/g, '-')
        window.location.href = url
    }

    render() {
        return <table className="cssTables" key={this.props.person.id}>
        <tbody>
          <tr>
            <td>
              <img alt="profile" width="120" src={this.props.person.profile_src}/>
            </td>
            <td className="absorbing-column">
              <b>{this.props.person.name}</b>
              <p>{this.props.person.gender}</p>
              <p><b>Popularity:</b> {this.props.person.popularity}</p>

              <input type="button" onClick={this.viewPerson.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default ActorRow