import React from "react";
import './about.css';
import Header from "../../Header/header";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="headerAbout">
        <Header />
      </div>

      <div className="contentAbout">
       <div className="about1">
  <div className="leftCo">
    <p className="p1">À propos</p>
    <p className="p2">
      <Link to="/home" className="accueil-link">Accueil</Link> / À propos
    </p>
  </div>
</div>

        <div className="about2">
          <div className="titreAbout2">
            <img className="fleche" src="fleche.png" alt="Flèche" />
            <div>
              <h1>À propos de FitTrack, Votre parcours fitness commence ici</h1>
              <p>
                Découvrez qui nous sommes, notre mission, nos valeurs, et comment
                FitTrack vous accompagne dans votre parcours fitness.
              </p>
              {/* <div style={{ position: "relative", display: "inline-block" }}>
                <h1 className="text-background">10 + <br /> Expérience</h1>
                <img className="imgexp" src="about1.jpg" alt="Expérience" />
              </div> */}
            </div>
          </div>
        </div>
  <h2 className="section-titleA">Qui sommes-nous ?</h2>
<div className="headAbout">
  
  <img className="img11bout" src="aboutA.png" alt="" />
  <div className="leftAb">
    <h2>Notre ADN, votre bien-être!</h2>
    <p>
FitTrack est une plateforme innovante dédiée à la nutrition intelligente, à la forme physique et au bien-être. 
Notre mission est de vous aider à atteindre vos objectifs de santé grâce à un suivi simple, précis et motivant de vos apports nutritionnels et de vos habitudes alimentaires.
</p>
<p>Notre équipe est composée de passionnés de technologie, de sport et de santé. Ensemble, nous concevons des outils performants qui transforment les données de votre quotidien en indicateurs clairs pour progresser en toute confiance.
</p>
<p>Que vous soyez athlète, amateur de fitness, ou simplement en quête d’un mode de vie plus sain, FitTrack vous accompagne à chaque étape avec des solutions intuitives, personnalisées et basées sur vos besoins réels.
</p>
    <button className="btn-about1"><Link to="/contact">Commencer maintenant</Link></button>
  </div>
</div>
      <h2 className="section-titleA">Notre mission</h2>
<div className="about3">
  <div className="about-text-icons">
    <h1>  Chez <span style={{color:'red'}}>FitTrack</span> , nous croyons que chaque personne mérite un accompagnement personnalisé pour atteindre
       ses objectifs de santé et c'est ca notre mission</h1>
    <div className="icon-text">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                 C2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3
                 C19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#e41c1cff"/>
      </svg>
      <p>Suivi intelligent de votre nutrition et de vos objectifs personnels.</p>
    </div>

    <div className="icon-text">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17
                 C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 21H7V3H17V21Z"
              fill="#44dcd1ff"/>
        <path d="M12 19C13.1 19 14 18.1 14 17C14 15.9 13.1 15 12 15
                 C10.9 15 10 15.9 10 17C10 18.1 10.9 19 12 19Z"
              fill="#4ECDC4"/>
      </svg>
      <p>Des outils mobiles simples et efficaces pour un suivi quotidien.</p>
    </div>

    <div className="icon-text">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19
                 C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 17
                 C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7
                 C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
              fill="yellow"/>
        <path d="M12 9.5C10.62 9.5 9.5 10.62 9.5 12
                 C9.5 13.38 10.62 14.5 12 14.5
                 C13.38 14.5 14.5 13.38 14.5 12
                 C14.5 10.62 13.38 9.5 12 9.5Z"
              fill="#9ce707ff"/>
      </svg>
      <p>Un accompagnement vers une vie plus saine et durable.</p>
    </div>
  </div>

  <img className="about-img" src="about.jpg" alt="FitTrack Mission" />
</div>

        
        <div className="titre-pn" style={{marginTop:'150px'}}>
          <h4>Pourquoi nous choisir ?</h4>
          <h1>DÉPASSEZ VOS LIMITES</h1>
        </div>
        <div className="pourquoi-nous" style={{marginBottom:'100px'}}>
          
          <div className="content-pn">
            <img src="modern.png" alt="Équipements modernes" />
            <h3>Équipements modernes</h3>
            <p>Des machines de dernière génération pour optimiser vos performances.</p>
          </div>

          <div className="content-pn">
            <img src="nutrition.png" alt="Plan de nutrition sain" />
            <h3>Plan de nutrition sain</h3>
            <p>Un programme nutritionnel adapté pour atteindre vos objectifs.</p>
          </div>

          <div className="content-pn">
            <img src="plan.png" alt="Plan d'entraînement" />
            <h3>Plan d'entraînement professionnel</h3>
            <p>Des entraînements sur mesure guidés par des experts.</p>
          </div>

          <div className="content-pn">
            <img src="personnel (2).png" alt="Accompagnement personnalisé" />
            <h3>Adapté à vos besoins uniques</h3>
            <p>Un accompagnement personnalisé pour répondre à vos attentes.</p>
          </div>
        </div>
        <Footer/>
      </div>
       
    </div>
  );
}
