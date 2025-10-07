
import { NavLink, Outlet } from "react-router-dom";

export default function UIMain() {
  return (
    <div>
      <header>
        <div className="header-inner">
            <h1>Travel Planner Pro</h1>
        <nav>
          <NavLink to="/" end>Destinations</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>© 2025 CODEX — Travel Planner PRO</footer>
    </div>
  );
}
