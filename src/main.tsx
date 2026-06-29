import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Configuration TypeScript pour ignorer l'erreur de type à supprimer quand App sera en TypeScript
import App from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
