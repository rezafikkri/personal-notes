import { useState, useEffect, useContext } from "react";
import SearchNotes from "../components/SearchNotes";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes, searchNotes } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get("keyword") ?? "")
  const [notes, setNotes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    async function fetchNotes() {
      const { error, data } = await getArchivedNotes();
      if(!error) {
        setNotes(data);
      }

      setLoading(false);
    }

    fetchNotes();
  }, []);

  function handleKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  return (
    <>
      <h1 className="text-body fw-bold">{translate(locale, "Catatan Arsip", "Archived Notes")}</h1>
      <SearchNotes keyword={keyword} onKeywordChange={handleKeywordChange} />
      <hr className="col-3 col-md-2 mb-5 border-secondary"/>
      <NoteList notes={searchNotes(notes, keyword)} isLoading={isLoading} />
    </>
  );
}
