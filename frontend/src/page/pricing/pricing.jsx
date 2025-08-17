'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      monthlyPrice: '$19',
      yearlyPrice: '$199',
      features: ['5 Projects', '10 GB Storage', 'Basic Analytics', 'Community Support', 'Custom Domains'],
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro',
      monthlyPrice: '$49',
      yearlyPrice: '$499',
      features: [
        'Unlimited Projects',
        '50 GB Storage',
        'Advanced Analytics',
        'Priority Email Support',
        'Custom Domains',
        'Team Collaboration',
      ],
      buttonText: 'Start Free Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$99',
      yearlyPrice: '$999',
      features: [
        'All Pro Features',
        'Unlimited Storage',
        'Real-time Analytics',
        '24/7 Phone Support',
        'Dedicated Account Manager',
        'SAML/SSO Integration',
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
            <h1 className="title">Tarification simple et transparente</h1>
            <p className="subtitle">
             Choisissez le plan qui vous convient. Pas de frais cachés, pas de surprises.
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
                  <span className="period">/{isMonthly ? 'month' : 'year'}</span>
                </div>
                <p className="description">
                  {tier.name === 'Basique' && 'For individuals and small teams getting started.'}
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
                <button
                  className={`action-btn ${tier.isPopular ? 'popular-btn' : 'default-btn'}`}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing2;