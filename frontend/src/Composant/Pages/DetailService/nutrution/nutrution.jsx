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
            <div className="cardnutrition">🥗 Optimisation des performances</div>
            <div className="cardnutrition">⚡ Énergie constante au quotidien</div>
            <div className="cardnutrition">💪 Atteinte plus rapide des objectifs</div>
            <div className="cardnutrition">🧘 Meilleure santé globale</div>
          </div>
        </section>

        {/* Exemple de programme nutrition */}
        <section className="nutrition-section fade-in">
          <h2>Exemple de programme alimentaire</h2>
          <ol>
            <li>🍳 Petit-déjeuner : Protéines + glucides complexes + fruits</li>
            <li>🥩 Déjeuner : Protéines maigres + légumes + bonnes graisses</li>
            <li>🍎 Collation : Fruits secs + yaourt nature</li>
            <li>🥗 Dîner : Protéines + légumes + légumineuses</li>
          </ol>
        </section>

        {/* Conseils clés */}
        <section className="nutrition-section highlight">
          <h2>Conseils clés</h2>
            <p className="p1nutrition">
             Pour obtenir les meilleurs résultats et maintenir une santé optimale, voici quelques recommandations essentielles à suivre au quotidien :
            </p>
          <p className="p2nutrition">
            <b style={{color:"wheat"}}>Hydratation 💧</b> : buvez 2 à 3L d’eau par jour.
            <br />
            <b style={{color:"wheat"}}>Équilibre ⚖️</b> : associez protéines, glucides et lipides.
            <br />
            <b style={{color:"wheat"}}>Qualité 🥦</b> : privilégiez des aliments frais et naturels.
            <br />
            <b style={{color:"wheat"}}>Suivi 📊</b> : ajustez vos apports selon vos progrès.
          </p>
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
