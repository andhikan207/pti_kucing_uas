import React from 'react'
import './App.css';
import MovieRow from './movierow.js';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

class MoviesPage extends React.Component {
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
            urlString = "https://api.themoviedb.org/3/movie/popular?&api_key=3ced8dbc04a58c0525d22320628e4201"
        } else if (this.props.top_ratedCheck === true) {
            urlString = "https://api.themoviedb.org/3/movie/top_rated?&api_key=3ced8dbc04a58c0525d22320628e4201"
        } else {
            urlString = "https://api.themoviedb.org/3/search/movie?&api_key=3ced8dbc04a58c0525d22320628e4201&query=" + searchTerm
        }

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully")
                const results = searchResults.results
    
                var movieRows = []
    
                results.forEach((movie) => {
                if (movie.poster_path == null) {
                    movie.poster_src = "noimage.png"
                } else {
                    movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
                }
                const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow)
                })
    
                this.setState({rows: movieRows})
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
                <div className="moviepage">
                    {this.performSearch()}
                    {this.state.rows}
                </div>
            );
        } else {
            return (
                <div className="moviepage">
                    <input className="searchbar" placeholder="Search movie names.." onChange={this.searchChangeHandler.bind(this)}/>
                    {this.state.rows}
                </div>
            );
        }
    }
}

export default MoviesPage