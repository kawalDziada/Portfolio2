import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class NavBar extends Component {
    componentDidMount() {
        const elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        return(
            <nav className="nav-wrapper grey lighten-5">
                <div className="container">
                    <Link to="/"><a href="/" className="brand-logo black-text">MkPortfolio</a></Link>
                    <a href="/" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons black-text">menu</i>
                    </a>
                    <ul className=" right hide-on-med-and-down">
                        <li><Link className="black-text" to="/">Home</Link></li>
                        <li><Link className="black-text" to="/About">About</Link></li>
                    </ul>
                    <ul className="sidenav" id="mobile-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </div>
                    
            </nav>
        )
    }
}

export default withRouter(NavBar)