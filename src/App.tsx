import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import Quality from './components/sections/Quality';
import Contact from './components/sections/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Industries />
        <Quality />
        <Contact />
      </main>

      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
