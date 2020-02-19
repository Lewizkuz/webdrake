//  Component, that forms a table out of an array of objects

import React from 'react';
class ContentTable extends React.Component {
    render(){
        let childarr = this.props.children.split(',');
        let arr = '<table><tbody>';
        for (let x = 0; x < childarr.length; x = x + 2) {
           arr = arr + '<tr><td>'+childarr[x]+'</td><td>'+childarr[x]+'</td></tr>';    
        }
        arr=arr+'</tbody></table>'
        console.log(arr);
        
        return (
            <article>
                <div className='ArticleHead'>
                  <h1>{this.props.headtext}</h1>
                </div>
                <div className='ArticleContent'>
                    {arr}        
              </div>
            </article>
          );
    }
  }
  
export default ContentTable;