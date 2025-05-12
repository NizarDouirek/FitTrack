import React, { useState } from 'react';
import './App.css'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Composant/Pages/Login-Signup/signup';
import Login from './Composant/Pages/Login-Signup/login';
import Homme from './Composant/Pages/Homme/homme';
import About from './Composant/Pages/About/about';
import Contact from './Composant/Pages/Contact/contact';

function App() {
   return(
      <Router>
      <Routes>
          <Route path="/" element={ <Homme/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 


          
      </Routes>
      </Router>
   )
}

export default App;
