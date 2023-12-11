import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote } from "../utils/local-data";
import React from "react";
import PropTypes from "prop-types";
import DetailBody from "../components/DetailBody";
import DetailAction from "../components/DetailAction";

export default function DetailPageWarapper() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  return <DetailPage note={note} navigate={navigate} />
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  render() {
    return (
      <article className="detail-page">
        <DetailBody
          title={this.props.note.title}
          body={this.props.note.body}
          createdAt={this.props.note.createdAt}
        />
        <DetailAction id={this.props.note.id} onDelete={this.handleDelete} />
      </article>
    );
  }
}

DetailPage.propTypes = {
  note: PropTypes.object.isRequired
};
