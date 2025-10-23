import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import CitizenHomePage from './pages/CitizenHomePage';
// Personal website: removed service/admin pages that were part of the original app.

function AppRoutes() {
  // Personal site: always show the navbar for now
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CitizenHomePage />} />
        {/* Add About, Projects, Contact pages as needed */}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
