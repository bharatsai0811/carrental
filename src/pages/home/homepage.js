import React from 'react';

//Import Components
import BookACar from '../../components/bookacar/bookacar';
import PlanYourTripComponent from '../../components/planyourtrip/planyourtrip';
import RentalFleet from '../../components/modelsdisplay/modelsdisplay';
import WhyUsBanner from '../../components/whyusbanner/whyusbanner';
import HomePageTestimonials from '../../components/testimonials/testimonials';
import HomePageFAQ from '../../components/FAQbanner/FAQbanner';
import DownloadAppSection from '../../components/downloadapp/downloadappsection';
import Footer from '../../components/footer/footer';

//Import images 
import bannerMainCarSrc from '../../assets/images/banner-main-car.png';
import homePageMainBannerBackgroundImageSrc from '../../assets/images/banner-background-back-image.png';

//Import stylesheet
import "./homepage.css";

const HomePage = () => {
    return (
        <section className='home-page-container'>
            <img alt="" className="background-hero-image" src={homePageMainBannerBackgroundImageSrc}/>
            <img alt="" className='background-hero-car-image' src={bannerMainCarSrc} />
            <div className='home-page-hero-banner'>
                <div className='home-page-hero-banner-text-container'>
                    <h4>Plan your trip now</h4>
                    <h1>Save <span>big</span> with our car rental</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                </div>
                <div className='home-page-hero-banner-buttons-container'>
                    <button className='orange-button'>Book Ride<i className="fa-solid fa-circle-check"></i></button>
                    <button className='black-button'>Learn More<i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <BookACar />
            <PlanYourTripComponent/>
            <RentalFleet />
            <div className='sales-banner'>
                <h2>Save big with our cheap car rental</h2>
                <p>Top Airports. Local suppliers. <span>24/7</span> Support.</p>
            </div>
            <WhyUsBanner />
            <HomePageTestimonials />
            <HomePageFAQ />
            <DownloadAppSection />
            <Footer />
        </section>
    )
};

export default HomePage;