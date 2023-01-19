import React from 'react';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Tours from './Components/Tours';
import Footer from './Components/Footer';

function App() {
  console.log('Hello');
  return (
    <React.Fragment>
      <Navbar />
      <Hero></Hero>
      <About />
      <Services></Services>
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
