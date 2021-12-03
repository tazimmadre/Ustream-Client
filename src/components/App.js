import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Header from "./Header";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";

const App=()=>{
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={StreamList} />
            <Route path="/streamedit" exact component={StreamEdit} />
            <Route path="/streamdelete" exact component={StreamDelete} />
            <Route path="/streamcreate" exact component={StreamCreate} />
            <Route path="/streamshow" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
};

export default App;