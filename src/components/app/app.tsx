import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from '../navbar/navbar';
import HomePage from '../home-page/home-page';
import CharactersPage from '../characters-page/characters-page';
import ComicsPage from '../comics-page/comics-page';
import EventsPage from '../events-page/events-page';
import SeriesPage from '../series-page/series-page';
import Footer from '../footer/footer';

const App = () => {
  return  (
    <Router>
      <div className="marveldb-app">
        <Navbar />

        <div className="container my-5">
          <Route path="/" component={HomePage} exact />
          <Route path="/characters" component={CharactersPage} />
          <Route path="/comics" component={ComicsPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/series" component={SeriesPage} />
          <Redirect to="/" />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

/*
 <Route path="/" component={HomePage} exact />
  <Route path="/characters" component={CharactersPage} />
  <Route path="/comics" component={ComicsPage} />
  <Route path="/events" component={EventsPage} />
  <Route path="/series" component={SeriesPage} />
  <Redirect to="/" />
*/