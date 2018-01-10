import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Asset from '../../pages/Asset';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Footer from '../Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <main className="App-content">
        <Route exact path="/" component={Home} />
        <Route path="/search/:query" component={Search} />
        <Route path="/asset/:id" component={Asset} />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
