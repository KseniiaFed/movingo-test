import Navbar from './components/header'
import Hero from './components/hero'
import Featured from './components/featured'
import HowMuchCanISave from './components/HoMuchCanISave'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <HowMuchCanISave />
    </div>
  );
}

export default App;
