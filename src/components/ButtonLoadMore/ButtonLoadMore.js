import './ButtonLoandMore.css';

// Componenta Button

export const Button = ({ onClick }) => {
  return (
    <div className="button-container">
      <button type="button" className="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
