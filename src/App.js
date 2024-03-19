
import './App.css';
import  Nav  from './component/js/nav';
import Hero from './component/js/hero';
import Skills from './component/js/skills';
import Experiance from './component/js/experiance';
import Projects from './component/js/projects';
import Education from './component/js/education';
import Contact from './component/js/contact';
import Footer from './component/js/footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Skills/>
      <Experiance/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
