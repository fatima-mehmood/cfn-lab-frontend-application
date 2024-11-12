import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import keys from './hooks/keys.json';
import NavBar from './components/utils/NavBar';
import Footer from './components/utils/Footer';
import HomePage from './components/HomePage';
import NotFound from './components/errorPages/NotFound';

const keys = {
  "backendIp": "localhost",
  "backendPort": "3000"
}

function App() {
  return (
    <>
      <NavBar url={`http://${keys.backendIp}:${keys.backendPort}`} />
      <div className="d-flex flex-column" style={{ minHeight: '90vh', background: '#313131', paddingTop: '10vh' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
