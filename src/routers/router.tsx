import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import Register from '../screens/register';
import Login from '../screens/login';
import Anasayfa from '../screens/anasayfa';
import Home from '../screens/home';
import Sepetim from '../screens/sepetim';

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Register" exact component={Register}/>
          <Route path="/Anasayfa" exact component={Anasayfa}/>
          <Route path="/Sepetim" exact component={Sepetim}/>
      </div>
    </Router>
  );
}
export default App;
