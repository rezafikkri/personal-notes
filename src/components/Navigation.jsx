import { Link } from "react-router-dom";

export default function Navigation() {
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
      </ul>
    </header>
  );
}
