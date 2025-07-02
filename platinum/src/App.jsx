import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';

import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}
