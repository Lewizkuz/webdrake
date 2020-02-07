import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Content from './Components/Content.js';

class App extends React.Component {
  render() {
    return (
      <Router >
        <div className="app">
          <Header viewpath={window.location.pathname.split('/')[1].toUpperCase()}/>
          <Switch>
            <Route path='/asd'>
              <Content headtext='Dude'>asdasdasd</Content>
            </Route>
            <Route path='/'>
              <Content headtext='asdasd'>asdasd</Content>
              <Content headtext='asdasd'></Content>
              <Content headtext='asdasd'></Content>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
