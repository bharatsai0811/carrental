import React from 'react';
import { Link } from "react-router-dom";

//Import Components
import Testimonials from "../../components/testimonials/testimonials";
import ContactBanner from "../../components/contactbanner/contactbanner";
import Footer from '../../components/footer/footer';

//import Stylesheet
import "./testimonialspage.css";

const TestimonialsPage = () => {
    return (
        <section>
            <div className='banner-background-image'>
                <div className='page-banner'>
                    <h2>Testimonials</h2>
                    <div className='links-container'>
                        <Link className="link" to="/">Home</Link> / <Link className="link" to="/testimonials">Testimonials</Link>
                    </div>
                </div>
            </div>
            <Testimonials />
            <ContactBanner />
            <Footer />
        </section>
    )
};

export default TestimonialsPage;