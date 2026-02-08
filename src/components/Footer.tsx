import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

// ✅ Imports logos (CRA)

// ✅ Imports logos (CRA) — noms exacts de tes fichiers
import pythonLogo from "../assets/logo/python-svgrepo-com.svg";

import phpLogo from "../assets/logo/php-1-logo-svgrepo-com.svg";

import gitLogo from "../assets/logo/github.png";

import flutterLogo from "../assets/logo/flutter-svgrepo-com.svg";
import dartLogo from "../assets/logo/dart-svgrepo-com.svg";
import reactLogo from "../assets/logo/react-svgrepo-com.svg";

import tsLogo from "../assets/logo/typescript-svgrepo-com.svg";
import jsLogo from "../assets/logo/javascript-svgrepo-com.svg";

import htmlLogo from "../assets/logo/html-5-svgrepo-com.svg";
import cssLogo from "../assets/logo/css-3-svgrepo-com.svg";
import firebaseLogo from "../assets/logo/light-firebasehosting-svgrepo-com.svg";

import vscodeLogo from "../assets/logo/vs-code-svgrepo-com.svg";
import rstudioLogo from "../assets/logo/rstudio-seeklogo.png"; // ou .png si tu préfères
import condaLogo from "../assets/logo/conda-svgrepo-com.svg";
import sqlLogo from "../assets/logo/icons8-sql-96.png"; 
import vbaLogo from "../assets/logo/programmation-vba.jpg";
import gitlabLogo from "../assets/logo/gitlab.svg";
import trelloLogo from "../assets/logo/trello.png";



const tools = [
  { name: "Python", src: pythonLogo, wiki: "https://fr.wikipedia.org/wiki/Python_(langage)" },
  { name: "PHP", src: phpLogo, wiki: "https://fr.wikipedia.org/wiki/PHP" },

  { name: "GitHub", src: gitLogo, wiki: "https://fr.wikipedia.org/wiki/Git" },

  { name: "Flutter", src: flutterLogo, wiki: "https://fr.wikipedia.org/wiki/Flutter_(logiciel)" },
  { name: "Dart", src: dartLogo, wiki: "https://fr.wikipedia.org/wiki/Dart_(langage)" },
  { name: "React", src: reactLogo, wiki: "https://fr.wikipedia.org/wiki/React" },

  { name: "TypeScript", src: tsLogo, wiki: "https://fr.wikipedia.org/wiki/TypeScript" },
  { name: "JavaScript", src: jsLogo, wiki: "https://fr.wikipedia.org/wiki/JavaScript" },

  { name: "HTML5", src: htmlLogo, wiki: "https://fr.wikipedia.org/wiki/HTML5" },
  { name: "CSS3", src: cssLogo, wiki: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" },

  { name: "Firebase", src: firebaseLogo, wiki: "https://fr.wikipedia.org/wiki/Firebase" },

  { name: "VS Code", src: vscodeLogo, wiki: "https://fr.wikipedia.org/wiki/Visual_Studio_Code" },
  { name: "RStudio", src: rstudioLogo, wiki: "https://fr.wikipedia.org/wiki/RStudio" },
  { name: "Conda", src: condaLogo, wiki: "https://fr.wikipedia.org/wiki/Conda_(gestionnaire_de_paquets)" },
  { name: "SQL", src: sqlLogo, wiki: "https://fr.wikipedia.org/wiki/Structured_Query_Language" },
  { name: "VBA", src: vbaLogo, wiki: "https://fr.wikipedia.org/wiki/Visual_Basic_for_Applications" },
  { name: "GitLab", src: gitlabLogo, wiki: "https://fr.wikipedia.org/wiki/GitLab" },
  { name: "Trello", src: trelloLogo, wiki: "https://fr.wikipedia.org/wiki/Trello" },
];

function Footer() {
  return (
    <footer>
      <div className="footer-social">
        <a href="https://github.com/abdoultim" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/abdoul-kadary-timite-030840234/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>

      <div className="footer-tools" aria-label="Outils et technologies">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.wiki}
            target="_blank"
            rel="noreferrer"
            className="tool"
            title={tool.name}
            aria-label={tool.name}
          >
            <img src={tool.src} alt={tool.name} loading="lazy" />
            <span>{tool.name}</span>
          </a>
        ))}
      </div>

      <p className="footer-credit">
        Portfolio conçu et développé par{" "}
        <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">
          Abdoul Timité
        </a>{" "}
        avec 💜
      </p>
    </footer>
  );
}

export default Footer;
