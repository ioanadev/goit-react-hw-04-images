import axios from 'axios';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ButtonLoadMore/ButtonLoadMore';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import './App.css';
import { API_KEY, BASE_URL } from './Api/Api';
// Componenta Searchbar
/*class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}*/

// Componenta ImageGallery
/*class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}*/

// Componenta ImageGalleryItem
/*class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <li className="gallery-item">
        <img src={image.webformatURL} alt="" />
      </li>
    );
  }
}
*/
// Componenta Button
/*class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className="button" onClick={onClick}>
        Load more
      </button>
    );
  }
}*/

// Componenta Loader
/*class Loader extends Component {
  render() {
    return (
      <div className="loader"></div>
    );
  }
}*/

// Componenta Modal
/*class Modal extends Component {
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <div
        className="overlay"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="modal">
          <img src={image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}*/

// Componenta principală a aplicației
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
      error: null,
      showModal: false,
      selectedImage: null,
    };
    this.page = 1;
    this.searchQuery = '';
  }

  fetchImages = () => {
    if (!this.searchQuery) {
      return;
    }

    const { page } = this;

    const url = `${BASE_URL}?q=${this.searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          loading: false,
        }));
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  };

  handleSearchSubmit = searchQuery => {
    this.searchQuery = searchQuery;
    this.page = 1;
    this.setState({ images: [] }, this.fetchImages);
  };

  handleLoadMore = (page, prevState) => {
    this.page++;
    this.fetchImages();
  };
  heandleOpenModal = image => {
    this.setState({ showModal: true, selectedImage: image });
  };

  heandleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };
  render() {
    const { images, loading, error, showModal, selectedImage } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading && <Loader />}
        {error && <div>Error: {error}</div>}
        <ImageGallery images={images} onOpenModal={this.heandleOpenModal} />
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && selectedImage && (
          <Modal image={selectedImage} onClose={this.heandleCloseModal} />
        )}
      </div>
    );
  }
}
