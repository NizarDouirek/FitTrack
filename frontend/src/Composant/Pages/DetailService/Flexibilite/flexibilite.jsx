import React from "react";
import "./flexibilite.css";
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";
import RetourButton from "../../../retourboutton";

export default function Flexibilite() {
  return (
    <>
      
      <div className="flexibilite-container">
        {/* Hero Section */}
        <div className="flexibilite-hero">
          <img
            src="flexibilite.webp"
            alt="Athlète haltérophilie"
          />
          <div className="flexibilite-hero-text">
            <h1>Programme Flexibilité</h1>
            <p>Yoga & Étirement</p>
            <RetourButton/>
          </div>
        </div>

        {/* Description */}
        <section className="flexibilite-section fade-in">
          <h2>Pourquoi choisir le Yoga & l’Étirement ?</h2>
          <p className="p1flexibilite">
            Améliorer sa flexibilité est essentiel pour la mobilité, la prévention des douleurs
             et le bien-être général. Le yoga et les étirements renforcent la souplesse musculaire,
              réduisent le stress et favorisent une meilleure récupération après l’effort.
          </p>
        </section>

        {/* Avantages */}
        <section className="flexibilite-section cards">
          <h2>Avantages</h2>
          <div className="cards-container">
  <div className="cardflexibilite">
    <i className='bx bx-body icon-card'></i>
    <h3>Souplesse & Mobilité</h3>
    <p>Améliore la flexibilité et la mobilité articulaire grâce à des exercices ciblés.</p>
  </div>

  <div className="cardflexibilite">
    <i className='bx bx-smile icon-card'></i>
    <h3>Relaxation & Anti-Stress</h3>
    <p>Réduit le stress et favorise une détente profonde après l’entraînement.</p>
  </div>

  <div className="cardflexibilite">
    <i className='bx bxs-shield-alt-2 icon-card'></i>
    <h3>Prévention des Blessures</h3>
    <p>Diminue les tensions musculaires et protège les articulations contre les blessures.</p>
  </div>

  <div className="cardflexibilite">
    <i className='bx bx-moon icon-card'></i>
    <h3>Sommeil & Bien-être Mental</h3>
    <p>Améliore la qualité du sommeil et favorise l’équilibre mental.</p>
  </div>
</div>

        </section>

        {/* Programme */}
        <section className="flexibilite-section fade-inflexibilite">
          <h2>Programme type</h2>
          <ol>
            <li>🔥 Échauffement : respiration profonde et mobilité articulaire (5 min)</li>
            <li>🧘‍♀️ Postures de yoga : Chien tête en bas, Guerrier, Pigeon, Pont</li>
            <li>🤸 Étirements ciblés : ischio-jambiers, hanches, dos, épaules</li>
            <li>🕯️ Relaxation finale : méditation guidée ou respiration consciente</li>
          </ol>
        </section>

        {/* Nutrition */}
        <section className="flexibilite-section highlight">
          <h2>Conseils bien-être & nutrition</h2>
          <p className="p1flexibilite">
            Pour optimiser vos séances de yoga et d’étirement, adoptez une alimentation équilibrée et hydratez-vous correctement.
          </p>
          <p className="p2flexibilite"><b style={{color:'wheat'}}>🥗 Alimentation légère </b>: privilégiez fruits, légumes et repas équilibrés avant la pratique.
<br />
<b style={{color:'wheat'}}>💧 Hydratation</b> : buvez régulièrement de l’eau ou des tisanes.
<br />
<b style={{color:'wheat'}}>🌿 Magnésium & oméga-3</b> : réduisent le stress et favorisent la récupération.
<br />
<b style={{color:'wheat'}}>🍯 Infusions & thés </b>: aident à la détente et améliorent la concentration.</p>

        </section>

        {/* Vidéo explicative */}
        <section className="flexibilite-section video">
          <h2>Comment pratiquer le Yoga & les Étirements ?</h2>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/l0iCjSGV7aM"
            title="Vidéo entraînement flexibilite"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Call to Action */}
        <div className="cta">
          <button>Commencer un programme flexibilite</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
