import React, { useState } from "react";
import "./bmi.css";
import Header from "../../Header/header";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    gender: "",
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateBMI = () => {
    const { weight, height, gender } = formData;

    if (!weight || !height || !gender) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (weightNum <= 0 || heightNum <= 0) {
      alert("Veuillez entrer des valeurs valides");
      return;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    const bmi = bmiValue.toFixed(1);

    let category = "";
    let categoryClass = "";
    let advice = "";

    if (bmiValue < 18.5) {
      category = "Sous-poids";
      categoryClass = "category-underweight";
      advice =
        gender === "homme"
          ? "Vous êtes en sous-poids. Augmentez votre apport calorique avec des aliments nutritifs riches en protéines. Consultez un nutritionniste et envisagez des exercices de renforcement musculaire pour développer votre masse musculaire de manière saine."
          : "Vous êtes en sous-poids. Privilégiez une alimentation équilibrée et riche en nutriments essentiels. Augmentez progressivement vos portions avec des aliments sains et consultez un professionnel de santé pour un suivi personnalisé adapté à vos besoins.";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      category = "Poids normal";
      categoryClass = "category-normal";
      advice =
        gender === "homme"
          ? "Félicitations ! Votre poids est parfaitement dans la norme. Maintenez vos excellentes habitudes alimentaires et continuez une activité physique régulière d'au moins 150 minutes par semaine pour préserver votre santé optimale."
          : "Excellent ! Votre poids est idéal pour votre taille. Continuez à maintenir une alimentation équilibrée riche en fruits, légumes et protéines maigres, ainsi qu'une activité physique régulière pour conserver cette excellente forme.";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      category = "Surpoids";
      categoryClass = "category-overweight";
      advice =
        gender === "homme"
          ? "Vous êtes en surpoids. Réduisez les portions, limitez les aliments ultra-transformés et augmentez votre activité physique. Privilégiez les exercices cardio-vasculaires et la musculation pour optimiser la combustion des graisses et préserver votre masse musculaire."
          : "Vous êtes en surpoids. Adoptez une alimentation plus équilibrée en réduisant les sucres raffinés et graisses saturées. Intégrez 45 minutes d'activité physique quotidienne comme la marche rapide, la natation ou le vélo pour retrouver progressivement votre poids idéal.";
    } else {
      category = "Obésité";
      categoryClass = "category-obese";
      advice =
        gender === "homme"
          ? "Vous êtes en situation d'obésité. Il est fortement recommandé de consulter un médecin pour un suivi médical complet. Adoptez progressivement une alimentation hypocalorique équilibrée et une activité physique adaptée à votre condition physique actuelle."
          : "Vous êtes en situation d'obésité. Consultez rapidement un professionnel de santé pour un accompagnement personnalisé et sécurisé. Commencez par de petits changements alimentaires durables et une activité physique douce mais régulière, adaptée à votre rythme.";
    }

    setResults({
      bmi,
      category,
      categoryClass,
      advice,
      showWeightLoss: bmiValue >= 25,
    });
  };

  const handleWeightLossRedirect = () => {
    // Redirection simple vers la page de perte de poids
    window.location.href = "/weight-loss";
    // Si tu utilises react-router: navigate('/weight-loss')
  };

  return (
    <>
    <div className="headerFaq">
                <Header />
              </div>
        
              <div className="contentfaq">
                <div className="faq">
                   
                    <div className="leftCo">
                      <p className="p1">Calculateur Bmi</p>
                      <p className="p2">
                        <Link to="/home" className="accueil-link">Accueil</Link> / Calculateur Bmi
                      </p>
                    </div>
                  
                  </div>
                </div>
   
    <div className="app-container">
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      <div className="bmi-calculator">
        <header className="header">
          <h1>BMI Calculator</h1>
          <p>
            Découvrez votre Indice de Masse Corporelle avec notre calculateur
            moderne et obtenez des conseils personnalisés pour votre bien-être
          </p>
        </header>

        <div className="bmi-reference-table">
          <h2 className="table-title">Tableau de référence BMI</h2>
          <div className="table-container">
            <table className="bmi-table">
              <thead>
                <tr>
                  <th>Catégorie</th>
                  <th>BMI (kg/m²)</th>
                  <th>Risque pour la santé</th>
                  <th>Recommandations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row-underweight">
                  <td className="category-cell">
                    <span className="category-badge underweight-badge">
                      Sous-poids
                    </span>
                  </td>
                  <td className="bmi-range">&lt; 18.5</td>
                  <td className="risk-level">Risque accru</td>
                  <td className="recommendations">
                    Augmenter l&apos;apport calorique, consulter un nutritionniste
                  </td>
                </tr>
                <tr className="row-normal">
                  <td className="category-cell">
                    <span className="category-badge normal-badge">
                      Poids normal
                    </span>
                  </td>
                  <td className="bmi-range">18.5 - 24.9</td>
                  <td className="risk-level">Risque faible</td>
                  <td className="recommendations">
                    Maintenir les bonnes habitudes alimentaires et l&apos;exercice
                  </td>
                </tr>
                <tr className="row-overweight">
                  <td className="category-cell">
                    <span className="category-badge overweight-badge">
                      Surpoids
                    </span>
                  </td>
                  <td className="bmi-range">25.0 - 29.9</td>
                  <td className="risk-level">Risque modéré</td>
                  <td className="recommendations">
                    Réduire les calories, augmenter l&apos;activité physique
                  </td>
                </tr>
                <tr className="row-obese-1">
                  <td className="category-cell">
                    <span className="category-badge obese-badge">
                      Obésité classe I
                    </span>
                  </td>
                  <td className="bmi-range">30.0 - 34.9</td>
                  <td className="risk-level">Risque élevé</td>
                  <td className="recommendations">
                    Consulter un médecin, plan de perte de poids supervisé
                  </td>
                </tr>
                <tr className="row-obese-2">
                  <td className="category-cell">
                    <span className="category-badge obese-badge">
                      Obésité classe II
                    </span>
                  </td>
                  <td className="bmi-range">35.0 - 39.9</td>
                  <td className="risk-level">Risque très élevé</td>
                  <td className="recommendations">
                    Suivi médical strict, intervention multidisciplinaire
                  </td>
                </tr>
                <tr className="row-obese-3">
                  <td className="category-cell">
                    <span className="category-badge obese-badge">
                      Obésité classe III
                    </span>
                  </td>
                  <td className="bmi-range">&gt; 40.0</td>
                  <td className="risk-level">Risque extrême</td>
                  <td className="recommendations">
                    Intervention médicale urgente, chirurgie bariatrique possible
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="main-content">
          <div className="form-container">
            <h2 className="form-title">Vos informations</h2>

            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="weight">Poids</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="weight"
                    className="form-input"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    placeholder="Entrez votre poids"
                    min="1"
                    max="300"
                  />
                  <span className="input-unit">kg</span>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="height">Taille</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    id="height"
                    className="form-input"
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                    placeholder="Entrez votre taille"
                    min="50"
                    max="250"
                  />
                  <span className="input-unit">cm</span>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="gender">Sexe</label>
                <select
                  id="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                >
                  <option value="">Sélectionnez votre sexe</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>
            </div>

            <button className="calculate-button" onClick={calculateBMI}>
              Calculer mon BMI
            </button>
          </div>

          <div className={`results-container ${!results ? "empty" : ""}`}>
            {!results ? (
              <div className="empty-state">
                Remplissez le formulaire pour voir vos résultats
              </div>
            ) : (
              <>
                <div className="bmi-display">{results.bmi}</div>
                <div className={`bmi-category ${results.categoryClass}`}>
                  {results.category}
                </div>

                <div className="advice-card">
                  <h3 className="advice-title">Conseils personnalisés</h3>
                  <p className="advice-text">{results.advice}</p>

                  {results.showWeightLoss && (
                    <button
                      className="weight-loss-button"
                      onClick={handleWeightLossRedirect}
                    >
                      Voir comment baisser le poids
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
     </>
  );
}
