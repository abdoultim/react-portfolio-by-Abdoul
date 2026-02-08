import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Formation() {
  return (
    <div id="formation">
      <div className="items-container">
        <h1>Formations</h1>

        <VerticalTimeline>
          {/* Formation actuelle */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2025 — Aujourd’hui"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Chef de projet digital — Développement (3e année)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Digital School Paris — IEF2I
            </h4>
            <p>
              Gestion de projet digital, développement web & applicatif, conception de solutions
              numériques et méthodologies agiles.
            </p>
          </VerticalTimelineElement>

          {/* Master */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 — 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master Économétrie & Statistiques
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Institut de Science Financière et d’Assurances (ISFA) — Lyon
            </h4>
            <p>
              Statistiques, data science, intelligence artificielle, data mining, text mining,
              visualisation, tarification et techniques actuarielles.
            </p>
          </VerticalTimelineElement>

          {/* Licence 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 — 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Licence — Analyse & politique économique
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Université Clermont Auvergne — Clermont-Ferrand
            </h4>
            <p>
              Économétrie & statistiques, économie du risque, instruments et marchés financiers,
              prévision et conjoncture macroéconomique.
            </p>
          </VerticalTimelineElement>

          {/* Licence 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 — 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Licence — Économie Internationale
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Université Internationale Privée d’Abidjan — Côte d’Ivoire
            </h4>
            <p>
              Finance & assurance, comptabilité, analyse financière, mathématiques,
              algèbre et Excel avancé.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Formation;
