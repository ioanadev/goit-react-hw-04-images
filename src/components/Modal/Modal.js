import './Modal.css';

import { Component } from 'react';
// Componenta Modal
export class Modal extends Component {
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
          <img src={image.largeImageURL} alt="" className="modal-image" />
        </div>
      </div>
    );
  }
}
