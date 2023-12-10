import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

export default function NoteList({ notes, onDelete }) {
  if (notes.length > 0) {
    return (
      <div className="row g-3 align-self-stretch">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            onDelete={onDelete}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    return <p className="text-body-secondary text-center">Tidak ada catatan</p>;
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};
