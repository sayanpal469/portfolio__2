import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
