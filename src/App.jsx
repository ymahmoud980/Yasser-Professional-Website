import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
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
          <Route path="/*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
