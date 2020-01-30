import React from 'react';
import "../App.css";
class Header extends React.Component {
    render() {
      return (
        <header>
            <section class='title_bar'>
                <h1 class="title_text"> Leevi Kukkonen</h1>
            </section>
            <section class='subtitle_bar'>
      <h1 class="subtitle_text">{this.props.viewpath}</h1>
            </section>
        </header>
      );
    }
  }
  
export default Header;
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