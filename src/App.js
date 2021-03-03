import React from 'react';

import {BrowserRouter as Router, 
        Route, 
        Switch} from 'react-router-dom';//essentials for routin

import Home from './pages/Home';//iMPort home/add page
import Edit from './pages/Edit';//import Edit page
import Display from './pages/Display';//import Display Page
import Update from './pages/Update';//Import update Page

const App = () => {
  return(
    <Router>{/* React Router */}
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
            <Route path="/edit">
              <Edit/>
            </Route>
          <Route path="/display">
            <Display/>
          </Route>
        <Route path="/retrieve">
          <Display/>
        </Route>
          <Route path="/retrieve">
            <Display/>
          </Route>
            <Route path="/update">
              <Update/>
            </Route>
                 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
