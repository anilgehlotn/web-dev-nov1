import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <HowItWorks />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
