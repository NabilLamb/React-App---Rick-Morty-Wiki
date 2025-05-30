import { useState, useEffect, useContext } from "react";
import Cards from "../../components/Cards/Cards";
import { FavoritesContext } from "../../context/FavoritesContext";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);

      try {
        // Fetch multiple characters by IDs
        if (favorites.length > 0) {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${favorites.join(",")}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch favorites");
          }

          const data = await response.json();
          // API returns array when multiple IDs, object when single
          setFavoriteCharacters(Array.isArray(data) ? data : [data]);
        } else {
          setFavoriteCharacters([]);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="favorites-header">
          <h2 className="favorites-title">Favorite Characters</h2>
          <p className="favorites-count">
            {favorites.length}{" "}
            {favorites.length === 1 ? "character" : "characters"} saved
          </p>
        </div>

        {isLoading ? (
          <div className="loading-favorites">
            <div className="portal-loader"></div>
            <p>Opening portal to favorite dimension...</p>
          </div>
        ) : (
          <>
            {favoriteCharacters.length > 0 ? (
              <Cards results={favoriteCharacters} />
            ) : (
              <div className="no-favorites">
                <div className="portal-animation"></div>
                <h3>No Favorite Characters Yet!</h3>
                <p>
                  Your favorite dimension is empty! Go back to the home page and
                  add some characters to your favorites by clicking the ❤️ icon.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
