import PropTypes from "prop-types";
import Icon from "@mdi/react";

export default function ActionButton({ 
  id,
  onClick,
  btnClass,
  iconPath,
  title,
  actionType,
  actionBtnType
}) {
  return (
    <button
      type="button"
      className={`btn btn-sm ${btnClass}`}
      title={title}
      onClick={() => onClick(id)}
      disabled={actionType === actionBtnType}
    >
      {actionType === actionBtnType ? (
        <span className="spinner-border spinner-border-sm"></span>
      ) : (
        <Icon path={iconPath} size={0.85} />
      )}
    </button>
  );
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnClass: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actionType: PropTypes.string.isRequired,
  actionBtnType: PropTypes.string.isRequired
};
