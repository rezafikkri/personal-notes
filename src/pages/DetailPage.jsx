import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote } from "../utils/network-data";
import { archiveNote, unarchiveNote } from "../utils/local-data";
import DetailBody from "../components/DetailBody";
import DetailAction from "../components/DetailAction";
import PageNotFound from "../pages/PageNotFound";
import { useEffect, useState } from "react";
import DetailLoading from "../components/DetailLoading";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    async function fetchNote() {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }

      setLoading(false);
    }

    fetchNote();
  }, []);

  async function handleDelete(id) {
    setActionType("delete");
    await deleteNote(id);
    setActionType("");
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

  if (!note && isLoading) {
    return <DetailLoading />;
  }

  if (!note && !isLoading) {
    return <PageNotFound />;
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
        actionType={actionType}
      />
    </article>
  );
}
