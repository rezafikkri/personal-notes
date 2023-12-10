import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  if (notes.length > 0) {
    return (
      <div className="row g-3 align-self-stretch">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    return <p className="text-body-secondary text-center">Tidak ada catatan</p>;
  }
}
