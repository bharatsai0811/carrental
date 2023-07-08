import React from "react";

import "./contactbanner.css";

const ContactBanner = () => {
    return (
        <section className="contact-banner">
            <div className="contact-banner-overlay">
                <h2 className="contact-banner-text">Book a car by getting in touch with us</h2>
                <h3 className="contact-banner-phone"><i class="fa-solid fa-phone"></i> (123)456-789</h3>
            </div>
        </section>
    )
};

export default ContactBanner;