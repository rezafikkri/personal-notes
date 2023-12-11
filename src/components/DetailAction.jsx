import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from '@mdi/react';
import { mdiArchiveArrowDown, mdiArrowLeftThick, mdiDelete } from '@mdi/js';

export default function DetailNoteAction({ id, onDelete }) {
  return (
    <div className="position-fixed d-flex flex-column bottom-0 end-0 p-5">
      <Link to="/" className="btn btn-sm btn-outline-secondary mb-2" title="Kembali ke Home">
        <Icon path={mdiArrowLeftThick} size={0.85} />
      </Link>
      <button type="button" className="btn btn-sm btn-outline-secondary mb-5" title="Archive catatan">
        <Icon path={mdiArchiveArrowDown} size={0.85} />
      </button>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="btn btn-sm btn-outline-danger"
        title="Hapus catatan"
      >
        <Icon path={mdiDelete} size={0.85} />
      </button>
    </div>
  );
}

DetailNoteAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
