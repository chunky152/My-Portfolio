import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import Footer from "../components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/global.css";
import "../styles/App.css";
import "../styles/bootstrap.scss";

const About = lazy(() => import("../pages/about/About"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Resume = lazy(() => import("../pages/resume/Resume"));

// The router lives in the entry points: BrowserRouter in index.jsx,
// StaticRouter in entry-server.jsx for build-time prerendering.
// `prerendered` pages already have content, so the preloader is skipped.
function App({ prerendered = false }) {
  const [load, updateLoad] = useState(
    () =>
      !prerendered &&
      typeof document !== "undefined" &&
      document.readyState !== "complete"
  );

  useEffect(() => {
    if (!load) return;
    // Dismiss on window load, but cap the wait so slow connections
    // aren't stuck staring at the preloader (hurts FCP/LCP)
    const onDone = () => updateLoad(false);
    const cap = setTimeout(onDone, 1500);
    window.addEventListener("load", onDone);
    return () => {
      clearTimeout(cap);
      window.removeEventListener("load", onDone);
    };
  }, [load]);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<Preloader load />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
