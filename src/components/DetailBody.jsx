import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import parser from "html-react-parser";

export default function DetailBody({ title, body, createdAt }) {
  return (
    <>
      <h1 className="text-body mb-0 fw-bold">{title}</h1>
      <time
        className="text-body-secondary"
        dateTime={createdAt}
      >
        {showFormattedDate(createdAt)}
      </time>
      <div className="text-body mt-3 mb-5">{parser(body)}</div>
    </>
  );
}

DetailBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};
