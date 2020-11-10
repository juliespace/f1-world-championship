import React from 'react';

import Home from './home';
import F1ecnomics from './f1ecnomics';
import F1Map from './map/F1Map';
import F1stats from './f1stats';
import F1UsCities from './f1uscities';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {Home}/>
    <Route path = "/f1stats" component = {F1stats}/>
    <Route path = "/f1ecnomics" component = {F1ecnomics}/>
    <Route path = "/f1uscities" component = {F1UsCities}/>
    <Route path = "/f1maps" component = {F1Map}/>
  </Switch>
)

export default Main;
