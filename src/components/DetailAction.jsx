import PropTypes from "prop-types";
import {
  mdiArchiveArrowDown,
  mdiArchiveArrowUp,
  mdiArrowLeftThick,
  mdiDelete,
  mdiPencilBox
} from "@mdi/js";
import ActionButton from "./ActionButton";
import ActionLink from "./ActionLink";

export default function DetailNoteAction({ id, onDelete, onArchive, onUnarchive, archived }) {
  /* Determine the buttons displayed and to, title attr link for 'back to',
  based on the active or archived note page */
  let onArchiveAction = onArchive;
  let archiveIcon = mdiArchiveArrowDown;
  let archiveTitle = "Arsip catatan";
  let backTo = "/";
  let backTitle = "Kembali ke Home";
  if (archived) {
    onArchiveAction = onUnarchive;
    archiveIcon = mdiArchiveArrowUp;
    archiveTitle = "Batalkan arsip";
    backTo = "/archives";
    backTitle = "Kembali ke Arsip";
  }

  return (
    <div className="detail-action position-fixed d-flex flex-md-column bottom-0 end-0 py-3 px-4 p-md-5">
      <ActionLink to={backTo} title={backTitle} iconPath={mdiArrowLeftThick} />
      <ActionLink to={`/notes/${id}/edit`} title="Edit catatan" iconPath={mdiPencilBox} />
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
        title="Delete arsip"
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
