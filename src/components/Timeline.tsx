import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Expériences professionnelles</h1>

        <VerticalTimeline>
          {/* Expérience 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Déc. 2024 — Fév. 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Développeur Web — Stage
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Société Générale Côte d’Ivoire — Abidjan
            </h4>
            <p>
              Conception & développement d’une application interne (suivi client, mobile & web).
              Automatisation de processus métiers. Intégration via API, tests, correction de bugs
              et amélioration continue.
            </p>
          </VerticalTimelineElement>

          {/* Expérience 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juin 2024 — Sept. 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Chargé d’études actuarielles — Stage
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Generali Vie — Saint-Denis (France)
            </h4>
            <p>
              Contribution au suivi des risques et à l’évaluation de l’exigence en capital (SCR).
              Extraction & manipulation de données, reporting et amélioration d’outils internes.
            </p>
          </VerticalTimelineElement>

          {/* Expérience 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai 2020 — Juil. 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Chargé d’études statistiques — Stage
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Direction Générale des Impôts — Abidjan (Côte d’Ivoire)
            </h4>
            <p>
              Analyse & prévision de recettes fiscales, segmentation/profilage, études de
              comportement & techniques d’analyse de données pour comprendre la conformité/fraude.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
