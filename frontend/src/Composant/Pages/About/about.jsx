import React from "react";
import './about.css';
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="headerAbout">
        <Header />
      </div>

      <div className="contentAbout">
        <div className="about1">
          <div className="leftCo">
            <p className="p1">A Propos</p>
            <p className="p2">
              <span style={{ color: 'red' }}>Accueil</span> / A propos
            </p>
          </div>
          
        </div>

        <div className="about2">
          <div className="titreAbout2">
            <img className="fleche" src="fleche.png" alt="Flèche" />
            <div>
              <h1>À propos de FitTrack, Votre parcours fitness commence ici</h1>
              <p>
                Découvrez qui nous sommes, notre mission, nos valeurs, et comment
                FitTrack vous accompagne dans votre parcours fitness.
              </p>
              <div style={{ position: "relative", display: "inline-block" }}>
                <h1 className="text-background">10 + <br /> Expérience</h1>
                <img className="imgexp" src="about1.jpg" alt="Expérience" />
              </div>
            </div>
          </div>
        </div>

        <div className="about3">
          <div className="histoire">
            <h1>Notre histoire</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              dignissimos eos earum suscipit, fuga dicta quasi numquam voluptatibus
              odio soluta quidem recusandae debitis sed ipsum quisquam. Iusto fuga 
              mollitia ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Delectus enim corporis hic temporibus architecto veritatis minus eius 
              aut. Nobis aut animi omnis ipsa distinctio rem dolores non porro. Ut, eligendi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque quae quo perferendis, cupiditate, facere at ad cum ducimus veniam nostrum. 
              Fugiat id quibusdam minus officiis dolorum dolores, doloribus sunt.
            </p>
          </div>
        </div>
        <div className="titre-pn" style={{marginTop:'150px'}}>
          <h4>Pourquoi nous choisir ?</h4>
          <h1>DÉPASSEZ VOS LIMITES</h1>
        </div>
        <div className="pourquoi-nous" style={{marginBottom:'50px'}}>
          
          <div className="content-pn">
            <img src="modern.png" alt="Équipements modernes" />
            <h3>Équipements modernes</h3>
            <p>Des machines de dernière génération pour optimiser vos performances.</p>
          </div>

          <div className="content-pn">
            <img src="nutrition.png" alt="Plan de nutrition sain" />
            <h3>Plan de nutrition sain</h3>
            <p>Un programme nutritionnel adapté pour atteindre vos objectifs.</p>
          </div>

          <div className="content-pn">
            <img src="plan.png" alt="Plan d'entraînement" />
            <h3>Plan d'entraînement professionnel</h3>
            <p>Des entraînements sur mesure guidés par des experts.</p>
          </div>

          <div className="content-pn">
            <img src="personnel (2).png" alt="Accompagnement personnalisé" />
            <h3>Adapté à vos besoins uniques</h3>
            <p>Un accompagnement personnalisé pour répondre à vos attentes.</p>
          </div>
        </div>
        <Footer/>
      </div>
       
    </div>
  );
}
