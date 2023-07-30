import './ImageGalleryItem.css';
import { Component } from 'react';

// Componenta ImageGalleryItem
export class ImageGalleryItem extends Component {
  render() {
    const { image, onOpenModal } = this.props;

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
  }
}
