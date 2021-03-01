import './App.css';
import DenseAppBar from './components/AppBar/appBar.js';
import Home from './components/Home/home.js';
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
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
      
      
    </div>
  );
}

export default App;
