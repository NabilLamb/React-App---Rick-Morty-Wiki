import styles from "../Filters.module.css";

const Gender = ({ setGender, currentGender }) => {
  const genderOptions = ["Male", "Female", "Genderless", "unknown"];

  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.filterGroupTitle}>Gender</h3>
      <div className={styles.filterOptions}>
        {genderOptions.map((item) => (
          <button
            key={item}
            onClick={() => {
              setGender(item === currentGender ? "" : item);
            }}
            className={`${styles.filterOption} ${
              item === currentGender ? styles.active : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gender;
