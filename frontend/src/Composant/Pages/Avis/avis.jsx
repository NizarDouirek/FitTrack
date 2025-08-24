import React, { useState, useEffect, useRef } from "react";
import "./avis.css"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const trackRef = useRef(null);

  const updateCarousel = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  // Swipe mobile
  useEffect(() => {
    const track = trackRef.current;
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : previousSlide();
      }
    };

    track.addEventListener("touchstart", handleTouchStart);
    track.addEventListener("touchend", handleTouchEnd);

    return () => {
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="testimonials-section">
          <h2 className="section-titleTem">Témoignages</h2>
      <h2 className="testimonials-title">Ce que disent nos clients</h2>

      <div className="carousel-container">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="testimonial-slide">
            <div className="testimonial-image">
              <img
                src="client3.jpg"
                alt="Femme faisant du fitness avec des haltères"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                FitTrack a complètement transformé ma routine d'entraînement.
                L'interface est intuitive et les statistiques m'aident vraiment
                à rester motivée. J'ai perdu 8 kg en 3 mois !
              </p>
              <div className="client-info">
                <div className="client-avatar">N</div>
                <div className="client-details">
                  <h3>Nicolas Moreau</h3>
                  <p className="client-role">Utilisatrice FitTrack</p>
                </div>
              </div>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="testimonial-slide">
            <div className="testimonial-image">
              <img
                src="client5.jpg"
                alt="femme faisant de la musculation en salle de sport"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Enfin une app qui comprend mes besoins ! Le suivi des
                performances est précis et les conseils personnalisés m'ont aidé
                à atteindre mes objectifs plus rapidement que prévu.
              </p>
              <div className="client-info">
                <div className="client-avatar">S</div>
                <div className="client-details">
                  <h3>Sophie Marchand</h3>
                  <p className="client-role">client FitTrack</p>
                </div>
              </div>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-image">
              <img
                src="client2.jpg" alt="femme faisant de la musculation en salle de sport"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Enfin une app qui comprend mes besoins ! Le suivi des
                performances est précis et les conseils personnalisés m'ont aidé
                à atteindre mes objectifs plus rapidement que prévu.
              </p>
              <div className="client-info">
                <div className="client-avatar">I</div>
                <div className="client-details">
                  <h3>Inès Lambert</h3>
                  <p className="client-role">client FitTrack</p>
                </div>
              </div>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-image">
              <img
                src="client4.jpg"
                alt="Homme faisant de la musculation en salle de sport"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Enfin une app qui comprend mes besoins ! Le suivi des
                performances est précis et les conseils personnalisés m'ont aidé
                à atteindre mes objectifs plus rapidement que prévu.
              </p>
              <div className="client-info">
                <div className="client-avatar">H</div>
                <div className="client-details">
                  <h3>Hugo Fontaine</h3>
                  <p className="client-role">client FitTrack</p>
                </div>
              </div>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="testimonial-slide">
            <div className="testimonial-image">
              <img
                src="client6.jpg"
                alt="Femme pratiquant le yoga et la méditation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Je recommande FitTrack à tous mes amis ! L'application est
                parfaite pour suivre mes progrès et la communauté est très
                encourageante. Mes performances ont doublé en 6 mois.
              </p>
              <div className="client-info">
                <div className="client-avatar">C</div>
                <div className="client-details">
                  <h3>Claire Dubois</h3>
                  <p className="client-role">client FitTrack</p>
                </div>
              </div>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {/* <button className="carousel-nav prev" onClick={previousSlide}>
          ‹
        </button>
        <button className="carousel-nav next" onClick={nextSlide}>
          ›
        </button> */}
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {[0, 1, 2,3,4].map((index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => updateCarousel(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
