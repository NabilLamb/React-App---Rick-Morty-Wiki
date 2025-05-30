import styles from "./Search.module.css";

const Search = ({ setSearchTerm, setPageNumber }) => {
  return (
    <form className={styles.searchForm}>
      <div className={styles.pulseEffect}></div>
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPageNumber(1);
        }}
        type="text"
        className={styles.searchInput}
        placeholder="Search for characters..."
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={styles.searchButton}
      >
        SEARCH
      </button>
    </form>
  );
};

export default Search;
