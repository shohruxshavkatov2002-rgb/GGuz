import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Code-split routes (React.lazy).
const Home = lazy(() => import("./pages/Home"));
const Universitet = lazy(() => import("./pages/Universitet"));
const Yonalishlar = lazy(() => import("./pages/Yonalishlar"));
const Imkoniyatlar = lazy(() => import("./pages/Imkoniyatlar"));
const Xalqaro = lazy(() => import("./pages/Xalqaro"));
const Ariza = lazy(() => import("./pages/Ariza"));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait for lazy page to render, then scroll to the anchor
      const id = hash.slice(1);
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else if (attempt < 10) setTimeout(() => tryScroll(attempt + 1), 80);
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<div className="route-loading">…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universitet" element={<Universitet />} />
            <Route path="/yonalishlar" element={<Yonalishlar />} />
            <Route path="/imkoniyatlar" element={<Imkoniyatlar />} />
            <Route path="/xalqaro" element={<Xalqaro />} />
            <Route path="/ariza" element={<Ariza />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
