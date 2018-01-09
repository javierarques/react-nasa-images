import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Asset from '../Asset';
import Home from '../Home';
import Search from '../Search';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/asset" component={Asset} />
    </div>
  </Router>
);

export default App;
