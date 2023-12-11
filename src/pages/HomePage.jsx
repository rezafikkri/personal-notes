import React from "react";
import SearchNotes from "../components/SearchNotes";
import NoteList from "../components/NoteList";
import { deleteNote, getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function HomePageWarapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  function keywordChange(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={searchParams.get("keyword")} keywordChange={keywordChange} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    const defaultKeyword = props.defaultKeyword ?? '';

    this.state = {
      notes: getActiveNotes(defaultKeyword),
      keyword: defaultKeyword
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordChange(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    return (
      <>
        <h1 className="fw-bold">Catatan Aktif</h1>
        <SearchNotes keyword={this.state.keyword} onKeywordChange={this.handleKeywordChange} />
        <hr className="col-3 col-md-2 mb-5"/>
        <NoteList notes={this.state.notes} />
      </>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
};
