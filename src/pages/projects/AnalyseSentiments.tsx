// src/pages/projects/AnalyseSentiments.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

/* =========================================================
   ✅ HERO + CAPTURES
   ========================================================= */

// Hero
import heroImg from "../../assets/images/NLP.png";

// Captures (plots)
import capMissingValues from "../../assets/images/plot1.png";
import capIssueDistributionBar from "../../assets/images/plot2.png";
import capIssueDistributionPie from "../../assets/images/plot3.png";
import capSentimentDist from "../../assets/images/plot4.png";
import capBertTrainingReport from "../../assets/images/plot5.png";
import capPredictionExample from "../../assets/images/plot6.png";

/* =====================
   ✅ LOGOS TECH
   ===================== */
import pythonLogo from "../../assets/logo/python-svgrepo-com.svg";
import vscodeLogo from "../../assets/logo/vs-code-svgrepo-com.svg";
import gitLogo from "../../assets/logo/github.png";
import condaLogo from "../../assets/logo/conda-svgrepo-com.svg";
import notebookLogo from "../../assets/logo/rstudio-seeklogo.png";

type TechItem = { name: string; src: string };

// ✅ Type pour gérer un zoom (lightbox) sur n'importe quelle image
type LightboxImage = {
  src: string;
  alt: string;
};

