import styles from '../../styles.module.css';

export const Searchbar = ({ onSumbitSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchValue.value;
    onSumbitSearch(inputValue);
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
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
};
