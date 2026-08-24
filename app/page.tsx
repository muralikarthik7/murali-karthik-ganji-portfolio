import Navigation from "@/components/Navigation";
import Overview from "@/components/Overview";
import About from "@/components/About";
import Work from "@/components/Work";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="top">

      {/* FULL-WIDTH NAVIGATION */}
      <Navigation />

      {/* PAGE CONTENT */}
      <div className="page-shell">
        <Overview />
        <About />
        <Work />
        <Research />
        <Experience />
        <Contact />
      </div>

    </main>
  );
}