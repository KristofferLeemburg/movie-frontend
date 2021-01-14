import './App.css';
import bg from './images/jumani.webp';
import AudioOndertiteling from './Pages/AudioOndertiteling';
import Audiodescriptie from './Pages/Audiodescriptie';
import Bedrijfsgegevens from './Pages/Bedrijfsgegevens';
import Beleggersrelaties from './Pages/Beleggersrelaties';
import Cadeaubonnen from './Pages/Cadeaubonnen';
import Contact from './Pages/Contact';
import Cookievoorkeuren from './Pages/Cookievoorkeuren';
import Gebruiksvoorwaarden from './Pages/Gebruiksvoorwaarden';
import Helpcenter from './Pages/Helpcenter';
import Mediacenter from './Pages/Mediacenter';
import Privacy from './Pages/Privacy';
import Vacatures from './Pages/Vacatures';
import WettelijkeBepalingen from './Pages/WettelijkeBepalingen';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={bg} alt='img' className='background' />
          <Footer />
            <Switch>
              {/* <Route path="/" exact component={Home} /> */}
              <Route path="/audioOndertiteling" component={AudioOndertiteling} />
              <Route path="/audiodescriptie" component={Audiodescriptie} />
              <Route path="/bedrijfsgegevens" component={Bedrijfsgegevens} />
              <Route path="/beleggersrelaties" component={Beleggersrelaties} />
              <Route path="/cadeaubonnen" component={Cadeaubonnen} />
              <Route path="/contact" component={Contact} />
              <Route path="/cookievoorkeuren" component={Cookievoorkeuren} />
              <Route path="/gebruiksvoorwaarden" component={Gebruiksvoorwaarden} />
              <Route path="/helpcenter" component={Helpcenter} />
              <Route path="/mediacenter" component={Mediacenter} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/vacatures" component={Vacatures} />
              <Route path="/wettelijkeBepalingen" component={WettelijkeBepalingen} />
            </Switch>
      </div>
    </Router>  
  );
}
export default App;
