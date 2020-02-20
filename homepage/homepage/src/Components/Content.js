import React from 'react';
export default function Content(props) {
  return (
  <article>
    <div className='ArticleHead'>
      <h1>{props.headtext}</h1>
      </div>
      <div className='ArticleContent'>
        <p>{props.children}</p>
      </div>
  </article>
  )
};