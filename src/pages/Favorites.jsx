import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>Todavía no tienes películas favoritas</h2>
        <p>Pulsa el corazón de cualquier película para añadirla aquí.</p>
        <Link to="/" className="back-link">
          Explorar películas
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2 className="section-title">Mis favoritas ({favorites.length})</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
