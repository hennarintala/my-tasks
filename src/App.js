import React from 'react';
import './App.css';
import Customerslist from './components/Customerslist';
import ExerciseAgenda from './components/Calendar';
import Trainingslist from './components/Trainingslist';
import Nav from './components/navigation'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import Login from './components/Login';
import Item from './components/ItemDetail'


function App() {
  return (
<Router>
  <div className="App">
    <header className="App-header">
        <img src={logo} className="pt-logo" alt="Logo" />
    </header>
    <Nav />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/calendar" exact component={ExerciseAgenda}  />
        <Route path="/calendar/:id" component={Item}  />
        <Route path="/trainings" component={Trainingslist} />
         <Route path="/customers" component={Customerslist}/>
     </Switch> 
   </div>
</Router>

    
  );
}


export default App;
