import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Prevent browser scroll restoration on page load/navigation
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Force scroll to top on initial load
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById("root")!).render(<App />);
