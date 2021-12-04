import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream,id){
    if(stream.userId==this.props.currentUserId)
    return (
      <div className="right floated content">
        <Link to={`/stream/edit/${id}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/stream/delete/${id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }
  renderlist() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream,stream.id)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/stream/show/${stream.id}`}>
            {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate(){
    if(this.props.isSignedIn){
        return (
          <div style={{textAlign:"right"}}>
            <Link to="/stream/create" className="ui button primary">Create Stream</Link>
          </div>)
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderlist()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      streams: Object.values(state.stream),
      currentUserId:state.auth.userId,
      isSignedIn:state.auth.isSignedIn 
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
