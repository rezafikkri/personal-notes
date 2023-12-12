import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiArchiveArrowDown, mdiArchiveArrowUp, mdiArrowLeftThick, mdiDelete } from "@mdi/js";
import ActionButton from "./ActionButton";

export default function DetailNoteAction({ id, onDelete, onArchive, onUnarchive, archived }) {
  // Determine the buttons displayed based on the active or archived note page
  let onArchiveAction = onArchive;
  let archiveIcon = mdiArchiveArrowDown;
  let archiveTitle = "Arsip catatan";
  if (archived) {
    onArchiveAction = onUnarchive;
    archiveIcon = mdiArchiveArrowUp;
    archiveTitle = "Batalkan arsip";
  }

  return (
    <div className="detail-action position-fixed d-flex flex-md-column bottom-0 end-0 start-md-0 py-3 px-4 p-md-5">
      <Link to="/" className="btn btn-sm btn-outline-secondary me-2 me-md-0 mb-md-2" title="Kembali ke Home">
        <Icon path={mdiArrowLeftThick} size={0.85} />
      </Link>
      <ActionButton
        id={id}
        onClick={onArchiveAction}
        btnClass="btn-outline-secondary me-5 me-md-0 mb-md-5"
        iconPath={archiveIcon}
        title={archiveTitle}
      />
      <ActionButton
        id={id}
        onClick={onDelete}
        btnClass="btn-outline-danger"
        iconPath={mdiDelete}
        title="delete"
      />
    </div>
  );
}

DetailNoteAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired
};
