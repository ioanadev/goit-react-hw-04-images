import { Component } from 'react';
import './Searchbar.css';
// Componenta Searchbar

export class Searchbar extends Component {
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
          <button type="submit" className="search-button">
            <span className="search-button-label">Search</span>
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
}
