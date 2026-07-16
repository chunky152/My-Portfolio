import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { PassThrough } from "node:stream";
import App from "../app/App";

// Must match the client's basename in index.jsx, or every Link href
// differs between server and client HTML and hydration falls back to
// a full client render (React error #422)
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

// Build-time prerendering entry (see scripts/prerender.mjs).
// renderToPipeableStream + onAllReady waits for lazy route chunks,
// unlike renderToString which would emit the Suspense fallback.
export function render(url) {
  return new Promise((resolve, reject) => {
    const stream = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter basename={basename} location={basename + url}>
          <App prerendered />
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          const sink = new PassThrough();
          let html = "";
          sink.on("data", (chunk) => (html += chunk));
          sink.on("end", () => resolve(html));
          stream.pipe(sink);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}
