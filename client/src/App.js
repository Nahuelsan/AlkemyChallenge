import './App.css';
import Balances from './components/Balances/balances';
import DenseAppBar from './components/AppBar/appBar.js';
import ABM from './components/ABM/abm.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/abm">
            <DenseAppBar />
            <ABM />
          </Route>
          <Route path="/">
            <DenseAppBar />
            <Balances />
          </Route>
        </Switch>
      </div>
      </Router>
      
      
    </div>
  );
}

export default App;
