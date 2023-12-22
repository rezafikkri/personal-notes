import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";

export default function NoteInput({ onSubmit, id, defaultTitle, defaultBody }) {
  const [title, handleTitleChange] = useInput(defaultTitle ?? "");
  const [body, handleBodyChange] = useInput(defaultBody ?? "");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, body });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Judul Catatan..."
        onChange={handleTitleChange}
        value={title}
      />
      <ContentEditable
        className="form-control mb-3"
        html={body}
        onChange={handleBodyChange}
        data-placeholder="Isi Catatan..."
      />
      <button type="submit" className="btn btn-primary">Simpan</button>
      {/* If in edit page */}
      {defaultTitle ? (
        <Link to={`/notes/${id}`} className="ms-2 btn btn-outline-secondary">Batal</Link>
      ) : null}
    </form>
  );
}

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  defaultTitle: PropTypes.string,
  defaultBody: PropTypes.string
};
