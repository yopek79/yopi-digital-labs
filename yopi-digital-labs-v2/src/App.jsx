import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import WhyChoose from "./components/whychoose/WhyChoose";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

  console.log("APP LOADED");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] text-white">
      <Background />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        
        <Process />
        <WhyChoose />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;