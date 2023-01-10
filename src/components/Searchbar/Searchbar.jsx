import { Component } from 'react';
import styles from '../../styles.module.css';

export class Searchbar extends Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchValue.value;
    this.props.onSumbitSearch(inputValue);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}></span>
          </button>
          <input
            name="searchValue"
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
