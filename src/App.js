import './App.css';
import { Header } from './components/common';
import Work from './components/common/pages/Work.js';
import Home from './components/common/pages/Home.js';
import About from './components/common/pages/About.js';
import Contact from './components/common/pages/Contact.js';
import Resume from './components/common/pages/Resume.js';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/work" component={Work} />
    </div>
  );
}

export default App;
