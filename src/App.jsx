import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Layout from './pages/Layout';
import './App.css';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  

  );
};

export default App;
