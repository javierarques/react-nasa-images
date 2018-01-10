import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBoxIcon from './SearchBoxIcon';
import './SearchBox.css';

export class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }
  search(query) {
    const { history } = this.props;
    history.push(`/search/${query}`);
  }

  handleChange = e =>
    this.setState({
      query: e.target.value
    });

  handleSubmit = e => {
    if (e) e.preventDefault();

    const { query } = this.state;

    if (query) {
      this.search(query);
    }
  };

  render() {
    const { query } = this.state;

    return (
      <form className="SearchBox" onSubmit={this.handleSubmit}>
        <input
          value={query}
          onChange={this.handleChange}
          className="SearchBox-input"
          placeholder="Search the space..."
        />
        <button className="SearchBox-submitButton">
          <SearchBoxIcon />
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBox);
