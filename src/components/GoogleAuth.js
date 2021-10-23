import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
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
           this.setState({
             isSignedIn: this.auth.isSignedIn.get(),
           });
          this.auth.isSignedIn.listen(this.onAuthChange);
          console.log(this.auth);
        });
    });
  }
  onAuthChange=()=>{
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
    })
          };
  renderSignin() {
    return (
      <button onClick={this.auth.signIn} className="ui google red button">
        <i className="google icon"></i>Signin
      </button>
    );
  }
  renderSignout() {
    return (<button onClick={this.auth.signOut} className="ui google button">
      <i className="sign out alternate icon"></i>
      SignOut</button>);
  }
  render() {
    if (this.state.isSignedIn === null) return (
      // <div className="ui active dimmer">
        <div className="ui active inline loader"></div>
      // </div>
    );
    else if (this.state.isSignedIn) 
      return (
        <div> 
          {this.renderSignout()}
        </div>);
    else if (this.state.isSignedIn === false)
      return (
        <div>
          {this.renderSignin()} 
        </div>
      );
  }
}

export default GoogleAuth;
