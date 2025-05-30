import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import "./CharacterDetailsPage.css";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, addFavorite, removeFavorite } =
    React.useContext(FavoritesContext);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch character: ${response.status}`);
        }

        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching character:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-page">
        <div className="portal-loader"></div>
        <p>Opening portal to character dimension...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-page">
        <div className="error-portal"></div>
        <h2>Dimensional Portal Malfunction!</h2>
        <p>{error}</p>
        <Link to="/" className="home-link">
          Return to Home Dimension
        </Link>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="not-found">
        <div className="not-found-portal"></div>
        <h2>Character Not Found</h2>
        <p>This character has vanished from our dimension!</p>
        <Link to="/" className="home-link">
          Return to Home Dimension
        </Link>
      </div>
    );
  }

  const {
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
  } = character;

  return (
    <div className="character-details-page">
      <div className="character-header">
        <div className="character-portal"></div>
        <h1 className="character-name">{name}</h1>

        <div className="character-actions">
          <button
            className={`favorite-button ${
              isFavorite(character.id) ? "active" : ""
            }`}
            onClick={() =>
              isFavorite(character.id)
                ? removeFavorite(character.id)
                : addFavorite(character)
            }
          >
            {isFavorite(character.id)
              ? "❤️ Remove from Favorites"
              : "🤍 Add to Favorites"}
          </button>
          <Link to="/" className="home-link">
            ← Back to All Characters
          </Link>
        </div>
      </div>

      <div className="character-container">
        <div className="character-image-container">
          <img src={image} alt={name} className="character-image" />
          <div className={`status-badge ${status.toLowerCase()}`}>{status}</div>
        </div>

        <div className="character-info">
          <div className="info-section">
            <h2>Character Details</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Species:</span>
                <span className="info-value">{species}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Type:</span>
                <span className="info-value">{type || "Unknown"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Gender:</span>
                <span className="info-value">{gender}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value">{status}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>Origin & Location</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Origin:</span>
                <span className="info-value">{origin.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Current Location:</span>
                <span className="info-value">{location.name}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>Episode Appearances</h2>
            <div className="episodes-grid">
              {episode.slice(0, 10).map((ep, index) => {
                const episodeNum = ep.split("/").pop();
                return (
                  <div key={index} className="episode-badge">
                    Episode {episodeNum}
                  </div>
                );
              })}
              {episode.length > 10 && (
                <div className="episode-badge more">
                  +{episode.length - 10} more
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
