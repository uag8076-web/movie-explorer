import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Cargar los favoritos desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
    setLoaded(true);
  }, []);

  // Guardar los favoritos en localStorage cada vez que cambien
  useEffect(() => {
    if (loaded) localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, loaded]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => favorites.some((movie) => movie.id === movieId);

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
