import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import Updates from './components/Updates';
import Tips from './components/Tips';
import State from './components/State';

function App() {

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
      showInNavbar: true,
    },
    {
      pageLink: '/updates',
      view: Updates,
      displayName: 'Updates',
      animationDelayForNavbar: 0.3,
      showInNavbar: true,
    },
    {
      pageLink: '/tips',
      view: Tips,
      displayName: 'Tips',
      animationDelayForNavbar: 0.4,
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: 'State',
      animationDelayForNavbar: 0.5,
      showInNavbar: false,
    },
  ];

  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/updates" component={Updates} />
          <Route exact path="/tips" component={Tips} />
          <Route exact path="/state" component={StateDetails} /> */}
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => (
                  <page.view key={match.params.stateCode || index} />
                )}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
