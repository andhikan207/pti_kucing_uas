import React, { Component } from 'react'

import HomePage from './homepage.js';
import AboutUs from './aboutus.js'
import MoviesPage from './moviepage.js';
import ActorsPage from './actorspage.js';
import TVPage from './tvpage.js';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            popular: false,
            top_rated: false,
            showHideHome: false,
            showHideAbos: false,
            showHideMovies: false,
            showHideActors: false,
            showHideTV: false
        };

        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideHome":
                if (this.state.showHideAbos === true) {
                    this.setState({ showHideAbos: !this.state.showHideAbos });
                }
                if (this.state.showHideActors === true) {
                    this.setState({ showHideActors: !this.state.showHideActors });
                }
                if (this.state.showHideTV === true) {
                    this.setState({ showHideTV: !this.state.showHideTV });
                }
                if (this.state.showHideMovies === true) {
                    this.setState({ showHideMovies: !this.state.showHideMovies });
                }

                if (this.state.showHideHome === false) {
                    this.setState({ showHideHome: !this.state.showHideHome });
                }
                break;
            case "showHideAbos":
                if (this.state.showHideHome === true) {
                    this.setState({ showHideHome: !this.state.showHideHome });
                }
                if (this.state.showHideActors === true) {
                    this.setState({ showHideActors: !this.state.showHideActors });
                }
                if (this.state.showHideTV === true) {
                    this.setState({ showHideTV: !this.state.showHideTV });
                }
                if (this.state.showHideMovies === true) {
                    this.setState({ showHideMovies: !this.state.showHideMovies });
                }

                if (this.state.showHideAbos === false) {
                    this.setState({ showHideAbos: !this.state.showHideAbos });
                }
                break;
            case "showHideMovies":
                if (this.state.showHideHome === true) {
                    this.setState({ showHideHome: !this.state.showHideHome });
                }
                if (this.state.showHideActors === true) {
                    this.setState({ showHideActors: !this.state.showHideActors });
                }
                if (this.state.showHideTV === true) {
                    this.setState({ showHideTV: !this.state.showHideTV });
                }
                if (this.state.showHideAbos === true) {
                    this.setState({ showHideAbos: !this.state.showHideAbos });
                }

                if (this.state.showHideMovies === false) {
                    this.setState({ showHideMovies: !this.state.showHideMovies });
                }
                break;
            case "showHideActors":
                if (this.state.showHideHome === true) {
                    this.setState({ showHideHome: !this.state.showHideHome });
                }
                if (this.state.showHideMovies === true) {
                    this.setState({ showHideMovies: !this.state.showHideMovies });
                }
                if (this.state.showHideTV === true) {
                    this.setState({ showHideTV: !this.state.showHideTV });
                }
                if (this.state.showHideAbos === true) {
                    this.setState({ showHideAbos: !this.state.showHideAbos });
                }

                if (this.state.showHideActors === false) {
                    this.setState({ showHideActors: !this.state.showHideActors });
                }
                break;
            case "showHideTV":
                if (this.state.showHideHome === true) {
                    this.setState({ showHideHome: !this.state.showHideHome });
                }
                if (this.state.showHideMovies === true) {
                    this.setState({ showHideMovies: !this.state.showHideMovies });
                }
                if (this.state.showHideActors === true) {
                    this.setState({ showHideActors: !this.state.showHideActors });
                }
                if (this.state.showHideAbos === true) {
                    this.setState({ showHideAbos: !this.state.showHideAbos });
                }

                if (this.state.showHideTV === false) {
                    this.setState({ showHideTV: !this.state.showHideTV });
                }
                break;
            default:
                this.setState({});
        }

        this.setState({state: this.state});
    }

    changeStatus(name) {

        switch (name) {
            case "popular":
                if (this.state.top_rated === true) {
                    this.setState({ top_rated: !this.state.top_rated });
                }

                if (this.state.popular === false) {
                    this.setState({ popular: !this.state.popular });
                }
                break;
            case "top_rated":
                if (this.state.popular === true) {
                    this.setState({ popular: !this.state.popular });
                }

                if (this.state.top_rated === false) {
                    this.setState({ top_rated: !this.state.top_rated });
                }
                break;
            case "reset":
                if (this.state.popular === true) {
                    this.setState({ popular: !this.state.popular });
                }

                if (this.state.top_rated === true) {
                    this.setState({ top_rated: !this.state.top_rated });
                }

                break;
            default:
                this.setState({});
        }
        
        this.setState({state: this.state});
    }

    render() {
        const { showHideHome, showHideAbos, showHideMovies, showHideActors, showHideTV } = this.state;
        return (
            <div>
                <Navbar bg="light" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => { this.hideComponent("showHideHome"); this.changeStatus("reset"); }}>Home</Nav.Link>
                    <Nav.Link href="#aboutus" onClick={() => { this.hideComponent("showHideAbos"); this.changeStatus("reset"); }}>About Us</Nav.Link>
                    <NavDropdown title="Search" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#moviespage" onClick={() => { this.hideComponent("showHideMovies"); this.changeStatus("reset"); }}>Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#actorspage" onClick={() => { this.hideComponent("showHideActors"); this.changeStatus("reset"); }}>Actors</NavDropdown.Item>
                    <NavDropdown.Item href="#tvpage" onClick={() => { this.hideComponent("showHideTV"); this.changeStatus("reset"); }}>TV Series</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Popular" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#moviespage" onClick={() => { this.hideComponent("showHideMovies"); this.changeStatus("popular"); }}>Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#actorspage" onClick={() => { this.hideComponent("showHideActors"); this.changeStatus("popular"); }}>Actors</NavDropdown.Item>
                    <NavDropdown.Item href="#tvpage" onClick={() => { this.hideComponent("showHideTV"); this.changeStatus("popular"); }}>TV Series</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Top Rated" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#moviespage" onClick={() => { this.hideComponent("showHideMovies"); this.changeStatus("top_rated"); }}>Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#tvpage" onClick={() => { this.hideComponent("showHideTV"); this.changeStatus("top_rated"); }}>TV Series</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                {showHideHome && <HomePage />}
                {showHideAbos && <AboutUs />}
                {showHideMovies && <MoviesPage popularCheck = {this.state.popular} top_ratedCheck = {this.state.top_rated} />}
                {showHideActors && <ActorsPage popularCheck = {this.state.popular} />}
                {showHideTV && <TVPage popularCheck = {this.state.popular} top_ratedCheck = {this.state.top_rated} />}
            </div>
        );
    }
}

export default NavBar