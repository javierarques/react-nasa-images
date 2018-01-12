import React from 'react';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';
import api from '../../services/api';
import normalize from '../../services/normalize';
import Loader from '../../components/Loader';
import GoBackButton from '../../components/GoBackButton';
import './Asset.css';

class Asset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      asset: {},
      isLoading: true
    };
  }
  componentDidMount() {
    console.log(this.props);
    const { match: { params: { id } } } = this.props;

    api
      .asset(id)
      .then(response => {
        this.setState({ isLoading: false });
        this.setState({ asset: normalize.asset(response) });
        console.log(normalize.asset(response));
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  }

  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
  };

  render() {
    const {
      isLoading,
      asset: {
        image,
        title,
        description,
        secondaryCreator: author,
        dateCreated: date
      }
    } = this.state;

    const meta = [new Date(date).toLocaleDateString(), author].filter(n => !!n);

    const assetContent = (
      <div className="Asset-content">
        <div className="Asset-image">
          <img src={image} alt={title} title={title} />
        </div>
        <div className="Asset-data">
          <GoBackButton text="return to search" />
          {title && <h1 className="Asset-title">{title}</h1>}
          {meta.length && <p className="Asset-meta">{meta.join(', ')}</p>}
          {description && <p className="Asset-description">{description}</p>}
        </div>
      </div>
    );

    return (
      <div className="Asset">
        <div className="Asset-header">
          <Header>
            <SearchBox shadow={false} onSubmit={this.handleSubmit} />
          </Header>
        </div>
        {isLoading && <Loader />}
        {!isLoading && assetContent}
      </div>
    );
  }
}

export default Asset;
