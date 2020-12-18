import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: "React"
    };
}

    render() {
        return (
            <div className="homepage">
                <img src="kucing.png" width="60" alt=""/>
                <img src="biglogo.svg" alt=""/>

                <h3 className="hptext">Millions of movies, TV shows and people to discover.</h3>
            </div> 
        );
    }
}

export default HomePage;
