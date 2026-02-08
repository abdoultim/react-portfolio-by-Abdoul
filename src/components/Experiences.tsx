import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsDev = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flutter",
  "Dart",
  "Firebase",
  "Firestore",
  "Firebase Auth",
  "API REST",
  "Git",
  "GitHub",
  "Postman",
];

const labelsData = [
  "Python",
  "Pandas",
  "R",
  "SQL",
  "Excel (VBA)",
  "Power BI",
  "Shiny",
  "Statistiques",
  "Analyse de données",
];

const labelsProject = [
  "Gestion de projet digital",
  "Méthodes agiles (bases)",
  "UX / UI (notions)",
  "IA générative (veille)",
  "OpenAI (initiation)",
  "Documentation",
  "Communication",
];

function Experiences() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Compétences</h1>

        <div className="skills-grid">
          {/* Développement Web & Mobile */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Développement Web & Mobile</h3>
            <p>
              Je conçois et développe des applications web et mobiles modernes,
              en mettant l’accent sur l’expérience utilisateur, la performance
              et la maintenabilité. J’utilise Firebase (Authentication,
              Firestore) pour gérer les utilisateurs et les données côté backend.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technologies :</span>
              {labelsDev.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Data, Automatisation & Analyse */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data, Automatisation & Analyse</h3>
            <p>
              Issu d’une formation en statistique et économétrie, j’exploite la
              donnée pour produire des analyses, automatiser des tâches et
              construire des indicateurs d’aide à la décision.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Outils & méthodes :</span>
              {labelsData.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Gestion de projet digital */}
          <div className="skill">
            <FontAwesomeIcon icon={faDiagramProject} size="3x" />
            <h3>Gestion de projet digital & veille IA</h3>
            <p>
              En formation de chef de projet digital, je développe une vision
              globale des projets numériques : compréhension des besoins,
              structuration, priorisation et suivi. Je m’intéresse également aux
              usages concrets de l’IA générative dans les applications digitales.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Compétences :</span>
              {labelsProject.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
