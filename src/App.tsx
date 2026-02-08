import React, { useEffect, useState } from "react";
import { useLocation , Routes, Route } from "react-router-dom";

import {
  Main,
  Timeline,
  Experiences,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";

import Formation from "./components/formation";
import FadeIn from "./components/FadeIn";
import ScrollRestoration from "./components/ScrollRestoration";
import Success from "./components/Success";
import "./index.scss";

// ✅ Pages projets
import DgsAuto from "./pages/projects/DgsAuto";
import IvoireBus from "./pages/projects/IvoireBus";
import AnalyseSentiments from "./pages/projects/AnalyseSentiments";



function Home() {
  return (
    <FadeIn transitionDuration={700}>
      <Main />
      <Experiences />
      <Timeline />
      <Formation />
      <Project />
      <Contact />
    </FadeIn>
  );
}

function App() {
  const [mode, setMode] = useState<string>("dark");
  const location = useLocation();

  const handleModeChange = () => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // ✅ Si on revient sur /#projects (ou /#contact etc), on scroll sur la section
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return;
    }

    // ✅ Sinon, on remonte en haut sur la home
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div
      className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      {/* ✅ Fix: scroll top on new pages + restore scroll on back */}
      <ScrollRestoration />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/dgs-auto" element={<DgsAuto />} />
        <Route path="/projects/ivoirebus" element={<IvoireBus />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/projects/analyse-sentiments"
          element={<AnalyseSentiments />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
