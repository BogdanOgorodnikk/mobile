import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import firstwindow from './firstwindow';
import secondwindow from './secondwindow';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
            <Switch>
                <Route exact path="/" component={firstwindow}/>
                <Route path="/secondwindow" component={secondwindow}/>
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;