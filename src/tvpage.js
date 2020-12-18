import React from 'react'
import './App.css';
import TVRow from './tvrow.js';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

class TVPage extends React.Component {
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
            urlString = "https://api.themoviedb.org/3/tv/popular?&api_key=3ced8dbc04a58c0525d22320628e4201"
        } else if (this.props.top_ratedCheck === true) {
            urlString = "https://api.themoviedb.org/3/tv/top_rated?&api_key=3ced8dbc04a58c0525d22320628e4201"
        } else {
            urlString = "https://api.themoviedb.org/3/search/tv?&api_key=3ced8dbc04a58c0525d22320628e4201&query=" + searchTerm
        }

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results
    
                var tvRows = []
    
                results.forEach((tv) => {
                if (tv.poster_path == null) {
                    tv.poster_src = "noimage.png"
                } else {
                    tv.poster_src = "https://image.tmdb.org/t/p/w500" + tv.poster_path
                }
                const tvRow = <TVRow key={tv.id} tv={tv}/>
                    tvRows.push(tvRow)
                })
    
                this.setState({rows: tvRows})
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
        if (this.props.popularCheck === true || this.props.top_ratedCheck === true) {
            return (
                <div className="tvpage">
                    {this.performSearch()}
                    {this.state.rows}
                </div>
            );
        } else {
            return (
                <div className="tvpage">
                    <input className="searchbar" placeholder="Search tv names.." onChange={this.searchChangeHandler.bind(this)}/>
                    {this.state.rows}
                </div>
            );
        }
    }
}

export default TVPage