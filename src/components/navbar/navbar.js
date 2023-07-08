import React, { useState } from "react";
import { Link } from "react-router-dom";

import './navbar.css';

//import images
import navBarLogoSrc from "../../assets/images/nav-bar-logo.png";

const NavigationBar = () => {
    const [navigationDisplay, setNavigationDisplay] = useState(false);

    return (
        <>
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src={navBarLogoSrc} alt="logo" className="logo" />
                </div>
                <button onClick={() => setNavigationDisplay(true)} className="nav-bar-button"><i style={{color: "black !important"}} className="fa-solid fa-bars"></i></button>
                {navigationDisplay && <i onClick={() => setNavigationDisplay(false)} className="fa-solid fa-xmark close-nav-bar"></i>}
                {navigationDisplay && <ul className="hidden-nav-bar">
                    <li className="nav-link" onClick={() => setNavigationDisplay(false)}>
                        <Link className="hidden-link" to="/">Home</Link>
                    </li>
                    <li className="nav-link" onClick={() => setNavigationDisplay(false)}>
                        <Link className="hidden-link" to="/about">About</Link>
                    </li>
                    <li className="nav-link" onClick={() => setNavigationDisplay(false)}>
                        <Link className="hidden-link" to="/models">Vehicle Models</Link>
                    </li>
                    <li className="nav-link" onClick={() => setNavigationDisplay(false)}>
                        <Link className="hidden-link" to="/testimonials">Testimonials</Link>
                    </li>
                    <li className="nav-link" onClick={() => setNavigationDisplay(false)}>
                        <Link className="hidden-link" to="/team">Our Team</Link>
                    </li>
                    <li className="nav-link" onClick={() => setNavigationDisplay(false)}>
                        <Link className="hidden-link" to="/contact">Contact</Link>
                    </li>
                </ul>}
                <ul className="nav-bar-link-list">
                    <li className="nav-link">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/models">Vehicle Models</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/testimonials">Testimonials</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/team">Our Team</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="nav-bar-sign-in-container">
                    <button className="nav-bar-sign-in-button">Sign in</button>
                    <button className="nav-bar-register-button">Register</button>
                </div>
            </nav>
        </>
    )
};

export default NavigationBar;