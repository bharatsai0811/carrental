import React, { useState } from "react";

import "./FAQbanner.css"

//import image
import FAQBannerSrc from "../../assets/images/FAQ-banner.png";

const HomePageFAQ = () => {
    const [status, setStatus] = useState('hidden');

    return (
        <section className="home-page-FAQ-container">
            <img alt="" src={FAQBannerSrc}  className="FAQ-banner-image"/>
            <div className="home-page-FAQ-banner">
                <h3>FAQ</h3>
                <h2>Frequently Asked Qestions</h2>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="questions-container">
                <button onClick={() => status === 'hidden' ? setStatus('shown1') : setStatus('hidden')} className={status === "shown1" ? "shown question-button" : " question-button"}>
                    <p>1. What is special about comparing rental car deals?</p><i className="fa-solid fa-chevron-down"></i>
                </button>
                <div onClick={() => setStatus('hidden')} className={status === "shown1" ? "answer answer-active" : "answer"}>
                    <p>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements,
                        ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices,
                        additional services, or better car models.
                        You can find car rental deals by researching online and comparing prices from different rental companies.</p>
                </div>
                <button onClick={() => status === 'hidden' ? setStatus('shown2') : setStatus('hidden')} className={status === "shown2" ? "shown question-button" : " question-button"}><p>2. How do I find the car rental deals?</p><i className="fa-solid fa-chevron-down"></i></button>
                <div onClick={() => setStatus('hidden')} className={status === "shown2" ? "answer answer-active" : "answer"}>
                    <p>You can find car rental deals by researching online and comparing prices from different rental companies.
                        Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options.
                        It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</p>
                </div>
                <button onClick={() => status === 'hidden' ? setStatus('shown3') : setStatus('hidden')} className={status === "shown3" ? "shown question-button" : " question-button"}><p>3. How do I find such low rental car prices?</p><i className="fa-solid fa-chevron-down"></i></button>
                <div onClick={() => setStatus('hidden')} className={status === "shown3" ? "answer answer-active" : "answer"}>
                    <p>Book in advance: Booking your rental car ahead of time can often result in lower prices.
                        Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies.
                        Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price.
                        Renting from an off-airport location can sometimes result in lower prices.</p>
                </div>
            </div>
        </section>
    )
};

//make the button change to orangered when active, and make a transition for the div appearance

export default HomePageFAQ;