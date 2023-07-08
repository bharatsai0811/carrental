import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Import Components
import ContactBanner from "../../components/contactbanner/contactbanner";
import Footer from '../../components/footer/footer';

//Import StyleSheet
import "./contactpage.css";

//import social icons from react-icons
//NEED TO INSTALL REACT ICONS


const ContactPage = () => {
    const [display, setDisplay] = useState('form');

    return (
        <section>
            <div className='banner-background-image'>
                <div className='page-banner'>
                    <h2>Contact</h2>
                    <div className='links-container'>
                        <Link className="link" to="/">Home</Link> / <Link className="link" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
            <div className='contact-form-and-text-container'>
                <div className='contact-text-container'>
                    <h2>Need additional infomation?</h2>
                    <p>A multifaceted professional skilled in multiple fields of research,
                        development as well as a learning specialist.
                        Over 15 years of experience.</p>
                    <div className='contacts-container'>
                        <p><i className="fa-solid fa-phone"></i> (123)456-789</p>
                        <p><i className="fa-solid fa-envelope"></i> carretntal@carmail.com</p>
                        <p><i className="fa-solid fa-location-dot"></i> Sydney, Australia</p>
                    </div>
                </div>
                <div className='form-container'>
                    {display === 'form' && <form>
                        <label>Full Name <b>*</b></label>
                        <input type="text" placeholder='E.g: "Joe Shmoe' required />
                        <label>Email <b>*</b></label>
                        <input type="email" placeholder='youremail@example.com' required />
                        <label>Tell us about it <b>*</b></label>
                        <textarea placeholder='Write here..' required />
                        <button onClick={() => setDisplay('message')} type="submit"><i className="fa-solid fa-envelope"></i> Send Message</button>
                    </form>}
                    {display === 'message' && <div className='sended-message-section'>
                        <h1>Message sent successfully</h1>
                        <p>This is just a simulation, if you want to get in touch with the developer use this <a href="https://www.linkedin.com/in/francisco-gontijo-5a469b239/" rel="noreferrer" target="_blank">link</a> or send an email to franciscoacmg@gmail.com</p>
                        <div>
                            <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank"><i className="fa-brands fa-github social-icon"></i></a>
                            <a href="https://www.linkedin.com/in/francisco-alexandre-cardoso-melo-gontijo-5a469b239/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin social-icon"></i></a>
                        </div>
                        <button onClick={() => setDisplay('form')}>Back</button>
                    </div>}
                </div>
            </div>
            <ContactBanner />
            <Footer />
        </section>
    )
};

export default ContactPage;