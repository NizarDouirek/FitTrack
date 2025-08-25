import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import "./footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer1">
        <div className="HeadFooter">
          <div className="contentHeadFooter">
            <img src="fooo.webp" alt="" />
            <div className="lefthead">
              <p className="p1">Prêt à commencer ?</p>
              <p className="p2">
                Rejoignez la communauté FitTrack et transformez votre santé, un
                pas à la fois !
              </p>
              <button>
                <Link to="/contact">Contactez-nous</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sousfoot">
        <div className="contentsousfoot">
          <div className="col1">
            <img src="logoHe.webp" alt="logo" />
            <p>
              Votre parcours fitness commence
              <br /> ici. Suivez vos progrès, atteignez vos objectifs
            </p>
            <div className="social-icons">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="iconFoot" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="iconFoot" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="iconFoot" />
              </Link>
              <Link
                to="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="iconFoot" />
              </Link>
            </div>
          </div>

          <div className="col2">
            <h1>Pages</h1>
            <a href="/about">À propos</a>
            <br />
             <Link to="/bmi">Calculateur</Link><br />
            
            <Link to="/galerie">Galerie</Link><br />
            <Link to="/Blog">Blog</Link><br />
            <Link to="/contact">Contact</Link><br />
            <Link to="/notfound">NotFound</Link><br />
            
          </div>

          <div className="col3">
            <h1>Support</h1>
            <ul>
              
              <li>
                <a href="/signup">s'inscrire</a>
              </li>
              <li>
                <a href="/login">connecter</a>
              </li>
              <a href="/faq">FAQ</a><br />
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col4">
            <h1>Contact</h1>
            <p>
              <FaMapMarkerAlt
                style={{ color: "#e60000", marginRight: "10px" }}
              />
              Rue Abou Rakrak, Quartier Maârif
Casablanca, Maroc   </p>
            <p>
              <FaPhoneAlt style={{ color: "#e60000", marginRight: "10px" }} />
              +212 783692373
            </p>
            <p>
              <FaEnvelope style={{ color: "#e60000", marginRight: "10px" }} />
              Fittrack@gmail.com | contact@Fittrack.com
            </p>
          </div>
        </div>
      </div>
      <div className="copy">Copyright © 2025 Fittrack. All Right Reserved.</div>
    </div>
  );
}
