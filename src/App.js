import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Goods from './components/Goods';
import Home from './components/Home'


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/goods" component={Goods}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
