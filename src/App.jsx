import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Newsletter /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;