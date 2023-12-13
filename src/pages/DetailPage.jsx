import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import PropTypes from "prop-types";
import DetailBody from "../components/DetailBody";
import DetailAction from "../components/DetailAction";
import PageNotFound from "../pages/PageNotFound";

export default function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();
  
  if (!note) {
    return <PageNotFound />;
  }

  function handleDelete(id) {
    deleteNote(id);
    // if determine navigate based on note deleted is archive or active note
    if (note.archived) {
      navigate("/archives");
    } else {
      navigate("/");
    }
  }

  function handleArchive(id) {
    archiveNote(id);
    navigate("/");
  }

  function handleUnarchive(id) {
    unarchiveNote(id);
    navigate("/archives");
  }

  return (
    <article className="detail-page">
      <DetailBody
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
      />
      <DetailAction
        id={note.id}
        onDelete={handleDelete}
        onArchive={handleArchive}
        onUnarchive={handleUnarchive}
        archived={note.archived}
      />
    </article>
  );
}
