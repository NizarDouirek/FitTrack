import React from "react";
import { Link } from "react-router-dom";
import './Galerie.css'
import Header from "../Header/header";
import Footer from "../Footer/footer";
export default function Galerie(){
    return(
      <><div className="headerAbout">
              <Header />
            </div>
     
         <div className="contentContact">
                <div className="contact1">
                   
                    <div className="leftCo">
                      <p className="p1">Galerie</p>
                      <p className="p2">
                        <Link to="/home" className="accueil-link">Accueil</Link> / Galerie
                      </p>
                    </div>
                </div>
                <h2 className="section-titleG"> Explorez FitTrack en images !</h2>
               
<div className="parent">
    <div className="div1"><img loading="lazy" src="w3.jpg" alt="" /></div>
    <div className="div2"><img loading="lazy" src="w2.jpg" alt="" /></div>
    <div className="div3"><img loading="lazy" src="lefting.jpg" alt="" /></div>
    <div className="div4"><img loading="lazy" src="i5.jpg" alt="" /></div>
    <div className="div5"><img loading="lazy" src="ins.jpg" alt="" /></div>
    <div className="div6"><img loading="lazy" src="i7.jpg" alt="" /></div>
    <div className="div7"><img loading="lazy" src="i1.jpg" alt="" /></div>
    <div className="div8"><img loading="lazy" src="boxe.jpg" alt="" /></div>
    <div className="div9"><img loading="lazy" src="w1.jpg" alt="" /></div>
</div>
    <Footer/>
            </div>
            
             </>
    )
}