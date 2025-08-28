import React from "react";
import './boxe.css'
import Footer from "../../../Footer/footer";
import RetourButton from "../../../retourboutton";

export default function Boxe() {
  return (
    <>
      <div className="cardio-container">
        {/* Hero Section */}
        <div className="cardio-hero">
          <img
            src="boxe2.jpg"
            alt="Cyclisme en salle"
          />
          <div className="cardio-hero-text">
            <h1>🥊Sports de combat :</h1>
            <p> Boxe & Kickboxing</p>
            <RetourButton/>
          </div>
        </div>

        {/* Description */}
        <section className="cardio-section fade-in">
          <h2>Pourquoi choisir la Boxe & le Kickboxing ?</h2>
          <p className="p1cardio">
            La boxe et le kickboxing sont des sports intenses qui combinent force, vitesse et endurance.
Ils permettent non seulement de brûler beaucoup de calories, mais aussi de développer la coordination, l’explosivité et la confiance en soi.
          </p>
        </section>

        {/* Avantages */}
        <section className="cardio-section cards">
          <h2>Avantages</h2>
          <div className="cards-container">
            <div className="cardcardio">🥊 Améliore la condition physique générale (force, vitesse, endurance)</div>
            <div className="cardcardio">🔥 Brûle un maximum de calories et favorise la perte de poids</div>
            <div className="cardcardio">🛡️ Renforce la confiance en soi et améliore la gestion du stress</div>
            <div className="cardcardio">⚡ Travail complet : cardio + musculation fonctionnelle</div>
          </div>
        </section>

        {/* Programme */}
        <section className="cardio-section fade-incardio">
          <h2>Programme type</h2>
          <ol>
            <li>🥶 Échauffement (5-10 min) : corde à sauter, shadow boxing, mobilité articulaire</li>
            <li>🥊 Entraînement principal (20-30 min) : <br />

Enchaînements de coups (jab, cross, uppercut, kick) <br />

Exercices de sac de frappe (3x3 min) <br />

Intervalles haute intensité (HIIT boxe/kick)</li>
            <li>🧘 Récupération (5-10 min) : étirements, respiration profonde</li>
          </ol>
        </section>

        {/* Nutrition */}
        <section className="cardio-section highlight">
          <h2>Conseils nutrition</h2>
          <p className="p1cardio">
           Une bonne alimentation est essentielle pour soutenir l’intensité des sports de combat.
          </p>
          <p className="p2cardio">
            <b style={{color:'wheat'}}>Glucides complexes 🍞</b> : apportent l’énergie nécessaire aux efforts prolongés. <br />
            <b style={{color:'wheat'}}>Protéines 🥩</b> : aident à la récupération musculaire. <br />
            <b style={{color:'wheat'}}>Électrolytes 🧂</b> : essentiels pour compenser les pertes dues à la transpiration. <br />
            <b style={{color:'wheat'}}>Eau 💧</b> : une hydratation constante est cruciale. 
          </p>
        </section>

        {/* Vidéo explicative */}
        <section className="cardio-section video">
          <h2>Comment bien s’entraîner en Boxe/Kickboxing ?</h2>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/mGsB-sjayVY"
            title="Vidéo entraînement Cardio"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Call to Action */}
        <div className="cta">
          <button>Commencer un programme Cardio</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
