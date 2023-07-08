import React from "react";

import "./planyourtrip.css";

//import images 
import carCheckLogoSrc from "../../assets/images/plan-your-trip-car-check-logo.png";
import operatorLogoSrc from "../../assets/images/plan-your-trip-operator-logo.png";
import carDrivingLogoSrc from "../../assets/images/plan-your-trip-car-driving-logo.png";

const PlanYourTripComponent = () => {
    return (
        <section className="plan-your-trip-banner-container">
            <h3>Plan your trip now</h3>
                <h2>Quick & easy car rental</h2>
                <div className='plan-your-trip-boxes-container'>
                    <div className='trip-banner-boxes'>
                        <img src={carCheckLogoSrc} alt="car logo" />
                        <h3>Select a car</h3>
                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className='trip-banner-boxes'>
                        <img src={operatorLogoSrc} alt="Operator on phone" />
                        <h3>Contact operator</h3>
                        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className='trip-banner-boxes'>
                        <img src={carDrivingLogoSrc} alt="Car moving" />
                        <h3>Let's Drive</h3>
                        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
        </section>
    )
};

export default PlanYourTripComponent;