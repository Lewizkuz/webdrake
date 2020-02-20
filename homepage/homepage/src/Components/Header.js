import React from 'react';
import Navbar from './Navbar.js';
import "../App.css";
export default function Header(props) {
      return (
        <header>
            <section className='title_bar'>
                <h1> Leevi Kukkonen</h1>
            </section>
            <section className='subtitle_bar'>
              <h1 className="subtitle_text">{props.viewpath}</h1>
            </section>
            <Navbar/>
        </header>
      );
}
  /*
import React from 'react';
import './App.css';

function Header() {
  return <header> <h1>Hello I am header</h1></header>
}
function Content(props) {
  return (
    <article>
      <h1>I am a content</h1>
      <p>Holding an amazing number of information</p>
    </article>
  );
}
function Navbar(props) {
  return (
    <nav>
      <a class="navlink">I am a navbar</a>
      <a class="navlink">I am a navbar</a>
      <a class="navlink">I am a navbar</a>
    </nav>
  );
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Content/>
      <Content/>
    </div>
  );
}

expor
  */