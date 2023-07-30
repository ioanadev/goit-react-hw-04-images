import './Modal.css';

// Componenta Modal
export const Modal = ({ image, onClose }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="overlay"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="modal">
        <img src={image.largeImageURL} alt="" className="modal-image" />
      </div>
    </div>
  );
};
