import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"
import useInput from "../hooks/useInput";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";
import { validateTitle, validateBody } from "../utils/validate";

export default function NoteInput({ onSubmit, isLoading }) {
  const [title, handleTitleChange, titleError, setTitleError] = useInput("", validateTitle);
  const [body, handleBodyChange, bodyError, setBodyError] = useInput("", validateBody);
  const { locale } = useContext(LocaleContext);

  function handleSubmit(e) {
    e.preventDefault();
  
    // validate form data before submit
    const { isValid: isTitleValid, error: titleValidationError } = validateTitle(title);
    const { isValid: isBodyValid, error: bodyValidationError } = validateBody(body);
    
    // if title error is null and title is invalid then set error
    if (!titleError && !isTitleValid) setTitleError(titleValidationError);
    if (!bodyError && !isBodyValid) setBodyError(bodyValidationError);

    // if title or body error is not null then cancel submit
    if (titleError || bodyError) return;
    else if (!isTitleValid || !isBodyValid) return;

    onSubmit({ title, body });
  }
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-2">
        <input
          className={`form-control mb-2 ${titleError ? "is-invalid" : ""}`}
          type="text"
          placeholder={`${translate(locale, "Judul catatan", "Note title")}...`}
          onChange={handleTitleChange}
          value={title}
          disabled={isLoading}
        />
        <div className="invalid-feedback">
          {titleError ? translate(locale, titleError.id, titleError.en) : null}
        </div>
      </div>
      <div className="mb-3">
        <ContentEditable
          className={`form-control ${locale} ${bodyError ? "is-invalid" : ""}`}
          html={body}
          onChange={handleBodyChange}
          disabled={isLoading}
        />
        <div className="invalid-feedback">
          {bodyError ? translate(locale, bodyError.id, bodyError.en) : null}
        </div>
      </div>
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
