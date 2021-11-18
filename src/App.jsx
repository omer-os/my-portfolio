import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



export default function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/projects" element={<Projects />}>Projects</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </Routes>
    </Router>
  )
}
