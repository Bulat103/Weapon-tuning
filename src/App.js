import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Goods from './components/Goods';
import Home from './components/Home'
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/goods" component={Goods}></Route>
        </Switch>
        <Services></Services>
        <About></About>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
