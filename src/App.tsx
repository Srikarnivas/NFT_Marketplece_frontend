import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GettingStarted from './components/GettingStarted';
import ApiReference from './components/ApiReference';
import Testing from './components/Testing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <GettingStarted />
      <ApiReference />
      <Testing />
      <Footer />
    </div>
  );
}

export default App;