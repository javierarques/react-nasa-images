import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Asset from '../Asset';
import Home from '../Home';
import Search from '../Search';
import Footer from '../Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <main className="App-content">
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/asset" component={Asset} />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
