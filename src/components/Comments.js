import React, { Component } from 'react';
import Posts from './Posts';


class Comments extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            posts:[],
            comments:[]
        }
        this.firstFetch()
        this.comments()
    }
    firstFetch = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.id)
        .then(response => response.json())
        .then(json => this.setState({ posts: json }))
    }
    comments = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.id + '/comments')
          .then(response => response.json())
          .then(json => this.setState({ comments: json }))
      }
    
      
render () {
    return (
        <div><Posts data ={this.state.posts}/>
       {this.state.comments.map(item => {
          return (
              <div key={item.id}>
              <div>{item.body}</div>
              <div>{item.name}</div>
              <div>{item.email}</div>
              </div>
          )
       })}
          </div>
    )}
    
}
export default Comments;