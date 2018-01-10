import React from 'react';
import SearchBox from '../../components/SearchBox';
import nasaLogo from '../../assets/nasa-logo.svg';
import './Home.css';

const getRandom = max => Math.floor(Math.random() * max) + 1;

const Home = () => (
  <div className={`Home Home--bg${getRandom(10)}`}>
    <div className="Home-content">
      <div className="Home-logo">
        <img src={nasaLogo} alt="NASA logo" width="80" />
        <h1 className="Home-title">media library</h1>
      </div>
      <SearchBox />
    </div>
  </div>
);

export default Home;
