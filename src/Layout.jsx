import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import PropTypes from "prop-types";

export default function Layout(props) {
  return (
    <div className="col-md-8 mx-auto px-4 py-5">
      <Navigation {...props} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

Layout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
