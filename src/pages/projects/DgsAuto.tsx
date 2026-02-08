// src/pages/projects/DgsAuto.tsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

// 🔧 Logos technos
import phpLogo from "../../assets/logo/php-1-logo-svgrepo-com.svg";
import htmlLogo from "../../assets/logo/html-5-svgrepo-com.svg";
import cssLogo from "../../assets/logo/css-3-svgrepo-com.svg";
import jsLogo from "../../assets/logo/javascript-svgrepo-com.svg";
import sqlLogo from "../../assets/logo/icons8-sql-96.png";
import gitLogo from "../../assets/logo/github.png";
import vscodeLogo from "../../assets/logo/vs-code-svgrepo-com.svg";
import trelloLogo from "../../assets/logo/trello.png";

// 🖼️ Hero image
import heroImg from "../../assets/images/dgs.png";

// 🖥️ Captures VS Code
import vscode1 from "../../assets/images/vscode-1.png";
import vscode2 from "../../assets/images/vscode-2.png";
import vscode3 from "../../assets/images/vscode-3.png";
import vscode4 from "../../assets/images/vscode-4.png";
import vscode5 from "../../assets/images/vscode-5.png";

type TechItem = { name: string; icon: string };

export default function DgsAuto() {
  const navigate = useNavigate();

  const vsCodeScreens = useMemo(
    () => [vscode1, vscode2, vscode3, vscode4, vscode5],
    []
  );

  const [index, setIndex] = useState(0);

  // ✅ Lightbox (zoom)
  const [isOpen, setIsOpen] = useState(false);

  const tech: TechItem[] = useMemo(
    () => [
      { name: "PHP", icon: phpLogo },
      { name: "HTML5", icon: htmlLogo },
      { name: "CSS3", icon: cssLogo },
      { name: "JavaScript", icon: jsLogo },
      { name: "MySQL", icon: sqlLogo },
      { name: "Git", icon: gitLogo },
      { name: "VS Code", icon: vscodeLogo },
      { name: "Trello", icon: trelloLogo },
    ],
    []
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? vsCodeScreens.length - 1 : i - 1));
  }, [vsCodeScreens.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === vsCodeScreens.length - 1 ? 0 : i + 1));
  }, [vsCodeScreens.length]);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  // ✅ Clavier : ESC ferme, ←/→ navigue
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, prev, next]);

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

      {/* ✅ HERO */}
      <div className="project-hero">
        <div className="project-hero-left">
          <span className="project-badge">Projet professionnel · Janvier 2026</span>

          <h1>DGS-AUTO</h1>

          <p className="project-intro">
            Plateforme web de <b>vente</b> et <b>location</b> de véhicules en Côte d’Ivoire,
            avec un <b>espace administrateur</b> complet pour la gestion du catalogue et des
            demandes.
          </p>

          {/* 📊 Infos clés */}
          <div className="project-info-grid">
            <div className="info-card">
              <h4>Client</h4>
              <p>Entreprise automobile</p>
              <span>Côte d’Ivoire</span>
            </div>

            <div className="info-card">
              <h4>Hébergement</h4>
              <p>IONOS</p>
              <span>Serveur mutualisé</span>
            </div>

            <div className="info-card">
              <h4>Site web</h4>
              <a
                href="https://dgs-auto.com"
                target="_blank"
                rel="noreferrer"
                className="external-link"
                title="Ouvrir dgs-auto.com"
              >
                🌍 dgs-auto.com
              </a>
            </div>
          </div>
        </div>

        <div className="project-hero-right">
          <img src={heroImg} alt="Aperçu du projet DGS-AUTO" className="project-hero-image" />
        </div>
      </div>

      {/* 📚 Contexte */}
      <section className="project-section">
        <h2>Contexte</h2>
        <p>
          Le client souhaitait une présence en ligne professionnelle pour présenter ses véhicules
          et recevoir des demandes de <b>vente</b> / <b>location</b>, tout en gardant la main
          grâce à une interface d’administration sécurisée.
        </p>
      </section>

      {/* 🎯 Objectifs */}
      <section className="project-section">
        <h2>Objectifs</h2>
        <ul>
          <li>Présenter un catalogue clair et simple à explorer</li>
          <li>Permettre aux clients d’envoyer des demandes rapidement</li>
          <li>Offrir un back-office sécurisé pour gérer le contenu</li>
          <li>Déployer un site rapide, fiable et facile à maintenir</li>
        </ul>
      </section>

      {/* ✅ Fonctionnalités */}
      <section className="project-section">
        <h2>Fonctionnalités</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Catalogue véhicules</h4>
            <p>Affichage du catalogue avec fiches détaillées (prix, photos, infos clés).</p>
          </div>

          <div className="feature-card">
            <h4>Vente & Location</h4>
            <p>Parcours adapté selon le besoin : achat ou location.</p>
          </div>

          <div className="feature-card">
            <h4>Demandes clients</h4>
            <p>Formulaires pour contacter l’entreprise et enregistrer les demandes.</p>
          </div>

          <div className="feature-card">
            <h4>Back-office admin</h4>
            <p>Connexion sécurisée + gestion du contenu (CRUD véhicules, demandes, etc.).</p>
          </div>
        </div>
      </section>

      {/* 🧑‍💻 Mon rôle */}
      <section className="project-section">
        <h2>Mon rôle</h2>
        <ul>
          <li>Analyse du besoin client & cadrage des fonctionnalités</li>
          <li>Conception de l’architecture (public / admin / api / config)</li>
          <li>Développement front (HTML/CSS/JS) et back (PHP + MySQL)</li>
          <li>Sécurisation : authentification, protections, séparation admin</li>
          <li>Mise en production sur IONOS + configuration domaine</li>
        </ul>
      </section>

      {/* 🛠️ Technologies */}
      <section className="project-section">
        <h2>Technologies utilisées</h2>

        <div className="tech-grid">
          {tech.map((t) => (
            <Tech key={t.name} icon={t.icon} name={t.name} />
          ))}
        </div>

        <p className="pd-note">
          Stack volontairement légère : rapide, simple à maintenir, parfaitement adaptée à un
          hébergement mutualisé.
        </p>
      </section>

      {/* 💻 Captures VS Code */}
      <section className="project-section">
        <h2>Développement (VS Code)</h2>

        <div className="carousel">
          <button onClick={prev} className="carousel-btn" aria-label="Image précédente">
            ‹
          </button>

          <img
            src={vsCodeScreens[index]}
            alt={`Capture VS Code ${index + 1}`}
            className="carousel-image"
            onClick={openLightbox}
            role="button"
            tabIndex={0}
          />

          <button onClick={next} className="carousel-btn" aria-label="Image suivante">
            ›
          </button>
        </div>

        <p className="carousel-hint">
          Clique sur l’image pour l’agrandir. (ESC pour fermer, ←/→ pour naviguer)
        </p>
      </section>

      {/* 🚀 Hébergement & mise en production */}
      <section className="project-section">
        <h2>Hébergement & mise en production</h2>
        <ul>
          <li>Hébergement : IONOS (mutualisé)</li>
          <li>
            Domaine :{" "}
            <a href="https://dgs-auto.com" target="_blank" rel="noopener noreferrer">
              dgs-auto.com
            </a>
          </li>
          <li>Mise en production : Janvier 2026</li>
          <li>Déploiement : transfert + configuration serveur</li>
        </ul>
      </section>

      {/* ✅ Lightbox */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
              ✕
            </button>

            <button className="lightbox-nav left" onClick={prev} aria-label="Précédent">
              ‹
            </button>

            <img
              src={vsCodeScreens[index]}
              alt={`Capture VS Code ${index + 1}`}
              className="lightbox-image"
            />

            <button className="lightbox-nav right" onClick={next} aria-label="Suivant">
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🔹 Composant Tech */
function Tech({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="tech-item" title={name} aria-label={name}>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}
