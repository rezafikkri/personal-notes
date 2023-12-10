import React from "react";
import PropTypes from "prop-types";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state);
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
        <textarea
          className="form-control mb-3"
          placeholder="Isi Catatan..."
          onChange={this.handleChangeBody}
          rows={10}
          value={this.state.body}
        />
        <button type="submit" className="btn btn-primary">Simpan</button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  onAdd: PropTypes.func.isRequired
};
