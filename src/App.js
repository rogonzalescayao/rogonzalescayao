import logo from './logo.svg';
import Login from './Login';
import Menu from './Menu';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="Login">
      <Switch>
      <Route path="/" exact component={Login}/>
     <Route path="/Login" exact component={Login}/>
     <Route path="/Menu" component={Menu}/>
     </Switch>
    </div>
    
    </Router>
  );
}

export default App;
