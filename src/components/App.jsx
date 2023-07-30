import axios from 'axios';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ButtonLoadMore/ButtonLoadMore';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import './App.css';
import { API_KEY, BASE_URL } from './Api/Api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchImages = () => {
      if (!searchQuery) {
        return;
      }
      const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      setLoading(true);
      axios
        .get(url)
        .then(response => {
          setImages(prevImages => [...prevImages, ...response.data.hits]);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearchSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = image => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <div>Error: {error}</div>}
      <ImageGallery images={images} onOpenModal={handleOpenModal} />
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      {showModal && selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};
