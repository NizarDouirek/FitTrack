import React, { useState, useEffect }  from "react";
import './header.css';
import { Link } from "react-router-dom";
export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <div>
            <header  className={isScrolled ? "scrolled" : ""}>
                <div className="logo">
                  <img src="fit track (2).png"/>
                  {/* <h1>Fit<span style={{color:"red"}}>Track</span></h1> */}
                  <div className="navbar">
                      <nav>
                        <ul>
                          
                           <li><Link to="/homme">Accueil</Link></li>
                           <li><Link to="/about">À propos</Link></li>
                           <li><Link to="/Fonctionnalités">Fonctionnalités</Link></li>
                           <li><Link to="/contact">Contact</Link></li>
                           <Link to='/login'>
                           <button className="cnx">Se connecter</button>
                           </Link>
                        </ul>
                      </nav>
                  </div>
                </div>
            </header>
        </div>
    )
}