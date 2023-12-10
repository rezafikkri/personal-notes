import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
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
}
