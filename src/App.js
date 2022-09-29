import { PortfolioProvider } from "./Context/PortfolioContext";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Promote from "./Components/Promote";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Header />
        <main className="min-h-screen">
          <Hero />
          <Promote />
          <About />
          <Skills />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
