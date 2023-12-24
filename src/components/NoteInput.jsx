import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"
import useInput from "../hooks/useInput";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function NoteInput({ onSubmit, isLoading }) {
  const [title, handleTitleChange] = useInput("");
  const [body, handleBodyChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, body });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder={`${translate(locale, "Judul catatan", "Note title")}...`}
        onChange={handleTitleChange}
        value={title}
        disabled={isLoading}
      />
      <ContentEditable
        className={`form-control mb-3 ${locale}`}
        html={body}
        onChange={handleBodyChange}
        disabled={isLoading}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm"></span>
        ) : translate(locale, "Simpan", "Save") }
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};
