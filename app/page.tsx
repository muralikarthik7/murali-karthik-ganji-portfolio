import Navigation from "@/components/Navigation";
import Overview from "@/components/Overview";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">

      {/* FULL-WIDTH NAVIGATION */}
      <Navigation />

      {/* PAGE CONTENT */}
      <div className="page-shell">
        <Overview />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}