import './ImageGalleryItem.css';

// Componenta ImageGalleryItem
export const ImageGalleryItem = ({ image, onOpenModal }) => {
  return (
    <li className="gallery-item">
      <img
        src={image.webformatURL}
        alt=""
        className="gallery-item-image"
        onClick={() => onOpenModal(image)}
      />
    </li>
  );
};
