import React from "react";
import SearchNotes from "../components/SearchNotes";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: ''
    };
  }

  render() {
    return (
      <>
        <h1 className="fw-bold">Catatan Aktif</h1>
        <SearchNotes />
        <hr className="col-3 col-md-2 mb-5"/>
        <NoteList notes={this.state.notes} />
      </>
    );
  }
}
