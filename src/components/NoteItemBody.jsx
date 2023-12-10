import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";


export default function NoteItemBody({ title, body, createdAt }) {
  const bodyCountChr = body.length;
  const dots = bodyCountChr <= 100 ? '' : '...';

  return (
    <div className="card-body">
      <h2 className="fs-4">{title}</h2>
      <time className="text-body-secondary">{showFormattedDate(createdAt)}</time>
      <p className="mt-3">{body.substr(0, 80) + dots}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
