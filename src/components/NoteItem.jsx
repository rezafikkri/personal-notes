import NoteAction from "./NoteAction";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

export default function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="col-lg-6">
      <div className="card">
        <NoteItemBody title={title} body={body} createdAt={createdAt} />
        <NoteAction id={id} onDelete={onDelete} />
      </div>
    </div> 
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
