import { useState, useEffect } from "react";
import Filters from "../components/Filters/Filters.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Search from "../components/Search/Search.jsx";
import "../index.css";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchData, setFetchData] = useState({ info: {}, results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  const { info, results } = fetchData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchTerm}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(api);

        if (!response.ok) {
          if (response.status === 404) {
            setFetchData({ info: {}, results: [] });
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          setFetchData(data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
        setFetchData({ info: {}, results: [] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [api]);

  return (
    <>
      <div className="container mt-4 mb-4">
        <Search setPageNumber={setPageNumber} setSearchTerm={setSearchTerm} />
      </div>

      <div className="main-container">
        <div className="character-count text-white mb-4">
          {isLoading
            ? "Scanning dimensions..."
            : results && results.length > 0
            ? `Found ${info.count} characters across ${info.pages} dimensions`
            : "No characters found in this dimension"}
        </div>

        <div className="mb-4">
          <Filters
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
            currentStatus={status}
            currentSpecies={species}
            currentGender={gender}
            setPageNumber={setPageNumber}
          />
        </div>

        <div className="cards-section">
          {isLoading ? (
            <div className="loading">
              <div className="portal-loader"></div>
              Opening portal to character dimension...
            </div>
          ) : (
            <Cards results={results} />
          )}
        </div>

        {!isLoading && info.pages > 1 && (
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={info.pages}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
