import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Goods from './components/Goods';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/goods" component={Goods}></Route>
        </Switch>

        <Services></Services>
        <About></About>
        <Footer></Footer>

      </Router>


      Hello
    </div>
  );
}

export default App;
