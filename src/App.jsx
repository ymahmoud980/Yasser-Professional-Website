import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/About';
import CoursesPage from './pages/Courses';
import ResourcesPage from './pages/Resources';
import ContactPage from './pages/Contact';
import StudioPage from './pages/Studio';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Routes>
          {/* Studio Route - No Navbar/Footer */}
          <Route path="/studio/*" element={<StudioPage />} />
          
          {/* Main Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
