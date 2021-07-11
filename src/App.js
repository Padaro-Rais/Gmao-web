import './App.css';
import {BrowserRouter as Router, Switch,Link, Route} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import User from './containers/User';
import AddUser from './containers/User/add';

import Material from './containers/Material'
import AddMaterial from './containers/Material/Add';







function App() {
  return (
    <div class="wrapper">
       <Router>
         <Switch>

           <Route exact path='/app' component={Home} />
           <Route exact path='/login' component={Login} /> 

           <Route exact path='/User' component={User} /> 
                              <Route exact path='/User/Add' component={AddUser} /> 

           <Route exact path='/Material' component={Material} /> 
                              <Route exact path='/Material/Add' component={AddMaterial} /> 



 
         </Switch>

        </Router>

    </div>
  );
}

export default App;
