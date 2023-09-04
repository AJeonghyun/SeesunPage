import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Participants from './Pages/Participants';
import Project from './Pages/Project';
import Navigation from './Navigation/Navbar';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/participants" element={<Participants/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </Router>
  );
}

export default App;
