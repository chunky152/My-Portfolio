import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Deployed under /My-Portfolio/ on GitHub Pages; BASE_URL is "/" in dev
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

// Static hosting serves /foo/index.html for /foo/ — normalize the URL so
// the router matches the same route the page was prerendered for
if (window.location.pathname.endsWith("/index.html")) {
  window.history.replaceState(
    null,
    "",
    window.location.pathname.slice(0, -"index.html".length) +
      window.location.search +
      window.location.hash
  );
}

const container = document.getElementById("root");
// Prerendered pages ship with HTML in #root — hydrate instead of rendering
const prerendered = container.hasChildNodes();

const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App prerendered={prerendered} />
    </BrowserRouter>
  </React.StrictMode>
);

if (prerendered) {
  // Give the browser a frame to paint the static HTML before hydration
  // grabs the main thread (otherwise first paint waits on all of React)
  requestAnimationFrame(() => {
    setTimeout(() => hydrateRoot(container, app), 0);
  });
} else {
  createRoot(container).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
