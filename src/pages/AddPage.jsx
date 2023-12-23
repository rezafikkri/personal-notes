import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useState } from "react";

export default function AddPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  async function handleAdd(note) {
    setLoading(true);
    await addNote(note);
    setLoading(false);
    navigate("/");
  }

  return (
    <section className="position-relative">
      <h1 className="text-body">Buat Catatan</h1>
      <NoteInput onSubmit={handleAdd} isLoading={isLoading} />
    </section>
  );
}
