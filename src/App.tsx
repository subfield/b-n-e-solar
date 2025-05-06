import { Suspense, useEffect } from "react";
import "./assets/css/index.css";
// import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import { ScrollToTop } from "./components/molecules/ScrollToTop";
import { Route, Routes, useLocation } from "react-router-dom";

const js = [
  { path: "js", file: "vendor/jquery-3.7.1.min.js" },
  { path: "js", file: "swiper-bundle.min.js" },
  { path: "js", file: "bootstrap.min.js" },
  { path: "js", file: "jquery.magnific-popup.min.js" },
  { path: "js", file: "jquery.counterup.min.js" },
  { path: "js", file: "circle-progress.js" },
  { path: "js", file: "jquery-ui.min.js" },
  { path: "js", file: "imagesloaded.pkgd.min.js" },
  { path: "js", file: "isotope.pkgd.min.js" },
  { path: "js", file: "nice-select.min.js" },
  { path: "js", file: "wow.min.js" },
  { path: "js", file: "gsap.min.js" },
  { path: "js", file: "ScrollTrigger.min.js" },
  { path: "js", file: "SplitText.min.js" },
  { path: "js", file: "lenis.min.js" },
  { path: "js", file: "main.js" },
];

interface ScriptItem {
  path: string;
  file: string;
}

function App() {
  const location = useLocation();
  const AddScript = (x: string, y: string): void => {
    const scriptId = `[src="/${x}/${y}"]`;
    if (!document.querySelector(`script${scriptId}`)) {
      const script = document.createElement("script");
      script.src = `/${x}/${y}`;
      script.async = false;
      const container = document.getElementById("scripts");
      if (container) {
        container.appendChild(script);
      } else {
        console.warn('Element with id "scripts" not found.');
      }
    }
  };

  useEffect(() => {
    const scriptsContainer = document.getElementById("scripts");
    if (scriptsContainer) {
      scriptsContainer.innerHTML = "";
      js.forEach(({ path, file }: ScriptItem) => {
        AddScript(path, file);
      });
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
            // <Suspense fallback={"Loading..."}>
            // </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={"Loading..."}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={"Loading..."}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={"Loading..."}>
              <BlogPage />
            </Suspense>
          }
        />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
