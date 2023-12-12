import { useNavigate, useParams } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { editNote, getNote } from "../utils/local-data";

export default function EditPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  function handleEdit(newNote) {
    editNote({ id: note.id, ...newNote });
    navigate(`/notes/${note.id}`);
  }

  return (
    <section>
      <h1>Edit Catatan</h1>
      <NoteInput onSubmit={handleEdit} id={note.id} defaultTitle={note.title} defaultBody={note.body} />
    </section>
  );
}
