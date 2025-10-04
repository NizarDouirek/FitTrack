import React from "react";
import "./cardio.css";
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";
import RetourButton from "../../../retourboutton";

export default function CardioPage() {
  return (
    <>
      <div className="cardio-container">
        {/* Hero Section */}
        <div className="cardio-hero">
          <img src="cardiopage.webp" alt="Cyclisme en salle" />
          <div className="cardio-hero-text">
            <h1>Programme Cardio</h1>
            <p>Cyclisme en salle & Endurance</p>
            <RetourButton />
          </div>
        </div>

        {/* Description */}
        <section className="force-section fade-in">
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
              <i className="bx bx-heart icon-card"></i>
              <h3>Santé Cardiovasculaire</h3>
              <p>
                Renforce le cœur, améliore la circulation et diminue les risques
                de maladies.
              </p>
            </div>

            <div className="cardcardio">
              <i className="bx bxs-hot icon-card"></i>
              <h3>Brûle Graisses & Perte de Poids</h3>
              <p>
                Stimule le métabolisme et favorise la combustion des graisses
                grâce à des séances intenses.
              </p>
            </div>

            <div className="cardcardio">
              <i className="bx bx-run icon-card"></i>
              <h3>Amélioration de l’Endurance</h3>
              <p>
                Développe la capacité à maintenir un effort prolongé et améliore
                la récupération.
              </p>
            </div>
          </div>
        </section>

        {/* Nutrition */}
        <section className="nutrition-section">
          <h2>Conseils Nutrition</h2>
          <p className="nutrition-intro">
            Pour des performances cardio optimales, adoptez une alimentation
            riche en <strong>glucides complexes</strong>, en{" "}
            <strong>protéines</strong> et restez toujours bien{" "}
            <strong>hydraté</strong>.
          </p>

          <div className="nutrition-container1">
            <div className="nutrition-image1">
              <img src="logoHe.webp" alt="Nutrition" />
            </div>

            <div className="nutrition-list1">
              <div className="nutrition-item1">
                <div className="nutrition-content1">
                  <h3>Glucides complexes 🍚</h3>
                  <p>Apportent une énergie stable et durable pendant l’effort.</p>
                </div>
              </div>

              <div className="nutrition-item1">
                <div className="nutrition-content">
                  <h3>Protéines 🥩</h3>
                  <p>Favorisent la récupération musculaire après les séances.</p>
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
                <div className="nutrition-content">
                  <h3>Électrolytes 🧂</h3>
                  <p>Compensent les pertes dues à la transpiration intense.</p>
                </div>
              </div>

              <div className="nutrition-item1">
                <div className="nutrition-content">
                  <h3>Eau 💧</h3>
                  <p>Hydrate le corps et maintient les performances optimales.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="prg">
          <h2>Programme Type</h2>
          <div className="program-cards-container fade-incardio">
            <div className="program-card">
              <span className="program-step">Étape 1</span>
              <i className="bx bx-run program-icon"></i>
              <h3>Échauffement</h3>
              <p>
                5 à 10 minutes de pédalage léger pour activer le système
                cardiovasculaire et préparer les muscles.
              </p>
            </div>

            <div className="program-card">
              <span className="program-step">Étape 2</span>
              <i className="bx bx-cycling program-icon"></i>
              <h3>Entraînement</h3>
              <p>
                20 à 30 minutes d’intervalles : alternance de sprints et de
                phases de récupération active.
              </p>
            </div>

            <div className="program-card">
              <span className="program-step">Étape 3</span>
              <i className="bx bx-body program-icon"></i>
              <h3>Récupération</h3>
              <p>
                Étirements légers et pédalage lent pour favoriser la détente
                musculaire et éviter les courbatures.
              </p>
            </div>
          </div>

          <div className="program-progress">
            <div className="progress-dot active"></div>
            <div className="progress-dot"></div>
            <div className="progress-dot"></div>
          </div>
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
