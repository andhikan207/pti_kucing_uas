import React from 'react'
import './App.css';
import ActorsRow from './actorrow.js';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

class ActorsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "React"
        };
        this.performSearch("A")
    }
    
    performSearch(searchTerm) {
        var urlString = ""

        if (this.props.popularCheck === true) {
            urlString = "https://api.themoviedb.org/3/person/popular?&api_key=3ced8dbc04a58c0525d22320628e4201"
        } else {
            urlString = "https://api.themoviedb.org/3/search/person?&api_key=3ced8dbc04a58c0525d22320628e4201&query=" + searchTerm
        }

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results
    
                var personRows = []
    
                results.forEach((person) => {
                if (person.gender === 1) {
                    person.gender = "Female"
                } else if (person.gender === 2) {
                    person.gender = "Male"
                } else {
                    person.gender = "Unidentified"
                }
                
                if (person.profile_path == null) {
                    person.profile_src = "noimage.png"
                } else {
                    person.profile_src = "https://image.tmdb.org/t/p/w500" + person.profile_path
                }
                const personRow = <ActorsRow key={person.id} person={person}/>
                    personRows.push(personRow)
                })
    
                this.setState({rows: personRows})
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data.")
            }
        })
    }
    
    searchChangeHandler(event) {
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }
    
    render() {
        if (this.props.popularCheck === true || this.props.latestCheck === true) {
            return (
                <div className="personpage">
                    {this.performSearch()}
                    {this.state.rows}
                </div>
            );
        } else {
            return (
                <div className="personpage">
                    <input className="searchbar" placeholder="Search actor names.." onChange={this.searchChangeHandler.bind(this)}/>
                    {this.state.rows}
                </div>
            );
        }
    }
}

export default ActorsPage