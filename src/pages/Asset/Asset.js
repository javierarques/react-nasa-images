import React from 'react';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';

class Asset extends React.Component {
  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    return (
      <div className="Asset">
        <div className="Asset-header">
          <Header>
            <SearchBox shadow={false} onSubmit={this.handleSubmit} />
          </Header>
        </div>
      </div>
    );
  }
}

export default Asset;
