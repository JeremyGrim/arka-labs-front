import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExpertsPage from './pages/ExpertsPage';
import FeaturesPage from './pages/FeaturesPage';
import BetaPage from './pages/BetaPage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/beta" element={<BetaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/histoire" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
