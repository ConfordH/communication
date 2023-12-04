// communication-app-frontend/src/components/layout/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../features/Home"; // Create this component
import Messages from "../features/Messages"; // Create this component
import Calls from "../features/Calls"; // Create this component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/messages" component={Messages} />
        <Route path="/calls" component={Calls} />
      </Switch>
    </Router>
  );
}

export default App;
