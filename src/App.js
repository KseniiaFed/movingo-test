import Hero from './components/hero'
import SellAdExp from './components/SellAdExp.js'
import HowMuchCanISave from './components/HowMuchCanISave'
import HowThePerfectSaleWorks from './components/HowThePerfectSaleWorks'
import HowDoesMoovingoMaximise from './components/HowDoesMoovingoMaximise'
import MoovingoVsTrad from './components/MoovingoVsTrad'
import Featured from './components/Featured'
import Connect from './components/Connect'
import SeeWhatMoovingo from './components/SeeWhatMoovingo'
import Footer from "./components/footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <SellAdExp />
      <HowMuchCanISave />
      <HowThePerfectSaleWorks />
      <HowDoesMoovingoMaximise />
      <MoovingoVsTrad />
      <Featured />
      <Connect />
      <SeeWhatMoovingo />
      <Footer />
    </div>
  );
}

export default App;
