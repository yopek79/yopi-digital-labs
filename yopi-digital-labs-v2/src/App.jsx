import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import WhyChoose from "./components/whychoose/WhyChoose";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("EN");

  console.log("APP LOADED");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060816] text-white">
      <Background />

      <div className="relative z-10">
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Services language={language} />
        
        <Process language={language} />
        <WhyChoose language={language} />
<Contact language={language} />
        <Footer language={language} />
      </div>
    </div>
  );
}

export default App;