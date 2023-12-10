import React from "react";
import SearchNotes from "../components/SearchNotes";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

export default function HomePageWarapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  function keywordChange(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage keyword={searchParams.get("keyword")} keywordChange={keywordChange} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.keyword ?? ''
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordChange(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter(note => {
      const keyword = this.state.keyword.toLowerCase();
      return note.title.toLowerCase().includes(keyword) && !note.archived;
    });

    return (
      <>
        <h1 className="fw-bold">Catatan Aktif</h1>
        <SearchNotes keyword={this.state.keyword} onKeywordChange={this.handleKeywordChange} />
        <hr className="col-3 col-md-2 mb-5"/>
        <NoteList notes={notes} />
      </>
    );
  }
}
