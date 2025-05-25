import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <h1>What is Glass Transition Temperature (Tg)?</h1>
      <p>
        The glass transition temperature (Tg) is the temperature at which a polymer changes from a hard, glassy material to a soft, rubbery one.
        Unlike melting, which is a sharp phase change, Tg represents a gradual transformation in the mobility of the polymer chains.
      </p>
      <p>
        Below Tg, polymers are rigid and brittle. Above Tg, they become flexible and elastic.
        Understanding Tg is crucial in materials science because it helps engineers and scientists select the right polymer for specific applications
        like packaging, insulation, electronics, and medical devices.
      </p>
      <p>
        Different polymers have different Tg values depending on their chemical structure, side groups, molecular weight, and plasticizers used.
      </p>

      <button className="go-back-button" onClick={() => navigate("/")}>
        ⬅️ Go Back to Home
      </button>
    </div>
  );
}

export default AboutPage;
