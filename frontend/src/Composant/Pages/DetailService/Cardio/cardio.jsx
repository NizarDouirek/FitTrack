import React from "react";
import "./cardio.css";
import './cardio.css'
import Footer from "../../../Footer/footer";
import RetourButton from "../../../retourboutton";

export default function CardioPage() {
  return (
    <>
      <div className="cardio-container">
        {/* Hero Section */}
        <div className="cardio-hero">
          <img
            src="cardiopage.webp"
            alt="Cyclisme en salle"
          />
          <div className="cardio-hero-text">
            <h1>Programme Cardio</h1>
            <p>Cyclisme en salle & Endurance</p>
            <RetourButton/>
          </div>
        </div>

        {/* Description */}
        <section className="cardio-section fade-in">
          <h2>Pourquoi choisir l’entraînement Cardio ?</h2>
          <p className="p1cardio">
            Le cardio est essentiel pour renforcer le cœur, améliorer
            l’endurance et brûler des calories. Le cyclisme en salle et
            d’autres exercices cardiovasculaires favorisent la santé générale,
            l’énergie et la récupération après l’effort.
          </p>
        </section>

        {/* Avantages */}
        <section className="cardio-section cards">
          <h2>Avantages</h2>
          <div className="cards-container">
  <div className="cardcardio">
    <i className='bx bx-heart icon-card'></i>
    <h3>Santé Cardiovasculaire</h3>
    <p>Renforce ton cœur, améliore la circulation sanguine et réduit les risques de maladies.</p>
  </div>

  <div className="cardcardio">
    <i className='bx bxs-hot icon-card'></i>
    <h3>Brûle Graisses & Perte de Poids</h3>
    <p>Un entraînement intensif qui stimule le métabolisme et favorise la combustion des graisses.</p>
  </div>

  <div className="cardcardio">
    <i className='bx bx-run icon-card'></i>
    <h3>Amélioration de l’Endurance</h3>
    <p>Développe ta capacité à tenir sur la durée grâce à des exercices de haute intensité.</p>
  </div>
</div>

        </section>

        {/* Programme */}
        <section className="cardio-section fade-incardio">
          <h2>Programme type</h2>
          <ol>
            <li>🚴‍♂️ Échauffement : 5 à 10 min pédalage léger</li>
            <li>⚡ Entraînement : 20-30 min d’intervalles intensifs (sprints, montées)</li>
            <li>🧘‍♀️ Récupération : 5-10 min pédalage lent + étirements</li>
          </ol>
        </section>

        {/* Nutrition */}
        <section className="cardio-section highlight">
          <h2>Conseils nutrition</h2>
          <p className="p1cardio">
            Une bonne alimentation optimise vos performances cardio. 
            Misez sur l’énergie et la récupération.
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
          <h2>Comment bien s’entraîner en cardio ?</h2>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/sCQ822cW5s0"
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
