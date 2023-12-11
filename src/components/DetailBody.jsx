import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function DetailNoteBody({ title, body, createdAt }) {
  return (
    <>
      <h1 className="mb-0 fw-bold">{title}</h1>
      <time
        className="text-body-secondary"
        dateTime={createdAt}
      >
        {showFormattedDate(createdAt)}
      </time>
      <p className="mt-3 mb-5">{body}</p>
    </>
  );
}

DetailNoteBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
