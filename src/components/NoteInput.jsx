import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"
import useInput from "../hooks/useInput";

export default function NoteInput({ onSubmit, isLoading }) {
  const [title, handleTitleChange] = useInput("");
  const [body, handleBodyChange] = useInput("");

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
        disabled={isLoading}
      />
      <ContentEditable
        className="form-control mb-3"
        html={body}
        onChange={handleBodyChange}
        data-placeholder="Isi Catatan..."
        disabled={isLoading}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : "Simpan" }
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
