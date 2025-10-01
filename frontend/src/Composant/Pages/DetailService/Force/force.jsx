import React from "react";
import "./force.css";
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";
import RetourButton from "../../../retourboutton";

export default function ForcePage() {
  return (
    <>
      
      <div className="force-container">
        {/* Hero Section */}
        <div className="force-hero">
          <img
            src="forcehero.webp"
            alt="Athlète haltérophilie"
          />
          <div className="force-hero-text">
            <h1>Programme Force</h1>
            <p>Haltérophilie & Kettlebell</p>
            <RetourButton/>
          </div>
        </div>

        {/* Description */}
        <section className="force-section fade-in">
          <h2>Pourquoi choisir l’entraînement de Force ?</h2>
          <p className="p1force">
            Développer sa force est essentiel pour la santé globale, la croissance
            musculaire et les performances sportives. L’haltérophilie et le
            kettlebell training renforcent le corps, améliorent la posture et
            préviennent les blessures à long terme.
          </p>
        </section>

        {/* Avantages */}
        <section className="force-section cards">
          <h2>Avantages</h2>
          <div className="cards-container">
  <div className="cardforce">
    <i className='bx bx-dumbbell icon-card'></i>
    <h3>Masse Musculaire</h3>
    <p>Stimule la croissance musculaire avec des exercices de résistance adaptés.</p>
  </div>

  <div className="cardforce">
    <i className='bx bx-body icon-card'></i>
    <h3>Amélioration de la Posture</h3>
    <p>Renforce les muscles profonds pour un maintien naturel et une posture équilibrée.</p>
  </div>

  <div className="cardforce">
    <i className='bx bxs-shield-alt-2 icon-card'></i>
    <h3>Prévention des Blessures</h3>
    <p>Protège les articulations et diminue les risques de blessures liées à l’effort.</p>
  </div>
</div>

        </section>

        {/* Programme */}
        <section className="force-section fade-inforce">
          <h2>Programme type</h2>
          <ol>
            <li>🔥 Échauffement : 10 min cardio léger</li>
            <li>🏋️‍♂️ Exercices principaux : Squats, Deadlifts, Développé couché, 
              Kettlebell swings
            </li>
            <li>🧘‍♂️ Étirements de récupération</li>
          </ol>
        </section>

        {/* Nutrition */}
        <section className="force-section highlight">
          <h2>Conseils nutrition</h2>
          <p className="p1force">
            Pour maximiser vos résultats, privilégiez une alimentation riche en
            <strong> protéines</strong>, complétez avec de la{" "}
            <strong>créatine</strong> et maintenez une alimentation{" "}
            <strong>équilibrée</strong>.
          </p>
          <p className="p2force"><b style={{color:'wheat'}}>Protéines 🥩 </b>: favorisent la réparation et la croissance musculaire.
<br />
<b style={{color:'wheat'}}>Créatine ⚡</b> : booste la force et accélère la récupération.
<br />
<b style={{color:'wheat'}}>Glucides complexes 🍚</b> : fournissent une énergie durable pour l’entraînement.
<br />
<b style={{color:'wheat'}}>Lipides sains 🥑 </b>: soutiennent la production d’hormones et la santé générale.
<br />
<b style={{color:'wheat'}}>Hydratation & équilibre 💧</b> : indispensables pour prévenir la fatigue et optimiser les résultats.</p>
        </section>

        {/* Vidéo explicative */}
        <section className="force-section video">
          <h2>Comment s’entraîner avec haltérophilie et kettlebell?</h2>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Q1T3y2ilt34"
            title="Vidéo entraînement Force"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Call to Action */}
        <div className="cta">
          <button>Commencer un programme Force</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
