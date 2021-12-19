import './App.css';
import SignUp from './Componets/LogSign/SignUp'
import SignInSide from './Componets/LogSign/Login';
// import Dashboard from './Components/Dashboard/Dashboard'
// import Dashboard from './Componets/Dashboard/Dashboard';
import Home from './Componets/Home/Home'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignInSide />
        </Route>
        <Route  path="/SignUp">
          <SignUp />
        </Route>
        <Route path = "/Home">
          <Home />

        </Route>

        
      </Switch>
    </Router>  );
}

export default App;
