import React from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';
import Gallery from '../../components/Gallery';
import GalleryItem from '../../components/GalleryItem';
import Loader from '../../components/Loader';
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
    const { assets, isLoading } = this.state;

    const galleryItems = assets.map(({ data, links }) => {
      const id = data[0].nasaId;
      const title = data[0].title;
      const image = links[0].href;

      return <GalleryItem image={image} id={id} key={id} title={title} />;
    });

    const seachContent = () => {
      if (isLoading) return <Loader />;

      if (assets.length > 0) return <Gallery>{galleryItems}</Gallery>;

      if (assets.length === 0)
        return (
          <p className="Search-errorMessage">
            Ooops, we haven't found anything in the space, please search with
            other term.
          </p>
        );
    };

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
        <div className="Search-content">{seachContent()}</div>
      </div>
    );
  }
}

export default Search;
