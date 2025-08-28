import React from "react";
import './contact.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";
import Header from "../../Header/header";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact(){
     const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    console.log(form);
    setForm({ name: "", email: "", website: "", comment: "" });
  };
    return(
         <div id="contact" className="contact">
              <div className="headerContact">
                <Header />
              </div>
        
              <div className="contentContact">
                <div className="contact1">
                   
                    <div className="leftCo">
                      <p className="p1">Contact</p>
                      <p className="p2">
                        <Link to="/home" className="accueil-link">Accueil</Link> / Contact
                      </p>
                    </div>
                  
                  
                </div>
                  <div className="contact-section">
      <div className="contact-info">
        
        <h2>CONTACTEZ-NOUS</h2>

        <div className="info-item">
            <div className="divIcon">
          <FaMapMarkerAlt className="iconContact" />
          </div>
          <p>Rue Abou Rakrak, Quartier Maârif Casablanca, Maroc</p>
        </div>

        <div className="info-item">
              <div className="divIcon">
          <FaPhoneAlt  className="iconContact" />
          </div>
          <p>+212 783692373</p>
        </div>

        <div className="info-item">
              <div className="divIcon">
          <FaEnvelope className="iconContact" />
          </div>
          <p>Fittrack@gmail.com | contact@Fittrack.com</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Commentaire"
          rows="4"
          value={form.comment}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
   <div className="map-container">
  <div className="map-overlay"></div>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0641076216926!2d-7.641006124645839!3d33.588310973347105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd2db9e8f68b%3A0x5c3b3f29a8f6f7c!2sRue%20Abou%20Rakrak%2C%20Ma%C3%A2rif%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1698958203421!5m2!1sfr!2sma"
    width="100%"
    height="300"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        
               
                <Footer/>
              </div>
               
            </div>
    )
}