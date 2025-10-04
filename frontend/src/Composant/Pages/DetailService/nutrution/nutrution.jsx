import React from "react";
import './nutrution.css'
import Header from "../../../Header/header";
import Footer from "../../../Footer/footer";
import RetourButton from "../../../retourboutton";

export default function NutritionPage() {
  return (
    <>
  
      <div className="nutrition-container">
        
        {/* Hero */}
        <div className="nutrition-hero">
          <img
            src="nutrition.jpg"
            alt="Nutrition saine"
          />
          <div className="nutrition-hero-text">
            <h1>Nutrition & Coaching</h1>
            <p>Plans alimentaires personnalisés</p>
            <RetourButton/>
          </div>
        </div>

        {/* Description */}
        <section className="nutrition-section fade-in">
          <h2>Pourquoi choisir un plan alimentaire personnalisé ?</h2>
          <p className="p1nutrition">
            La nutrition est un pilier fondamental de vos résultats sportifs. 
            Avec un plan adapté, vous améliorez vos performances, accélérez la récupération 
            et atteignez vos objectifs (perte de poids, prise de masse, équilibre).
          </p>
        </section>

        {/* Avantages */}
        <section className="nutrition-section cards">
          <h2>Avantages</h2>
    <div className="cards-container">
  <div className="cardnutrition">
    <i className='bx bx-restaurant icon-card'></i>
    <h3>Optimisation des Performances</h3>
    <p>Adopte une alimentation équilibrée qui soutient tes efforts sportifs et maximise tes résultats.</p>
  </div>

  <div className="cardnutrition">
    <i className='bx bx-bolt icon-card'></i>
    <h3>Énergie Constante</h3>
    <p>Bénéficie d’une énergie stable tout au long de la journée grâce à une nutrition adaptée.</p>
  </div>

  <div className="cardnutrition">
    <i className='bx bx-dumbbell icon-card'></i>
    <h3>Objectifs Atteints</h3>
    <p>Accélère la progression et atteins plus rapidement tes objectifs sportifs et physiques.</p>
  </div>

  <div className="cardnutrition">
    <i className='bx bx-health icon-card'></i>
    <h3>Santé Globale</h3>
    <p>Améliore ton bien-être général, renforce ton système immunitaire et préviens les carences.</p>
  </div>
</div>

        </section>
        
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
                <div className="nutrition-content">
                  <h3>Équilibre ⚖️</h3>
                  <p>associez protéines, glucides et lipides.</p>
                </div>
              </div>
              <div className="nutrition-item1">
                <div className="nutrition-content1">
                  <h3>Qualité 🥦</h3>
                  <p> privilégiez des aliments frais et naturels.</p>
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

        {/* Exemple de programme alimentaire */}
<section className="prg">
  <h2>Exemple de Programme Alimentaire</h2>
  
  <div className="program-cards-container fade-incardio">
    <div className="program-card">
      <span className="program-step">Matin 🌅</span>
      <i className="bx bx-coffee program-icon"></i>
      <h3>Petit-déjeuner</h3>
      <p>Protéines + glucides complexes + fruits pour bien commencer la journée.</p>
    </div>

    <div className="program-card">
      <span className="program-step">Midi ☀️</span>
      <i className="bx bx-restaurant program-icon"></i>
      <h3>Déjeuner</h3>
      <p>Protéines maigres + légumes + bonnes graisses pour un repas équilibré et nourrissant.</p>
    </div>

    <div className="program-card">
      <span className="program-step">Goûter 🍎</span>
      <i className="bx bx-apple program-icon"></i>
      <h3>Collation</h3>
      <p>Fruits secs + yaourt nature pour garder de l’énergie avant le dîner.</p>
    </div>

    <div className="program-card">
      <span className="program-step">Soir 🌙</span>
      <i className="bx bx-bowl-hot program-icon"></i>
      <h3>Dîner</h3>
      <p>Protéines + légumes + légumineuses pour une digestion légère et une bonne récupération.</p>
    </div>
  </div>

  <div className="program-progress">
    <div className="progress-dot active"></div>
    <div className="progress-dot"></div>
    <div className="progress-dot"></div>
    <div className="progress-dot"></div>
  </div>
</section>

        

        {/* Vidéo explicative */}
        <section className="nutrition-section video">
          <h2>Vidéo : bases d’une alimentation saine</h2>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/AVkIzSb1xEE"
            title="Vidéo Nutrition & Coaching"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Call to Action */}
        <div className="cta">
          <button>Demander un plan personnalisé</button>
        </div>

      </div>
      <Footer />
    </>
  );
}
