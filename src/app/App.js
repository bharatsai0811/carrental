import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

//Import components
import NavigationBar from '../components/navbar/navbar';
import HomePage from '../pages/home/homepage';
import AboutPage from '../pages/about/aboutpage';
import ModelsPage from '../pages/vehicles/modelspage';
import TestimonialsPage from '../pages/testimonials/testimonialspage';
import OurTeamPage from '../pages/team/ourteampage';
import ContactPage from '../pages/contact/contactpage';

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
