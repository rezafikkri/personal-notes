import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiBrightness2 } from "@mdi/js";
import { translate } from "../utils";

export default function Navigation({ onLogout, name }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  const iconTheme = theme === "light" ? mdiWhiteBalanceSunny : mdiBrightness2;

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-dark-emphasis text-decoration-none fs-4 fw-semibold"
        >
          {translate(locale, "Aplikasi Catatan", "Notes App")}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0 justify-content-end">
            <li className="nav-item">  
              <Link className="nav-link" to="/archives">
                {translate(locale, "Arsip", "Archive")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notes/new">
                {translate(locale, "Buat Catatan", "Create Note")}
              </Link>
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
                  <button className="dropdown-item" onClick={onLogout}>
                    {translate(locale, "Keluar", "Logout")}
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item py-2 py-sm-1 col-12 col-sm-auto">
              <div className="vr d-none d-sm-flex h-100 mx-sm-2 text-body-tertiary"></div>
              <hr className="d-sm-none my-2 text-body-tertiary"/>
            </li>
            <li className="nav-item">
              <button className="nav-link" type="button" onClick={toggleLocale}>
                {locale}
              </button>
            </li>
            <li className="nav-item py-2 py-sm-1 col-12 col-sm-auto">
              <div className="vr d-none d-sm-flex h-100 mx-sm-2 text-body-tertiary"></div>
              <hr className="d-sm-none my-2 text-body-tertiary"/>
            </li>
            <li className="nav-item">
              <button className="nav-link" type="button" onClick={toggleTheme}>
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
