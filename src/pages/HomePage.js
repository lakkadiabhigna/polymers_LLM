import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, []);

  const handlePredictClick = () => {
    if (isLoggedIn) {
      navigate("/predict");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="home-container">
      <div className="hero">
        <h1>PolyPredict</h1>
        <p className="hero-subtitle">
          AI-powered predictions for glass transition temperatures of polymers
        </p>
        <button className="cta-button" onClick={handlePredictClick}>
          🔮 Predict Now
        </button>
      </div>

      <section className="collapsible-section">
        <h2
          onClick={() => setShowFeatures(!showFeatures)}
          className="collapsible-header"
        >
          👉 Key Features
        </h2>
        {showFeatures && (
          <div className="feature-cards">
            <div className="feature-card">
              <span>🔬</span>
              <h3>Predict Polymer Tg</h3>
              <p>Instant predictions based on fine-tuned LLM</p>
            </div>
            <div className="feature-card">
              <span>⚡</span>
              <h3>Fast & Accurate</h3>
              <p>Backed by high-performance inference</p>
            </div>
            <div className="feature-card">
              <span>🧠</span>
              <h3>Built for Researchers</h3>
              <p>Designed for scientists and material engineers</p>
            </div>
          </div>
        )}
      </section>

      <section className="collapsible-section">
        <h2
          onClick={() => setShowExamples(!showExamples)}
          className="collapsible-header"
        >
          👉 Example Predictions
        </h2>
        {showExamples && (
          <table className="example-table">
            <thead>
              <tr>
                <th>Polymer</th>
                <th>Glass Transition Temp (Tg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Polystyrene</td>
                <td>100°C</td>
              </tr>
              <tr>
                <td>Polyvinyl Chloride (PVC)</td>
                <td>80°C</td>
              </tr>
              <tr>
                <td>Polycarbonate</td>
                <td>150°C</td>
              </tr>
            </tbody>
          </table>
        )}
      </section>

      <section className="collapsible-section">
        <h2
          onClick={() => setShowCards(!showCards)}
          className="collapsible-header"
        >
          👉 Quick Actions
        </h2>
        {showCards && (
          <div className="cards">
            <div
              className="card"
              onClick={handlePredictClick}
              tabIndex={0}
              role="button"
            >
              <h3>Make a Prediction</h3>
              <p>Get Tg value for your polymer instantly</p>
            </div>
            <div
              className="card signup-card"
              onClick={() => navigate("/signup")}
              tabIndex={0}
              role="button"
            >
              <h3>Create an Account</h3>
              <p>Save your prediction history securely</p>
            </div>
          </div>
        )}
      </section>

      <section className="collapsible-section">
        <h2
          onClick={() => setShowAbout(!showAbout)}
          className="collapsible-header"
        >
          👉 About This Project
        </h2>
        {showAbout && (
          <p>
            PolyPredict helps researchers and engineers predict the glass
            transition temperature of polymers using an advanced fine-tuned
            Large Language Model.
          </p>
        )}
      </section>

      <section className="collapsible-section">
        <h2
          onClick={() => setShowTech(!showTech)}
          className="collapsible-header"
        >
          👉 Built With
        </h2>
        <ul className={showTech ? "show" : ""}>
          <li>⚛️ React JS</li>
          <li>🌐 Node.js & Express</li>
          <li>🧠 Hugging Face Transformers</li>
          <li>📦 MongoDB</li>
        </ul>
      </section>

      <section className="about-tg">
        <h2>Curious about Glass Transition Temperature?</h2>
        <p>
          Want to understand what glass transition temperature really means?
        </p>
        <button className="cta-button" onClick={() => navigate("/about-tg")}>
          📘 Learn More
        </button>
      </section>
    </div>
  );
}

export default HomePage;
