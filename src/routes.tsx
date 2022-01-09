import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Grounding from './pages/Grounding';

export default function ReactRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/grounding' element={<Grounding />} />
      </Routes>
    </Router>
  );
}
