import React from 'react';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';

class Search extends React.Component {
  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    const { match: { params: { query } } } = this.props;

    return (
      <Header>
        <SearchBox onSubmit={this.handleSubmit} shadow={false} query={query} />
      </Header>
    );
  }
}

export default Search;
