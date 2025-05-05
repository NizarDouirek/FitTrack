import React from "react";
import './about.css'
import Header from "../../Header/header";
export default function About(){
    return(
        <div id="about" className="about" >
            <div className="headerAbout">
             <Header/>
           </div>
           <div className="contentAbout">
            {/* <img style={{marginLeft:'700px',marginTop:'400px',height:'300px'}} src="decor.png" alt="" /> */}
            <div className="about1">
              <div className="leftCo">
                <p className="p1">A Propos</p>
                <p className="p2"><span style={{color:'red'}}>Accueil</span> / A propos</p>
              </div>
              <div className="RightCo">
                <img src="about.jpg" alt="" />
              </div>
              </div>
              <div className="about2">
                <div className="titreAbout2">
                  <img className="fleche" src="fleche.png" alt="" />
                   <div>
                    <h1>À propos de FitTrack,Votre parcours fitness commence ici </h1>
                    <p>Découvrez qui nous sommes, notre mission, nos valeurs, et comment
                       FitTrack vous accompagne dans votre parcours fitness.</p>
                       <div style={{ position: "relative", display: "inline-block" }}>
                         <h1 className="text-background">10 + <br /> Expérience</h1>
                         <img className="imgexp" src="about1.jpg" alt="" />
                      </div>
                  </div>
                </div>
              </div>
              <div className="about3">
                <div className="histoire">
                  <h1>Notre histoire</h1><br />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                   dignissimos eos earum suscipit, fuga dicta quasi numquam voluptatibus
                    odio soluta quidem recusandae debitis sed ipsum quisquam. Iusto fuga 
                    mollitia ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Delectus enim corporis hic temporibus architecto veritatis minus eius 
                     aut. Nobis aut animi omnis ipsa distinctio rem dolores non porro. Ut, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque quae quo perferendis, cupiditate, facere at ad cum ducimus veniam nostrum. Fugiat id quibusdam minus officiis dolorum dolores, doloribus sunt.</p>
                </div>
              </div>
              <div>
              <div class="valeur">
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestias perferendis molestiae, porro accusantium praesentium,
        ipsum dolores cum cupiditate obcaecati explicabo nostrum iusto aliquam totam nesciunt maxime, temporibus voluptatum officiis!
    </p>
    <div class="valeur-img-container">
        <span class="valeur-title">Nos valeurs</span>
        <img src="ball.png" alt="Nos valeurs" class="valeur-img"/>
    </div>
</div>

              </div>
           </div>
        </div>
    )
}