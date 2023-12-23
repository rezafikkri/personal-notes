import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

export default function Layout(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-bs-theme={theme} className="min-vh-100 bg-body-tertiary">
      <Navigation {...props} />
      <div className="col-md-8 mx-auto px-4 py-5">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
