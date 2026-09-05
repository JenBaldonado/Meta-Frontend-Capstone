import "../styles/nav.css";
import { NavLink } from "react-router";

function Nav() {
  return (
    <header className="App-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <div className="logo-circle">SE</div>
          <span>Saffron &amp; Ember</span>
        </NavLink>

        <nav className="navigation">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active-link" : "")} to="/">Home</NavLink>
          <NavLink  className={({ isActive }) =>
              (isActive ? "active-link" : "")} to="/about">About</NavLink>
          <NavLink className={({ isActive }) =>
              (isActive ? "active-link" : "")} to="/menu">Menu</NavLink>
          <NavLink className={({ isActive }) =>
              (isActive ? "active-link" : "")} to="/reservations">Reservations</NavLink>
          <NavLink className={({ isActive }) =>
              (isActive ? "active-link" : "")} to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
