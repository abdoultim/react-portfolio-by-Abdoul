import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

/* =========================================================
   ✅ HERO + CAPTURES
   👉 Tu mettras tes images exactement là où il faut.
   👉 Ici je laisse des imports "placeholder" à remplacer.
   ========================================================= */

// Hero (ex: NLP.png ou une capture du notebook)
import heroImg from "../../assets/images/NLP.png";

/**
 * ✅ Captures à insérer progressivement selon les sections
 * Remplace les fichiers par tes vrais noms (plot1.png, plot2.png, etc.)
 * Exemple :
 * import plotMissing from "../../assets/images/plot1.png";
 */
import capMissingValues from "../../assets/images/plot1.png"; // (ex) matrice valeurs manquantes
import capIssueDistributionBar from "../../assets/images/plot2.png"; // (ex) histogramme Issue
import capIssueDistributionPie from "../../assets/images/plot3.png"; // (ex) donut/pie Issue
import capSentimentDist from "../../assets/images/plot4.png"; // (ex) Distribution of sentiments
import capBertTrainingReport from "../../assets/images/plot5.png"; // (ex) classification report
import capPredictionExample from "../../assets/images/plot6.png"; // (ex) prédiction finale (optionnel)

/* =====================
   ✅ LOGOS TECH
   ===================== */
import pythonLogo from "../../assets/logo/python-svgrepo-com.svg";
import vscodeLogo from "../../assets/logo/vs-code-svgrepo-com.svg";
import gitLogo from "../../assets/logo/github.png";
import condaLogo from "../../assets/logo/conda-svgrepo-com.svg";

// Optionnel : remplace plus tard par un vrai logo Jupyter/Colab si tu veux
import notebookLogo from "../../assets/logo/rstudio-seeklogo.png";

