import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "918768636971-nkpr7490th10o2r2j2hki05kptg58iqa.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
          console.log(this.auth);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else{
      this.props.signOut();
    } 
  };
  renderSignin() {
    return (
      <button onClick={this.auth.signIn} className="ui google red button">
        <i className="google icon"></i>Signin
      </button>
    );
  }
  renderSignout() {
    return (
      <button onClick={this.auth.signOut} className="ui google button">
        <i className="sign out alternate icon"></i>
        SignOut
      </button>
    );
  }
  render() {
    if (this.props.isSignedIn === null)
      return null;
      // (
      //   // <div className="ui active dimmer">
      //   <div className="ui active inline loader"></div>
      //   // </div>
      // );
    else if (this.props.isSignedIn) return <div>{this.renderSignout()}</div>;
    else 
      return <div>{this.renderSignin()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
