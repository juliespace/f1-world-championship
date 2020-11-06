import React from 'react';

import Home from './home';
import F1ecnomics from './f1ecnomics';
import F1maps from './f1maps';
import F1stats from './f1stats';
import F1UsCities from './f1uscities';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {Home}/>
    <Route path = "/f1stats" component = {F1stats}/>
    <Route path = "/f1ecnomics" component = {F1ecnomics}/>
    <Route path = "/f1uscities" component = {F1UsCities}/>
    <Route path = "/f1maps" component = {F1maps}/>
  </Switch>
)

export default Main;
