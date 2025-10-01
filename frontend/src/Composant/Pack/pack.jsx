import React from 'react';
import './pack.css'


import {Link, useNavigate } from "react-router-dom";
import Header from '../Header/header';
import Footer from '../Footer/footer';

const PricingTable = () => {
  const navigate = useNavigate();

  const handleSelect = (plan) => {
    navigate("/OffrePack", { state: plan });
  };

  const plans = [
    { name: "STANDARD", price: "25O DH", badge: "Populaire" ,
    support: "Free 3 Months Solutions Support",
    features: [
      { label: "Custom Website Design", included: true },
      { label: "Priority Bug Fixes & Updates", included: true },
      { label: "Basic & Technical SEO", included: true },
      { label: "System Integration Support", included: false },
      { label: "24/7 Dedicated IT Assistance", included: false },
    ],},
    { name: "PRO", price: "350 DH", badge: "Recommandé",support: "Free 6 Months Solutions Support",
    features: [
      { label: "Custom Website Design", included: true },
      { label: "Priority Bug Fixes & Updates", included: true },
      { label: "Basic & Technical SEO", included: true },
      { label: "System Integration Support", included: true },
      { label: "24/7 Dedicated IT Assistance", included: false },
    ], },
    { name: "PREMIUM", price: "450 DH", badge: null,support: "Free 12 Months Solutions Support",
    features: [
      { label: "Custom Website Design", included: true },
      { label: "Priority Bug Fixes & Updates", included: true },
      { label: "Basic & Technical SEO", included: true },
      { label: "System Integration Support", included: true },
      { label: "24/7 Dedicated IT Assistance", included: true },
    ], },
  ];

  return (
   
        <div id="faq" className="faq">
                 <div className="headerContact">
                                 <Header />
                               </div>
                         
                               <div className="contentContact">
                                 <div className="contact1">
                                    
                                     <div className="leftCo">
                                       <p className="p1">Pack</p>
                                       <p className="p2">
                                         <Link to="/home" className="accueil-link">Accueil</Link> / Pack
                                       </p>
                                     </div>
                                   
                                   
                                 </div>

      <div className="pricing-container">
         <h1>Choisissez l’Offre qui Fait Décoller Votre Business </h1>
        <table className="pricing-table">
          <thead>
            <tr>
              <th style={{ width: '200px', height: '200px', padding: 0 }}> 
          
              </th>
               {plans.map((plan, index) => (
              <th key={index} className={`th${index + 1}`}>
                <div className="plan-title">
                  <h2>{plan.name}</h2>
                  {plan.badge && <div className="price-badge">{plan.badge}</div>}
                </div>
                <div className="plan-price2">
                  <p>
                    {plan.price} <br /> <span>par mois</span>
                  </p>
                </div>
                <div>
                  <button onClick={() => handleSelect(plan)}>
                    Sélectionner
                  </button>
                </div>
              </th>
            ))}
            </tr>
          </thead>
          <br /><br />
          
          <tbody>
            {[
              { name: "Type de site", standard: "Vitrine (1-3 p)", pro: "Complet (5-7 p)", premium: "E-commerce ou sur-mesure" },
              { name: "Design", standard: "Pro & responsive", pro: "Sur-mesure", premium: "UX/UI personnalisé" },
              { name: "Intégration de contenus", standard: "✔", pro: "—", premium: "—" },
              { name: "Formulaire de contact intégré", standard: "—", pro: "✔", premium: "✔" },
              { name: "Optimisation SEO", standard: "—", pro: "De base", premium: "Avancée" },
              { name: "Révisions", standard: "1", pro: "2", premium: "Illimitées (1 mois)" },
              { name: "Livraison rapide", standard: "5 jours", pro: "—", premium: "—" },
              { name: "Hébergement + nom de domaine", standard: "✔", pro: "✔ (avec SSL)", premium: "✔" },
              { name: "Adresses e-mail pro", standard: "—", pro: "✔", premium: "✔" },
              { name: "Paiement / réservation intégrés", standard: "—", pro: "—", premium: "✔" },
              { name: "Support technique prioritaire", standard: "—", pro: "—", premium: "✔" },
              { name: "Formation + guide", standard: "—", pro: "—", premium: "✔" },
              { name: "Maintenance offerte", standard: "—", pro: "—", premium: "✔" },
            ].map((feature, index) => (
              <tr key={index} className={`feature-row ${index % 2 === 0 ? 'bg1' : 'bg2'}`}>
                <td className='feature-name'>{feature.name}</td>
                <td className='standard'>{feature.standard}</td>
                <td className='pro'>{feature.pro}</td>
                <td className='premium'>{feature.premium}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>
                <button className="btnplan standard-btn">
                  Commencer <span className="btn-effect"></span>
                </button>
              </td>
              <td>
                <button className="btnplan pro-btn">
                  Commencer <span className="btn-effect"></span>
                </button>
              </td>
              <td>
                <button className="btnplan premium-btn">
                  Commencer <span className="btn-effect"></span>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default PricingTable;