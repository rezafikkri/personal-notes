import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function SearchNotes({ keyword, onKeywordChange }) {
  const { locale } = useContext(LocaleContext);

  return (
    <input
      type="text"
      className="form-control mt-3"
      placeholder={`${translate(locale, "Cari berdasarkan judul", "Search by title")}...`}
      onChange={(e) => onKeywordChange(e.target.value)}
      value={keyword}
    />
  );
}

SearchNotes.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired
};
