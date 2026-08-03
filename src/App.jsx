import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <>
  {/* <Background /> */}

  <div className="relative min-h-screen overflow-hidden text-white">
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <Trusted />
          <Services />
          <WhyChooseUs />
          <Process />
          <Dashboard />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;