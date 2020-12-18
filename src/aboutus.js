import React, { Component } from 'react';
import './aboutus.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "React"
        };
    }

    render() {
        return (
            <div className="abos">
                <h1 className="abosh1">About Us</h1>
                <h2 className="abosh2">Kelompok Kucing</h2>
                <div className="container">
                    <div className="our-team">
                        <div className="pic">
                            <img src="dhika.png" alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Andhika N.W.P</h3>
                            <h4 className="abosh4">00000041732</h4>
                            <span className="post">Developer, Programmer, Web Designer</span>
                        </div>
                        <ul className="social">
                            <li><a href="https://www.facebook.com/anwp.shinei">FB</a></li>
                            <li><a href="https://www.instagram.com/shinei_akn/?hl=en">IG</a></li>
                        </ul>    
                    </div>


                    <div className="our-team">
                        <div className="pic">
                            <img src="vin.JPG" alt=""/>
                        </div>
                        <div className="team-content">
                            <h3 className="title">Vincent</h3>
                            <h4 className="abosh4">00000041875</h4>
                            <span className="post">Designer & Documentation</span>
                        </div>
                        <ul className="social">
                            <li><a href="https://www.facebook.com/vincent.phang2/">FB</a></li>
                            <li><a href="https://www.instagram.com/vincent__phang/?hl=en">IG</a></li>
                        </ul>    
                    </div>
                </div>   
            </div> 
        );
    }
}

export default AboutUs;