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
      <div className="pn">
        <div className="titre-pn">
          <h4>Pourquoi nous choisir ?</h4>
          <h1>DÉPASSEZ VOS LIMITES</h1>
        </div>
        <div className="pourquoi-nous">
          <div className="content-pn">
            <img src="modern.png" alt="" />
            <h3>Équipements modernes</h3>
            <br />
            <p>
              Des machines de dernière génération pour optimiser vos
              performances.
            </p>
          </div>
          <div className="content-pn">
            <img src="nutrition.png" alt="" />
            <h3>Plan de nutrition sain</h3>
            <br />
            <p>
              Un programme nutritionnel adapté pour atteindre vos objectifs.
            </p>
          </div>
          <div className="content-pn">
            <img src="plan.png" alt="" />
            <h3>Plan d'entraînement professionnel</h3>
            <br />
            <p>Des entraînements sur mesure guidés par des experts.</p>
          </div>
          <div className="content-pn">
            <img src="personnel (2).png" alt="" />
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
            <img src="yoga.jpg" className="class-image2" />
            <div className="class-content">
              <div>
                <span className="class-category2">Flexibilité</span>
                <h3 className="class-title">Yoga - Étirements</h3>
              </div>
              <button className="class-button">➔</button>
            </div>
          </div>
          <div className="class-card2">
            <img src="boxe.jpg" className="class-image2" />
            <div className="class-content">
              <div>
                <span className="class-category2">Sports de combat</span>
                <h3 className="class-title">Boxe - Kickboxing</h3>
              </div>
              <button className="class-button">➔</button>
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
