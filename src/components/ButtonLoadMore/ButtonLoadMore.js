import './ButtonLoandMore.css';
import { Component } from 'react';
// Componenta Button
export class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="button-container">
        <button type="button" className="button" onClick={onClick}>
          Load more
        </button>
      </div>
    );
  }
}
