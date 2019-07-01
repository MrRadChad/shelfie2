import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';


class App extends Component {


  render(props) {


    return (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form} />
        <Route path='/edit/:id' component={Form}  />
      </Switch>
    );
  }
}

export default App;
