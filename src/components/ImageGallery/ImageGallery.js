import './ImageGallery.css';
import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// Componenta ImageGallery
export class ImageGallery extends Component {
  render() {
    const { images, onOpenModal } = this.props;

    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    );
  }
}
