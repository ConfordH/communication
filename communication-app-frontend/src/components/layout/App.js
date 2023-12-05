// communication-app-frontend/src/components/layout/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../features/Home";
import Messages from "../features/Messages";
import Calls from "../features/Calls";
import Header from "../Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="Header" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/messages" component={Messages} />
        <Route path="/calls" component={Calls} />
      </Switch>
    </Router>
  );
}

export default App;
