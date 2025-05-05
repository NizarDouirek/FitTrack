import React from "react";

import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";
import './footer.css'
export default function Footer(){
    return(
        <div>
            <div className='footer1'>
                       <div className='HeadFooter'>
                            <div className="contentHeadFooter">
                                <img src="imgfooter.png" alt="" />
                                <div className="lefthead">
                                    <p className="p1">Prêt à commencer?</p>
                                    <p className="p2">Rejoignez la communauté FitTrack et transformez
                                         votre santé, un pas à la fois !</p>
                                    <button>Contactez Nous</button>
                                </div>
                            </div>
                       </div>
            </div>
            <div className="sousfoot">
                <div className="contentsousfoot">
                    <div className="col1">
                        <img style={{width:'180px',height:'120px'}} src="fit.png" alt="" />
                        <p> Votre parcours fitness commence ici <br />
                        Suivez vos progrès, atteignez vos objectifs</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col2">
                        <h1>Pages</h1>
                        <div>
                        <a href="/about">About</a><br />
                        <a href="/fonctionnalite">Fonctionnalités</a><br />
                        <a href="/contact">Contact</a>
                        </div>
                    </div>
                    <div className="col3">
                        <h1>Hello Nizar</h1>
                        <li>test</li>
                        <li>test</li>
                    </div>
                </div>
            
        </div>
        </div>
            
         
        
        
        
       
    )
}