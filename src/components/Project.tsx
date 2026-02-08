import React from "react";
import { Link } from "react-router-dom";
import dgsAuto from "../assets/images/dgs.png";
import ivoirebus from "../assets/images/ivoirebuss.png";
import sentimentImg from "../assets/images/NLP.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projets personnels</h1>

      <div className="projects-grid">
        {/* DGS AUTO */}
        <div className="project">
          <Link to="/projects/dgs-auto" className="project-link">
            <img
              src={dgsAuto}
              className="zoom"
              alt="DGS Auto"
              width="100%"
            />
            <h2>DGS AUTO</h2>
          </Link>

          <p>
            Site web professionnel de vente et location de véhicules en Côte
            d’Ivoire, développé pour un client réel.
          </p>
        </div>

        {/* IVOIREBUS */}
        <div className="project">
          <Link to="/projects/ivoirebus" className="project-link">
            <img
              src={ivoirebus}
              className="zoom"
              alt="IvoireBus"
              width="100%"
            />
            <h2>IvoireBus</h2>
          </Link>

          <p>
            Application mobile de réservation de billets de bus, inspirée de
            FlixBus et Trainline, adaptée au marché ivoirien.
          </p>
        </div>

        {/* DGS AUTO */}
        <div className="project">
          <Link to="/projects/analyse-sentiments" className="project-link">
            <img
              src={sentimentImg}
              className="zoom"
              alt="Analyse de sentiments (BERT)"
              width="100%"
            />
            <h2>Analyse de sentiments (BERT)</h2>
          </Link>

          <p>
            Projet de <b>Data Mining & NLP</b> basé sur la base de données du CFPB,
            utilisant <b>BERT</b> pour prédire automatiquement le type de
            réclamation à partir de sa description textuelle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
