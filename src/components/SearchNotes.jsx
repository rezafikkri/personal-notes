import PropTypes from "prop-types";

export default function SearchNotes({ keyword, onKeywordChange }) {
  return (
    <input
      type="text"
      className="form-control mt-3"
      placeholder="Cari berdasarkan judul..."
      onChange={(e) => onKeywordChange(e.target.value)}
      value={keyword}
    />
  );
}

SearchNotes.propTypes = {
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func.isRequired
};
