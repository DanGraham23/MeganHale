import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EventResults from './components/EventResults';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <EventResults />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
