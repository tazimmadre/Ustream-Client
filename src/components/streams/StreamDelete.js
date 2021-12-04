import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import { fetchStream,deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <>
        <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui negative button">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you Sure you want to delete the Stream?";
    }
    return `Are you Sure you want to delete the Stream with Title: "${this.props.stream.title}"`;
  }
  render() {
    return (
      <Modal
        title={"Delete the Stream"}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream,deleteStream })(StreamDelete);
