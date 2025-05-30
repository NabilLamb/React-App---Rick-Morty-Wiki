import { useState } from "react";
import styles from "../Filters.module.css";

const Species = ({ setSpecies, currentSpecies }) => {
  const speciesOptions = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterGroup}>
      <div
        className={styles.filterGroupHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={styles.filterGroupTitle}>Species</h3>
        <span className={`${styles.dropdownIcon} ${isOpen ? styles.open : ""}`}>
          ▼
        </span>
      </div>

      {isOpen && (
        <div className={`${styles.filterOptions} ${styles.scrollableOptions}`}>
          {speciesOptions.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSpecies(item === currentSpecies ? "" : item);
                setIsOpen(false);
              }}
              className={`${styles.filterOption} ${
                item === currentSpecies ? styles.active : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Species;
