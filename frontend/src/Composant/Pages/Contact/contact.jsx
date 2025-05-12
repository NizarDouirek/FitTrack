import React from "react";
import './contact.css';
import { useState } from "react";
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
                      <span style={{ color: 'red' }}>Accueil</span> / Contact
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
          <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
        </div>

        <div className="info-item">
              <div className="divIcon">
          <FaPhoneAlt  className="iconContact" />
          </div>
          <p>125-711-811 &nbsp; | &nbsp; 125-668-886</p>
        </div>

        <div className="info-item">
              <div className="divIcon">
          <FaEnvelope className="iconContact" />
          </div>
          <p>FitTrack@gmail.com</p>
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
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9052891512814!2d-72.06191312347855!3d42.75274811472868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e00d4703f7e2df%3A0x4d6797d4ee5f4eaa!2s333%20Middle%20Winchendon%20Rd%2C%20Rindge%2C%20NH%2003461%2C%20USA!5e0!3m2!1sen!2sma!4v1715518203421!5m2!1sen!2sma"
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