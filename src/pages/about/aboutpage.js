import React from 'react';
import { Link } from "react-router-dom";

//Import Components
import PlanYourTripComponent from '../../components/planyourtrip/planyourtrip';
import Footer from '../../components/footer/footer';

//import images
import aboutCompanyImageSrc from "../../assets/images/about-company-image.jpg"
import aboutCompanyCarLogoSrc from "../../assets/images/about-company-car-logo.png";
import aboutCompanyRentalOutletLogoSrc from "../../assets/images/about-company-rental-outlet-logo.png";
import aboutCompanyRepairShopLogoSrc from "../../assets/images/about-company-repair-shop-logo.png";

//import Stylesheet
import "./aboutpage.css";

const AboutPage = () => {
    return (
        <section>   
            <div className='banner-background-image'>
            <div className='page-banner'>
            <h2>About</h2>
                <div className='links-container'>
                    <Link className="link" to="/">Home</Link> / <Link className="link" to="/about">About</Link>
                </div>
            </div>
            </div>
            <div className='about-company-container'>
                <img className='main-about-page-image' src={aboutCompanyImageSrc} alt="Two employees with a catalog" />
                <div className='about-company-information-container'>
                    <div className='about-company-text-container'>
                        <h3>About Company</h3>
                        <h2>You start the engine and your adventure begins</h2>
                        <p>Certain but she but shyness why cottage.
                            Guy the put instrument sir entreaties affronting.
                            Pretended exquisite see cordially the you.
                            Weeks quiet do vexed or whose.
                            Motionless if no to affronting imprudence no precaution.
                            My indulged as disposal strongly attended.
                        </p>
                    </div>
                    <div className="about-company-boxes-container">
                        <div className="box">
                            <img src={aboutCompanyCarLogoSrc} alt="Car logo" />
                            <h2>20</h2>
                            <p>Car Types</p>
                        </div>
                        <div className="box">
                            <img src={aboutCompanyRentalOutletLogoSrc} alt="Rental outlet logo" />
                            <h2>85</h2>
                            <p>Rental Outlets</p>
                        </div>
                        <div className="box">
                            <img src={aboutCompanyRepairShopLogoSrc} alt="Repair shop logo" />
                            <h2>75</h2>
                            <p>Repair Shop</p>
                        </div>
                    </div>
                </div>
            </div>
            <PlanYourTripComponent />
            <Footer />
        </section>
    )
};

export default AboutPage;