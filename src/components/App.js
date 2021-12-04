import React from "react";
import { Router,Route,Switch } from "react-router-dom";
import Header from "./Header";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App=()=>{
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header/>
            <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/create" exact component={StreamCreate} />
            <Route path="/stream/show/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
};

export default App;