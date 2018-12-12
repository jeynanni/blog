import React, { Component } from 'react';
import Posts from './components/Posts';
import User from './components/User'

import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="App">
      <Home/>
      
      <Router>
      <div>
        <Route path='/' exact component={props => <User id= {1}/>}/>
        <Route path='/user/' component={props => <User id= {3}/>}/>
        <Route path='/posts/' component={props => <User id= {6}/>}/>
      </div>
      </Router>

      
       
        
      </div>
       
    );
  }
}

export default App;
