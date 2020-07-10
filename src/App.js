import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home/Home'
import Navbar from './components/Layouts/Navbar'
import Expression from './components/Home/Expression';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/expression" component={Expression}/>
      </Switch>
    
    </div>
  );
}

export default App;
