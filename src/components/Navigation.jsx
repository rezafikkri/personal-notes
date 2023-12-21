import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navigation({ onLogout, name }) {
  return (
    <header className="d-flex justify-content-between align-items-center pb-3 mb-5 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center text-dark-emphasis text-decoration-none fs-4 fw-semibold"
      >
        Aplikasi Catatan
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/archives">Arsip</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/notes/new">Buat Catatan</Link>
        </li>
        <li className="nav-item">
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
      </ul>
    </header>
  );
}

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
