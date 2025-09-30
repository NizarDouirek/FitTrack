import { useLocation } from "react-router-dom";
import './offrepack.css';
import Header from "../Header/header";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import RetourButton from "../retourboutton";

export default function OffrePack() {
  const location = useLocation();
  const plan = location.state;

  return (
    <div id="offrepack" className="offrepack">
                    <div className="headerContact">
                                    <Header />
                                  </div>
                            
                                  <div className="contentContact">
                                    <div className="contact1">
                                       
                                        <div className="leftCo">
                                          <p className="p1">Pack</p>
                                          <p className="p2">
                                            <Link to="/home" className="accueil-link">Accueil</Link> / Pack
                                          </p>
                                        </div>
                                      
                                      
                                    </div>

      <div className="offre-page">
        {/* Card de l'offre choisie */}
        <div className="offre-card">
          <h2>{plan?.name}</h2>
          <p>{plan?.price} </p>
          {plan?.badge && <span className="badge3">{plan.badge}</span>}

          <h3 style={{ marginTop: "20px" }}>Features Description</h3>
          <ul className="features-list">
            {plan?.features?.map((feature, index) => (
              <li key={index} className={feature.included ? "included" : "excluded"}>
                {feature.included ? "✔" : "✖"} {feature.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulaire */}
       <form className="offre-form">
  <h3>Remplissez vos informations</h3>

  <div className="form-grid">
    <div>
      <label>Nom</label>
      <input type="text" required />
    </div>
    <div>
      <label>Prénom</label>
      <input type="text" required />
    </div>
    <div>
      <label>Email</label>
      <input type="email" required />
    </div>
    <div>
      <label>Téléphone</label>
      <input type="tel" required />
    </div>
    <div>
      <label>Date de naissance</label>
      <input type="date" required />
    </div>
    <div>
      <label>Civilité</label>
      <select required>
        <option value="">Choisir</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
      </select>
    </div>
   
    <div>
      <label>Code postal</label>
      <input type="text" required />
    </div>
    <div>
      <label>Ville</label>
      <input type="text" required />
    </div>
  </div>

  <div className="checkbox-group">
    <label>
      <input type="checkbox" /> J'accepte les conditions générales
    </label>
    <label>
      <input type="checkbox" /> J'accepte la politique de confidentialité
    </label>
  </div>

  <div className="buttons">
    <RetourButton/>
    <button type="submit" className="btn btn-primary">Procéder au paiement</button>
  </div>
</form>

      </div>

      <Footer />
    </div></div>
  );
}
