import Navbar from './components/header'
import Hero from './components/hero'
import SellAdExp from './components/SellAdExp.js'
import HowMuchCanISave from './components/HowMuchCanISave'
import HowThePerfectSaleWorks from './components/HowThePerfectSaleWorks'
import HowDoesMoovingoMaximise from './components/HowDoesMoovingoMaximise'
import MoovingoVsTrad from './components/MoovingoVsTrad'
import Featured from "./components/Featured"
import Footer from "./components/footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SellAdExp />
      <HowMuchCanISave />
      <HowThePerfectSaleWorks />
      <HowDoesMoovingoMaximise />
      <MoovingoVsTrad />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
