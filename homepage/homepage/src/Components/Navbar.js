import React from 'react';
function navlink (link, text) {
  return (
    <li>
      <a href={link}>
        <div className='NavLink'>
          <h2>{text}</h2>
        </div>
      </a>
    </li>
  );
}
export default function NavBar() {
        return (
          <nav>
            <ul>
                {navlink('/', 'Home')}
                {navlink('/about', 'About')}
                {navlink('/portfolio', 'Portfolio')}
                {navlink('/stuff', 'Stuff')}
                {navlink('/art', 'Art')}
            </ul>
          </nav>
        );
}