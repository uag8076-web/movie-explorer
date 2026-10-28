import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🎬 Explorador de Películas</div>
      <div className="navbar-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favoritos
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
