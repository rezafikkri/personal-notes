import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiBrightness2 } from '@mdi/js';

export default function Navigation({ onLogout, name }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const iconTheme = theme === "light" ? mdiWhiteBalanceSunny : mdiBrightness2;

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-dark-emphasis text-decoration-none fs-4 fw-semibold"
        >
          Aplikasi Catatan
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">  
              <Link className="nav-link" to="/archives">Arsip</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notes/new">Buat Catatan</Link>
            </li> 
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >{name}</a>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <button className="dropdown-item" onClick={onLogout}>Keluar</button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="nav-link"
                type="button"
                onClick={toggleTheme}
              >
                <Icon path={iconTheme} size={1} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
