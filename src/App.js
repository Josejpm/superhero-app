import { Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

import Login from './pages/Login';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/home" component={ Home } />
          <Redirect to={Login}/>
        </Switch>
      </Router>
      
    </Fragment>
  );
}

export default App;
