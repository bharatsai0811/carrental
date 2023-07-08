import React from 'react';
import { Link } from "react-router-dom";

//Import Components
import ContactBanner from "../../components/contactbanner/contactbanner"
import Footer from '../../components/footer/footer';

//import images
import LukeProfileSrc from "../../assets/images/Luke-Miller-Profile.png";
import MichaelProfileSrc from "../../assets/images/Michael-Diaz-Profile.png";
import BrianaProfileSrc from "../../assets/images/Briana-Ross-Profile.png";
import LaurenProfileSrc from "../../assets/images/Lauren-Rivera-Profile.png";
import MartinProfileSrc from "../../assets/images/Martin-Rizz-Profile.png";
import CaitlynProfileSrc from "../../assets/images/Caitlyn-Hunt-Profile.png";

//import Stylesheet
import "./ourteampage.css";

const OurTeamPage = () => {
    return (
        <section className='our-team-page'>
            <div className='banner-background-image'>
                <div className='page-banner'>
                    <h2>Our Team</h2>
                    <div className='links-container'>
                        <Link className="link" to="/">Home</Link> / <Link className="link" to="/team">Team</Link>
                    </div>
                </div>
            </div>
            <div className='team-profiles-container'>
                <div className='profile-box'>
                    <img alt="Luke Miller" src={LukeProfileSrc} />
                    <h3>Luke Miller</h3>
                    <p>Salesman</p>
                </div>
                <div className='profile-box'>
                    <img alt="Michael Diaz" src={MichaelProfileSrc} />
                    <h3>Michael Diaz</h3>
                    <p>Bussines Owner</p>
                </div>
                <div className='profile-box'>
                    <img alt=">Briana Ross" src={BrianaProfileSrc} />
                    <h3>Briana Ross</h3>
                    <p>Photographer</p>
                </div>
                <div className='profile-box'>
                    <img alt="Lauren Rivera" src={LaurenProfileSrc} />
                    <h3>Lauren Rivera</h3>
                    <p>Car Detailist</p>
                </div>
                <div className='profile-box'>
                    <img alt="Martin Rizz" src={MartinProfileSrc} />
                    <h3>Martin Rizz</h3>
                    <p>Mechanic</p>
                </div>
                <div className='profile-box'>
                    <img alt="Caitlyn Hunt" src={CaitlynProfileSrc} />
                    <h3>Caitlyn Hunt</h3>
                    <p>Menager</p>
                </div>
            </div>
            <ContactBanner />
            <Footer />
        </section>
    )
};

export default OurTeamPage;