import React from 'react';
export default function NavBar() {
        return (
          <nav>
            <ul className='Desktop'>
                {NavLink('/', 'Home')}
                {NavLink('/about', 'About')}
                {NavLink('/portfolio', 'Portfolio')}
                {NavLink('/stuff', 'Stuff')}
                {NavLink('/art', 'Art')}
            </ul>
            <ul className='Hamburger'>
            {NavLink('/', 'Home')}
            {NavLink('/about', 'About')}
            {NavLink('/portfolio', 'Portfolio')}
            {NavLink('/stuff', 'Stuff')}
            {NavLink('/art', 'Art')}
          </ul>
          </nav>
        );
}
function NavLink (link, text) {
  if(window.location.pathname === link){
    return (
      <li>
        <a href={link}>
          <div className='NavLink Active'>
            <h2>{text}</h2>
          </div>
        </a>
      </li>
    );
  }
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