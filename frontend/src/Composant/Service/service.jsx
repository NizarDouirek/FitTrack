import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import './service.css'
import Footer from "../Footer/footer";
export default function Service(){
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
    const data = [
    {
        id: 1,
        category: "FORCE",
        title: "Haltérophilie ",
        image: "lefting.webp",
          link: "/force"
      },
      {
        id: 2,
        category: "Endurance",
        title: "CARDIO",
        image: "cardio.webp",
          link: "/Cardio"
      },
      {
        id: 3,
        category: "Nutrition & Coaching",
        title: "Plans alimentaires personnalisés",
        image: "nut.jpg",
          link: "/nutrition"
      },
  ];
    return(
          <div id="Service" className="Service">
                         <div className="headerContact">
                                         <Header />
                                       </div>
                                 
                                       <div className="contentContact">
                                         <div className="contact1">
                                            
                                             <div className="leftCo">
                                               <p className="p1">Service</p>
                                               <p className="p2">
                                                 <Link to="/home" className="accueil-link">Accueil</Link> / Service
                                               </p>
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
      <Footer/>
      </div>
      </div>
      
    )
}