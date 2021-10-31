import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './SCSS/app.scss'

import HeroesProvider from './context/HeroesProvider';

import Home from './pages/Home';
import Login from './pages/Login';
import SerchResult from './pages/SearchResult';

import MainLayout from './Components/MainLayout';

function App() {
  return (
      <Router>
        <Switch>
            <HeroesProvider>
              
              <Route exact path="/">
                <Login/>
              </Route>

              <Route exact path="/home">
                <MainLayout>
                  <Home/>
                </MainLayout>
              </Route>

              <Route exact path="/search-result">
                <MainLayout>
                  <SerchResult/>
                </MainLayout>
              </Route>

            </HeroesProvider>
        </Switch>
      </Router>
      
  );
}

export default App;
