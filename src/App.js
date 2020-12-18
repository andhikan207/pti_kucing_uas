import React, { Component } from 'react';
import './App.css';

import NavBar from './navbar.js';
import HomePage from './homepage.js'

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: "React",
        };
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                        <tr>
                            <td>
                                <img alt="app icon" width="50" src="moviedb_logo.svg"/>
                            </td>
                            <td width="8"/>
                            <td>
                                <h1>TheMoviesDB</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <NavBar />
                <HomePage />

                <div className="mainmenu">
                    <p>Huaw</p>
                </div>
            </div>
        );
    }
}

export default App;
