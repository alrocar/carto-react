import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import CartoPage from './CartoPage';

const App = React.createClass({ // eslint-disable-line
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={CartoPage} />
        </div>
      </Router>
    );
  },
});

module.exports = App;
