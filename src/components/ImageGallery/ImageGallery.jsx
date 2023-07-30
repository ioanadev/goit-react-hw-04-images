import './ImageGallery.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// Componenta ImageGallery

export const ImageGallery = ({ images, onOpenModal }) => {
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
};
