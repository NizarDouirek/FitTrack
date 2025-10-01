'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './pricing.css';

const AnimatedPrice = ({ price }) => {
  return (
    <motion.span
      className="animated-price"
      key={price}
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {price}
    </motion.span>
  );
};

const Pricing2 = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const monthlyButtonRef = useRef(null);
  const yearlyButtonRef = useRef(null);
  const [activeButtonLeft, setActiveButtonLeft] = useState(0);
  const [activeButtonWidth, setActiveButtonWidth] = useState(0);

  const pricingTiers = [
    {
      name: 'Basic',
      monthlyPrice: '250Dh',
      yearlyPrice: '2490Dh',
      features: ['Suivi des calories et macronutriments','Journal alimentaire quotidien','Plans nutritionnels de base','Suivi du poids et IMC','Accès à la communauté'],
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro',
      monthlyPrice: '350Dh',
      yearlyPrice: '3900Dh',
      features: [
        'Tout du plan Basic','Plans nutritionnels personnalisés','Suivi de l’hydratation','Rapports et analyses avancées','Intégration avec montres connectées','Support prioritaire par email'
      ],
      buttonText: 'Start Free Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: '450Dh',
      yearlyPrice: '4490Dh',
      features: [
      'Toutes les fonctionnalités Pro','Gestion multi-utilisateurs (clients, athlètes)','Tableau de bord en temps réel','Support 24/7 (chat & téléphone)','programmes d’entraînement','Intégration API & export des données'
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  useEffect(() => {
    const updateButtonMetrics = () => {
      if (monthlyButtonRef.current && yearlyButtonRef.current) {
        if (isMonthly) {
          setActiveButtonLeft(monthlyButtonRef.current.offsetLeft);
          setActiveButtonWidth(monthlyButtonRef.current.offsetWidth);
        } else {
          setActiveButtonLeft(yearlyButtonRef.current.offsetLeft);
          setActiveButtonWidth(yearlyButtonRef.current.offsetWidth);
        }
      }
    };

    updateButtonMetrics();
    window.addEventListener('resize', updateButtonMetrics);
    return () => window.removeEventListener('resize', updateButtonMetrics);
  }, [isMonthly]);

  return (
    <div className="pricing-container">
      {/* Background gradients */}
      <div className="bg-gradient-top" />
      <div className="bg-gradient-top-dark" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="pricing-content">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center">
            
        <h2 className="section-title">Tarifs</h2>
            {/* <h1 className="title5">Tarification simple et transparente</h1> */}
            <p className="subtitle">
             Choisissez le plan qui vous convient
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="toggle-container">
            <div className="toggle-wrapper">
              <div className="toggle-overlay" />
              <button
                ref={monthlyButtonRef}
                onClick={() => setIsMonthly(true)}
                className={`toggle-btn ${isMonthly ? 'active' : ''}`}
              >
                Mensuelle
              </button>
              <button
                ref={yearlyButtonRef}
                onClick={() => setIsMonthly(false)}
                className={`toggle-btn ${!isMonthly ? 'active' : ''}`}
              >
                Annuelle
                <span className="discount-badge">20% off</span>
              </button>
              {activeButtonWidth > 0 && (
                <motion.div
                  className="toggle-indicator"
                  initial={false}
                  animate={{
                    left: activeButtonLeft,
                    width: activeButtonWidth,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="cards-grid">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card ${tier.isPopular ? 'popular' : ''}`}
              >
                {tier.isPopular && (
                  <div className="popular-badge">Le plus populaire</div>
                )}
                <h3 className="card-title">{tier.name}</h3>
                <div className="price-container">
                  <span className="price">
                    <AnimatedPrice price={isMonthly ? tier.monthlyPrice : tier.yearlyPrice} />
                  </span>
                  <span className="period">/{isMonthly ? 'mois' : 'année'}</span>
                </div>
                <p className="description">
                  {tier.name === 'Basic' && 'For individuals and small teams getting started.'}
                  {tier.name === 'Pro' && 'Perfect for growing businesses and advanced users.'}
                  {tier.name === 'Enterprise' && 'Tailored for large organizations with specific needs.'}
                </p>
                <ul className="features-list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="feature-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/PricingTable">
                <button
                  className={`action-btn ${tier.isPopular ? 'popular-btn' : 'default-btn'}`}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  {tier.buttonText}
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing2;