type TechItem = { name: string; src: string };

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

  // ✅ Carrousel global optionnel (si tu veux une section "toutes les captures")
  // Ici on ne met PAS tout ensemble : tu as déjà les images au bon endroit dans les sections.
  const screenshots = useMemo(
    () => [
      capMissingValues,
      capIssueDistributionBar,
      capIssueDistributionPie,
      capSentimentDist,
      capBertTrainingReport,
      capPredictionExample,
    ],
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const prev = () =>
    setIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  const goBackToProjects = () => {
    navigate("/#projects");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

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

          {/* Infos clés */}
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
          <img
            src={heroImg}
            alt="Aperçu du projet NLP"
            className="project-hero-image"
          />
        </div>
      </div>

      {/* ✅ Contexte */}
      <section className="project-section">
        <h2>Contexte</h2>
        <p>
          Le CFPB collecte des réclamations de consommateurs et les transmet aux
          institutions financières concernées afin d’obtenir une réponse. L’enjeu
          principal : face à un volume important de textes non structurés, il devient
          nécessaire d’<b>automatiser la compréhension</b> et la{" "}
          <b>catégorisation</b> des réclamations afin de gagner du temps et d’améliorer
          la réactivité du service client.
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
            Variables clés : <b>Consumer complaint narrative</b> (texte) et{" "}
            <b>Issue</b> (label)
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
          J’ai commencé par analyser la structure de la base (dimensions, types de
          variables) et la présence de valeurs manquantes. Cette étape permet de
          déterminer quelles colonnes sont réellement exploitables pour un projet NLP.
        </p>

        {/* ✅ Image au bon endroit */}
        <div className="project-media">
          <img
            src={capMissingValues}
            alt="Visualisation des valeurs manquantes"
            className="project-image"
          />
          <p className="media-caption">
            Visualisation des valeurs manquantes : certaines colonnes contiennent
            beaucoup de NaN, mais la narrative (texte) reste majoritairement exploitable.
          </p>
        </div>

        {/* ✅ INTERPRÉTATION */}
        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            La présence de nombreuses valeurs manquantes sur des champs secondaires
            (ex. réponse publique, tags) confirme que l’information la plus stable et
            la plus riche pour un modèle automatique reste le texte libre{" "}
            <b>Consumer complaint narrative</b>. Cela justifie le choix d’une approche
            NLP centrée sur le contenu des descriptions.
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
            <p>
              Nettoyage, normalisation, suppression du bruit, préparation des labels.
            </p>
          </div>

          <div className="feature-card">
            <h3>3) Analyse de sentiment</h3>
            <p>
              Polarité et subjectivité via TextBlob + visualisation de la distribution.
            </p>
          </div>

          <div className="feature-card">
            <h3>4) Classification avec BERT</h3>
            <p>
              Tokenization, split train/val, entraînement, évaluation et test sur un
              exemple.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Répartition des Issues */}
      <section className="project-section">
        <h2>Répartition des “Issues”</h2>
        <p>
          Avant d’entraîner le modèle, j’ai étudié la distribution de la variable{" "}
          <b>Issue</b> afin de comprendre les catégories dominantes et d’identifier un
          éventuel déséquilibre de classes.
        </p>

        <div className="project-media">
          <img
            src={capIssueDistributionBar}
            alt="Répartition des Issues (bar chart)"
            className="project-image"
          />
          <p className="media-caption">
            Distribution des catégories “Issue” : certaines classes apparaissent très
            majoritaires.
          </p>
        </div>

        <div className="project-media">
          <img
            src={capIssueDistributionPie}
            alt="Répartition des Issues (pie chart)"
            className="project-image"
          />
          <p className="media-caption">
            Vue synthétique de la répartition : les premières catégories représentent
            une grande partie de la base.
          </p>
        </div>

        {/* ✅ INTERPRÉTATION */}
        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            Les catégories liées au <b>credit reporting</b> sont fortement dominantes
            (ex : “Incorrect information on your report”, “Improper use of your report”).
            Cela s’explique par l’impact direct du score de crédit sur la vie
            quotidienne (accès au prêt, au logement, à l’emploi). Ce déséquilibre a
            aussi un effet sur la modélisation : le modèle apprend mieux les classes
            fréquentes que les classes rares.
          </p>
        </div>
      </section>

      {/* ✅ Analyse de sentiment */}
      <section className="project-section">
        <h2>Analyse de sentiment</h2>
        <p>
          J’ai calculé la polarité et la subjectivité des narratives avec{" "}
          <b>TextBlob</b>, puis j’ai regroupé les textes en trois classes :{" "}
          <b>négatif</b>, <b>neutre</b> et <b>positif</b>.
        </p>

        <div className="project-media">
          <img
            src={capSentimentDist}
            alt="Distribution of sentiments"
            className="project-image"
          />
          <p className="media-caption">
            Distribution des sentiments : neutre légèrement majoritaire, avec des parts
            proches pour positif et négatif.
          </p>
        </div>

        {/* ✅ INTERPRÉTATION */}
        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            Le fait que le <b>neutre</b> soit majoritaire indique que beaucoup de
            consommateurs décrivent leur situation de façon factuelle (style “rapport”
            plutôt qu’émotionnel). Ce signal est utile en entreprise : il peut servir
            à prioriser automatiquement les cas les plus sensibles (très négatifs) ou
            à détecter des tendances globales sur la qualité de service.
          </p>
        </div>
      </section>

      {/* ✅ Classification avec BERT */}
      <section className="project-section">
        <h2>Classification avec BERT</h2>
        <p>
          Pour prédire la catégorie <b>Issue</b> à partir du texte, j’ai entraîné un
          modèle basé sur <b>BERT</b> (Transformers). Les textes sont tokenisés puis
          utilisés pour une tâche de classification multi-classes.
        </p>

        <div className="project-media">
          
          <p className="media-caption">
            Rapport de classification : bonnes performances sur les classes fréquentes,
            plus faible sur les classes rares.
          </p>
        </div>

        {/* ✅ INTERPRÉTATION */}
        <div className="insight-box">
          <h3>Interprétation</h3>
          <p>
            Les résultats montrent une performance correcte pour un premier modèle sur
            un dataset multi-classes. La difficulté principale vient du{" "}
            <b>déséquilibre des classes</b> : les catégories minoritaires ont peu
            d’exemples, ce qui limite la capacité du modèle à généraliser. Des
            améliorations seraient possibles avec un rééquilibrage, davantage d’epochs,
            ou une stratégie de pondération des classes.
          </p>
        </div>
      </section>

      {/* ✅ Test de prédiction */}
      <section className="project-section">
        <h2>Test de prédiction sur un exemple</h2>
        <p>
          Enfin, j’ai testé le pipeline sur une réclamation fictive afin de valider
          le comportement du modèle en situation “réelle” : un texte brut en entrée,
          une catégorie prédite en sortie.
        </p>

        <div className="project-media">
          <p className="media-caption">
            Exemple de prédiction : le modèle identifie une catégorie cohérente à partir
            d’une narrative.
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
          Librairies utilisées : Pandas, NumPy, NLTK, TextBlob, Plotly/Matplotlib,
          PyTorch, Transformers (Hugging Face).
        </p>
      </section>

      {/* ✅ Conclusion générale */}
      <section className="project-section">
        <h2>Conclusion</h2>
        <p>
          Ce projet m’a permis de construire un pipeline NLP complet, depuis
          l’exploration d’une base réelle jusqu’à l’entraînement d’un modèle BERT de
          classification. L’approche montre qu’il est possible d’<b>automatiser la
          catégorisation</b> des réclamations et de fournir un outil utile à un service
          client pour améliorer la réactivité.
        </p>

        <div className="insight-box">
          <h3>Conclusion générale</h3>
          <p>
            L’analyse exploratoire met en évidence la dominance des problèmes liés au
            credit reporting, tandis que l’analyse de sentiment montre que les
            réclamations sont souvent exprimées de façon neutre et factuelle. Enfin,
            BERT permet de prédire automatiquement la catégorie “Issue”, avec une
            performance surtout élevée sur les classes majoritaires. Les prochaines
            optimisations passeraient par un meilleur équilibre des classes et un
            fine-tuning plus poussé.
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

      {/* ✅ Bonus : Carrousel global (si tu veux) */}
      <section className="project-section">
        <h2>Captures (toutes)</h2>
        <div className="carousel">
          <button onClick={prev} className="carousel-btn" aria-label="Précédent">
            ‹
          </button>

          <img
            src={screenshots[index]}
            alt={`Capture ${index + 1}`}
            className="carousel-image"
          />

          <button onClick={next} className="carousel-btn" aria-label="Suivant">
            ›
          </button>
        </div>

        <p className="carousel-hint">
          Astuce : utilise les flèches pour parcourir les captures.
        </p>
      </section>
    </div>
  );
}
