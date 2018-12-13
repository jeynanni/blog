import React, { Component } from 'react';
import Posts from './components/Posts';
import User from './components/User';
import Comments from './components/Comments';
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
        <Route path='/:id' exact component={User}/>
        <Route path='/user/:id' component={User}/>
    <Route path='/posts/:id' component={User}/>
    <Route path='/comments/:id' component={Comments}/>
      </div>
      </Router>

      
    

        
      </div>
       
    );
  }
}

export default App;
