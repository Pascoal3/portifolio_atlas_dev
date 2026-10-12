import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Prevent browser scroll restoration on page load/navigation
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Force scroll to top immediately (before paint)
window.scrollTo(0, 0);

// Clear any hash from URL to prevent browser scrolling to anchor
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

// Force scroll to top after React hydration
createRoot(document.getElementById("root")!).render(<App />);

// Additional safety: scroll to top after a brief moment
setTimeout(() => {
  window.scrollTo(0, 0);
}, 0);
