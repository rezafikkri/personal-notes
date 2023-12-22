import { useLocation } from "react-router-dom";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { getPageName } from "../utils";
import NoteItemLoading from "./NoteItemLoading";

export default function NoteList({ notes, isLoading }) {
  if (isLoading) return <div className="note-list"><NoteItemLoading /></div>;

  const location = useLocation();
  const pageName = getPageName(location);
  // message for if not found notes data
  let msg = "aktif";
  if (pageName == "archives") msg = "arsip";

  if (notes.length > 0) {
    return (
      <div className="note-list">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    return <p className="text-body-secondary text-center">Tidak ada catatan {msg}</p>;
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};
