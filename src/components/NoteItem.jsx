import NoteAction from "./NoteAction";
import NoteItemBody from "./NoteItemBody";

export default function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className="col-lg-6">
      <div className="card">
        <NoteItemBody title={title} body={body} createdAt={createdAt} />
        <NoteAction id={id} />
      </div>
    </div> 
  );
}
