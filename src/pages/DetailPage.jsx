import { Link, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

export default function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <article className="detail-page">
      <h1 className="mb-0 fw-bold">{note.title}</h1>
      <time
        className="text-body-secondary"
        dateTime={note.createdAt}
      >
        {showFormattedDate(note.createdAt)}
      </time>
      <p className="mt-3 mb-5">{note.body}</p>
      <Link to="/" className="text-secondary">&laquo; Kembali</Link>
    </article>
  );
}