export default function AnalyseSentiments() {
  const navigate = useNavigate();

  const tech: TechItem[] = useMemo(
    () => [
      { name: "Python", src: pythonLogo },
      { name: "VS Code", src: vscodeLogo },
      { name: "GitHub", src: gitLogo },
      { name: "Conda", src: condaLogo },
      { name: "Notebook", src: notebookLogo },
    ],
    []
  );

  // ✅ Toutes les captures (pour le carousel global + navigation lightbox)
  const screenshots = useMemo<LightboxImage[]>(
    () => [
      { src: capMissingValues, alt: "Visualisation des valeurs manquantes" },
      { src: capIssueDistributionBar, alt: "Répartition des Issues (bar chart)" },
      { src: capIssueDistributionPie, alt: "Répartition des Issues (pie chart)" },
      { src: capSentimentDist, alt: "Distribution des sentiments" },
      { src: capBertTrainingReport, alt: "Rapport de classification (BERT)" },
      { src: capPredictionExample, alt: "Exemple de prédiction" },
    ],
    []
  );

  // ✅ Carousel global (section “Captures (toutes)”)
  const [index, setIndex] = useState(0);

  // ✅ Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  }, [screenshots.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));
  }, [screenshots.length]);

  // ✅ Lightbox navigation
  const openLightbox = (imgIndex: number) => {
    setActiveIndex(imgIndex);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevLightbox = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  }, [screenshots.length]);

  const nextLightbox = useCallback(() => {
    setActiveIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));
  }, [screenshots.length]);

  // ✅ Clavier : ESC ferme, ←/→ navigue
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, prevLightbox, nextLightbox]);

  const goBackToProjects = () => {
    navigate("/#projects");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  // ✅ Helper : ouvre le zoom depuis une image "section"
  const clickableMedia = (imgIndex: number, className?: string) => ({
    onClick: () => openLightbox(imgIndex),
    role: "button" as const,
    tabIndex: 0,
    className: className ?? "project-image",
  });

  return (
    <div className="project-detail-container">
      {/* 🔙 Retour */}
      <button className="back-button" onClick={goBackToProjects}>
        ← Retour aux projets
      </button>

      {/* 🟣 Badge */}
      <span className="project-badge">Projet personnel • NLP / Data Mining</span>

      {/* ✅ HERO */}
      <div className="project-hero">
        <div className="project-hero-left">
          <h1>Analyse de sentiments & classification des réclamations avec BERT</h1>

          <p className="project-intro">
            Projet NLP basé sur la base publique du{" "}
            <b>CFPB (Consumer Financial Protection Bureau)</b>. L’objectif est de{" "}
            <b>prédire le type de problème (“Issue”)</b> d’une réclamation à partir
            de sa description (<b>Consumer complaint narrative</b>) via une démarche{" "}
            <b>Exploration → Prétraitement → Analyse de sentiment → Classification BERT</b>.
          </p>

          <div className="project-info-grid">
            <div className="info-card">
              <h4>Données</h4>
              <p>CFPB</p>
              <span>Consumer Complaint Database</span>
            </div>

            <div className="info-card">
              <h4>Tâches</h4>
              <p>NLP</p>
              <span>Sentiment + classification</span>
            </div>

            <div className="info-card">
              <h4>Modèle</h4>
              <p>BERT</p>
              <span>Transformers</span>
            </div>
          </div>
        </div>

        <div className="project-hero-right">
          <img src={heroImg} alt="Aperçu du projet NLP" className="project-hero-image" />
        </div>
      </div>

      {/* ✅ Contexte */}
      <section className="project-section">
        <h2>Contexte</h2>
        <p>
          Le CFPB collecte des réclamations de consommateurs et les transmet aux institutions
          financières concernées afin d’obtenir une réponse. Face à un volume important de textes
          non structurés, il devient nécessaire d’<b>automatiser la compréhension</b> et la{" "}
          <b>catégorisation</b> des réclamations.
        </p>
      </section>

      {/* ✅ Données */}
      <section className="project-section">
        <h2>Données</h2>
        <ul>
          <li>
            Base : <b>Consumer Complaint Database</b> (CFPB)
          </li>
          <li>
            Variables clés : <b>Consumer complaint narrative</b> (texte) et <b>Issue</b> (label)
          </li>
          <li>
            Sous-échantillon utilisé pour l’entraînement : <b>5 000 réclamations</b>
          </li>
        </ul>
      </section>

      {/* ✅ Exploration & Qualité */}
      <section className="project-section">
        <h2>Exploration & qualité des données</h2>
        <p>
          J’ai commencé par analyser la structure de la base et la présence de valeurs manquantes
          afin de déterminer quelles colonnes sont réellement exploitables pour un projet NLP.
        </p>

        <div className="project-media">
          <img
            src={capMissingValues}
            alt={screenshots[0].alt}
            {...clickableMedia(0)}
          />
          <p className="media-caption">
            Visualisation des valeurs manquantes : certaines colonnes contiennent beaucoup de NaN,
            mais la narrative reste majoritairement exploitable.
          </p>
        </div>

        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            Les champs secondaires sont incomplets, mais la narrative est la plus stable. Cela
            justifie une approche NLP centrée sur le contenu des descriptions.
          </p>
        </div>
      </section>

      {/* ✅ Démarche */}
      <section className="project-section">
        <h2>Démarche</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>1) Import & exploration</h3>
            <p>Dimensions, variables, analyse des valeurs manquantes.</p>
          </div>

          <div className="feature-card">
            <h3>2) Prétraitement texte</h3>
            <p>Nettoyage, normalisation, suppression du bruit, préparation des labels.</p>
          </div>

          <div className="feature-card">
            <h3>3) Analyse de sentiment</h3>
            <p>Polarité et subjectivité via TextBlob + visualisation de la distribution.</p>
          </div>

          <div className="feature-card">
            <h3>4) Classification avec BERT</h3>
            <p>Tokenization, split train/val, entraînement, évaluation et test sur un exemple.</p>
          </div>
        </div>
      </section>

      {/* ✅ Répartition des Issues */}
      <section className="project-section">
        <h2>Répartition des “Issues”</h2>
        <p>
          Avant d’entraîner le modèle, j’ai étudié la distribution de <b>Issue</b> afin de
          comprendre les catégories dominantes et identifier un éventuel déséquilibre de classes.
        </p>

        <div className="project-media">
          <img
            src={capIssueDistributionBar}
            alt={screenshots[1].alt}
            {...clickableMedia(1)}
          />
          <p className="media-caption">
            Distribution des catégories “Issue” : certaines classes apparaissent très majoritaires.
          </p>
        </div>

        <div className="project-media">
          <img
            src={capIssueDistributionPie}
            alt={screenshots[2].alt}
            {...clickableMedia(2)}
          />
          <p className="media-caption">
            Vue synthétique de la répartition : les premières catégories représentent une grande
            partie de la base.
          </p>
        </div>

        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            Les catégories liées au credit reporting sont dominantes. Ce déséquilibre a un effet
            sur la modélisation : le modèle apprend mieux les classes fréquentes que les classes
            rares.
          </p>
        </div>
      </section>

      {/* ✅ Analyse de sentiment */}
      <section className="project-section">
        <h2>Analyse de sentiment</h2>
        <p>
          J’ai calculé la polarité et la subjectivité des narratives avec <b>TextBlob</b>, puis
          regroupé les textes en trois classes : <b>négatif</b>, <b>neutre</b> et <b>positif</b>.
        </p>

        <div className="project-media">
          <img
            src={capSentimentDist}
            alt={screenshots[3].alt}
            {...clickableMedia(3)}
          />
          <p className="media-caption">
            Distribution des sentiments : neutre légèrement majoritaire, avec des parts proches
            pour positif et négatif.
          </p>
        </div>

        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            Le neutre majoritaire indique que beaucoup de consommateurs décrivent leur situation de
            façon factuelle. On peut exploiter ce signal pour prioriser automatiquement certains
            cas.
          </p>
        </div>
      </section>

      {/* ✅ Classification avec BERT */}
      <section className="project-section">
        <h2>Classification avec BERT</h2>
        <p>
          Pour prédire <b>Issue</b>, j’ai entraîné un modèle basé sur <b>BERT</b>. Les textes sont
          tokenisés puis utilisés pour une classification multi-classes.
        </p>

        <div className="project-media">
          <img
            src={capBertTrainingReport}
            alt={screenshots[4].alt}
            {...clickableMedia(4)}
          />
          <p className="media-caption">
            Rapport de classification : bonnes performances sur les classes fréquentes, plus faible
            sur les classes rares.
          </p>
        </div>

        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            La difficulté principale vient du déséquilibre : les catégories minoritaires ont peu
            d’exemples. Des améliorations sont possibles (pondération, rééquilibrage, plus d’epochs,
            etc.).
          </p>
        </div>
      </section>

      {/* ✅ Test de prédiction */}
      <section className="project-section">
        <h2>Test de prédiction sur un exemple</h2>
        <p>
          Test du pipeline sur une réclamation fictive : un texte brut en entrée, une catégorie
          prédite en sortie.
        </p>

        <div className="project-media">
          <img
            src={capPredictionExample}
            alt={screenshots[5].alt}
            {...clickableMedia(5)}
          />
          <p className="media-caption">
            Exemple de prédiction : le modèle identifie une catégorie cohérente à partir d’une
            narrative.
          </p>
        </div>
      </section>

      {/* ✅ Mon rôle */}
      <section className="project-section">
        <h2>Mon rôle</h2>
        <ul>
          <li>Définition du problème et choix des variables.</li>
          <li>Exploration de la base, analyse de la qualité des données.</li>
          <li>Prétraitement NLP et encodage des labels.</li>
          <li>Analyse de sentiment + interprétation des résultats.</li>
          <li>Entraînement / évaluation d’un modèle BERT (Transformers).</li>
          <li>Tests de prédiction et documentation du projet.</li>
        </ul>
      </section>

      {/* ✅ Technologies */}
      <section className="project-section">
        <h2>Technologies</h2>
        <div className="tech-grid">
          {tech.map((t) => (
            <div className="tech-item" key={t.name}>
              <img src={t.src} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>

        <p className="hint">
          Librairies : Pandas, NumPy, NLTK, TextBlob, Matplotlib/Plotly, PyTorch, Transformers
          (Hugging Face).
        </p>
      </section>

      {/* ✅ Conclusion */}
      <section className="project-section">
        <h2>Conclusion</h2>
        <p>
          Ce projet m’a permis de construire un pipeline NLP complet, depuis l’exploration d’une
          base réelle jusqu’à l’entraînement d’un modèle BERT de classification.
        </p>

        <div className="insight-box">
          <h3>Conclusion générale</h3>
          <p>
            La dominance du credit reporting et le neutre majoritaire sont des signaux forts. BERT
            permet de prédire automatiquement la catégorie “Issue”, avec de meilleures performances
            sur les classes majoritaires.
          </p>
        </div>
      </section>

      {/* ✅ Code source */}
      <section className="project-section">
        <h2>Code source</h2>
        <p>Le notebook complet et le code du projet sont disponibles sur GitHub :</p>

        <p className="hint">
          <b>GitHub :</b>{" "}
          <a
            href="https://github.com/abdoultim/Analyse-de-sentiments-Bert-Model"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/abdoultim/Analyse-de-sentiments-Bert-Model
          </a>
        </p>
      </section>

      {/* ✅ Bonus : Carrousel global */}
      <section className="project-section">
        <h2>Captures (toutes)</h2>

        <div className="carousel">
          <button onClick={prev} className="carousel-btn" aria-label="Précédent">
            ‹
          </button>

          <img
            src={screenshots[index].src}
            alt={screenshots[index].alt}
            className="carousel-image"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
          />

          <button onClick={next} className="carousel-btn" aria-label="Suivant">
            ›
          </button>
        </div>

        <p className="carousel-hint">
          Clique sur une capture pour l’agrandir. (ESC pour fermer, ←/→ pour naviguer)
        </p>
      </section>

      {/* ✅ Lightbox (zoom plein écran) */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
              ✕
            </button>

            <button className="lightbox-nav left" onClick={prevLightbox} aria-label="Précédent">
              ‹
            </button>

            <img
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              className="lightbox-image"
            />

            <button className="lightbox-nav right" onClick={nextLightbox} aria-label="Suivant">
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
