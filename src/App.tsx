import SmoothScroller from "./components/SmoothScroller";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Clients from "./sections/Clients";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <SmoothScroller>
      <div className="font-sans antialiased text-secondary bg-background selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Clients />
          <About />
          <Stats />
          <Services />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </SmoothScroller>
  );
}

export default App;
