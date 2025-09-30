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
          ? "Vous êtes en sous-poids. Augmentez votre apport calorique..."
          : "Vous êtes en sous-poids. Privilégiez une alimentation équilibrée...";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      category = "Poids normal";
      categoryClass = "category-normal";
      advice =
        gender === "homme"
          ? "Félicitations ! Votre poids est parfaitement dans la norme..."
          : "Excellent ! Votre poids est idéal pour votre taille...";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      category = "Surpoids";
      categoryClass = "category-overweight";
      advice =
        gender === "homme"
          ? "Vous êtes en surpoids. Réduisez les portions..."
          : "Vous êtes en surpoids. Adoptez une alimentation plus équilibrée...";
    } else {
      category = "Obésité";
      categoryClass = "category-obese";
      advice =
        gender === "homme"
          ? "Vous êtes en situation d'obésité. Consultez un médecin..."
          : "Vous êtes en situation d'obésité. Consultez rapidement un professionnel...";
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
    window.location.href = "/weight-loss";
  };

  return (
    <div id="bmi" className="bmi">
                  <div className="headerbmi">
                    <Header />
                  </div>
            
                  <div className="contentbmi">
                    <div className="contact1">
                       
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
          <header className="headerBMI">
            <h1>BMI Calculator</h1>
            <p>
              Découvrez votre Indice de Masse Corporelle avec notre calculateur
              moderne et obtenez des conseils personnalisés pour votre bien-être
            </p>
          </header>

          {/* Tableau de référence */}
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
                      <span className="category-badge underweight-badge">Sous-poids</span>
                    </td>
                    <td className="bmi-range">&lt; 18.5</td>
                    <td className="risk-level">Risque accru</td>
                    <td className="recommendations">Augmenter l&apos;apport calorique, consulter un nutritionniste</td>
                  </tr>
                  <tr className="row-normal">
                    <td className="category-cell">
                      <span className="category-badge normal-badge">Poids normal</span>
                    </td>
                    <td className="bmi-range">18.5 - 24.9</td>
                    <td className="risk-level">Risque faible</td>
                    <td className="recommendations">Maintenir les bonnes habitudes alimentaires et l&apos;exercice</td>
                  </tr>
                  <tr className="row-overweight">
                    <td className="category-cell">
                      <span className="category-badge overweight-badge">Surpoids</span>
                    </td>
                    <td className="bmi-range">25.0 - 29.9</td>
                    <td className="risk-level">Risque modéré</td>
                    <td className="recommendations">Réduire les calories, augmenter l&apos;activité physique</td>
                  </tr>
                  <tr className="row-obese-1">
                    <td className="category-cell">
                      <span className="category-badge obese-badge">Obésité classe I</span>
                    </td>
                    <td className="bmi-range">30.0 - 34.9</td>
                    <td className="risk-level">Risque élevé</td>
                    <td className="recommendations">Consulter un médecin, plan de perte de poids supervisé</td>
                  </tr>
                  <tr className="row-obese-2">
                    <td className="category-cell">
                      <span className="category-badge obese-badge">Obésité classe II</span>
                    </td>
                    <td className="bmi-range">35.0 - 39.9</td>
                    <td className="risk-level">Risque très élevé</td>
                    <td className="recommendations">Suivi médical strict, intervention multidisciplinaire</td>
                  </tr>
                  <tr className="row-obese-3">
                    <td className="category-cell">
                      <span className="category-badge obese-badge">Obésité classe III</span>
                    </td>
                    <td className="bmi-range">&gt; 40.0</td>
                    <td className="risk-level">Risque extrême</td>
                    <td className="recommendations">Intervention médicale urgente, chirurgie bariatrique possible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Formulaire */}
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

            {/* Résultats */}
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

      <Footer />
    </div>
  );
}
