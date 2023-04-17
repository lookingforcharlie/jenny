import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Hero from './pages/Hero';
import Listing from './pages/Listing';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/team' element={<Team />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
