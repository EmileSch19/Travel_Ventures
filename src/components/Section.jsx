// src/components/MainSection.jsx

import React from 'react';
//import Home from './Home';
//import Contact from './Contact';
import Decouvrir from './Decouvrir';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';

const Section = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Decouvrir/>
    <Contact/>
    </>
    
  );
};

export default Section;
