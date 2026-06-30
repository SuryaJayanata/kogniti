import { useState, useEffect } from "react";
import SmoothScroller from "./components/SmoothScroller";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Clients from "./sections/Clients";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./components/layout/Footer";
import StartProject from "./pages/StartProject";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <SmoothScroller>
      <div className="font-sans antialiased text-secondary bg-primary selection:bg-accent1 selection:text-primary">
        <Navbar />
        {currentHash === "#start" ? (
          <StartProject />
        ) : (
          <main>
            <Hero />
            <Clients />
            <About />
            <Stats />
            <Services />
            <Testimonials />
            <FAQ />
            <CTA />
          </main>
        )}
        <Footer />
      </div>
    </SmoothScroller>
  );
}

export default App;
