import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Atelier from './pages/Atelier';

// Move imports to top level (will be merged by tool)
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();
  const isAtelier = location.pathname === '/atelier';

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition isAtelier={false}>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/atelier"
            element={
              <PageTransition isAtelier={true}>
                <Atelier />
              </PageTransition>
            }
          />
          {/* Add other routes as placeholders if needed, or they can just go to Home for now */}
          <Route path="/projets" element={<div className="text-white">Projets Page (Coming Soon)</div>} />
          <Route path="/experiences" element={<div className="text-white">Expériences Page (Coming Soon)</div>} />
          <Route path="/competences" element={<div className="text-white">Compétences Page (Coming Soon)</div>} />
          <Route path="/contact" element={<div className="text-white">Contact Page (Coming Soon)</div>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
