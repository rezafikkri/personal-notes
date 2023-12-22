export default function NoteItemLoading() {
  return (
    <>
      <div className="card loading" aria-hidden="true">
        <div className="card-body">
          <h2 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h2>
          <time className="placeholder-glow text-body-secondary">
            <span className="placeholder col-4"></span>
          </time>
          <p className="card-text placeholder-glow mt-3">
            <span className="placeholder col-7 me-1"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4 me-1"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
}
