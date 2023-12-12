import React from "react";
import PropTypes from "prop-types";
import ContentEditable from 'react-contenteditable'
import { Link } from "react-router-dom";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.defaultTitle ?? "",
      body: props.defaultBody ?? ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Judul Catatan..."
          onChange={this.handleChangeTitle}
          value={this.state.title}
        />
        <ContentEditable
          className="form-control mb-3"
          html={this.state.body}
          onChange={this.handleChangeBody}
          data-placeholder="Isi Catatan..."
        />
        <button type="submit" className="btn btn-primary">Simpan</button>
        {this.props.defaultTitle ? (
          <Link to={`/notes/${this.props.id}`} className="ms-2 btn btn-outline-secondary">Batal</Link>
        ) : null}
      </form>
    );
  }
}

NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  defaultTitle: PropTypes.string,
  defaultBody: PropTypes.string
};
