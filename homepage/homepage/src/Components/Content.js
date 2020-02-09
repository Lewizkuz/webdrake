import React from 'react';
class Content extends React.Component {
    render(){
          return (
            <article>
              <div className='ArticleHead'>
              <h1>{this.props.headtext}</h1>
              </div>
              <div className='ArticleContent'>
                
                <p>{this.props.children}</p>
              </div>
            </article>
          )};
  }
  
export default Content;