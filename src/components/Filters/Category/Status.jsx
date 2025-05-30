import styles from "../Filters.module.css";

const Status = ({ setStatus, currentStatus }) => {
  const statusOptions = ["Alive", "Dead", "Unknown"];

  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.filterGroupTitle}>Status</h3>
      <div className={styles.filterOptions}>
        {statusOptions.map((item) => (
          <button
            key={item}
            onClick={() => {
              setStatus(item === currentStatus ? "" : item);
            }}
            className={`${styles.filterOption} ${
              item === currentStatus ? styles.active : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Status;
