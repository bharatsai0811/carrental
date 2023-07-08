import React from "react";

import './testimonials.css';

//import images
import profilePhoto1Src from "../../assets/images/profile-photo-1.jpg";
import profilePhoto2Src from "../../assets/images/profile-photo-2.jpg";

const Testimonials = () => {
    return (
        <section className="testimonials-container">
            <div className="testemonials-banner">
                <h4>Reviewed by People</h4>
                <h2>Client's Testimonials</h2>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials.
                    Our clients have experienced our service and results,
                    and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="testimonials-boxes-container">
                <div className="testimonials-boxes">
                    <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    <div className="testimonials-boxes-profile-container">
                        <img src={profilePhoto1Src} alt="Profile" />
                        <div className="testimonials-boxes-name-container">
                            <h4>Parry Hotter</h4>
                            <p>Belgrade</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials-boxes second-testimonial">
                <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                    <div className="testimonials-boxes-profile-container">
                        <img src={profilePhoto2Src} alt="Profile" />
                        <div className="testimonials-boxes-name-container">
                            <h4>Ron Rizzly</h4>
                            <p>Novi Sad</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonials;