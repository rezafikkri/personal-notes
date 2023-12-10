export default function NoteAction({ id }) {
  return (
    <div className="px-3 pb-3">
      <div className="btn-group">
        <button type="button" className="btn btn-sm btn-outline-secondary">Arsip</button>
        <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    </div>
  );
}
