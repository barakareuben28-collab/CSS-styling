import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
