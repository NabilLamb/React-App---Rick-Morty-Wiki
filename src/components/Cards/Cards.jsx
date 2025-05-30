import React, { useContext } from "react";
import styles from "./Cards.module.css";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";

const Cards = ({ results }) => {
  const { isFavorite, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  if (!results || results.length === 0) {
    return (
      <div className={`${styles.container} ${styles.gridContainer}`}>
        <div className={styles.noResults}>
          <div className={styles.portalAnimation}></div>
          <h2>Whoops! No Characters Found</h2>
          <p className={styles.noResultsText}>
            That character must be in another dimension!
            <br />
            Try searching for someone else :)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.gridContainer}`}>
      {results.map((item) => {
        const { id, name, image, location, status, species, gender } = item;

        const statusColor =
          {
            Alive: styles.statusAlive,
            Dead: styles.statusDead,
            unknown: styles.statusUnknown,
          }[status] || styles.statusUnknown;

        return (
          <div
            className={`${styles.cardContainer} ${styles.gridItem}`}
            key={id}
          >
            {/* Favorite button */}
            <div
              className={styles.favoriteButton}
              onClick={() =>
                isFavorite(id) ? removeFavorite(id) : addFavorite(item)
              }
            >
              {isFavorite(id) ? (
                <span className={styles.heartFilled}>❤️</span>
              ) : (
                <span className={styles.heartOutline}>🤍</span>
              )}
            </div>

            <Link to={`/character/${id}`} className={styles.cardLink}>
              <div className={`${styles.card} card shadow-lg border-0`}>
                <div className={styles.statusBadge}>
                  <span
                    className={`${statusColor} badge rounded-pill shadow-sm`}
                  >
                    {status}
                  </span>
                </div>

                <div className={styles.imageContainer}>
                  <img
                    src={image}
                    className={`${styles.cardImage} card-img-top`}
                    alt={name}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                <div
                  className={`${styles.cardBody} card-body d-flex flex-column justify-content-between`}
                >
                  <h5
                    className={`${styles.cardTitle} card-title text-center fw-bold`}
                  >
                    {name}
                  </h5>

                  <ul
                    className={`${styles.listGroup} list-group list-group-flush text-center`}
                  >
                    <li className={`${styles.listItem} list-group-item`}>
                      <span className={styles.infoLabel}>Species:</span>{" "}
                      {species}
                    </li>
                    <li className={`${styles.listItem} list-group-item`}>
                      <span className={styles.infoLabel}>Gender:</span> {gender}
                    </li>
                    <li className={`${styles.listItem} list-group-item`}>
                      <span className={styles.infoLabel}>Location:</span>{" "}
                      {location.name}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
