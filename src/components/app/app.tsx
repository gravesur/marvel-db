import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Navbar from '../navbar/navbar';
import HomePage from '../home-page/home-page';
import CharactersPage from '../characters-page/characters-page';
import ComicsPage from '../comics-page/comics-page';
import EventsPage from '../events-page/events-page';
import SeriesPage from '../series-page/series-page';
import Footer from '../footer/footer';
import ErrorBoundry from '../error-boundry/error-boundry';

const App = () => {
  return (
    <ErrorBoundry>
      <Router>
        <div className="marveldb-app">
          <Navbar />

          <div className="container my-5">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/characters" component={CharactersPage} exact />
              <Route path="/comics" component={ComicsPage} exact />
              <Route path="/events" component={EventsPage} exact />
              <Route path="/series" component={SeriesPage} exact />
              <Redirect to="/" />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </ErrorBoundry>
  );
};

export default App;
