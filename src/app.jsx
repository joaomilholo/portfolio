import Navbar from './components/navbar';
import Hero from './sections/hero';
import Projects from './sections/projects';
import './styles/app.css';

function App() {
  return (
    <div className="bg-zinc-950 w-full flex flex-col text-zinc-400 items-center ">
      <Navbar />
      <Hero />
      <Projects />
      <h1>Opa, bão fi ?</h1>
      <p>Bão demais da conta só</p>
    </div>
  );
}

export default App;
