import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Updates from './components/Updates';
import Tips from './components/Tips';

function App() {
  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/updates" component={Updates} />
          <Route exact path="/tips" component={Tips} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
