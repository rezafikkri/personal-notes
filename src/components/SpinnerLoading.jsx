import PropTypes from "prop-types";

export default function SpinnerLoading({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="d-flex position-absolute start-0 end-0 top-0 bottom-0 align-items-center justify-content-center z-3 loading">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

SpinnerLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
