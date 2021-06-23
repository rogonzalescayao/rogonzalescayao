import logo from './logo.svg';
import Login from './rogonzalescayao';
import Menu from './Menu';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="Login">
      <Switch>
      <Route path="/" exact component={Login}/>
     <Route path="/rogonzalescayao" exact component={Login}/>
     <Route path="/Menu" component={Menu}/>
     </Switch>
    </div>
    
    </Router>
  );
}

export default App;
