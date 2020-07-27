import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import Register from '../screens/register';
import Login from '../screens/login';
import Homepage from '../screens/homepage';
import Home from '../screens/home';
import Basket from '../screens/basket';

const RouterApp = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Register" exact component={Register}/>
          <Route path="/Homepage" exact component={Homepage}/>
          <Route path="/Basket" exact component={Basket}/>
      </div>
    </Router>
  );
}
export default RouterApp;
