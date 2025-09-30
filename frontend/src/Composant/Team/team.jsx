import React from "react";
import "./team.css";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const teamMembers = [
  { name: "Nizar Douirek", role: "Coach Principal & Fondateur", imageUrl: "https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg" },
  { name: "Sofian Chellat", role: "Manager de la Salle", imageUrl: "https://images.pexels.com/photos/5327524/pexels-photo-5327524.jpeg" },
  { name: "Harshita Patel", role: "Coach Yoga & Bien-être", imageUrl: "https://images.pexels.com/photos/4325469/pexels-photo-4325469.jpeg" },
  { name: "Eleanor Morales", role: "Coach Fitness & Cardio", imageUrl: "https://images.pexels.com/photos/3768732/pexels-photo-3768732.jpeg" },
  { name: "Sophia Monic", role: "Coach de Musculation", imageUrl: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg" },
  { name: "James Miller", role: "Responsable Marketing & Abonnements", imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  { name: "Olivia Chen", role: "Coach Nutrition & Diététique", imageUrl: "https://images.pexels.com/photos/3760258/pexels-photo-3760258.jpeg" },
  { name: "Benjamin Carter", role: "Préparateur Physique", imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" },
  { name: "Ava Rodriguez", role: "Coach Zumba & Danse", imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" },
  { name: "Lucas Garcia", role: "Coach CrossFit", imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
  { name: "Mia Martinez", role: "Coach Pilates & Souplesse", imageUrl: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" },
  { name: "Henry Wilson", role: "Responsable Matériel & Sécurité", imageUrl: "https://images.pexels.com/photos/5327524/pexels-photo-5327524.jpeg" }
];


const TeamMemberCard = ({ member }) => {
  return (
    
    <div className="team-card">
      <div className="team-photo">
        <img
          src={member.imageUrl}
          alt={member.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}`;
          }}
        />
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <div className="team-socials">
        <a href="#" aria-label="Facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
       <div id="team" className="team">
                     <div className="headerContact">
                                     <Header />
                                   </div>
                             
                                   <div className="contentContact">
                                     <div className="contact1">
                                        
                                         <div className="leftCo">
                                           <p className="p1">Team</p>
                                           <p className="p2">
                                             <Link to="/home" className="accueil-link">Accueil</Link> / Team
                                           </p>
                                         </div>
                                       
                                       
                                     </div>
      

      <section className="team-section">
        <div className="team-header">
          <h2 className="contact-p">Our Exceptional Team</h2>
          <p>
            Rencontrez notre équipe exceptionnelle - une synergie de talent, de créativité et de dévouement, créant le succès avec passion et innovation.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div></div>
  );
};

export default Team;
