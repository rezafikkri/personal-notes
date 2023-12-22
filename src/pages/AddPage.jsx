import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import SpinnerLoading from "../components/SpinnerLoading";
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
      <h1>Buat Catatan</h1>
      <NoteInput onSubmit={handleAdd} />

      <SpinnerLoading isLoading={isLoading} />
    </section>
  );
}
