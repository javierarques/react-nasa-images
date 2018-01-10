import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import nasaLogo from '../../assets/nasa-logo.svg';
import './Home.css';

const getRandom = max => Math.floor(Math.random() * max) + 1;

export class Home extends React.Component {
  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    return (
      <div className={`Home Home--bg${getRandom(10)}`}>
        <div className="Home-content">
          <div className="Home-logo">
            <img src={nasaLogo} alt="NASA logo" width="80" />
            <h1 className="Home-title">media library</h1>
          </div>
          <SearchBox onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
