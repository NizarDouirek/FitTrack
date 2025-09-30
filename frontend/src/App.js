import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Composant/Pages/Login-Signup/signup';
import Login from './Composant/Pages/Login-Signup/login';
import Homme from './Composant/Pages/Homme/homme';
import About from './Composant/Pages/About/about';
import Contact from './Composant/Pages/Contact/contact';
import Galerie from './Composant/Galerie/Galerie';
import FAQGym from './Composant/Pages/faq/faq';
import Notfound from './Composant/Pages/notfound/notfound';
import BMICalculator from './Composant/Pages/Bmi/bmi';
import ForcePage from './Composant/Pages/DetailService/Force/force';
import CardioPage from './Composant/Pages/DetailService/Cardio/cardio';
import NutritionPage from './Composant/Pages/DetailService/nutrution/nutrution';
import ScrollToTop from './Composant/scrolltop/scrolltop';
import Flexibilite from './Composant/Pages/DetailService/Flexibilite/flexibilite';
import Boxe from './Composant/Pages/DetailService/Boxe/boxe';
import PricingTable from './Composant/Pack/pack';
import OffrePack from './Composant/Pack/offrepack';
import Blog from './Composant/Blog/blog';
import Team from './Composant/Team/team';

function App() {
   return(
      <Router>
         <ScrollToTop/>
          <Routes>
            <Route path="/" element={ <Homme/>} />
            <Route path="/home" element={ <Homme/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/faq" element={ <FAQGym/>} />
            <Route path="/Blog" element={ <Blog/>} />
            <Route path="/Team" element={ <Team/>} />
            <Route path="/bmi" element={ <BMICalculator/>} />
            <Route path="/notfound" element={ <Notfound/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/force" element={ <ForcePage/>} />
            <Route path="/home/force" element={<ForcePage />} />
            <Route path="/Cardio" element={ <CardioPage/>} />
            <Route path="/home/Cardio" element={<CardioPage />} />
            <Route path="/nutrition" element={ <NutritionPage/>} />
            <Route path="/home/nutrition" element={<NutritionPage />} />
            <Route path="/flexibilite" element={ <Flexibilite/>} />
            <Route path="/home/flexibilite" element={<Flexibilite />} />
            <Route path="/boxe" element={ <Boxe/>} />
            <Route path="/home/boxe" element={<Boxe />} />
            <Route path="/Galerie" element={ <Galerie/>} />
            <Route path="/PricingTable" element={ <PricingTable/>} />
            <Route path="/OffrePack" element={ <OffrePack/>} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />   
          </Routes>
      </Router>
   )
}

export default App;
