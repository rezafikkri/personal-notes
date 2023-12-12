import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "@mdi/react";

export default function ActionLink({ to, title, iconPath }) {
  return (
    <Link to={to} className="btn btn-sm btn-outline-secondary me-2 me-md-0 mb-md-2" title={title}>
      <Icon path={iconPath} size={0.85} />
    </Link>
  );
}

ActionLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired
};
