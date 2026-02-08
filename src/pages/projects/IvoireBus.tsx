// src/pages/projects/IvoireBus.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

// 🖼️ Hero image (mets une capture de l'app / mock)
import heroImg from "../../assets/images/ivoirebuss.png";

// 💻 Captures VS Code (adapte les noms si besoin)
import code1 from "../../assets/images/ivoirebus/code-1.png";
import code2 from "../../assets/images/ivoirebus/code-2.png";
import code3 from "../../assets/images/ivoirebus/code-3.png";

// 🔧 Logos technos (ajoute/retire selon ton projet)
import reactLogo from "../../assets/logo/react-svgrepo-com.svg";
import tsLogo from "../../assets/logo/typescript-svgrepo-com.svg";
import firebaseLogo from "../../assets/logo/light-firebasehosting-svgrepo-com.svg";
import gitLogo from "../../assets/logo/github.png";
import vscodeLogo from "../../assets/logo/vs-code-svgrepo-com.svg";

type TechItem = { name: string; src: string };

export default function IvoireBus() {
  const navigate = useNavigate();

  const tech: TechItem[] = useMemo(
    () => [
      { name: "React Native / Expo", src: reactLogo },
      { name: "TypeScript", src: tsLogo },
      { name: "Firebase", src: firebaseLogo },
      { name: "Git", src: gitLogo },
      { name: "VS Code", src: vscodeLogo },
    ],
    []
  );

  // ✅ Vidéo démo (Solution A: public/)
  const demoVideoUrl = "/videos/ivoirebus-demo.mp4";

  // ✅ Carousel VS Code
  const vsCodeScreens = useMemo(() => [code1, code2, code3], []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // ✅ Quand on arrive sur la page projet, on remonte en haut
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const prev = () =>
    setIndex((i) => (i === 0 ? vsCodeScreens.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === vsCodeScreens.length - 1 ? 0 : i + 1));

  const goBackToProjects = () => {
    // ✅ Retour propre vers la section Projects
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
      <span className="project-badge">Projet personnel • Application mobile</span>

      {/* ✅ HERO */}
      <div className="project-hero">
        <div className="project-hero-left">
          <h1>IvoireBus</h1>

          <p className="project-intro">
            Application mobile inspirée de <b>FlixBus</b> / <b>Trainline</b>, destinée à la{" "}
            <b>Côte d’Ivoire</b>, permettant de réserver des billets de bus directement
            sur smartphone, sans se déplacer en gare.
          </p>

          {/* Infos clés */}
          <div className="project-info-grid">
            <div className="info-card">
              <h4>Contexte</h4>
              <p>Digitalisation</p>
              <span>Réservation de billets</span>
            </div>

            <div className="info-card">
              <h4>Objectif</h4>
              <p>Réserver en ligne</p>
              <span>Paiement + e-billet</span>
            </div>

            <div className="info-card">
              <h4>Plateforme</h4>
              <p>Mobile</p>
              <span>Android / iOS</span>
            </div>
          </div>
        </div>

        <div className="project-hero-right">
          <img
            src={heroImg}
            alt="IvoireBus - aperçu application"
            className="project-hero-image"
          />
        </div>
      </div>

      {/* ✅ Contexte */}
      <section className="project-section">
        <h2>Contexte</h2>
        <p>
          Dans mon pays, la réservation de billets en ligne pour les bus n’est pas encore
          suffisamment mise en avant. IvoireBus vise à simplifier l’accès aux trajets,
          améliorer l’expérience utilisateur et aider les compagnies à mieux gérer leur offre.
        </p>
      </section>

      {/* ✅ Fonctionnalités */}
      <section className="project-section">
        <h2>Fonctionnalités clés</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Recherche de trajets</h3>
            <p>Départ / arrivée, date, passagers, filtrage, résultats clairs.</p>
          </div>

          <div className="feature-card">
            <h3>Réservation & e-billet</h3>
            <p>Réservation en quelques étapes avec récapitulatif et billet numérique.</p>
          </div>

          <div className="feature-card">
            <h3>Paiements</h3>
            <p>Intégration prévue (Mobile Money / carte / etc.) et statut de paiement.</p>
          </div>

          <div className="feature-card">
            <h3>Compte utilisateur</h3>
            <p>Connexion, profil, historique, gestion des réservations.</p>
          </div>

          <div className="feature-card">
            <h3>Support & messagerie</h3>
            <p>Boîte de réception + discussion avec le support.</p>
          </div>

          <div className="feature-card">
            <h3>Suivi & sécurité</h3>
            <p>Données sécurisées, règles Firestore, logique propre et scalable.</p>
          </div>
        </div>
      </section>

      {/* ✅ Mon rôle */}
      <section className="project-section">
        <h2>Mon rôle</h2>
        <ul>
          <li>Conception du produit (UX, écrans, parcours réservation).</li>
          <li>Développement mobile avec composants réutilisables.</li>
          <li>Mise en place Firebase (Auth, Firestore, Storage, règles).</li>
          <li>Structuration du projet (routes, pages, services).</li>
          <li>Préparation de l’intégration paiement + notifications.</li>
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
          Stack moderne orientée performance, évolutivité et déploiement multi-plateforme.
        </p>
      </section>

      {/* ✅ Vidéo démo */}
      <section className="project-section">
        <h2>Démo vidéo</h2>

        <div className="video-card">
          <video className="video" controls src={demoVideoUrl} />
        </div>

        <p className="video-caption">
          Vidéo locale (public/videos/ivoirebus-demo.mp4). Si tu veux, on peut aussi intégrer une
          vidéo YouTube (iframe) plus légère.
        </p>
      </section>

      {/* ✅ Captures VS Code */}
      <section className="project-section">
        <h2>Développement (captures VS Code)</h2>

        <div className="carousel">
          <button onClick={prev} className="carousel-btn" aria-label="Précédent">
            ‹
          </button>

          <img
            src={vsCodeScreens[index]}
            alt={`Capture VS Code ${index + 1}`}
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

      {/* ✅ Hébergement & mise en production */}
      <section className="project-section">
        <h2>Hébergement & mise en production</h2>
        <ul>
          <li>Build & packaging via Expo (EAS si nécessaire).</li>
          <li>Backend : Firebase (Auth / Firestore / Storage).</li>
          <li>Objectif : déploiement Android / iOS + évolution multi-pays en Afrique.</li>
        </ul>

        <p className="hint">
          Note : l’app est conçue pour s’étendre à plusieurs compagnies et plusieurs pays.
        </p>
      </section>
    </div>
  );
}
