import React from "react";
import { Link } from "react-router-dom";
import './Galerie.css'
import Header from "../Header/header";
import Footer from "../Footer/footer";
export default function Galerie(){
    return(
      <div id="Galerie" className="Galerie">
                       <div className="headerbmi">
                         <Header />
                       </div>
                 
                       <div className="contentbmi">
                         <div className="contact1">
                            
                             <div className="leftCo">
                               <p className="p1">Galerie</p>
                               <p className="p2">
                                 <Link to="/home" className="accueil-link">Accueil</Link> / Galerie
                               </p>
                             </div>
                           </div>
                           
                         </div>
                <h2 className="section-titleG"> Explorez FitTrack en images !</h2>
               
<div className="parent">
    <div className="div1"><img loading="lazy" src="w3.webp" alt="" /></div>
    <div className="div2"><img loading="lazy" src="w2.webp" alt="" /></div>
    <div className="div3"><img loading="lazy" src="lefting.webp" alt="" /></div>
    <div className="div4"><img loading="lazy" src="i5.webp" alt="" /></div>
    <div className="div5"><img loading="lazy" src="ins.webp" alt="" /></div>
    <div className="div6"><img loading="lazy" src="i7.webp" alt="" /></div>
    <div className="div7"><img loading="lazy" src="i1.webp" alt="" /></div>
    <div className="div8"><img loading="lazy" src="boxe.webp" alt="" /></div>
    <div className="div9"><img loading="lazy" src="w1.webp" alt="" /></div>
</div>
    <Footer/>
            </div>
            
          
    )
}