import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";

export default function AddPage() {
  const navigate = useNavigate();

  function handleAdd(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h1>Buat Catatan</h1>
      <NoteInput onAdd={handleAdd} />
    </section>
  );
}
