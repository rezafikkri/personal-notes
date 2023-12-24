import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useContext, useState } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function AddPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { locale } = useContext(LocaleContext);

  async function handleAdd(note) {
    setLoading(true);
    await addNote(note);
    setLoading(false);
    navigate("/");
  }

  return (
    <section className="position-relative">
      <h1 className="text-body">{translate(locale, "Buat Catatan", "Create Note")}</h1>
      <NoteInput onSubmit={handleAdd} isLoading={isLoading} />
    </section>
  );
}
