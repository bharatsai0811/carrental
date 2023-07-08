import React from "react";

import "./footer.css"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-contact-container">
                <h3><span>CAR</span> Rental</h3>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <ul className="contact-list">
                    <li><i></i><h4>(123)-456-789</h4></li>
                    <li><i></i><h4>carrental@gmail.com</h4></li>
                    <li><a href="https://xpeedstudio.com/" rel="noreferrer" target="_blank">Design by xpeedstudio/</a></li>
                </ul>
            </div>
            <div className="footer-company-container">
                <ul>
                    <li><h2>COMPANY</h2></li>
                    <li><h4>New York</h4></li>
                    <li><h4>Carrers</h4></li>
                    <li><h4>Mobile</h4></li>
                    <li><h4>Blog</h4></li>
                    <li><h4>How we work</h4></li>
                </ul>
            </div>
            <div className="footer-work-hours-container">
                <h2>WORKING HOURS</h2>
                <h4>Mon - Fri: 9:00AM - 9:00PM</h4>
                <h4>Sat: 9:00AM - 7:00PM</h4>
                <h4>Sun: Closed</h4>
            </div>
            <div className="footer-subscription">
                <h2>SUBSCRIPTION</h2>
                <h4>Subscribe your Email address for latest news & updates.</h4>
                <input type="email" placeholder="Enter Email Address"/>
                <button type="submit">Submit</button>
            </div>
        </section>
    )
};

export default Footer;