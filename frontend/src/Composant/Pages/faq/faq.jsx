import React, { useState } from "react";
import './faq.css'
import Header from "../../Header/header";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";

const faqItems = [
  {
    q: "Comment puis-je rejoindre vos séances de groupe ?",
    a: "Créez un compte en ligne, choisissez l’abonnement qui vous convient puis réservez vos créneaux depuis l’onglet ‘Cours’. Vous pouvez aussi vous inscrire à l’accueil de la salle.",
  },
  {
    q: "Quel entraînement me convient le mieux ?",
    a: "Lors de votre première visite, un coach réalise une évaluation rapide (objectifs, niveau, antécédents). Il vous proposera un programme personnalisé : prise de masse, perte de poids, mobilité, ou remise en forme.",
  },
  {
    q: "À partir de quel âge puis-je m’inscrire à la salle ?",
    a: "L’inscription est possible à partir de 16 ans avec autorisation parentale. À partir de 18 ans, l’inscription se fait librement.",
  },
  {
    q: "Puis-je parrainer un ami dans votre salle ?",
    a: "Oui ! Le parrain gagne un mois à -50% et le filleul reçoit les frais d’inscription offerts. L’offre peut varier selon la période.",
  },
  {
    q: "Y a‑t‑il des bonus inclus avec l’abonnement ?",
    a: "Selon la formule : bilan initial avec coach, programme personnalisé, accès aux cours collectifs, application mobile et suivi mensuel.",
  },
  {
    q: "Puis‑je payer en espèces ou par carte ?",
    a: "Nous acceptons carte bancaire, espèces et virement. Les abonnements mensuels récurrents se font généralement par prélèvement.",
  },
  {
    q: "Puis‑je geler (suspendre) mon abonnement ?",
    a: "Oui, vous pouvez suspendre votre abonnement en cas de voyage, blessure ou examen (jusqu’à 60 jours/an selon la formule). Des justificatifs peuvent être demandés.",
  },
];

export default function FAQGym() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
     <div>
              <div className="headerFaq">
                <Header />
              </div>
        
              <div className="contentfaq">
                <div className="faq">
                   
                    <div className="leftCo">
                      <p className="p1">Faq</p>
                      <p className="p2">
                        <Link to="/home" className="accueil-link">Accueil</Link> / Faq
                      </p>
                    </div>
                  
                  </div>
                </div>
    <section className="faq-section">
      <div className="faq-container">
        {/* Titre */}
        <header className="faq-header">
          <span className="faq-label">FAQ</span>
          <h1>Questions fréquentes</h1>
          <p>Tout ce qu’il faut savoir pour démarrer dans les meilleures conditions.</p>
        </header>

        {/* Grille principale */}
        <div className="faq-grid">
          {/* Image à gauche */}
          <div className="faq-image">
            <img
              src="faq.webp "
              alt="Séance d’entraînement en salle de sport"
            />
            <div className="faq-image-caption">
              <p>Rejoignez des séances motivantes, encadrées par des coachs certifiés.</p>
            </div>
          </div>

          {/* FAQ à droite */}
          <div className="faq-list">
            
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-item">
                  <button
                    onClick={() => toggle(i)}
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span>{item.q}</span>
                    <svg
                      className={`chevron ${isOpen ? "rotate" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={`faq-answer ${isOpen ? "open" : ""}`}
                  >
                    <p>{item.a}</p>
                    <div className="answer-divider"></div>
                  </div>
                </div>
              );
            })}

            <div className="faq-cta">
              <a href="/contact" className="cta-btn">
                Commencer maintenant
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}