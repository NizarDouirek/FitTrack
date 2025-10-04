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
 
        

        <section className="nutrition-section">
  <h2 >Conseils Nutrition</h2>
  <p className="nutrition-intro">
    Pour maximiser vos résultats, privilégiez une alimentation riche en
    <strong> protéines</strong>, complétez avec de la{" "}
    <strong>créatine</strong> et maintenez une alimentation{" "}
    <strong>équilibrée</strong>.
  </p>

  <div className="nutrition-container1">
    {/* Image gauche */}
    <div className="nutrition-image1">
      <img src="logoHe.webp" alt="Nutrition" />
    </div>

    {/* Liste droite */}
    <div className="nutrition-list1">
      <div className="nutrition-item1">
        {/* <i className="bx bx-beef nutrition-icon"></i> */}
        <div className="nutrition-content1">
          <h3>Protéines 🥩</h3>
          <p>Favorisent la réparation et la croissance musculaire</p>
        </div>
      </div>

      <div className="nutrition-item1">
        {/* <i className="bx bx-bolt-circle nutrition-icon"></i> */}
        <div className="nutrition-content">
          <h3>Créatine ⚡</h3>
          <p>Booste la force et accélère la récupération</p>
        </div>
      </div>

      <div className="nutrition-item1">
        {/* <i className="bx bx-bowl-rice nutrition-icon"></i> */}
        <div className="nutrition-content">
          <h3>Glucides complexes 🍚</h3>
          <p>Fournissent une énergie durable pour l'entraînement</p>
        </div>
      </div>

      <div className="nutrition-item1">
        {/* <i className="bx bx-bowl-hot nutrition-icon"></i> */}
        <div className="nutrition-content">
          <h3>Lipides sains 🥑</h3>
          <p>Soutiennent la production d'hormones et la santé générale</p>
        </div>
      </div>

      <div className="nutrition-item1">
        {/* <i className="bx bx-water nutrition-icon"></i> */}
        <div className="nutrition-content">
          <h3>Hydratation 💧</h3>
          <p>Indispensable pour prévenir la fatigue et optimiser les résultats</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Programme */}
<section className="prg">
  <h2>Programme Type</h2>
  <div className="program-cards-container fade-inforce">
    <div className="program-card">
      <span className="program-step">Étape 1</span>
      <i className='bx bx-run program-icon'></i>
      <h3>Échauffement Dynamique</h3>
      <p>10 minutes de cardio léger pour augmenter la température corporelle et préparer vos muscles à l'effort intense.</p>
    </div>
    
    <div className="program-card">
      <span className="program-step">Étape 2</span>
      <i className='bx bx-dumbbell program-icon'></i>
      <h3>Exercices de Force</h3>
      <p>Squats, Deadlifts, Développé couché et Kettlebell swings pour développer la puissance et l'endurance musculaire.</p>
    </div>
    
    <div className="program-card">
      <span className="program-step">Étape 3</span>
      <i className='bx bx-body program-icon'></i>
      <h3>Récupération Active</h3>
      <p>Étirements profonds et exercices de mobilité pour optimiser la récupération et prévenir les blessures.</p>
    </div>
  </div>
  
  <div className="program-progress">
    <div className="progress-dot active"></div>
    <div className="progress-dot"></div>
    <div className="progress-dot"></div>
  </div>
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
