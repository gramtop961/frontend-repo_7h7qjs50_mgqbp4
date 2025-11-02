import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-black font-[Inter] text-white">
      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
