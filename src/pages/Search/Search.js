import React from 'react';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';
import Gallery from '../../components/Gallery';
import GalleryItem from '../../components/GalleryItem';
import api from '../../services/api';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const { match: { params: { query } } } = this.props;

    this.searchAssets(query);
  }

  searchAssets(query) {
    this.setState({ isLoading: true });

    api
      .search(query)
      .then(response => {
        const { collection: { items: assets } } = response;
        this.setState({ isLoading: false });
        this.setState({ assets: assets });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  }

  handleSubmit = query => {
    const { history } = this.props;
    history.push(`/search/${query}`);
    this.searchAssets(query);
  };

  render() {
    const { match: { params: { query = '' } } } = this.props;
    const { assets } = this.state;

    const galleryItems = assets.map(({ data, links }) => {
      const id = data[0].nasaId;
      const title = data[0].title;
      const image = links[0].href;

      return <GalleryItem image={image} id={id} key={id} title={title} />;
    });

    return (
      <div className="Search">
        <div className="Search-header">
          <Header>
            <SearchBox
              onSubmit={this.handleSubmit}
              shadow={false}
              query={query}
            />
          </Header>
        </div>
        <div className="Search-content">
          <Gallery>{galleryItems}</Gallery>
        </div>
      </div>
    );
  }
}

export default Search;
