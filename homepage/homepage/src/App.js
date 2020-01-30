import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Navbar from './Components/Navbar.js';
import Content from './Components/Content.js';

function App() {
  return (
    <div class="app">
      <Header viewpath="here"/>
      <Navbar/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
    </div>
  );
}

export default App;
