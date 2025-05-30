import styles from "./Filters.module.css";
import Status from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";

const Filters = ({
  setStatus,
  setSpecies,
  setGender,
  currentStatus,
  currentSpecies,
  currentGender,
  setPageNumber,
}) => {
  const clearFilters = () => {
    setStatus("");
    setSpecies("");
    setGender("");
    setPageNumber(1);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersHeader}>
        <h2 className={styles.filtersTitle}>Dimension Filters</h2>
        <div className={styles.activeFilters}>
          {currentStatus && (
            <span className={styles.activeFilter}>
              Status: {currentStatus}
              <button
                onClick={() => setStatus("")}
                className={styles.removeFilter}
              >
                ×
              </button>
            </span>
          )}
          {currentSpecies && (
            <span className={styles.activeFilter}>
              Species: {currentSpecies}
              <button
                onClick={() => setSpecies("")}
                className={styles.removeFilter}
              >
                ×
              </button>
            </span>
          )}
          {currentGender && (
            <span className={styles.activeFilter}>
              Gender: {currentGender}
              <button
                onClick={() => setGender("")}
                className={styles.removeFilter}
              >
                ×
              </button>
            </span>
          )}
        </div>
      </div>

      <div className={styles.filterGroups}>
        <Status setStatus={setStatus} currentStatus={currentStatus} />
        <Species setSpecies={setSpecies} currentSpecies={currentSpecies} />
        <Gender setGender={setGender} currentGender={currentGender} />

        <button
          onClick={clearFilters}
          className={styles.clearButton}
          disabled={!currentStatus && !currentSpecies && !currentGender}
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
