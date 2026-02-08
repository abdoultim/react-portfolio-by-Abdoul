import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/IDENTITE.jpeg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/abdoultim"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/abdoul-kadary-timite-030840234/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Abdoul Timité</h1>
          <p className="student-title">Étudiant Chef de Projet Digital (option Développement)</p>

          {/* ✅ Accroche portfolio */}
          <p className="tagline">
         
            Entre gestion de projet, conception d’interfaces et développement
            web & mobile, je navigue avec une approche orientée produit et
            expérience utilisateur. J’accorde autant d’importance à ce que l’on
            voit qu’à ce qui se passe sous le capot.
            <br />
            Aujourd’hui, je suis à la recherche d’une alternance ou d’un stage à
            partir de septembre 2026, pour continuer à apprendre sur le terrain,
            relever de nouveaux défis et contribuer concrètement à des projets
            digitaux ambitieux.
            <br />
            Si vous aimez les projets bien pensés, utiles et modernes… on risque
            de bien s’entendre 😉
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/abdoultim"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/abdoul-kadary-timite-030840234/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
