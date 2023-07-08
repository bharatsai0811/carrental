import React from "react";

import "./whyusbanner.css";

//import image
import whyChooseUseBannerSrc from "../../assets/images/why-choose-us-main-image.png";
import crossCountryLogoSrc from "../../assets/images/cross-country-drive-logo.png";
import allInclusiveLogoSrc from "../../assets/images/all-inclusive-pricing-logo.png";
import hiddenChargesLogoSrc from "../../assets/images/no-hidden-charges-logo.png";

const WhyUsBanner = () => {
    return (
        <section className="why-choose-us-container">
            <img alt="cars banner" src={whyChooseUseBannerSrc} className="why-choose-us-main-img" />
            <div className="why-choose-us-banner">
                <h3>Why Choose Us</h3>
                <h2>Best valued deals you will ever find</h2>
                <p>Discover the best deals you'll ever find with our unbeatable offers.
                    We're dedicated to providing you with the best value for your money,
                    so you can enjoy top-quality services and products without breaking the bank.
                    Our deals are designed to give you the ultimate renting experience,
                    so don't miss out on your chance to save big.</p>
                    <button className="why-choose-us-button">Find Details</button>
            </div>
            <div className="why-choose-us-boxes-container">
                <div className="why-choose-us-boxes">
                    <img src={crossCountryLogoSrc} alt="car" />
                    <h3>Cross country drive</h3>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
                <div className="why-choose-us-boxes">
                    <img src={allInclusiveLogoSrc} alt="money" />
                    <h3>All Inclusive pricing</h3>
                    <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
                <div className="why-choose-us-boxes">
                    <img src={hiddenChargesLogoSrc} alt="hands holding a coin" />
                    <h3>No hidden charges</h3>
                    <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
            </div>

        </section>
    )
};

export default WhyUsBanner;