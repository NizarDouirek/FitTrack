import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className='footer1'>
                <div className='HeadFooter'>
                    <div className="contentHeadFooter">
                        <img src="imgfooter.avif" alt="" />
                        <div className="lefthead">
                            <p className="p1">Prêt à commencer ?</p>
                            <p className="p2">Rejoignez la communauté FitTrack et transformez votre santé, un pas à la fois !</p>
                            <button><Link to='/contact'>Contactez-nous</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sousfoot">
                <div className="contentsousfoot">
                    <div className="col1">
                        <img  src="fit track (2).png" alt="logo" />
                        <p>Votre parcours fitness commence ici <br />
                            Suivez vos progrès, atteignez vos objectifs</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok className="icon" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
                        </div>
                    </div>

                    <div className="col2">
                        <h1>Pages</h1>
                        <a href="/about">À propos</a><br />
                        <a href="/fonctionnalite">Fonctionnalités</a><br />
                        <a href="/contact">Contact</a>
                    </div>

                    <div className="col3">
                        <h1>Ressources</h1>
                        <ul>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/conditions">Conditions d'utilisation</a></li>
                            <li><a href="/politique">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
