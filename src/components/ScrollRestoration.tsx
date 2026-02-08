import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SCROLL_POSITIONS_KEY = "scroll-positions";

function readPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(SCROLL_POSITIONS_KEY) || "{}");
  } catch {
    return {};
  }
}

function writePositions(positions: Record<string, number>) {
  sessionStorage.setItem(SCROLL_POSITIONS_KEY, JSON.stringify(positions));
}

export default function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"

  // Sauvegarde la position actuelle avant de quitter la page
  useEffect(() => {
    const handleSave = () => {
      const positions = readPositions();
      const key = location.key || location.pathname + location.search;
      positions[key] = window.scrollY;
      writePositions(positions);
    };

    window.addEventListener("beforeunload", handleSave);
    return () => {
      handleSave(); // sauvegarde aussi au démontage
      window.removeEventListener("beforeunload", handleSave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  // Restaure / remonte au top selon le type de navigation
  useEffect(() => {
    const positions = readPositions();
    const key = location.key || location.pathname + location.search;

    // ✅ POP = retour arrière / avant -> on restaure
    if (navigationType === "POP") {
      const y = positions[key] ?? 0;
      window.scrollTo({ top: y, left: 0, behavior: "auto" });
      return;
    }

    // ✅ PUSH = navigation normale -> on remonte en haut
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location, navigationType]);

  return null;
}
