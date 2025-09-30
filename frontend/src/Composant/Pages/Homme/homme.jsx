import React from "react";
import "./homme.css";
import data from "./data";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import Pricing2 from "../../../page/pricing/pricing";
import Testimonials from "../Avis/avis";
import { Link } from "react-router-dom";
export default function Homme() {
  const items = [
  {
    label: "Entraînement Musculation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 64 64" fill="currentColor">
      <rect x="6" y="22" width="8" height="20" rx="2" />
      <rect x="50" y="22" width="8" height="20" rx="2" />
      <rect x="20" y="18" width="6" height="28" rx="2" />
      <rect x="38" y="18" width="6" height="28" rx="2" />
      <rect x="26" y="28" width="12" height="8" rx="2" />
    </svg>
    ),
  },
  {
    label: "Cardio & Endurance",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 58s-22-13.3-22-30C10 18 18 10 28 10c4.8 0 9 2.5 11 6.1C41 12.5 45.2 10 50 10c10 0 18 8 18 18 0 16.7-22 30-22 30H32z"/>
      <polyline points="12,34 24,34 28,26 36,46 42,34 52,34" stroke="white" strokeWidth="3" fill="none"/>
    </svg>
    ),
  },
  {
    label: "Nutrition & Diète",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 6c-4 0-8 2-8 6s4 6 8 6 8-2 8-6-4-6-8-6zm0 12C18 18 8 28 8 42s10 20 24 20 24-6 24-20S46 18 32 18z"/>
    </svg>
    ),
  },
  {
    label: "Suivi des Progrès",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3v18h18v-2H5V3H3zm14 4h2v10h-2V7zm-4 
        4h2v6h-2v-6zm-4 2h2v4H9v-4z"/>
      </svg>
    ),
  },
  {
    label: "Coaching Personnel",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 64 64" fill="currentColor">
      <circle cx="32" cy="20" r="10"/>
      <path d="M12 56c0-10 8-18 20-18s20 8 20 18v4H12v-4z"/>
    </svg>
    ),
  },
  {
    label: "Communauté FitTrack",
    icon: (
      <svg width="26" height="26"fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 
        1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 
        3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 
        3zm0 2c-2.7 0-8 1.3-8 4v3h8v-3c0-1.1.9-2 
        2-2h4c1.1 0 2 .9 2 2v3h8v-3c0-2.7-5.3-4-8-4H8z"/>
      </svg>
    ),
  },
];

 const repeatedItems = [...items, ...items];
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
            <br/>

            <button className="buttonhomme">
              <a href="/contact">Contactez-Nous</a>
            </button>
          </div>
        </div>
      </div>
       <div className="marquee-container2">
    <div className="marquee-content2">
      {repeatedItems.map((item, index) => (
        <p className="carousel-item" key={index}>
          {item.icon}
        <span>{item.label}</span>
        </p>
      ))}
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
        <div className="headerA animate-fadeInUp">
          <h2>
            À Propos de <span className="gradient-text2">FitTrack</span>
          </h2>
          <h1>
           Atteignez vos objectifs et transformez votre vie
          </h1>
        </div>
        {/* Grid Content */}
        <div className="gridAbout">
            <div className="right animate-slideInRight">
            <div className="visual2">
             <img width='600px' height='350px' src="ab1.png" alt="" />
              {/* <div className="motiv-text">
                <h4>Devenez Votre Meilleure Version</h4>
                
              </div> */}
            </div>
          </div>
          {/* Left Content */}
          <div className="left1 animate-slideInLeft">
              <div className="about-content">
        <h5 className="about-subtitle">FitTrack</h5>
        <h2 className="about-title">Pourquoi le fitness est-il bon pour la santé ?</h2>
        <p className="about-text">
          Chez <b>FitTrack</b>, nous vous aidons à atteindre vos objectifs grâce 
          à un suivi personnalisé, des entraînements efficaces et une nutrition adaptée. 
          Transformez votre mode de vie et devenez la meilleure version de vous-même.
        </p>

        <div className="about-stats">
          <div className="stat">
            <h3>654+</h3>
            <p>Personal Trainers</p>
          </div>
          <div className="stat">
            <h3>321+</h3>
            <p>Trusted Clients</p>
          </div>
          <div className="stat">
            <h3>454+</h3>
            <p>Awards Won</p>
          </div>
        </div>

       <a href="/about"> <button className="join-btn">Qui nous sommes </button></a>
      </div>
          </div>

          {/* Right Content (SVG motivant) */}
        
        </div>
      </div>
    </section>
     

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
        
             {/* <div class="btnshowmore">
  <a href="/about" class="btnshow showmore">Qui nous sommes ▼</a>
</div> */}
      </div>
      
        <Pricing2/>
        <div className="inscrit">
          <h1 className="titreIns">Contactez-nous dès maintenant pour bénéficier de plus d'offres</h1>
          <p>Là où santé, beauté et fitness se rencontrent.</p>
          <button className="inscrit-button"><a href="/contact">Contactez Nous</a></button>
        </div>
        <Testimonials/>
        <Footer/>
        </div>
   
    </>
  );
}
