import { Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import './SCSS/app.scss'

import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import HeroesProvider from './context/HeroesProvider';
import SearchedHeroesList from './Components/SearchedHeroesList';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <AuthProvider>
            <HeroesProvider>
              <Route exact path="/">
                <Login/>
              </Route>
              {/* <PrivateRoute exact path="/home" component={Home} /> */}
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/search-result" component={ SearchedHeroesList } />
              {/* <Redirect to='/'/> */}
            </HeroesProvider>
          </AuthProvider>
        </Switch>
      </Router>
      
    </Fragment>
  );
}

export default App;
