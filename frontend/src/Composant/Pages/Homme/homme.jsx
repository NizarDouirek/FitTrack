import React from "react";
import "./homme.css";
import data from "./data";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import Pricing2 from "../../../page/pricing/pricing";
import Testimonials from "../Avis/avis";
import { Link } from "react-router-dom";
export default function Homme() {
  return (
    <>
    
    <div id="homme">
      
      <div className="homme">
      <Header/>
        <div className="container">
          <div className="rightcontent">
            <h1 className="contenthomme">
              Transformez votre mode de vie avec <span>FitTrack</span>
            </h1>
            <br />

            <button className="buttonhomme">
              <a href="/contact">Contactez-Nous</a>
            </button>
          </div>
        </div>
      </div>
       <section className="about-section2">
      {/* Background Pattern */}
      <div className="bg-pattern">
        <div className="circle-red"></div>
        <div className="circle-gray"></div>
        <div className="circle-blur"></div>
      </div>

      <div className="containerAbout2">
        {/* Header */}
        <div className="header animate-fadeInUp">
          <h2>
            À Propos de <span className="gradient-text2">FitTrack</span>
          </h2>
          <p>
            Votre partenaire ultime pour atteindre vos objectifs de fitness et
            transformer votre vie
          </p>
        </div>

        {/* Grid Content */}
        <div className="gridAbout">
          {/* Left Content */}
          <div className="left animate-slideInLeft">
            <h3>Qui nous sommes!</h3>
            <p>
              FitTrack est une plateforme innovante dédiée à la nutrition intelligente, à la forme physique et au bien-être. Notre mission est de vous aider à atteindre vos objectifs de santé grâce à un suivi simple, précis et motivant de vos apports nutritionnels et de vos habitudes alimentaires.


  </p>
            <p>
              Que vous soyez débutant ou athlète confirmé, FitTrack s'adapte à
              votre niveau et vous accompagne dans chaque étape de votre parcours
              fitness.
            </p>

            {/* Stats */}
            <div className="stats2">
              <div>
                <div className="number2">50K+</div>
                <div className="label2">Utilisateurs Actifs</div>
              </div>
              <div>
                <div className="number2">1M+</div>
                <div className="label2">Séances Complétées</div>
              </div>
              <div>
                <div className="number2">95%</div>
                <div className="label2">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content (SVG motivant) */}
          <div className="right animate-slideInRight">
            <div className="visual2">
             <img width='550px' height='300px' src="jj.jpg" alt="" />
              <div className="motiv-text">
                <h4>Devenez Votre Meilleure Version</h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="pn">
        <div className="titre-pn">
          <h4>Pourquoi nous choisir ?</h4>
          <h1>DÉPASSEZ VOS LIMITES</h1>
        </div>
        <div className="pourquoi-nous">
          <div className="content-pn">
            <img src="modern.webp" alt="" />
            <h3>Équipements modernes</h3>
            <br />
            <p>
              Des machines de dernière génération pour optimiser vos
              performances.
            </p>
          </div>
          <div className="content-pn">
            <img src="nutrition.webp" alt="" />
            <h3>Plan de nutrition sain</h3>
            <br />
            <p>
              Un programme nutritionnel adapté pour atteindre vos objectifs.
            </p>
          </div>
          <div className="content-pn">
            <img src="plan.webp" alt="" />
            <h3>Plan d'entraînement professionnel</h3>
            <br />
            <p>Des entraînements sur mesure guidés par des experts.</p>
          </div>
          <div className="content-pn">
            <img src="personnel (2).webp" alt="" />
            <h3>Adapté à vos besoins uniques</h3>
            <br />
            <p>Un accompagnement personnalisé pour répondre à vos attentes.</p>
          </div>
        </div>
        
             <div class="btnshowmore">
  <a href="/about" class="btn showmore">Qui nous sommes ▼</a>
</div>
      </div>

      <div className="classes-section">
        <h2 className="section-title">Nos Services</h2>
        <h3 className="section-subtitle">CE QUE NOUS POUVONS OFFRIR</h3>
        <div className="classes-grid">
          {data.map((item) => (
            <div key={item.id} className="class-card">
              <img src={item.image} alt={item.title} className="class-image" />
              <div className="class-content">
                <div>
                  <span className="class-category">{item.category}</span>
                  <h3 className="class-title">{item.title}</h3>
                </div>
                <Link to={item.link}><button className="class-button">➔</button></Link>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="classes-grid">
          <div className="class-card2">
            <img src="yoga.webp" className="class-image2" />
            <div className="class-content">
              <div>
                <span className="class-category2">Flexibilité</span>
                <h3 className="class-title">Yoga - Étirements</h3>
              </div>
              <Link to="/flexibilite"><button className="class-button">➔</button></Link>
            </div>
          </div>
          <div className="class-card2">
            <img src="boxe.webp" className="class-image2" />
            <div className="class-content">
              <div>
                <span className="class-category2">Sports de combat</span>
                <h3 className="class-title">Boxe - Kickboxing</h3>
              </div>
              <Link to="/boxe"><button className="class-button">➔</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="inscrit">
          <h1 className="titreIns">Contactez-nous dès maintenant pour bénéficier de plus d'offres</h1>
          <p>Là où santé, beauté et fitness se rencontrent.</p>
          <button className="inscrit-button"><a href="/contact">Contactez Nous</a></button>
        </div>
        <Pricing2/>
        <Testimonials/>
        <Footer/>
        </div>
   
    </>
  );
}
