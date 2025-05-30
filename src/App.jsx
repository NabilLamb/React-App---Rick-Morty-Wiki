import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import "./index.css";

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <div className="header">
            <div className="portal"></div>
            <h1 className="header-title">
              Rick & Morty <span>WiKi</span>
            </h1>

            <div className="container mt-3 mb-3 ">
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-button ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `nav-button ${isActive ? "active" : ""}`
                  }
                >
                  Favorites
                </NavLink>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
