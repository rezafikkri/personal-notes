import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function NoteItemBody({ id, title, body, createdAt }) {
  const bodyCountChr = body.length;
  const dots = bodyCountChr <= 100 ? '' : '...';

  return (
    <div className="card-body">
      <h2 className="fs-4"><Link to={`/notes/${id}`} className="text-body">{title}</Link></h2>
      <time className="text-body-secondary" dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
      <p className="mt-3">{body.substr(0, 80) + dots}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
