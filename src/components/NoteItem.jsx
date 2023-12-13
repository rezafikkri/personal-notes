import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { showFormattedDate, stripHtml } from "../utils";

export default function NoteItem({ id, title, body, createdAt }) {
  const stripedBody = stripHtml(body);
  const bodyCountChr = stripedBody.length;
  const dots = bodyCountChr <= 80 ? "" : "...";
  const navigate = useNavigate();

  function handleClickCard() {
    navigate(`/notes/${id}`);
  }

  return (
    <div className="col-lg-6">
      <div className="card" onClick={handleClickCard}>
        <div className="card-body">
          <h2 className="fs-4">{title}</h2>
          <time className="text-body-secondary" dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
          <p className="mt-3 mb-0">{stripedBody.substring(0, 80) + dots}</p>
        </div>
      </div>
    </div> 
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
