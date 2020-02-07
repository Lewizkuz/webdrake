import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
class Navbar extends React.Component {
    render() {
        return (
          <nav>
            <ul>
              <li>
                <a href="/asd">Home</a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/stuff">Stuff</Link>
              </li>
              <li>
                <Link to="/art">Art</Link>
              </li>
            </ul>
          </nav>
        );
    }
  }
  
export default Navbar;